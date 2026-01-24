# 📄 PaddleOCR Yerel OCR Sistemi

Yüksek kaliteli Türkçe OCR için yerel sunucu + web arayüzü.

## 🚀 Hızlı Başlangıç

### 1. Gereksinimler

```bash
# Python 3.8+ gerekli
python --version
```

### 2. Kurulum

```bash
# Sanal ortam oluştur (önerilir)
python -m venv paddleocr_env

# Windows
paddleocr_env\Scripts\activate

# Linux/Mac
source paddleocr_env/bin/activate

# Paketleri kur
pip install flask flask-cors paddleocr paddlepaddle Pillow
```

### 3. Sunucuyu Başlat

```bash
python paddleocr_server.py
```

Çıktı:
```
╔═══════════════════════════════════════════════════════════╗
║           🔤 PaddleOCR Server v1.0.0 🔤                    ║
╠═══════════════════════════════════════════════════════════╣
║  Sunucu: http://localhost:5000                            ║
║  Diller: Türkçe, İngilizce, Çince ve 80+ dil              ║
╚═══════════════════════════════════════════════════════════╝
```

### 4. Web Arayüzünü Aç

`paddleocr_client.html` dosyasını tarayıcıda aç:
- Doğrudan çift tıkla
- Veya VS Code Live Server ile

---

## 📋 Özellikler

### 🖼️ Dosya Yönetimi
- ✅ Drag & drop dosya yükleme
- ✅ Tıklayarak dosya seçimi
- ✅ Çoklu dosya desteği
- ✅ Otomatik sıralama (numerik)
- ✅ Sıralı numaralandırma (mor daire)
- ✅ Dosya önizleme kartları
- ✅ Tek tek silme

### 📊 Durum Göstergeleri
- ⏳ Bekliyor
- 🔄 İşleniyor (animasyonlu)
- ✅ Tamamlandı (yeşil border)
- ❌ Hata (kırmızı border)

### ⚙️ OCR Ayarları
- 🌐 12 dil seçeneği
- 🔗 Sunucu adresi ayarı

### 📈 İlerleme Takibi
- İlerleme çubuğu (yüzde)
- Geçen süre (MM:SS)
- İşlenen/Toplam sayaç
- Başarılı/Hatalı sayısı
- Ortalama süre
- **Ortalama güven skoru** (PaddleOCR özelliği)

### 💾 İndirme
- Tek dosya indirme (kart üzerinde 💾)
- ZIP indirme:
  - `[dosyaadı]_ocr.txt` (her sayfa)
  - `_TUM_SAYFALAR_BIRLESIK.txt`
  - `_sonuclar.json`
- Otomatik ZIP (OCR bitince)

### 🎨 UI/UX
- Sunucu durumu göstergesi
- Responsive tasarım
- Koyu tema

---

## 🌐 Desteklenen Diller

| Kod | Dil |
|-----|-----|
| tr | 🇹🇷 Türkçe |
| en | 🇬🇧 English |
| ch | 🇨🇳 Chinese |
| german | 🇩🇪 Deutsch |
| french | 🇫🇷 Français |
| arabic | 🇸🇦 العربية |
| korean | 🇰🇷 Korean |
| japan | 🇯🇵 Japanese |
| russian | 🇷🇺 Russian |
| spanish | 🇪🇸 Spanish |
| italian | 🇮🇹 Italian |
| latin | Latin |

---

## 🔌 API Kullanımı

### Sağlık Kontrolü
```bash
curl http://localhost:5000/health
```

### Tek Görüntü OCR
```bash
curl -X POST http://localhost:5000/ocr \
  -H "Content-Type: application/json" \
  -d '{
    "image": "BASE64_IMAGE_DATA",
    "lang": "tr",
    "filename": "sayfa1.jpg"
  }'
```

### Yanıt
```json
{
  "success": true,
  "text": "Algılanan metin...",
  "confidence": 95.5,
  "line_count": 25,
  "processing_time": 2.3,
  "details": [...]
}
```

---

## ⚡ Performans İpuçları

1. **GPU Kullanımı**: `paddleocr_server.py` içinde `use_gpu=True` yapın
2. **İlk İstek Yavaş**: Model yükleme süresi (~10-30 saniye)
3. **Görüntü Kalitesi**: 300 DPI ve üzeri önerilir
4. **Batch İşleme**: Çok sayıda dosya için batch endpoint kullanın

---

## 🐛 Sorun Giderme

### "Sunucu bağlantısı yok"
- `python paddleocr_server.py` çalışıyor mu?
- Port 5000 başka uygulama tarafından kullanılıyor mu?
- Firewall engeli var mı?

### "CORS hatası"
- Sunucu `flask-cors` ile başlatılmalı
- `paddleocr_server.py` dosyasında `CORS(app)` var mı?

### "Model yüklenemedi"
- İnternet bağlantısını kontrol edin (ilk seferde model indirilir)
- Disk alanı yeterli mi? (~500MB gerekli)

---

## 📁 Dosyalar

```
├── paddleocr_server.py   # Flask backend
├── paddleocr_client.html # Web arayüzü
└── README.md             # Bu dosya
```

---

## 📊 Tesseract vs PaddleOCR Karşılaştırması

| Özellik | Tesseract.js | PaddleOCR |
|---------|-------------|-----------|
| Türkçe Kalitesi | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Tablo Algılama | ❌ | ✅ |
| Döndürülmüş Metin | ⚠️ | ✅ |
| Hız | Yavaş | Hızlı |
| Kurulum | CDN | Python |
| Güven Skoru | Var | Daha doğru |

---

## 📜 Lisans

MIT License

---

## 🤝 Katkı

Pull request ve issue'lar memnuniyetle karşılanır!
