
"""
PDF Sayfalarını OCR ile Metne Çevirme Uygulaması
PaddleOCR 2.x + Tkinter GUI
Türkçe karakter desteği: ğüşıöçĞÜŞİÖÇ
Test cümlesi: "Çöğüş işini böyle yapmışsın"

KURULUM:
pip install paddlepaddle-gpu==2.6.2 -i https://www.paddlepaddle.org.cn/packages/stable/cu118/
pip install paddleocr==2.10.0
pip install Pillow

Eğer GPU yoksa CPU versiyonu:
pip install paddlepaddle==2.6.2
"""

import os
import sys
import zipfile
import threading
import tkinter as tk
from tkinter import ttk, filedialog, messagebox
from datetime import datetime

# PaddleOCR import kontrolü
try:
    from paddleocr import PaddleOCR
    PADDLEOCR_AVAILABLE = True
except ImportError:
    PADDLEOCR_AVAILABLE = False
    print("⚠️ PaddleOCR yüklü değil! Kurulum için:")
    print("pip install paddlepaddle-gpu==2.6.2 -i https://www.paddlepaddle.org.cn/packages/stable/cu118/")
    print("pip install paddleocr==2.10.0")


class PDFOCRApp:
    def __init__(self, root):
        self.root = root
        self.root.title("🎬 PDF/Resim OCR Uygulaması - Türkçe")
        self.root.geometry("800x650")
        self.root.resizable(True, True)
        
        # Dosya listesi: [(dosya_yolu, orijinal_isim), ...]
        self.files = []
        self.ocr_results = {}  # {index: metin}
        self.failed_files = []  # Başarısız dosyalar
        
        # OCR engine (lazy loading)
        self.ocr = None
        
        # GUI oluştur
        self.create_widgets()
        
    def create_widgets(self):
        """Ana arayüzü oluştur"""
        
        # === ÜST FRAME: Dosya Seçimi ===
        top_frame = ttk.Frame(self.root, padding="10")
        top_frame.pack(fill=tk.X)
        
        ttk.Label(top_frame, text="📁 Resim Dosyaları (PNG, JPG, JPEG, BMP, TIFF):", 
                  font=('Arial', 11, 'bold')).pack(anchor=tk.W)
        
        btn_frame = ttk.Frame(top_frame)
        btn_frame.pack(fill=tk.X, pady=5)
        
        ttk.Button(btn_frame, text="📂 Dosya Seç", command=self.select_files, width=15).pack(side=tk.LEFT, padx=2)
        ttk.Button(btn_frame, text="🗑️ Seçili Sil", command=self.remove_selected, width=12).pack(side=tk.LEFT, padx=2)
        ttk.Button(btn_frame, text="❌ Tümünü Temizle", command=self.clear_all, width=15).pack(side=tk.LEFT, padx=2)
        
        # === ORTA FRAME: Listbox ve Sıralama ===
        middle_frame = ttk.Frame(self.root, padding="10")
        middle_frame.pack(fill=tk.BOTH, expand=True)
        
        # Sol: Listbox
        list_frame = ttk.Frame(middle_frame)
        list_frame.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        
        # Listbox + Scrollbar
        scrollbar = ttk.Scrollbar(list_frame)
        scrollbar.pack(side=tk.RIGHT, fill=tk.Y)
        
        self.listbox = tk.Listbox(
            list_frame, 
            selectmode=tk.EXTENDED,  # Çoklu seçim
            font=('Consolas', 10),
            yscrollcommand=scrollbar.set,
            height=15
        )
        self.listbox.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)
        scrollbar.config(command=self.listbox.yview)
        
        # Sağ: Sıralama butonları
        order_frame = ttk.Frame(middle_frame, padding="5")
        order_frame.pack(side=tk.RIGHT, fill=tk.Y)
        
        ttk.Label(order_frame, text="Sıralama:", font=('Arial', 10, 'bold')).pack(pady=5)
        ttk.Button(order_frame, text="⬆️ Yukarı", command=self.move_up, width=10).pack(pady=3)
        ttk.Button(order_frame, text="⬇️ Aşağı", command=self.move_down, width=10).pack(pady=3)
        ttk.Button(order_frame, text="⏫ En Üste", command=self.move_top, width=10).pack(pady=3)
        ttk.Button(order_frame, text="⏬ En Alta", command=self.move_bottom, width=10).pack(pady=3)
        
        ttk.Separator(order_frame, orient=tk.HORIZONTAL).pack(fill=tk.X, pady=10)
        
        ttk.Label(order_frame, text="Toplam:", font=('Arial', 10)).pack()
        self.count_label = ttk.Label(order_frame, text="0 dosya", font=('Arial', 12, 'bold'))
        self.count_label.pack()
        
        # === AYARLAR FRAME ===
        settings_frame = ttk.LabelFrame(self.root, text="⚙️ OCR Ayarları", padding="10")
        settings_frame.pack(fill=tk.X, padx=10, pady=5)
        
        # Dil seçimi
        lang_frame = ttk.Frame(settings_frame)
        lang_frame.pack(fill=tk.X)
        
        ttk.Label(lang_frame, text="Dil:").pack(side=tk.LEFT)
        self.lang_var = tk.StringVar(value="tr")
        lang_combo = ttk.Combobox(lang_frame, textvariable=self.lang_var, width=15, state="readonly")
        lang_combo['values'] = ('tr - Türkçe', 'latin - Latin', 'en - İngilizce', 'ch - Çince')
        lang_combo.current(0)
        lang_combo.pack(side=tk.LEFT, padx=10)
        
        # GPU kullanımı
        self.use_gpu_var = tk.BooleanVar(value=True)
        ttk.Checkbutton(lang_frame, text="GPU Kullan", variable=self.use_gpu_var).pack(side=tk.LEFT, padx=20)
        
        # Açı düzeltme
        self.use_angle_var = tk.BooleanVar(value=True)
        ttk.Checkbutton(lang_frame, text="Açı Düzeltme", variable=self.use_angle_var).pack(side=tk.LEFT, padx=10)
        
        # === İLERLEME FRAME ===
        progress_frame = ttk.Frame(self.root, padding="10")
        progress_frame.pack(fill=tk.X)
        
        self.progress_var = tk.DoubleVar()
        self.progress_bar = ttk.Progressbar(progress_frame, variable=self.progress_var, maximum=100)
        self.progress_bar.pack(fill=tk.X)
        
        self.status_label = ttk.Label(progress_frame, text="Hazır", font=('Arial', 10))
        self.status_label.pack(anchor=tk.W, pady=5)
        
        # === ALT FRAME: Başlat Butonu ===
        bottom_frame = ttk.Frame(self.root, padding="10")
        bottom_frame.pack(fill=tk.X)
        
        self.start_btn = ttk.Button(
            bottom_frame, 
            text="🚀 OCR Başlat ve ZIP İndir", 
            command=self.start_ocr,
            style='Accent.TButton'
        )
        self.start_btn.pack(fill=tk.X, ipady=10)
        
        # Stil
        style = ttk.Style()
        style.configure('Accent.TButton', font=('Arial', 12, 'bold'))
        
    def select_files(self):
        """Dosya seçme dialog'u"""
        filetypes = [
            ("Resim Dosyaları", "*.png *.jpg *.jpeg *.bmp *.tiff *.tif"),
            ("PNG", "*.png"),
            ("JPEG", "*.jpg *.jpeg"),
            ("Tüm Dosyalar", "*.*")
        ]
        
        selected = filedialog.askopenfilenames(
            title="OCR için Resim Dosyalarını Seçin",
            filetypes=filetypes
        )
        
        if selected:
            # Mevcut son numaradan devam et
            start_num = len(self.files) + 1
            
            for i, filepath in enumerate(selected):
                filename = os.path.basename(filepath)
                self.files.append((filepath, filename))
            
            self.update_listbox()
            
    def update_listbox(self):
        """Listbox'ı güncelle"""
        self.listbox.delete(0, tk.END)
        
        for i, (filepath, filename) in enumerate(self.files, start=1):
            display_text = f"{i:03d}. {filename}"
            self.listbox.insert(tk.END, display_text)
        
        self.count_label.config(text=f"{len(self.files)} dosya")
        
    def remove_selected(self):
        """Seçili öğeleri sil"""
        selected = list(self.listbox.curselection())
        if not selected:
            return
            
        # Sondan başa sil (index kayması önlenir)
        for i in reversed(selected):
            del self.files[i]
            
        self.update_listbox()
        
    def clear_all(self):
        """Tüm listeyi temizle"""
        if self.files:
            if messagebox.askyesno("Onay", "Tüm dosyalar silinecek. Emin misiniz?"):
                self.files.clear()
                self.update_listbox()
                
    def move_up(self):
        """Seçili öğeyi yukarı taşı"""
        selected = self.listbox.curselection()
        if not selected or selected[0] == 0:
            return
            
        for i in selected:
            if i > 0:
                self.files[i], self.files[i-1] = self.files[i-1], self.files[i]
        
        self.update_listbox()
        
        # Seçimi koru
        for i in selected:
            if i > 0:
                self.listbox.selection_set(i-1)
                
    def move_down(self):
        """Seçili öğeyi aşağı taşı"""
        selected = list(self.listbox.curselection())
        if not selected or selected[-1] == len(self.files) - 1:
            return
            
        for i in reversed(selected):
            if i < len(self.files) - 1:
                self.files[i], self.files[i+1] = self.files[i+1], self.files[i]
        
        self.update_listbox()
        
        # Seçimi koru
        for i in selected:
            if i < len(self.files) - 1:
                self.listbox.selection_set(i+1)
                
    def move_top(self):
        """Seçili öğeyi en üste taşı"""
        selected = list(self.listbox.curselection())
        if not selected:
            return
            
        items = [self.files[i] for i in selected]
        for i in reversed(selected):
            del self.files[i]
        
        self.files = items + self.files
        self.update_listbox()
        
        # Seçimi güncelle
        for i in range(len(items)):
            self.listbox.selection_set(i)
            
    def move_bottom(self):
        """Seçili öğeyi en alta taşı"""
        selected = list(self.listbox.curselection())
        if not selected:
            return
            
        items = [self.files[i] for i in selected]
        for i in reversed(selected):
            del self.files[i]
        
        self.files = self.files + items
        self.update_listbox()
        
        # Seçimi güncelle
        start = len(self.files) - len(items)
        for i in range(start, len(self.files)):
            self.listbox.selection_set(i)
            
    def get_lang_code(self):
        """Dil kodunu al"""
        lang_text = self.lang_var.get()
        return lang_text.split(' - ')[0]
        
    def init_ocr(self):
        """OCR engine'i başlat"""
        if not PADDLEOCR_AVAILABLE:
            messagebox.showerror("Hata", "PaddleOCR yüklü değil!\n\nKurulum:\npip install paddlepaddle-gpu==2.6.2\npip install paddleocr==2.10.0")
            return False
            
        lang = self.get_lang_code()
        use_gpu = self.use_gpu_var.get()
        use_angle = self.use_angle_var.get()
        
        self.status_label.config(text=f"OCR motoru başlatılıyor... (lang={lang}, GPU={use_gpu})")
        self.root.update()
        
        try:
            self.ocr = PaddleOCR(
                lang=lang,
                use_angle_cls=use_angle,
                use_gpu=use_gpu,
                show_log=False
            )
            return True
        except Exception as e:
            # GPU hatası varsa CPU ile dene
            if use_gpu:
                self.status_label.config(text="GPU hatası, CPU ile deneniyor...")
                self.root.update()
                try:
                    self.ocr = PaddleOCR(
                        lang=lang,
                        use_angle_cls=use_angle,
                        use_gpu=False,
                        show_log=False
                    )
                    messagebox.showwarning("Uyarı", f"GPU kullanılamadı, CPU modunda çalışılıyor.\n\nHata: {e}")
                    return True
                except Exception as e2:
                    messagebox.showerror("Hata", f"OCR başlatılamadı!\n\n{e2}")
                    return False
            else:
                messagebox.showerror("Hata", f"OCR başlatılamadı!\n\n{e}")
                return False
                
    def process_single_image(self, filepath, index):
        """Tek bir resmi OCR ile işle"""
        try:
            result = self.ocr.ocr(filepath, cls=self.use_angle_var.get())
            
            if result is None or len(result) == 0:
                return ""
                
            # Sonuçları metne çevir
            lines = []
            for page_result in result:
                if page_result is None:
                    continue
                for line in page_result:
                    if line and len(line) >= 2:
                        text = line[1][0]  # Metin
                        lines.append(text)
            
            return "\n".join(lines)
            
        except Exception as e:
            raise Exception(f"OCR hatası: {e}")
            
    def start_ocr(self):
        """OCR işlemini başlat"""
        if not self.files:
            messagebox.showwarning("Uyarı", "Lütfen önce dosya seçin!")
            return
            
        # Thread'de çalıştır
        thread = threading.Thread(target=self.ocr_thread)
        thread.daemon = True
        thread.start()
        
    def ocr_thread(self):
        """OCR işlemi (ayrı thread)"""
        # Butonları devre dışı bırak
        self.start_btn.config(state=tk.DISABLED)
        
        try:
            # OCR başlat
            if not self.init_ocr():
                self.start_btn.config(state=tk.NORMAL)
                return
                
            self.ocr_results.clear()
            self.failed_files.clear()
            
            total = len(self.files)
            
            # İlk geçiş: Tüm dosyaları işle
            for i, (filepath, filename) in enumerate(self.files):
                progress = (i / total) * 100
                self.progress_var.set(progress)
                self.status_label.config(text=f"İşleniyor: {i+1}/{total} - {filename}")
                self.root.update()
                
                try:
                    text = self.process_single_image(filepath, i)
                    self.ocr_results[i] = text
                except Exception as e:
                    print(f"Hata (ilk deneme): {filename} - {e}")
                    self.failed_files.append((i, filepath, filename))
                    
            # İkinci geçiş: Başarısız dosyaları tekrar dene
            if self.failed_files:
                self.status_label.config(text=f"Başarısız dosyalar tekrar deneniyor... ({len(self.failed_files)} adet)")
                self.root.update()
                
                still_failed = []
                for i, filepath, filename in self.failed_files:
                    try:
                        text = self.process_single_image(filepath, i)
                        self.ocr_results[i] = text
                    except Exception as e:
                        print(f"Hata (ikinci deneme): {filename} - {e}")
                        still_failed.append((i, filepath, filename))
                        self.ocr_results[i] = f"[HATA: Bu sayfa okunamadı - {filename}]"
                        
                self.failed_files = still_failed
                
            self.progress_var.set(100)
            
            # ZIP oluştur
            self.create_zip()
            
        except Exception as e:
            messagebox.showerror("Hata", f"Beklenmeyen hata:\n{e}")
        finally:
            self.start_btn.config(state=tk.NORMAL)
            
    def create_zip(self):
        """Sonuçları ZIP olarak kaydet"""
        # Kayıt yeri seç
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        default_name = f"ocr_sonuc_{timestamp}.zip"
        
        zip_path = filedialog.asksaveasfilename(
            title="ZIP Dosyasını Kaydet",
            defaultextension=".zip",
            initialfile=default_name,
            filetypes=[("ZIP Dosyası", "*.zip")]
        )
        
        if not zip_path:
            self.status_label.config(text="İptal edildi")
            return
            
        self.status_label.config(text="ZIP oluşturuluyor...")
        self.root.update()
        
        try:
            with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
                combined_text = []
                
                # Her sayfa için ayrı dosya
                for i in range(len(self.files)):
                    if i in self.ocr_results:
                        text = self.ocr_results[i]
                        filename = f"sayfa_{i+1:03d}.txt"
                        
                        # ZIP'e ekle (UTF-8)
                        zf.writestr(filename, text.encode('utf-8'))
                        
                        # Birleşik metin için
                        combined_text.append(f"{'='*60}")
                        combined_text.append(f"SAYFA {i+1}: {self.files[i][1]}")
                        combined_text.append(f"{'='*60}")
                        combined_text.append(text)
                        combined_text.append("")
                        
                # Birleştirilmiş metin
                full_text = "\n".join(combined_text)
                zf.writestr("birlesik_metin.txt", full_text.encode('utf-8'))
                
                # Başarısız dosyalar varsa bilgi dosyası
                if self.failed_files:
                    failed_info = ["OKUNAMAYAN SAYFALAR:", ""]
                    for i, filepath, filename in self.failed_files:
                        failed_info.append(f"- Sayfa {i+1}: {filename}")
                    failed_info.append("")
                    failed_info.append("Bu sayfaları el ile işlemeniz gerekebilir.")
                    zf.writestr("OKUNAMAYAN_SAYFALAR.txt", "\n".join(failed_info).encode('utf-8'))
                    
            # Başarı mesajı
            success_msg = f"✅ ZIP başarıyla oluşturuldu!\n\n📁 {zip_path}\n\n"
            success_msg += f"📊 Toplam: {len(self.files)} sayfa\n"
            success_msg += f"✅ Başarılı: {len(self.ocr_results) - len(self.failed_files)}\n"
            
            if self.failed_files:
                success_msg += f"❌ Başarısız: {len(self.failed_files)}\n\n"
                success_msg += "Başarısız sayfalar için OKUNAMAYAN_SAYFALAR.txt dosyasına bakın."
            
            self.status_label.config(text="Tamamlandı!")
            messagebox.showinfo("Başarılı", success_msg)
            
            # ZIP'i aç (opsiyonel)
            if messagebox.askyesno("Aç", "ZIP dosyasının bulunduğu klasörü açmak ister misiniz?"):
                folder = os.path.dirname(zip_path)
                if sys.platform == 'win32':
                    os.startfile(folder)
                elif sys.platform == 'darwin':
                    os.system(f'open "{folder}"')
                else:
                    os.system(f'xdg-open "{folder}"')
                    
        except Exception as e:
            messagebox.showerror("Hata", f"ZIP oluşturulamadı!\n\n{e}")
            self.status_label.config(text="Hata oluştu")


def main():
    """Ana fonksiyon"""
    root = tk.Tk()
    
    # Windows'ta DPI ayarı
    try:
        from ctypes import windll
        windll.shcore.SetProcessDpiAwareness(1)
    except:
        pass
    
    app = PDFOCRApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()