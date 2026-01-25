var hastaliklar = {
  "diseases": [
    {
      "id": 1,
      "name": "Akne Vulgaris",
      "icd10": "L70.0",
      "symptom_ids": [1, 2, 3, 4, 5, 6],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 2},
        {"type": "disease_id", "value": 3},
        {"type": "disease_id", "value": 4},
        {"type": "disease_id", "value": 5},
        {"type": "disease_id", "value": 6}
      ],
      "tests": []
    },
    {
      "id": 2,
      "name": "Tinea Kapitis",
      "icd10": "B35.0",
      "symptom_ids": [7, 8, 9, 10],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 3},
        {"type": "disease_id", "value": 7},
        {"type": "disease_id", "value": 8},
        {"type": "disease_id", "value": 9},
        {"type": "disease_id", "value": 10},
        {"type": "disease_id", "value": 11}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 3,
      "name": "Favus",
      "icd10": "B35.0",
      "symptom_ids": [12, 13, 14, 15],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 2},
        {"type": "disease_id", "value": 7},
        {"type": "disease_id", "value": 8},
        {"type": "disease_id", "value": 9},
        {"type": "disease_id", "value": 10},
        {"type": "disease_id", "value": 11}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 4,
      "name": "Tinea Pedis",
      "icd10": "B35.3",
      "symptom_ids": [16, 17, 18, 19],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 14},
        {"type": "disease_id", "value": 6}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 5,
      "name": "Tinea Korporis",
      "icd10": "B35.4",
      "symptom_ids": [20, 21, 22],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 16},
        {"type": "disease_id", "value": 6}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 6,
      "name": "Onikomikoz",
      "icd10": "B35.1",
      "symptom_ids": [23, 24, 25],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 17},
        {"type": "disease_id", "value": 18},
        {"type": "disease_id", "value": 19}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 7,
      "name": "Pitriyazis Versikolor",
      "icd10": "B36.0",
      "symptom_ids": [26, 27, 28, 29],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 5},
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 21},
        {"type": "disease_id", "value": 22}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 8,
      "name": "Atopik Dermatit",
      "icd10": "L20",
      "symptom_ids": [30, 31, 32, 33, 34, 35],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 23}
      ],
      "tests": []
    },
    {
      "id": 9,
      "name": "Kontakt Dermatit",
      "icd10": "L23-L25",
      "symptom_ids": [36, 37, 38, 39],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 8},
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 24},
        {"type": "disease_id", "value": 2}
      ],
      "tests": []
    },
    {
      "id": 10,
      "name": "Kandidiyaz (Deri ve Tırnak)",
      "icd10": "B37.2",
      "symptom_ids": [40, 41, 42, 43, 44, 45],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 17},
        {"type": "disease_id", "value": 18},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 26}
      ],
      "tests": ["nativ preparat"]
    },
    {
      "id": 11,
      "name": "Ürtiker",
      "icd10": "L50.0",
      "symptom_ids": [46, 47, 48, 49, 50],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 27},
        {"type": "disease_id", "value": 28},
        {"type": "disease_id", "value": 29},
        {"type": "disease_id", "value": 30}
      ],
      "tests": []
    },
    {
      "id": 12,
      "name": "Akut Romatizmal Ateş",
      "icd10": "I00",
      "symptom_ids": [51, 52, 53, 54, 55, 56, 57, 58],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 31},
        {"type": "disease_id", "value": 32},
        {"type": "disease_id", "value": 33},
        {"type": "disease_id", "value": 34},
        {"type": "disease_id", "value": 35}
      ],
      "tests": ["tam kan sayımı", "periferik yayma", "ESH", "CRP", "ASO", "EKG", "telekardiyografi", "ekokardiyografi"]
    },
    {
      "id": 13,
      "name": "Anjina Pektoris",
      "icd10": "I20.0",
      "symptom_ids": [59, 60, 61, 62, 63],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 36},
        {"type": "disease_id", "value": 37},
        {"type": "disease_id", "value": 38},
        {"type": "disease_id", "value": 39},
        {"type": "disease_id", "value": 40},
        {"type": "disease_id", "value": 41},
        {"type": "disease_id", "value": 42}
      ],
      "tests": ["EKG", "hemoglobin", "açlık kan şekeri", "kan kolesterol", "trigliserid", "akciğer grafisi"]
    },
    {
      "id": 14,
      "name": "Hiperlipidemi",
      "icd10": "E78.5",
      "symptom_ids": [64],
      "differential_diagnosis": [],
      "tests": ["kan lipid profili", "total kolesterol", "LDL-K", "HDL-K", "trigliserid", "transaminazlar"]
    },
    {
      "id": 15,
      "name": "Hipertansiyon",
      "icd10": "I10",
      "symptom_ids": [65],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 43}
      ],
      "tests": ["tam idrar incelemesi", "potasyum", "sodyum", "klor", "BUN", "kreatinin", "ürik asit", "kan şekeri", "total kolesterol", "HDL kolesterol", "LDL-Kolesterol", "trigliserid", "EKG", "telekardiyogram"]
    },
    {
      "id": 16,
      "name": "Konjestif Kalp Yetmezliği (Erişkin)",
      "icd10": "I50.9",
      "symptom_ids": [66, 67, 68, 69, 70, 71, 72, 73],
      "differential_diagnosis": [],
      "tests": ["EKG", "telekardiyografi", "tam kan sayımı", "biyokimyasal inceleme", "tiroid fonksiyon testleri"]
    },
    {
      "id": 17,
      "name": "Akut Miyokard Enfarktüsü",
      "icd10": "I21.9",
      "symptom_ids": [74, 75, 76, 77, 78, 79],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 36},
        {"type": "disease_id", "value": 37},
        {"type": "disease_id", "value": 38},
        {"type": "disease_id", "value": 39},
        {"type": "disease_id", "value": 40},
        {"type": "disease_id", "value": 41},
        {"type": "disease_id", "value": 42}
      ],
      "tests": ["EKG", "miyoglobin", "CK-MB", "troponin-T", "troponin-I"]
    },
    {
      "id": 18,
      "name": "Peptik Ülser",
      "icd10": "K27.9",
      "symptom_ids": [80, 81, 82, 83, 84],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 44},
        {"type": "disease_id", "value": 45},
        {"type": "disease_id", "value": 46},
        {"type": "disease_id", "value": 47}
      ],
      "tests": ["anti Hp seroloji", "C13 üre soluk testi", "dışkıda Hp antijen testi"]
    },
    {
      "id": 19,
      "name": "Akciğer Tüberkülozu (Çocuk)",
      "icd10": "A15.0",
      "symptom_ids": [85, 86, 87, 88, 89, 90],
      "differential_diagnosis": [],
      "tests": ["akciğer grafisi", "tüberkülin deri testi", "balgam mikroskobik inceleme", "mide suyu kültürü"]
    },
    {
      "id": 20,
      "name": "Akciğer Tüberkülozu (Erişkin)",
      "icd10": "A15.0",
      "symptom_ids": [91, 92, 93, 94, 95, 96, 97],
      "differential_diagnosis": [],
      "tests": ["akciğer grafisi", "balgam yayması", "balgam kültürü"]
    },
    {
      "id": 21,
      "name": "Akut Astım Atağı (Erişkin)",
      "icd10": "J45.9",
      "symptom_ids": [98, 99, 100, 101, 102, 103],
      "differential_diagnosis": [],
      "tests": ["PEF", "oksijen satürasyonu"]
    },
    {
      "id": 22,
      "name": "Akut Astım Atağı (Çocuk)",
      "icd10": "J45.9",
      "symptom_ids": [104, 105, 106, 107, 108, 109],
      "differential_diagnosis": [],
      "tests": ["PEF", "oksijen satürasyonu"]
    },
    {
      "id": 23,
      "name": "Astım",
      "icd10": "J45.9",
      "symptom_ids": [110, 111, 112, 113],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 48},
        {"type": "disease_id", "value": 49},
        {"type": "disease_id", "value": 50},
        {"type": "disease_id", "value": 51},
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 52},
        {"type": "disease_id", "value": 53}
      ],
      "tests": ["peak flowmeter"]
    },
    {
      "id": 24,
      "name": "Kronik Obstrüktif Akciğer Hastalığı",
      "icd10": "J44.9",
      "symptom_ids": [114, 115, 116, 117, 118],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 23},
        {"type": "disease_id", "value": 16},
        {"type": "disease_id", "value": 54},
        {"type": "disease_id", "value": 20}
      ],
      "tests": ["spirometri", "PEF"]
    },
    {
      "id": 25,
      "name": "Toplum Kökenli Pnömoni (Erişkin)",
      "icd10": "J18.9",
      "symptom_ids": [119, 120, 121, 122],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 55},
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 16},
        {"type": "disease_id", "value": 56}
      ],
      "tests": ["akciğer grafisi", "tam kan sayımı", "balgam Gram boyaması"]
    },
    {
      "id": 26,
      "name": "Pnömoni (Çocuk)",
      "icd10": "J18.9",
      "symptom_ids": [123, 124, 125, 126, 127],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 55},
        {"type": "disease_id", "value": 23},
        {"type": "disease_id", "value": 20}
      ],
      "tests": ["akciğer grafisi", "tam kan sayımı", "eritrosit sedimentasyon hızı"]
    },
    {
      "id": 27,
      "name": "Baş Ağrısı (Gerilim Tipi)",
      "icd10": "G44.2",
      "symptom_ids": [128, 129, 130, 131],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 57},
        {"type": "disease_id", "value": 58},
        {"type": "disease_id", "value": 59},
        {"type": "disease_id", "value": 60},
        {"type": "disease_id", "value": 61},
        {"type": "disease_id", "value": 62}
      ],
      "tests": []
    },
    {
      "id": 28,
      "name": "Migren",
      "icd10": "G43.9",
      "symptom_ids": [132, 133, 134, 135, 136, 137],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 27},
        {"type": "disease_id", "value": 58},
        {"type": "disease_id", "value": 59},
        {"type": "disease_id", "value": 60},
        {"type": "disease_id", "value": 61},
        {"type": "disease_id", "value": 62}
      ],
      "tests": []
    },
    {
      "id": 29,
      "name": "Bilinç Bozukluğu",
      "icd10": "R40.9",
      "symptom_ids": [138, 139, 140, 141],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 63},
        {"type": "disease_id", "value": 64},
        {"type": "disease_id", "value": 65},
        {"type": "disease_id", "value": 66},
        {"type": "disease_id", "value": 67},
        {"type": "disease_id", "value": 68},
        {"type": "disease_id", "value": 69},
        {"type": "disease_id", "value": 70}
      ],
      "tests": ["kan şekeri", "elektrolitler", "tam kan sayımı", "BUN", "kreatinin", "EKG"]
    },
    {
      "id": 30,
      "name": "Febril Konvülsiyon",
      "icd10": "R56.0",
      "symptom_ids": [142, 143, 144, 145],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 71},
        {"type": "disease_id", "value": 72}
      ],
      "tests": ["tam kan sayımı", "biyokimyasal testler"]
    },
    {
      "id": 31,
      "name": "Disfonksiyonel Uterus Kanamaları",
      "icd10": "N93.8",
      "symptom_ids": [146, 147, 148, 149, 150],
      "differential_diagnosis": [],
      "tests": ["pelvik muayene"]
    },
    {
      "id": 32,
      "name": "Dismenore",
      "icd10": "N94.6",
      "symptom_ids": [151, 152, 153],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 73},
        {"type": "disease_id", "value": 74},
        {"type": "disease_id", "value": 75}
      ],
      "tests": []
    },
    {
      "id": 33,
      "name": "Gebelik İzlemi",
      "icd10": "Z34.9",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": ["hemoglobin", "hematokrit", "kan grubu", "tam idrar incelemesi", "açlık kan şekeri", "HBsAg"]
    },
    {
      "id": 34,
      "name": "Menopoz",
      "icd10": "N95.1",
      "symptom_ids": [154, 155, 156, 157, 158, 159, 160],
      "differential_diagnosis": [],
      "tests": ["FSH", "östradiol"]
    }, 
    
    {
      "id": 35,
      "name": "Aile Planlaması",
      "icd10": "Z30.9",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": []
    },
    {
      "id": 36,
      "name": "Gebelikte Hipertansif Hastalıklar",
      "icd10": "O10-O16",
      "symptom_ids": [161, 162, 163, 164, 165],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 76},
        {"type": "disease_id", "value": 77}
      ],
      "tests": ["tam idrar incelemesi", "proteinüri", "kan basıncı ölçümü", "BUN", "kreatinin", "AST", "ALT", "trombosit sayısı"]
    },
    {
      "id": 37,
      "name": "Gestasyonel Diyabet",
      "icd10": "O24.4",
      "symptom_ids": [166, 167],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 78},
        {"type": "disease_id", "value": 79}
      ],
      "tests": ["açlık kan şekeri", "OGTT (oral glukoz tolerans testi)"]
    },
    {
      "id": 38,
      "name": "Anemi (Gebelikte)",
      "icd10": "O99.0",
      "symptom_ids": [168, 169, 170],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 80},
        {"type": "disease_id", "value": 81}
      ],
      "tests": ["hemoglobin", "hematokrit", "serum ferritin", "serum demir", "TDBK"]
    },
    {
      "id": 39,
      "name": "Postpartum Hemoraji",
      "icd10": "O72.9",
      "symptom_ids": [171, 172, 173, 174],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 82},
        {"type": "disease_id", "value": 83}
      ],
      "tests": ["tam kan sayımı", "PT", "aPTT", "fibrinojen"]
    },
    {
      "id": 40,
      "name": "Preeklampsi",
      "icd10": "O14.9",
      "symptom_ids": [161, 162, 163, 164, 165, 175],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 36},
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 76}
      ],
      "tests": ["tam idrar incelemesi", "proteinüri", "kan basıncı", "BUN", "kreatinin", "AST", "ALT", "trombosit"]
    },
    {
      "id": 41,
      "name": "Eklampsi",
      "icd10": "O15.9",
      "symptom_ids": [176, 177, 178, 179],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 30},
        {"type": "disease_id", "value": 40},
        {"type": "disease_id", "value": 84}
      ],
      "tests": ["tam idrar incelemesi", "proteinüri", "kan basıncı", "BUN", "kreatinin", "AST", "ALT", "trombosit", "EEG"]
    },
    {
      "id": 42,
      "name": "Diabetes Mellitus Tip 1",
      "icd10": "E10.9",
      "symptom_ids": [180, 181, 182, 183, 184],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 78},
        {"type": "disease_id", "value": 79},
        {"type": "disease_id", "value": 85}
      ],
      "tests": ["açlık kan şekeri", "HbA1c", "C-peptid", "anti-GAD antikoru"]
    },
    {
      "id": 43,
      "name": "Diabetes Mellitus Tip 2",
      "icd10": "E11.9",
      "symptom_ids": [180, 181, 182, 185],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 42},
        {"type": "disease_id", "value": 78},
        {"type": "disease_id", "value": 79}
      ],
      "tests": ["açlık kan şekeri", "HbA1c", "tokluk kan şekeri", "lipid profili"]
    },
    {
      "id": 44,
      "name": "Hipoglisemi",
      "icd10": "E16.2",
      "symptom_ids": [186, 187, 188, 189, 190],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 29},
        {"type": "disease_id", "value": 86},
        {"type": "disease_id", "value": 87}
      ],
      "tests": ["kan şekeri", "insülin düzeyi", "C-peptid"]
    },
    {
      "id": 45,
      "name": "Akut Gastroenterit",
      "icd10": "A09",
      "symptom_ids": [191, 192, 193, 194, 195],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 88},
        {"type": "disease_id", "value": 89},
        {"type": "disease_id", "value": 90}
      ],
      "tests": ["tam kan sayımı", "elektrolitler", "dışkı direkt inceleme"]
    },
    {
      "id": 46,
      "name": "İshal (Kronik)",
      "icd10": "K52.9",
      "symptom_ids": [196, 197, 198],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 91},
        {"type": "disease_id", "value": 92},
        {"type": "disease_id", "value": 93},
        {"type": "disease_id", "value": 94}
      ],
      "tests": ["dışkı kültürü", "parazit incelemesi", "kolonoskopi"]
    },
    {
      "id": 47,
      "name": "Konstipasyon",
      "icd10": "K59.0",
      "symptom_ids": [199, 200, 201],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 95},
        {"type": "disease_id", "value": 96},
        {"type": "disease_id", "value": 97}
      ],
      "tests": ["abdominal radyografi", "kolon transit zamanı"]
    },
    {
      "id": 48,
      "name": "Hemoroid",
      "icd10": "I84.9",
      "symptom_ids": [202, 203, 204],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 98},
        {"type": "disease_id", "value": 99},
        {"type": "disease_id", "value": 100}
      ],
      "tests": ["rektal muayene", "anoskopi"]
    },
    {
      "id": 49,
      "name": "Üst Solunum Yolu Enfeksiyonu",
      "icd10": "J06.9",
      "symptom_ids": [205, 206, 207, 208, 209],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 101},
        {"type": "disease_id", "value": 102},
        {"type": "disease_id", "value": 103}
      ],
      "tests": []
    },
    {
      "id": 50,
      "name": "Akut Farenjit",
      "icd10": "J02.9",
      "symptom_ids": [210, 211, 212, 213],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 104},
        {"type": "disease_id", "value": 105},
        {"type": "disease_id", "value": 106}
      ],
      "tests": ["boğaz kültürü", "hızlı streptokok testi"]
    },
    {
      "id": 51,
      "name": "Akut Tonsillit",
      "icd10": "J03.9",
      "symptom_ids": [214, 215, 216, 217],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 50},
        {"type": "disease_id", "value": 107},
        {"type": "disease_id", "value": 108}
      ],
      "tests": ["boğaz kültürü", "tam kan sayımı"]
    },
    {
      "id": 52,
      "name": "Akut Otitis Media",
      "icd10": "H66.9",
      "symptom_ids": [218, 219, 220, 221],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 109},
        {"type": "disease_id", "value": 110}
      ],
      "tests": ["otoskopi"]
    },
    {
      "id": 53,
      "name": "Sinüzit",
      "icd10": "J32.9",
      "symptom_ids": [222, 223, 224, 225, 226],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 49},
        {"type": "disease_id", "value": 111},
        {"type": "disease_id", "value": 112}
      ],
      "tests": ["sinüs radyografisi", "CT sinüs"]
    },
    {
      "id": 54,
      "name": "Bronşiektazi",
      "icd10": "J47.9",
      "symptom_ids": [227, 228, 229, 230],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 24},
        {"type": "disease_id", "value": 113}
      ],
      "tests": ["akciğer grafisi", "HRCT toraks"]
    },
    {
      "id": 55,
      "name": "Pnömotoraks",
      "icd10": "J93.9",
      "symptom_ids": [231, 232, 233, 234],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 17},
        {"type": "disease_id", "value": 23}
      ],
      "tests": ["akciğer grafisi"]
    },
    {
      "id": 56,
      "name": "Pulmoner Emboli",
      "icd10": "I26.9",
      "symptom_ids": [235, 236, 237, 238, 239],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 17},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 16}
      ],
      "tests": ["D-dimer", "arteriyal gazlar", "CT anjiyografi"]
    },
    {
      "id": 57,
      "name": "Subaraknoid Kanama",
      "icd10": "I60.9",
      "symptom_ids": [240, 241, 242, 243],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 28},
        {"type": "disease_id", "value": 114},
        {"type": "disease_id", "value": 115}
      ],
      "tests": ["BT beyin", "lomber ponksiyon"]
    },
    {
      "id": 58,
      "name": "Serebrovasküler Olay (Felç)",
      "icd10": "I63.9",
      "symptom_ids": [244, 245, 246, 247, 248],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 116},
        {"type": "disease_id", "value": 117},
        {"type": "disease_id", "value": 118}
      ],
      "tests": ["BT beyin", "MRI beyin", "EKG", "karotis doppler USG"]
    },
    {
      "id": 59,
      "name": "Epilepsi",
      "icd10": "G40.9",
      "symptom_ids": [249, 250, 251],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 30},
        {"type": "disease_id", "value": 29},
        {"type": "disease_id", "value": 119}
      ],
      "tests": ["EEG", "BT/MRI beyin"]
    },
    {
      "id": 60,
      "name": "Parkinson Hastalığı",
      "icd10": "G20",
      "symptom_ids": [252, 253, 254, 255],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 120},
        {"type": "disease_id", "value": 121}
      ],
      "tests": ["nörolojik muayene"]
    },
    {
      "id": 61,
      "name": "Alzheimer Hastalığı",
      "icd10": "G30.9",
      "symptom_ids": [256, 257, 258, 259],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 122},
        {"type": "disease_id", "value": 123},
        {"type": "disease_id", "value": 124}
      ],
      "tests": ["MMSE", "BT/MRI beyin"]
    },
    {
      "id": 62,
      "name": "Depresyon",
      "icd10": "F32.9",
      "symptom_ids": [260, 261, 262, 263, 264],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 125},
        {"type": "disease_id", "value": 126},
        {"type": "disease_id", "value": 43}
      ],
      "tests": ["PHQ-9", "Hamilton depresyon ölçeği"]
    },
    {
      "id": 63,
      "name": "Anksiyete Bozukluğu",
      "icd10": "F41.9",
      "symptom_ids": [265, 266, 267, 268],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 62},
        {"type": "disease_id", "value": 43},
        {"type": "disease_id", "value": 127}
      ],
      "tests": ["GAD-7"]
    },
    {
      "id": 64,
      "name": "Şizofreni",
      "icd10": "F20.9",
      "symptom_ids": [269, 270, 271, 272],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 128},
        {"type": "disease_id", "value": 129}
      ],
      "tests": ["nöropsikiyatrik değerlendirme"]
    },
    {
      "id": 65,
      "name": "Bipolar Bozukluk",
      "icd10": "F31.9",
      "symptom_ids": [273, 274, 275],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 62},
        {"type": "disease_id", "value": 64}
      ],
      "tests": ["MDQ (Mood Disorder Questionnaire)"]
    },
    {
      "id": 66,
      "name": "Hipertiroidi",
      "icd10": "E05.9",
      "symptom_ids": [276, 277, 278, 279, 280],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 130},
        {"type": "disease_id", "value": 131}
      ],
      "tests": ["TSH", "serbest T4", "serbest T3", "tiroid USG"]
    },
    {
      "id": 67,
      "name": "Hipotiroidi",
      "icd10": "E03.9",
      "symptom_ids": [281, 282, 283, 284, 285],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 132},
        {"type": "disease_id", "value": 133}
      ],
      "tests": ["TSH", "serbest T4"]
    },
    {
      "id": 68,
      "name": "Tiroid Nodülü",
      "icd10": "E04.1",
      "symptom_ids": [286, 287],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 66},
        {"type": "disease_id", "value": 67},
        {"type": "disease_id", "value": 134}
      ],
      "tests": ["tiroid USG", "ince iğne aspirasyon biyopsisi"]
    },
    {
      "id": 69,
      "name": "Akut Böbrek Yetmezliği",
      "icd10": "N17.9",
      "symptom_ids": [288, 289, 290],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 135},
        {"type": "disease_id", "value": 136},
        {"type": "disease_id", "value": 137}
      ],
      "tests": ["BUN", "kreatinin", "elektrolitler", "idrar analizi"]
    },
    {
      "id": 70,
      "name": "Kronik Böbrek Yetmezliği",
      "icd10": "N18.9",
      "symptom_ids": [291, 292, 293, 294],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 69},
        {"type": "disease_id", "value": 43},
        {"type": "disease_id", "value": 138}
      ],
      "tests": ["BUN", "kreatinin", "eGFR", "idrar analizi", "renal USG"]
    },
    {
      "id": 71,
      "name": "Glomerülonefrit",
      "icd10": "N00.9",
      "symptom_ids": [295, 296, 297, 298],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 139},
        {"type": "disease_id", "value": 140}
      ],
      "tests": ["idrar analizi", "C3/C4", "ASO", "renal biyopsi"]
    },
    {
      "id": 72,
      "name": "Üriner Traktus Enfeksiyonu",
      "icd10": "N39.0",
      "symptom_ids": [299, 300, 301, 302],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 141},
        {"type": "disease_id", "value": 142}
      ],
      "tests": ["idrar analizi", "idrar kültürü"]
    },
    {
      "id": 73,
      "name": "Böbrek Taşı",
      "icd10": "N20.9",
      "symptom_ids": [303, 304, 305, 306],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 72},
        {"type": "disease_id", "value": 143},
        {"type": "disease_id", "value": 144}
      ],
      "tests": ["abdominal USG", "non-kontrast BT"]
    },
    {
      "id": 74,
      "name": "Benign Prostat Hiperplazisi",
      "icd10": "N40.1",
      "symptom_ids": [307, 308, 309, 310],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 145},
        {"type": "disease_id", "value": 146}
      ],
      "tests": ["prostat spesifik antijen (PSA)", "prostat USG", "ürin akım hızı"]
    },
    {
      "id": 75,
      "name": "Prostat Kanseri",
      "icd10": "C61",
      "symptom_ids": [311, 312, 313],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 74},
        {"type": "disease_id", "value": 147}
      ],
      "tests": ["PSA", "prostat biyopsisi", "pelvik MR"]
    },
    {
      "id": 76,
      "name": "Rheumatoid Artrit",
      "icd10": "M06.9",
      "symptom_ids": [314, 315, 316, 317, 318],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 148},
        {"type": "disease_id", "value": 149},
        {"type": "disease_id", "value": 150}
      ],
      "tests": ["RF", "anti-CCP", "ESH", "CRP", "el bileği el grafisi"]
    },
    {
      "id": 77,
      "name": "Osteoartrit",
      "icd10": "M19.9",
      "symptom_ids": [319, 320, 321],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 76},
        {"type": "disease_id", "value": 151}
      ],
      "tests": ["eklem grafisi"]
    },
    {
      "id": 78,
      "name": "Sistemik Lupus Eritematozus",
      "icd10": "M32.9",
      "symptom_ids": [322, 323, 324, 325, 326],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 76},
        {"type": "disease_id", "value": 152},
        {"type": "disease_id", "value": 153}
      ],
      "tests": ["ANA", "anti-dsDNA", "C3/C4", "idrar analizi"]
    },
    {
      "id": 79,
      "name": "Gut",
      "icd10": "M10.9",
      "symptom_ids": [327, 328, 329],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 154},
        {"type": "disease_id", "value": 155}
      ],
      "tests": ["serum ürik asit", "eklem sıvısı kristal analizi"]
    },
    {
      "id": 80,
      "name": "Demir Eksikliği Anemisi",
      "icd10": "D50.9",
      "symptom_ids": [330, 331, 332, 333],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 81},
        {"type": "disease_id", "value": 156}
      ],
      "tests": ["hemoglobin", "MCV", "serum ferritin", "serum demir", "TDBK"]
    },
    {
      "id": 81,
      "name": "Megaloblastik Anemi",
      "icd10": "D51.9",
      "symptom_ids": [334, 335, 336],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 80},
        {"type": "disease_id", "value": 157}
      ],
      "tests": ["B12 vitamini", "folik asit", "periferik yayma"]
    },
    {
      "id": 82,
      "name": "Akut Lösemi",
      "icd10": "C91.0",
      "symptom_ids": [337, 338, 339, 340],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 158},
        {"type": "disease_id", "value": 159}
      ],
      "tests": ["tam kan sayımı", "periferik yayma", "bone marrow aspirasyonu"]
    },
    {
      "id": 83,
      "name": "Kronik Miyelositer Lösemi",
      "icd10": "C92.1",
      "symptom_ids": [341, 342, 343],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 82},
        {"type": "disease_id", "value": 160}
      ],
      "tests": ["tam kan sayımı", "periferik yayma", "Philadelphia kromozomu"]
    },
    {
      "id": 84,
      "name": "Lenfoma",
      "icd10": "C85.9",
      "symptom_ids": [344, 345, 346, 347],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 82},
        {"type": "disease_id", "value": 161}
      ],
      "tests": ["lenf nodu biyopsisi", "LDH", "BT"]
    },
    {
      "id": 85,
      "name": "Multiple Myelom",
      "icd10": "C90.0",
      "symptom_ids": [348, 349, 350, 351],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 162},
        {"type": "disease_id", "value": 163}
      ],
      "tests": ["serum protein elektroforezi", "immünofiksasyon", "iskelet grafisi"]
    },
    {
      "id": 86,
      "name": "Akut Apandisit",
      "icd10": "K35.8",
      "symptom_ids": [352, 353, 354, 355],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 164},
        {"type": "disease_id", "value": 165},
        {"type": "disease_id", "value": 166}
      ],
      "tests": ["tam kan sayımı", "abdominal USG", "BT"]
    },
    {
      "id": 87,
      "name": "Divertikülit",
      "icd10": "K57.9",
      "symptom_ids": [356, 357, 358],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 86},
        {"type": "disease_id", "value": 167}
      ],
      "tests": ["abdominal BT"]
    },
    {
      "id": 88,
      "name": "İnflamatuar Bağırsak Hastalığı",
      "icd10": "K52.9",
      "symptom_ids": [359, 360, 361, 362],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 46},
        {"type": "disease_id", "value": 168}
      ],
      "tests": ["kolonoskopi", "kalprotektin", "CRP"]
    },
    {
      "id": 89,
      "name": "Karaciğer Sirozu",
      "icd10": "K74.6",
      "symptom_ids": [363, 364, 365, 366, 367],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 169},
        {"type": "disease_id", "value": 170}
      ],
      "tests": ["AST", "ALT", "albumin", "protrombin zamanı", "karaciğer USG"]
    },
    {
      "id": 90,
      "name": "Kolesistit",
      "icd10": "K81.9",
      "symptom_ids": [368, 369, 370, 371],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 171},
        {"type": "disease_id", "value": 172}
      ],
      "tests": ["abdominal USG", "tam kan sayımı", "CRP"]
    },
    {
      "id": 91,
      "name": "Pankeatitis",
      "icd10": "K85.9",
      "symptom_ids": [372, 373, 374, 375],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 173},
        {"type": "disease_id", "value": 174}
      ],
      "tests": ["amilaz", "lipaz", "abdominal USG", "BT"]
    },
    {
      "id": 92,
      "name": "Peptik Ülser Perforasyonu",
      "icd10": "K27.1",
      "symptom_ids": [376, 377, 378],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 86},
        {"type": "disease_id", "value": 91}
      ],
      "tests": ["direkt batın grafisi", "BT"]
    },
    {
      "id": 93,
      "name": "İnce Barsak Obstrüksiyonu",
      "icd10": "K56.6",
      "symptom_ids": [379, 380, 381, 382],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 175},
        {"type": "disease_id", "value": 176}
      ],
      "tests": ["direkt batın grafisi", "BT"]
    },
    {
      "id": 94,
      "name": "Kolon Obstrüksiyonu",
      "icd10": "K56.6",
      "symptom_ids": [383, 384, 385],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 93},
        {"type": "disease_id", "value": 177}
      ],
      "tests": ["kolonoskopi", "BT"]
    },
    {
      "id": 95,
      "name": "Kolon Kanseri",
      "icd10": "C18.9",
      "symptom_ids": [386, 387, 388, 389],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 46},
        {"type": "disease_id", "value": 88}
      ],
      "tests": ["kolonoskopi", "CEA", "BT"]
    },
    {
      "id": 96,
      "name": "Meme Kanseri",
      "icd10": "C50.9",
      "symptom_ids": [390, 391, 392],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 178},
        {"type": "disease_id", "value": 179}
      ],
      "tests": ["mammografi", "USG", "biyopsi"]
    },
    {
      "id": 97,
      "name": "Serviks Kanseri",
      "icd10": "C53.9",
      "symptom_ids": [393, 394, 395],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 180},
        {"type": "disease_id", "value": 181}
      ],
      "tests": ["pap smear", "kolposkopi", "biyopsi"]
    },
    {
      "id": 98,
      "name": "Endometriyal Kanser",
      "icd10": "C54.1",
      "symptom_ids": [396, 397],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 31},
        {"type": "disease_id", "value": 182}
      ],
      "tests": ["transvajinal USG", "endometrial biyopsi"]
    },
    {
      "id": 99,
      "name": "Over Kanseri",
      "icd10": "C56",
      "symptom_ids": [398, 399, 400],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 183},
        {"type": "disease_id", "value": 184}
      ],
      "tests": ["CA-125", "pelvik USG", "BT"]
    },
    {
      "id": 100,
      "name": "Akciğer Kanseri",
      "icd10": "C34.9",
      "symptom_ids": [401, 402, 403, 404],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 25}
      ],
      "tests": ["akciğer grafisi", "BT", "bronkoskopi", "biyopsi"]
    }, /////////////////////////////////////////////////////////////////////////////
    
    {
      "id": 101,
      "name": "Prostat Kanseri",
      "icd10": "C61",
      "symptom_ids": [311, 312, 313],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 74},
        {"type": "disease_id", "value": 147}
      ],
      "tests": ["prostat spesifik antijen (PSA)", "prostat biyopsisi", "pelvik MR"]
    },
    {
      "id": 102,
      "name": "Rheumatoid Artrit",
      "icd10": "M06.9",
      "symptom_ids": [314, 315, 316, 317, 318],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 148},
        {"type": "disease_id", "value": 149},
        {"type": "disease_id", "value": 150}
      ],
      "tests": ["RF", "anti-CCP", "ESH", "CRP", "el bileği el grafisi"]
    },
    {
      "id": 103,
      "name": "Osteoartrit",
      "icd10": "M19.9",
      "symptom_ids": [319, 320, 321],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 76},
        {"type": "disease_id", "value": 151}
      ],
      "tests": ["eklem grafisi"]
    },
    {
      "id": 104,
      "name": "Sistemik Lupus Eritematozus",
      "icd10": "M32.9",
      "symptom_ids": [322, 323, 324, 325, 326],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 76},
        {"type": "disease_id", "value": 152},
        {"type": "disease_id", "value": 153}
      ],
      "tests": ["ANA", "anti-dsDNA", "C3/C4", "idrar analizi"]
    },
    {
      "id": 105,
      "name": "Gut",
      "icd10": "M10.9",
      "symptom_ids": [327, 328, 329],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 154},
        {"type": "disease_id", "value": 155}
      ],
      "tests": ["serum ürik asit", "eklem sıvısı kristal analizi"]
    },
    {
      "id": 106,
      "name": "Demir Eksikliği Anemisi",
      "icd10": "D50.9",
      "symptom_ids": [330, 331, 332, 333],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 81},
        {"type": "disease_id", "value": 156}
      ],
      "tests": ["hemoglobin", "MCV", "serum ferritin", "serum demir", "TDBK"]
    },
    {
      "id": 107,
      "name": "Megaloblastik Anemi",
      "icd10": "D51.9",
      "symptom_ids": [334, 335, 336],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 80},
        {"type": "disease_id", "value": 157}
      ],
      "tests": ["B12 vitamini", "folik asit", "periferik yayma"]
    },
    {
      "id": 108,
      "name": "Akut Lösemi",
      "icd10": "C91.0",
      "symptom_ids": [337, 338, 339, 340],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 158},
        {"type": "disease_id", "value": 159}
      ],
      "tests": ["tam kan sayımı", "periferik yayma", "bone marrow aspirasyonu"]
    },
    {
      "id": 109,
      "name": "Kronik Miyelositer Lösemi",
      "icd10": "C92.1",
      "symptom_ids": [341, 342, 343],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 82},
        {"type": "disease_id", "value": 160}
      ],
      "tests": ["tam kan sayımı", "periferik yayma", "Philadelphia kromozomu"]
    },
    {
      "id": 110,
      "name": "Lenfoma",
      "icd10": "C85.9",
      "symptom_ids": [344, 345, 346, 347],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 82},
        {"type": "disease_id", "value": 161}
      ],
      "tests": ["lenf nodu biyopsisi", "LDH", "BT"]
    },
    {
      "id": 111,
      "name": "Multiple Myelom",
      "icd10": "C90.0",
      "symptom_ids": [348, 349, 350, 351],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 162},
        {"type": "disease_id", "value": 163}
      ],
      "tests": ["serum protein elektroforezi", "immünofiksasyon", "iskelet grafisi"]
    },
    {
      "id": 112,
      "name": "Akut Apandisit",
      "icd10": "K35.8",
      "symptom_ids": [352, 353, 354, 355],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 164},
        {"type": "disease_id", "value": 165},
        {"type": "disease_id", "value": 166}
      ],
      "tests": ["tam kan sayımı", "abdominal USG", "BT"]
    },
    {
      "id": 113,
      "name": "Divertikülit",
      "icd10": "K57.9",
      "symptom_ids": [356, 357, 358],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 86},
        {"type": "disease_id", "value": 167}
      ],
      "tests": ["abdominal BT"]
    },
    {
      "id": 114,
      "name": "İnflamatuar Bağırsak Hastalığı",
      "icd10": "K52.9",
      "symptom_ids": [359, 360, 361, 362],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 46},
        {"type": "disease_id", "value": 168}
      ],
      "tests": ["kolonoskopi", "kalprotektin", "CRP"]
    },
    {
      "id": 115,
      "name": "Karaciğer Sirozu",
      "icd10": "K74.6",
      "symptom_ids": [363, 364, 365, 366, 367],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 169},
        {"type": "disease_id", "value": 170}
      ],
      "tests": ["AST", "ALT", "albumin", "protrombin zamanı", "karaciğer USG"]
    },
    {
      "id": 116,
      "name": "Kolesistit",
      "icd10": "K81.9",
      "symptom_ids": [368, 369, 370, 371],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 171},
        {"type": "disease_id", "value": 172}
      ],
      "tests": ["abdominal USG", "tam kan sayımı", "CRP"]
    },
    {
      "id": 117,
      "name": "Pankeatitis",
      "icd10": "K85.9",
      "symptom_ids": [372, 373, 374, 375],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 173},
        {"type": "disease_id", "value": 174}
      ],
      "tests": ["amilaz", "lipaz", "abdominal USG", "BT"]
    },
    {
      "id": 118,
      "name": "Peptik Ülser Perforasyonu",
      "icd10": "K27.1",
      "symptom_ids": [376, 377, 378],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 86},
        {"type": "disease_id", "value": 91}
      ],
      "tests": ["direkt batın grafisi", "BT"]
    },
    {
      "id": 119,
      "name": "İnce Barsak Obstrüksiyonu",
      "icd10": "K56.6",
      "symptom_ids": [379, 380, 381, 382],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 175},
        {"type": "disease_id", "value": 176}
      ],
      "tests": ["direkt batın grafisi", "BT"]
    },
    {
      "id": 120,
      "name": "Kolon Obstrüksiyonu",
      "icd10": "K56.6",
      "symptom_ids": [383, 384, 385],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 93},
        {"type": "disease_id", "value": 177}
      ],
      "tests": ["kolonoskopi", "BT"]
    },
    {
      "id": 121,
      "name": "Kolon Kanseri",
      "icd10": "C18.9",
      "symptom_ids": [386, 387, 388, 389],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 46},
        {"type": "disease_id", "value": 88}
      ],
      "tests": ["kolonoskopi", "CEA", "BT"]
    },
    {
      "id": 122,
      "name": "Meme Kanseri",
      "icd10": "C50.9",
      "symptom_ids": [390, 391, 392],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 178},
        {"type": "disease_id", "value": 179}
      ],
      "tests": ["mammografi", "USG", "biyopsi"]
    },
    {
      "id": 123,
      "name": "Serviks Kanseri",
      "icd10": "C53.9",
      "symptom_ids": [393, 394, 395],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 180},
        {"type": "disease_id", "value": 181}
      ],
      "tests": ["pap smear", "kolposkopi", "biyopsi"]
    },
    {
      "id": 124,
      "name": "Endometriyal Kanser",
      "icd10": "C54.1",
      "symptom_ids": [396, 397],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 31},
        {"type": "disease_id", "value": 182}
      ],
      "tests": ["transvajinal USG", "endometrial biyopsi"]
    },
    {
      "id": 125,
      "name": "Over Kanseri",
      "icd10": "C56",
      "symptom_ids": [398, 399, 400],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 183},
        {"type": "disease_id", "value": 184}
      ],
      "tests": ["CA-125", "pelvik USG", "BT"]
    },
    {
      "id": 126,
      "name": "Akciğer Kanseri",
      "icd10": "C34.9",
      "symptom_ids": [401, 402, 403, 404],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 20},
        {"type": "disease_id", "value": 25}
      ],
      "tests": ["akciğer grafisi", "BT", "bronkoskopi", "biyopsi"]
    },
    {
      "id": 127,
      "name": "Boğmaca",
      "icd10": "A37.9",
      "symptom_ids": [405, 406, 407],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 185},
        {"type": "disease_id", "value": 186}
      ],
      "tests": []
    },
    {
      "id": 128,
      "name": "Bruselloz",
      "icd10": "A23.9",
      "symptom_ids": [408, 409, 410, 411],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 187},
        {"type": "disease_id", "value": 188}
      ],
      "tests": ["Wright testi", "Rose Bengal"]
    },
    {
      "id": 129,
      "name": "Genital Herpes",
      "icd10": "A60.0",
      "symptom_ids": [412, 413, 414],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 189},
        {"type": "disease_id", "value": 190}
      ],
      "tests": []
    },
    {
      "id": 130,
      "name": "Sifiliz",
      "icd10": "A51.0",
      "symptom_ids": [415, 416, 417],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 129},
        {"type": "disease_id", "value": 191}
      ],
      "tests": ["VDRL", "RPR"]
    },
    {
      "id": 131,
      "name": "Bakteriyel Vajinoz",
      "icd10": "N76.0",
      "symptom_ids": [418, 419, 420],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 192},
        {"type": "disease_id", "value": 193}
      ],
      "tests": []
    },
    {
      "id": 132,
      "name": "Trichomoniasis",
      "icd10": "A59.0",
      "symptom_ids": [421, 422, 423],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 131},
        {"type": "disease_id", "value": 193}
      ],
      "tests": []
    },
    {
      "id": 133,
      "name": "Pelvik İnflamatuvar Hastalık",
      "icd10": "N73.9",
      "symptom_ids": [424, 425, 426],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 194},
        {"type": "disease_id", "value": 195}
      ],
      "tests": []
    },
    {
      "id": 134,
      "name": "Genital Siğil",
      "icd10": "A63.0",
      "symptom_ids": [427, 428],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 196},
        {"type": "disease_id", "value": 197}
      ],
      "tests": []
    },
    {
      "id": 135,
      "name": "Difteri",
      "icd10": "A36.9",
      "symptom_ids": [429, 430, 431],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 198},
        {"type": "disease_id", "value": 199}
      ],
      "tests": []
    },
    {
      "id": 136,
      "name": "Amibiyazis",
      "icd10": "A06.9",
      "symptom_ids": [432, 433],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 200},
        {"type": "disease_id", "value": 201}
      ],
      "tests": ["dışkı mikroskobik inceleme"]
    },
    {
      "id": 137,
      "name": "Giardiyazis",
      "icd10": "A07.1",
      "symptom_ids": [434, 435],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 136},
        {"type": "disease_id", "value": 202}
      ],
      "tests": ["dışkı mikroskobik inceleme"]
    },
    {
      "id": 138,
      "name": "Enterobiyazis",
      "icd10": "B80",
      "symptom_ids": [436],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 203},
        {"type": "disease_id", "value": 204}
      ],
      "tests": ["selofan bant yöntemi"]
    },
    {
      "id": 139,
      "name": "Askaris",
      "icd10": "B77.9",
      "symptom_ids": [437, 438],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 205},
        {"type": "disease_id", "value": 206}
      ],
      "tests": ["dışkı mikroskobik inceleme"]
    },
    {
      "id": 140,
      "name": "Kancalı Kurt Enfeksiyonu",
      "icd10": "B76.9",
      "symptom_ids": [439, 440],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 139},
        {"type": "disease_id", "value": 207}
      ],
      "tests": ["dışkı mikroskobik inceleme"]
    },
    {
      "id": 141,
      "name": "Tenyazis",
      "icd10": "B68.9",
      "symptom_ids": [441],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 208},
        {"type": "disease_id", "value": 209}
      ],
      "tests": ["dışkı mikroskobik inceleme"]
    },
    {
      "id": 142,
      "name": "Kistik Ekinokokkoz",
      "icd10": "B67.9",
      "symptom_ids": [442, 443],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 210},
        {"type": "disease_id", "value": 211}
      ],
      "tests": ["USG", "seroloji"]
    },
    {
      "id": 143,
      "name": "Alveoler Ekinokokkoz",
      "icd10": "B67.7",
      "symptom_ids": [444, 445],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 142},
        {"type": "disease_id", "value": 212}
      ],
      "tests": ["USG", "seroloji"]
    },
    {
      "id": 144,
      "name": "Toksoplazmoz",
      "icd10": "B58.9",
      "symptom_ids": [446, 447],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 213},
        {"type": "disease_id", "value": 214}
      ],
      "tests": ["seroloji"]
    },
    {
      "id": 145,
      "name": "Toksokara Enfeksiyonları",
      "icd10": "B83.0",
      "symptom_ids": [448, 449],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 215},
        {"type": "disease_id", "value": 216}
      ],
      "tests": ["seroloji"]
    },
    {
      "id": 146,
      "name": "Hayvan Isırığı",
      "icd10": "W54-W55",
      "symptom_ids": [450, 451],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 217},
        {"type": "disease_id", "value": 218}
      ],
      "tests": []
    },
    {
      "id": 147,
      "name": "Kuduz",
      "icd10": "A82.9",
      "symptom_ids": [452, 453, 454],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 219},
        {"type": "disease_id", "value": 220}
      ],
      "tests": []
    },
    {
      "id": 148,
      "name": "Kedi Tırmığı Hastalığı",
      "icd10": "A28.1",
      "symptom_ids": [455, 456],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 221},
        {"type": "disease_id", "value": 222}
      ],
      "tests": []
    },
    {
      "id": 149,
      "name": "Şarbon",
      "icd10": "A22.9",
      "symptom_ids": [457, 458],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 223},
        {"type": "disease_id", "value": 224}
      ],
      "tests": ["Gram boyama", "kültür"]
    },
    {
      "id": 150,
      "name": "Tularemi",
      "icd10": "A21.9",
      "symptom_ids": [459, 460],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 225},
        {"type": "disease_id", "value": 226}
      ],
      "tests": ["seroloji", "kültür"]
    },
    {
      "id": 151,
      "name": "Leptospiroz",
      "icd10": "A27.9",
      "symptom_ids": [461, 462],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 227},
        {"type": "disease_id", "value": 228}
      ],
      "tests": ["seroloji"]
    },
    {
      "id": 152,
      "name": "Lyme Hastalığı",
      "icd10": "A69.2",
      "symptom_ids": [463, 464],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 229},
        {"type": "disease_id", "value": 230}
      ],
      "tests": ["seroloji"]
    },
    {
      "id": 153,
      "name": "Alkol Bağımlılığı",
      "icd10": "F10.2",
      "symptom_ids": [465, 466, 467],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 231},
        {"type": "disease_id", "value": 232}
      ],
      "tests": []
    },
    {
      "id": 154,
      "name": "Alkol Kötüye Kullanımı",
      "icd10": "F10.1",
      "symptom_ids": [468, 469],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 153},
        {"type": "disease_id", "value": 233}
      ],
      "tests": []
    },
    {
      "id": 155,
      "name": "Deliryum Tremens",
      "icd10": "F10.4",
      "symptom_ids": [470, 471, 472],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 234},
        {"type": "disease_id", "value": 235}
      ],
      "tests": []
    },
    {
      "id": 156,
      "name": "Yaygın Anksiyete Bozukluğu",
      "icd10": "F41.1",
      "symptom_ids": [473, 474, 475],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 62},
        {"type": "disease_id", "value": 236}
      ],
      "tests": []
    },
    {
      "id": 157,
      "name": "Panik Bozukluğu",
      "icd10": "F41.0",
      "symptom_ids": [476, 477, 478],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 156},
        {"type": "disease_id", "value": 237}
      ],
      "tests": []
    },
    {
      "id": 158,
      "name": "Obsesif Kompulsif Bozukluk",
      "icd10": "F42",
      "symptom_ids": [479, 480],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 157},
        {"type": "disease_id", "value": 238}
      ],
      "tests": []
    },
    {
      "id": 159,
      "name": "Fobik Bozukluk",
      "icd10": "F40.9",
      "symptom_ids": [481, 482],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 158},
        {"type": "disease_id", "value": 239}
      ],
      "tests": []
    },
    {
      "id": 160,
      "name": "Travma Sonrası Stres Bozukluğu",
      "icd10": "F43.1",
      "symptom_ids": [483, 484],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 159},
        {"type": "disease_id", "value": 240}
      ],
      "tests": []
    },
    {
      "id": 161,
      "name": "Hipokondriyazis",
      "icd10": "F45.2",
      "symptom_ids": [485, 486],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 62},
        {"type": "disease_id", "value": 241}
      ],
      "tests": []
    },
    {
      "id": 162,
      "name": "Somatizasyon Bozukluğu",
      "icd10": "F45.0",
      "symptom_ids": [487, 488],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 161},
        {"type": "disease_id", "value": 242}
      ],
      "tests": []
    },
    {
      "id": 163,
      "name": "Psikojen Ağrı Bozukluğu",
      "icd10": "F45.4",
      "symptom_ids": [489, 490],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 162},
        {"type": "disease_id", "value": 243}
      ],
      "tests": []
    },
    {
      "id": 164,
      "name": "Konversiyon Bozukluğu",
      "icd10": "F44.4",
      "symptom_ids": [491, 492],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 163},
        {"type": "disease_id", "value": 244}
      ],
      "tests": []
    },
    {
      "id": 165,
      "name": "Beden Dismorfik Bozukluğu",
      "icd10": "F45.2",
      "symptom_ids": [493, 494],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 164},
        {"type": "disease_id", "value": 245}
      ],
      "tests": []
    },
    {
      "id": 166,
      "name": "Uykusuzluk",
      "icd10": "G47.0",
      "symptom_ids": [495, 496],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 62},
        {"type": "disease_id", "value": 246}
      ],
      "tests": []
    },
    {
      "id": 167,
      "name": "Uyku Apne Sendromu",
      "icd10": "G47.3",
      "symptom_ids": [497, 498],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 166},
        {"type": "disease_id", "value": 247}
      ],
      "tests": []
    },
    {
      "id": 168,
      "name": "Bel Ağrısı",
      "icd10": "M54.5",
      "symptom_ids": [499, 500, 501],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 248},
        {"type": "disease_id", "value": 249}
      ],
      "tests": []
    },
    {
      "id": 169,
      "name": "Osteoporoz",
      "icd10": "M81.0",
      "symptom_ids": [502, 503, 504],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 250},
        {"type": "disease_id", "value": 251}
      ],
      "tests": ["kemik mineral yoğunluğu"]
    },
    {
      "id": 170,
      "name": "Obesite",
      "icd10": "E66.9",
      "symptom_ids": [505, 506],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 252},
        {"type": "disease_id", "value": 253}
      ],
      "tests": ["VKİ", "bel çevresi"]
    },
    {
      "id": 171,
      "name": "Protein-Enerji Malnütrisyonu",
      "icd10": "E46",
      "symptom_ids": [507, 508],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 254},
        {"type": "disease_id", "value": 255}
      ],
      "tests": ["antropometrik ölçümler"]
    },
    {
      "id": 172,
      "name": "Kanserli Hasta Yaklaşımı",
      "icd10": "Z51.8",
      "symptom_ids": [509, 510],
      "differential_diagnosis": [],
      "tests": []
    },
    {
      "id": 173,
      "name": "Sigarayı Bırakma",
      "icd10": "Z72.0",
      "symptom_ids": [511, 512],
      "differential_diagnosis": [],
      "tests": []
    },
    {
      "id": 174,
      "name": "Aşı Takvimi",
      "icd10": "Z23",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": []
    },
    {
  "id": 175,
  "name": "Akut Alkol Zehirlenmesi",
  "icd10": "F10.0",
  "symptom_ids": [513, 514, 515, 516],
  "differential_diagnosis": [
    {"type": "disease_id", "value": 29},
    {"type": "disease_id", "value": 44},
    {"type": "disease_id", "value": 155}
  ],
  "tests": ["kan alkol düzeyi", "glukoz", "elektrolitler"]
},
{
  "id": 176,
  "name": "Alkol Yoksunluğu Sendromu",
  "icd10": "F10.3",
  "symptom_ids": [517, 518, 519, 520],
  "differential_diagnosis": [
    {"type": "disease_id", "value": 155},
    {"type": "disease_id", "value": 63},
    {"type": "disease_id", "value": 156}
  ],
  "tests": []
},
{
  "id": 177,
  "name": "Himenolepiyazis",
  "icd10": "B68.0",
  "symptom_ids": [521, 522, 523],
  "differential_diagnosis": [
    {"type": "disease_id", "value": 139},
    {"type": "disease_id", "value": 137},
    {"type": "disease_id", "value": 141}
  ],
  "tests": ["dışkı mikroskobik inceleme"]
},
{
  "id": 178,
  "name": "Madde Kullanımına Bağlı Anksiyete Bozukluğu",
  "icd10": "F19.120",
  "symptom_ids": [524, 525, 526],
  "differential_diagnosis": [
    {"type": "disease_id", "value": 63},
    {"type": "disease_id", "value": 156},
    {"type": "disease_id", "value": 157}
  ],
  "tests": []
},
{
  "id": 179,
  "name": "Somatoform Bozukluklar",
  "icd10": "F45.9",
  "symptom_ids": [527, 528],
  "differential_diagnosis": [
    {"type": "disease_id", "value": 161},
    {"type": "disease_id", "value": 162},
    {"type": "disease_id", "value": 163},
    {"type": "disease_id", "value": 164}
  ],
  "tests": []
},
{
  "id": 180,
  "name": "Vulvovajinal Kandidiyaz",
  "icd10": "A63.0",
  "symptom_ids": [529, 530, 531],
  "differential_diagnosis": [
    {"type": "disease_id", "value": 131},
    {"type": "disease_id", "value": 132},
    {"type": "disease_id", "value": 10}
  ],
  "tests": ["vajinal pH ölçümü", "KOH preparatı"]
}
  
  
  ],
  "symptoms": [
    {
      "id": 1,
      "original_text": "komedon",
      "synonyms": ["açık komedon", "siyah nokta", "kapalı komedon", "beyaz nokta"],
      "category": "Dermatoloji"
    },
    {
      "id": 2,
      "original_text": "papül",
      "synonyms": ["püstül", "kist", "nodül"],
      "category": "Dermatoloji"
    },
    {
      "id": 3,
      "original_text": "enflamatuvar lezyon",
      "synonyms": ["eritem", "şişlik"],
      "category": "Dermatoloji"
    },
    {
      "id": 4,
      "original_text": "kaşıntı",
      "synonyms": ["deri tahrişi"],
      "category": "Dermatoloji"
    },
    {
      "id": 5,
      "original_text": "postenflamatuvar hiperpigmentasyon",
      "synonyms": ["leke"],
      "category": "Dermatoloji"
    },
    {
      "id": 6,
      "original_text": "skar",
      "synonyms": ["iz", "kalıcı doku hasarı"],
      "category": "Dermatoloji"
    },
    {
      "id": 7,
      "original_text": "kıl kökü enfeksiyonu",
      "synonyms": ["saçlı deri mantar enfeksiyonu"],
      "category": "Dermatoloji"
    },
    {
      "id": 8,
      "original_text": "kırık ve cansız kıllar",
      "synonyms": ["ince kepeklenme", "lokal alopesi"],
      "category": "Dermatoloji"
    },
    {
      "id": 9,
      "original_text": "iltihabi değişiklikler",
      "synonyms": ["püstüler", "nodüler lezyonlar", "kerion celsi"],
      "category": "Dermatoloji"
    },
    {
      "id": 10,
      "original_text": "kalıcı alopesi",
      "synonyms": ["saç dökülmesi"],
      "category": "Dermatoloji"
    },
    {
      "id": 11,
      "original_text": "çanak biçiminde sarı-yeşil krut",
      "synonyms": ["skutula", "godet", "kötü koku"],
      "category": "Dermatoloji"
    },
    {
      "id": 12,
      "original_text": "atrofik skatris",
      "synonyms": ["cılız gri-beyaz saç"],
      "category": "Dermatoloji"
    },
    {
      "id": 13,
      "original_text": "vezikülobülloz lezyon",
      "synonyms": ["sulantılı", "masere", "skuamlı"],
      "category": "Dermatoloji"
    },
    {
      "id": 14,
      "original_text": "ellerde de görülebilir",
      "synonyms": ["tinea manum"],
      "category": "Dermatoloji"
    },
    {
      "id": 15,
      "original_text": "keskin sınırlı eritemli-skuamlı lezyon",
      "synonyms": ["ortadan iyileşen", "çevreye doğru genişleyen"],
      "category": "Dermatoloji"
    },
    {
      "id": 16,
      "original_text": "tırnakta sarı–kahverengi renk değişikliği",
      "synonyms": ["subungual hiperkeratoz", "kolay kırılma"],
      "category": "Dermatoloji"
    },
    {
      "id": 17,
      "original_text": "sütlü kahverengi makül",
      "synonyms": ["hipopigmente lezyon", "güneş sonrası beyazlaşma"],
      "category": "Dermatoloji"
    },
    {
      "id": 18,
      "original_text": "kaşıntılı egzema",
      "synonyms": ["eritemli", "veziküllü", "sulantılı lezyon"],
      "category": "Dermatoloji"
    },
    {
      "id": 19,
      "original_text": "kuru deri",
      "synonyms": ["hiperkeratoz", "fissür"],
      "category": "Dermatoloji"
    },
    {
      "id": 20,
      "original_text": "ailede atopi öyküsü",
      "synonyms": ["alerjik rinit", "astım"],
      "category": "Dermatoloji"
    },
    {
      "id": 21,
      "original_text": "tipik dağılım",
      "synonyms": ["yüz", "ekstremitelerin dış kısımları", "boyun", "antekübital", "popliteal"],
      "category": "Dermatoloji"
    },
    {
      "id": 22,
      "original_text": "yoğun kaşıntı",
      "synonyms": ["deri kuruluğu"],
      "category": "Dermatoloji"
    },
    {
      "id": 23,
      "original_text": "temas sonrası şiddetli kaşıntı",
      "synonyms": ["eritem", "vezikül", "sulantılı lezyon"],
      "category": "Dermatoloji"
    },
    {
      "id": 24,
      "original_text": "kronik irritasyon",
      "synonyms": ["sert deri", "fissürlü", "kurutlu görünüm"],
      "category": "Dermatoloji"
    },
    {
      "id": 25,
      "original_text": "eritem interdigitalis",
      "synonyms": ["beyaz kabuklar", "sulantılı plaklar"],
      "category": "Dermatoloji"
    },
    {
      "id": 26,
      "original_text": "intertrigo",
      "synonyms": ["keskin sınırlı eritemli plak", "eksüdatif"],
      "category": "Dermatoloji"
    },
    {
      "id": 27,
      "original_text": "paronişi",
      "synonyms": ["tırnak çevresi şişlik", "ağrı"],
      "category": "Dermatoloji"
    },
    {
      "id": 28,
      "original_text": "perianal kandidiyaz",
      "synonyms": ["beyaz masere", "kaşıntılı lezyon"],
      "category": "Dermatoloji"
    },
    {
      "id": 29,
      "original_text": "ağız içinde beyaz plaklar",
      "synonyms": ["pamukçuk", "glossit"],
      "category": "Dermatoloji"
    },
    {
      "id": 30,
      "original_text": "kaşıntılı papül ve plaklar",
      "synonyms": ["eritem", "ödem", "basınca solan"],
      "category": "Dermatoloji"
    },
    {
      "id": 31,
      "original_text": "anjiyoödem",
      "synonyms": ["dil ve dudak şişliği", "siyanoz"],
      "category": "Dermatoloji"
    },
    {
      "id": 32,
      "original_text": "dispne",
      "synonyms": ["boğulma hissi", "vizing"],
      "category": "Dermatoloji"
    },
    {
      "id": 33,
      "original_text": "baş dönmesi",
      "synonyms": ["bayılma", "hipotansiyon"],
      "category": "Dermatoloji"
    },
    {
      "id": 34,
      "original_text": "gastrointestinal yakınma",
      "synonyms": ["bulantı", "kusma", "karın ağrısı", "ishal"],
      "category": "Dermatoloji"
    },
    {
      "id": 35,
      "original_text": "flushing",
      "synonyms": ["yüzde kızarıklık"],
      "category": "Dermatoloji"
    },
    {
      "id": 36,
      "original_text": "gezici poliartrit",
      "synonyms": ["diz", "ayak bileği", "dirsek", "el bileği"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 37,
      "original_text": "kardit",
      "synonyms": ["taşikardi", "üfürüm", "perikardit", "kardiyomegali", "kalp yetmezliği"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 38,
      "original_text": "eritema marginatum",
      "synonyms": ["gövde ve kolların iç yüzünde"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 39,
      "original_text": "deri altı nodüller",
      "synonyms": ["ekstansör yüzlerde", "tendon kılıflarına yapışık"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 40,
      "original_text": "Sydenham koresi",
      "synonyms": ["kas hareket bozukluğu"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 41,
      "original_text": "eforla artan baskı tarzında ağrı",
      "synonyms": ["dinlenince geçen", "nitrogliserinle azalan"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 42,
      "original_text": "prekordiyum ve sternum arkasında ağrı",
      "synonyms": ["omuz", "kol", "boyun", "çeneye yayılma"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 43,
      "original_text": "dispne",
      "synonyms": ["efor dispnesi", "psikojenik eşdeğer"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 44,
      "original_text": "terleme",
      "synonyms": ["anksiyete", "soluk görünüm"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 45,
      "original_text": "asemptomatik hiperlipidemi",
      "synonyms": ["kolesterol yüksekliği", "trigliserid yüksekliği"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 46,
      "original_text": "sempatomsuz hipertansiyon",
      "synonyms": ["yüksek kan basıncı"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 47,
      "original_text": "nefes darlığı",
      "synonyms": ["ortopne", "paroksismal noktürnal dispne"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 48,
      "original_text": "halsizlik",
      "synonyms": ["egzersiz intoleransı"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 49,
      "original_text": "ödem",
      "synonyms": ["pretibial ödem", "periferik ödem"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 50,
      "original_text": "S3 kalp sesi",
      "synonyms": ["gallop ritmi"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 51,
      "original_text": "akciğerde raler",
      "synonyms": ["krepitan raler"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 52,
      "original_text": "boyun venöz dolgunluğu",
      "synonyms": ["juguler dolgunluk"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 53,
      "original_text": "hepatomegali",
      "synonyms": ["karaciğer büyümesi"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 54,
      "original_text": "ani başlayan şiddetli göğüs ağrısı",
      "synonyms": ["ölüm korkusu", "soğuk terleme"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 55,
      "original_text": "yanma tarzında epigastrik ağrı",
      "synonyms": ["yiyecek ve antiasidlerle azalan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 56,
      "original_text": "gece uykudan uyandıran ağrı",
      "synonyms": ["pirozis"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 57,
      "original_text": "gastrointestinal kanama",
      "synonyms": ["melena", "hematemez", "anemi"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 58,
      "original_text": "öksürük",
      "synonyms": ["ateş", "kilo kaybı", "gece terlemesi", "halsizlik", "iştahsızlık"],
      "category": "Solunum"
    },
    {
      "id": 59,
      "original_text": "dispne",
      "synonyms": ["konuşma zorluğu", "yardımcı solunum kasları katılımı"],
      "category": "Solunum"
    },
    {
      "id": 60,
      "original_text": "vizing",
      "synonyms": ["hırıltılı solunum"],
      "category": "Solunum"
    },
    {
      "id": 61,
      "original_text": "solunum sayısı artışı",
      "synonyms": [">30/dk"],
      "category": "Solunum"
    },
    {
      "id": 62,
      "original_text": "nabız artışı",
      "synonyms": [">120/dk"],
      "category": "Solunum"
    },
    {
      "id": 63,
      "original_text": "PEF düşüklüğü",
      "synonyms": ["< %60"],
      "category": "Solunum"
    },
    {
      "id": 64,
      "original_text": "ateş",
      "synonyms": ["huzursuzluk", "iştahsızlık", "baş ağrısı", "karnağrısı", "ememe"],
      "category": "Enfeksiyon"
    },
    {
      "id": 65,
      "original_text": "takipne",
      "synonyms": ["solunum sayısında artış"],
      "category": "Enfeksiyon"
    },
    {
      "id": 66,
      "original_text": "baş ağrısı",
      "synonyms": ["ense sertliği", "konvülsiyon", "bilinç bulanıklığı"],
      "category": "Nöroloji"
    },
    {
      "id": 67,
      "original_text": "gözde kızarıklık",
      "synonyms": ["fotofobi", "konjonktivit"],
      "category": "Nöroloji"
    },
    {
      "id": 68,
      "original_text": "makülopapüler döküntü",
      "synonyms": ["birleşme özelliği", "kahverengileşme"],
      "category": "Nöroloji"
    },
    {
      "id": 69,
      "original_text": "bilinç değişikliği",
      "synonyms": ["uyanıklıkta azalma", "koma"],
      "category": "Nöroloji"
    },
    {
      "id": 70,
      "original_text": "nöbet",
      "synonyms": ["gözde kayma", "dudaklarda morarma", "apne", "idrar kaçırma"],
      "category": "Nöroloji"
    },
    {
      "id": 71,
      "original_text": "anormal vajinal kanama",
      "synonyms": ["polimenore", "oligomenore", "menoraji", "metroraji"],
      "category": "Jinekoloji"
    },
    {
      "id": 72,
      "original_text": "ağrılı adet",
      "synonyms": ["kramp tarzı pelvik ağrı", "baş ağrısı", "bulantı", "kusma", "ishal"],
      "category": "Jinekoloji"
    },
    {
      "id": 73,
      "original_text": "vazomotor yakınmalar",
      "synonyms": ["ateş basması", "terleme", "çarpıntı"],
      "category": "Jinekoloji"
    },
    {
      "id": 74,
      "original_text": "psikosomatik yakınmalar",
      "synonyms": ["uyku düzensizlikleri", "depresyon", "sinirlilik"],
      "category": "Jinekoloji"
    },
    {
      "id": 75,
      "original_text": "genitoüriner yakınmalar",
      "synonyms": ["vajinal kuruluk", "cinsel yaşam zorluğu", "idrar kaçırma"],
      "category": "Jinekoloji"
    },
    {
      "id": 76,
      "original_text": "deri kuruluğu",
      "synonyms": ["saç ve tırnak kırılması"],
      "category": "Jinekoloji"
    },
    {
      "id": 77,
      "original_text": "osteoporoz",
      "synonyms": ["kemik erimesi"],
      "category": "Jinekoloji"
    },
    {
      "id": 78,
      "original_text": "kardiovasküler hastalık riski artışı",
      "synonyms": ["kolesterol yükselmesi", "HDL düşmesi"],
      "category": "Jinekoloji"
    }, 
    
    {
      "id": 79,
      "original_text": "hipertansiyon",
      "synonyms": ["yüksek tansiyon", "kan basıncı yüksekliği"],
      "category": "Jinekoloji"
    },
    {
      "id": 80,
      "original_text": "proteinüri",
      "synonyms": ["idrarda protein"],
      "category": "Jinekoloji"
    },
    {
      "id": 81,
      "original_text": "ödem",
      "synonyms": ["bacak şişliği", "pretibial ödem"],
      "category": "Jinekoloji"
    },
    {
      "id": 82,
      "original_text": "baş ağrısı",
      "synonyms": ["göz arkası ağrı", "sert baş ağrısı"],
      "category": "Jinekoloji"
    },
    {
      "id": 83,
      "original_text": "görme bozukluğu",
      "synonyms": ["bulanık görme", "skotom"],
      "category": "Jinekoloji"
    },
    {
      "id": 84,
      "original_text": "poliüri",
      "synonyms": ["aşırı idrar çıkma"],
      "category": "Endokrinoloji"
    },
    {
      "id": 85,
      "original_text": "polidipsi",
      "synonyms": ["aşırı susama"],
      "category": "Endokrinoloji"
    },
    {
      "id": 86,
      "original_text": "kilo kaybı",
      "synonyms": ["kas kaybı", "iştahsızlık"],
      "category": "Endokrinoloji"
    },
    {
      "id": 87,
      "original_text": "yorgunluk",
      "synonyms": ["halsizlik", "enerji düşüklüğü"],
      "category": "Endokrinoloji"
    },
    {
      "id": 88,
      "original_text": "bulantı",
      "synonyms": ["kusma isteği"],
      "category": "Endokrinoloji"
    },
    {
      "id": 89,
      "original_text": "terleme",
      "synonyms": ["gece terlemesi"],
      "category": "Endokrinoloji"
    },
    {
      "id": 90,
      "original_text": "palpitasyon",
      "synonyms": ["çarpıntı", "kalp atışlarını hissetme"],
      "category": "Endokrinoloji"
    },
    {
      "id": 91,
      "original_text": "titreme",
      "synonyms": ["ellerde titreme"],
      "category": "Endokrinoloji"
    },
    {
      "id": 92,
      "original_text": "kaşıntı",
      "synonyms": ["deride kaşıntı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 93,
      "original_text": "deri kuruluğu",
      "synonyms": ["pullanma"],
      "category": "Endokrinoloji"
    },
    {
      "id": 94,
      "original_text": "saç dökülmesi",
      "synonyms": ["alopecia"],
      "category": "Endokrinoloji"
    },
    {
      "id": 95,
      "original_text": "kabızlık",
      "synonyms": ["konstipasyon"],
      "category": "Endokrinoloji"
    },
    {
      "id": 96,
      "original_text": "soğuk intoleransı",
      "synonyms": ["soğuğa duyarlılık"],
      "category": "Endokrinoloji"
    },
    {
      "id": 97,
      "original_text": "depresyon",
      "synonyms": ["moral bozukluğu"],
      "category": "Endokrinoloji"
    },
    {
      "id": 98,
      "original_text": "menstrüel düzensizlik",
      "synonyms": ["adet gecikmesi", "oligomenore"],
      "category": "Endokrinoloji"
    },
    {
      "id": 99,
      "original_text": "infertilite",
      "synonyms": ["kısırlık"],
      "category": "Endokrinoloji"
    },
    {
      "id": 100,
      "original_text": "galaktore",
      "synonyms": ["süt gelmesi"],
      "category": "Endokrinoloji"
    },
    {
      "id": 101,
      "original_text": "goruntu bozukluğu",
      "synonyms": ["diplopi", "görme bulanıklığı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 102,
      "original_text": "exoftalmus",
      "synonyms": ["göz fıtığı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 103,
      "original_text": "pretibial miksodem",
      "synonyms": ["deri kalınlaşması"],
      "category": "Endokrinoloji"
    },
    {
      "id": 104,
      "original_text": "taşikardi",
      "synonyms": ["hızlı nabız"],
      "category": "Endokrinoloji"
    },
    {
      "id": 105,
      "original_text": "ateş",
      "synonyms": ["vücut ısısı artışı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 106,
      "original_text": "ishal",
      "synonyms": ["sulu dışkılama"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 107,
      "original_text": "kusma",
      "synonyms": ["emetus"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 108,
      "original_text": "karın ağrısı",
      "synonyms": ["abdominal ağrı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 109,
      "original_text": "rektal kanama",
      "synonyms": ["dışkıda kan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 110,
      "original_text": "melena",
      "synonyms": ["siyah katran kıvamında dışkı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 111,
      "original_text": "hematemez",
      "synonyms": ["kustukta kan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 112,
      "original_text": "disfaji",
      "synonyms": ["yutma güçlüğü"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 113,
      "original_text": "dispepsi",
      "synonyms": ["mide rahatsızlığı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 114,
      "original_text": "anoreksi",
      "synonyms": ["iştahsızlık"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 115,
      "original_text": "sarılık",
      "synonyms": ["jandis", "sklera sarılığı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 116,
      "original_text": "pruritus",
      "synonyms": ["genel vücut kaşıntısı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 117,
      "original_text": "koyu idrar",
      "synonyms": ["çay rengi idrar"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 118,
      "original_text": "açlık hipoglisemisi",
      "synonyms": ["açlıkta düşük şeker"],
      "category": "Endokrinoloji"
    },
    {
      "id": 119,
      "original_text": "postprandial hipoglisemi",
      "synonyms": ["yemekten sonra düşük şeker"],
      "category": "Endokrinoloji"
    },
    {
      "id": 120,
      "original_text": "bilinç bulanıklığı",
      "synonyms": ["konfüzyon"],
      "category": "Nöroloji"
    },
    {
      "id": 121,
      "original_text": "konvülsiyon",
      "synonyms": ["nöbet"],
      "category": "Nöroloji"
    },
    {
      "id": 122,
      "original_text": "solunum yetmezliği",
      "synonyms": ["hipoksemi"],
      "category": "Solunum"
    },
    {
      "id": 123,
      "original_text": "ateş",
      "synonyms": ["vücut ısısı yükselmesi"],
      "category": "Enfeksiyon"
    },
    {
      "id": 124,
      "original_text": "öksürük",
      "synonyms": ["balgamlı öksürük"],
      "category": "Solunum"
    },
    {
      "id": 125,
      "original_text": "göğüs ağrısı",
      "synonyms": ["pleuritik ağrı"],
      "category": "Solunum"
    },
    {
      "id": 126,
      "original_text": "dispne",
      "synonyms": ["nefes darlığı"],
      "category": "Solunum"
    },
    {
      "id": 127,
      "original_text": "hemoptizi",
      "synonyms": ["balgamda kan"],
      "category": "Solunum"
    },
    {
      "id": 128,
      "original_text": "baş ağrısı",
      "synonyms": ["ensede baskı"],
      "category": "Nöroloji"
    },
    {
      "id": 129,
      "original_text": "ense sertliği",
      "synonyms": ["nukal rijidite"],
      "category": "Nöroloji"
    },
    {
      "id": 130,
      "original_text": "fotofobi",
      "synonyms": ["ışığa hassasiyet"],
      "category": "Nöroloji"
    },
    {
      "id": 131,
      "original_text": "nausea",
      "synonyms": ["mide bulantısı"],
      "category": "Nöroloji"
    },
    {
      "id": 132,
      "original_text": "vomiting",
      "synonyms": ["kusma"],
      "category": "Nöroloji"
    },
    {
      "id": 133,
      "original_text": "konfüzyon",
      "synonyms": ["zihinsel karışıklık"],
      "category": "Nöroloji"
    },
    {
      "id": 134,
      "original_text": "afazi",
      "synonyms": ["konuşma bozukluğu"],
      "category": "Nöroloji"
    },
    {
      "id": 135,
      "original_text": "parezi",
      "synonyms": ["kas zayıflığı"],
      "category": "Nöroloji"
    },
    {
      "id": 136,
      "original_text": "parestezi",
      "synonyms": ["karıncalanma"],
      "category": "Nöroloji"
    },
    {
      "id": 137,
      "original_text": "ataksi",
      "synonyms": ["denge bozukluğu"],
      "category": "Nöroloji"
    },
    {
      "id": 138,
      "original_text": "vertigo",
      "synonyms": ["baş dönmesi"],
      "category": "Nöroloji"
    },
    {
      "id": 139,
      "original_text": "işitme kaybı",
      "synonyms": ["duyma zorluğu"],
      "category": "Nöroloji"
    },
    {
      "id": 140,
      "original_text": "kulak çınlaması",
      "synonyms": ["tinitus"],
      "category": "Nöroloji"
    },
    {
      "id": 141,
      "original_text": "burun akıntısı",
      "synonyms": ["rinore"],
      "category": "Solunum"
    },
    {
      "id": 142,
      "original_text": "burun tıkanıklığı",
      "synonyms": ["nezle"],
      "category": "Solunum"
    },
    {
      "id": 143,
      "original_text": "boğaz ağrısı",
      "synonyms": ["farinks ağrısı"],
      "category": "Solunum"
    },
    {
      "id": 144,
      "original_text": "ses kısıklığı",
      "synonyms": ["disfoni"],
      "category": "Solunum"
    },
    {
      "id": 145,
      "original_text": "yutma ağrısı",
      "synonyms": ["odinofaji"],
      "category": "Solunum"
    },
    {
      "id": 146,
      "original_text": "ateş",
      "synonyms": ["febrilite"],
      "category": "Enfeksiyon"
    },
    {
      "id": 147,
      "original_text": "lenfadenopati",
      "synonyms": ["şişmiş lenf nodları"],
      "category": "Enfeksiyon"
    },
    {
      "id": 148,
      "original_text": "tonsiller ekzudat",
      "synonyms": ["bademciklerde beyaz plak"],
      "category": "Enfeksiyon"
    },
    {
      "id": 149,
      "original_text": "otalji",
      "synonyms": ["kulak ağrısı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 150,
      "original_text": "işitme kaybı",
      "synonyms": ["duyma azalması"],
      "category": "Enfeksiyon"
    },
    {
      "id": 151,
      "original_text": "otorre",
      "synonyms": ["kulaktan akıntı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 152,
      "original_text": "facial parezi",
      "synonyms": ["yüz felci"],
      "category": "Enfeksiyon"
    },
    {
      "id": 153,
      "original_text": "sinüs ağrısı",
      "synonyms": ["alın/yanak ağrısı"],
      "category": "Solunum"
    },
    {
      "id": 154,
      "original_text": "postnazal drip",
      "synonyms": ["arkaya akıntı"],
      "category": "Solunum"
    },
    {
      "id": 155,
      "original_text": "halitozis",
      "synonyms": ["ağız kokusu"],
      "category": "Solunum"
    },
    {
      "id": 156,
      "original_text": "kronik öksürük",
      "synonyms": ["3 haftadan uzun süren öksürük"],
      "category": "Solunum"
    },
    {
      "id": 157,
      "original_text": "balgam",
      "synonyms": ["ekspektorasyon"],
      "category": "Solunum"
    },
    {
      "id": 158,
      "original_text": "ateş",
      "synonyms": ["subfebrilite"],
      "category": "Enfeksiyon"
    },
    {
      "id": 159,
      "original_text": "kilo kaybı",
      "synonyms": ["kacheksi"],
      "category": "Onkoloji"
    },
    {
      "id": 160,
      "original_text": "hemoptizi",
      "synonyms": ["kanlı balgam"],
      "category": "Solunum"
    },
    {
      "id": 161,
      "original_text": "hipertansiyon",
      "synonyms": ["kan basıncı >140/90 mmHg"],
      "category": "Jinekoloji"
    },
    {
      "id": 162,
      "original_text": "proteinüri",
      "synonyms": ["idrarda protein"],
      "category": "Jinekoloji"
    },
    {
      "id": 163,
      "original_text": "ödem",
      "synonyms": ["bacak şişliği"],
      "category": "Jinekoloji"
    },
    {
      "id": 164,
      "original_text": "baş ağrısı",
      "synonyms": ["göz arkası ağrı"],
      "category": "Jinekoloji"
    },
    {
      "id": 165,
      "original_text": "görme bozukluğu",
      "synonyms": ["bulanık görme"],
      "category": "Jinekoloji"
    },
    {
      "id": 166,
      "original_text": "poliüri",
      "synonyms": ["aşırı idrar çıkışı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 167,
      "original_text": "polidipsi",
      "synonyms": ["aşırı susama"],
      "category": "Endokrinoloji"
    },
    {
      "id": 168,
      "original_text": "halsizlik",
      "synonyms": ["yorgunluk"],
      "category": "Hematoloji"
    },
    {
      "id": 169,
      "original_text": "solukluk",
      "synonyms": ["pallor"],
      "category": "Hematoloji"
    },
    {
      "id": 170,
      "original_text": "dispne",
      "synonyms": ["efor dispnesi"],
      "category": "Hematoloji"
    },
    {
      "id": 171,
      "original_text": "vajinal kanama",
      "synonyms": ["yoğun adet"],
      "category": "Jinekoloji"
    },
    {
      "id": 172,
      "original_text": "hipotansiyon",
      "synonyms": ["düşük tansiyon"],
      "category": "Jinekoloji"
    },
    {
      "id": 173,
      "original_text": "taşikardi",
      "synonyms": ["hızlı nabız"],
      "category": "Jinekoloji"
    },
    {
      "id": 174,
      "original_text": "bilinç bulanıklığı",
      "synonyms": ["şok bulguları"],
      "category": "Jinekoloji"
    },
    {
      "id": 175,
      "original_text": "epigastrik ağrı",
      "synonyms": ["üst karın ağrısı"],
      "category": "Jinekoloji"
    },
    {
      "id": 176,
      "original_text": "nöbet",
      "synonyms": ["konvülsiyon"],
      "category": "Jinekoloji"
    },
    {
      "id": 177,
      "original_text": "komaya ilerleme",
      "synonyms": ["bilinç kaybı"],
      "category": "Jinekoloji"
    },
    {
      "id": 178,
      "original_text": "poliüri",
      "synonyms": ["sık idrara çıkma"],
      "category": "Endokrinoloji"
    },
    {
      "id": 179,
      "original_text": "polidipsi",
      "synonyms": ["susama artışı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 180,
      "original_text": "kilo kaybı",
      "synonyms": ["kas erimesi"],
      "category": "Endokrinoloji"
    },
    {
      "id": 181,
      "original_text": "polifaji",
      "synonyms": ["aşırı açlık"],
      "category": "Endokrinoloji"
    },
    {
      "id": 182,
      "original_text": "yorgunluk",
      "synonyms": ["halsizlik"],
      "category": "Endokrinoloji"
    },
    {
      "id": 183,
      "original_text": "bulantı",
      "synonyms": ["kusma isteği"],
      "category": "Endokrinoloji"
    },
    {
      "id": 184,
      "original_text": "ketoasidoz bulguları",
      "synonyms": ["aseton nefesi", "derin solunum"],
      "category": "Endokrinoloji"
    },
    {
      "id": 185,
      "original_text": "asemptomatik seyir",
      "synonyms": ["belirtisiz"],
      "category": "Endokrinoloji"
    },
    {
      "id": 186,
      "original_text": "terleme",
      "synonyms": ["soğuk ter"],
      "category": "Endokrinoloji"
    },
    {
      "id": 187,
      "original_text": "titreme",
      "synonyms": ["tremor"],
      "category": "Endokrinoloji"
    },
    {
      "id": 188,
      "original_text": "açlık hissi",
      "synonyms": ["hipoglisemi"],
      "category": "Endokrinoloji"
    },
    {
      "id": 189,
      "original_text": "bilinç bulanıklığı",
      "synonyms": ["konfüzyon"],
      "category": "Endokrinoloji"
    },
    {
      "id": 190,
      "original_text": "konvülsiyon",
      "synonyms": ["nöbet"],
      "category": "Endokrinoloji"
    },
    {
      "id": 191,
      "original_text": "ishal",
      "synonyms": ["sulu dışkı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 192,
      "original_text": "kusma",
      "synonyms": ["emetus"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 193,
      "original_text": "karın ağrısı",
      "synonyms": ["abdominal kramplar"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 194,
      "original_text": "ateş",
      "synonyms": ["febrilite"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 195,
      "original_text": "dehidratasyon",
      "synonyms": ["kuruluk", "hipotansiyon"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 196,
      "original_text": "kronik ishal",
      "synonyms": ["4 haftadan uzun süren ishal"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 197,
      "original_text": "kilo kaybı",
      "synonyms": ["malnütrisyon"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 198,
      "original_text": "steatore",
      "synonyms": ["yağlı dışkı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 199,
      "original_text": "az dışkılama",
      "synonyms": ["3 günde bir"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 200,
      "original_text": "sert dışkı",
      "synonyms": ["zorlama"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 201,
      "original_text": "karın distansiyonu",
      "synonyms": ["şişkinlik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 202,
      "original_text": "rektal kanama",
      "synonyms": ["tuvalet kağıdında kan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 203,
      "original_text": "anal ağrı",
      "synonyms": ["defekasyon sırasında ağrı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 204,
      "original_text": "pruritus ani",
      "synonyms": ["anal kaşıntı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 205,
      "original_text": "ateş",
      "synonyms": ["subfebril"],
      "category": "Enfeksiyon"
    },
    {
      "id": 206,
      "original_text": "nezle",
      "synonyms": ["burun akıntısı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 207,
      "original_text": "boğaz ağrısı",
      "synonyms": ["farinks ağrısı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 208,
      "original_text": "öksürük",
      "synonyms": ["kuru öksürük"],
      "category": "Enfeksiyon"
    },
    {
      "id": 209,
      "original_text": "halsizlik",
      "synonyms": ["genel yorgunluk"],
      "category": "Enfeksiyon"
    },
    {
      "id": 210,
      "original_text": "ateş",
      "synonyms": ["yüksek ateş"],
      "category": "Enfeksiyon"
    },
    {
      "id": 211,
      "original_text": "boğaz ağrısı",
      "synonyms": ["yutma ağrısı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 212,
      "original_text": "tonsiller ekzudat",
      "synonyms": ["bademciklerde beyaz plak"],
      "category": "Enfeksiyon"
    },
    {
      "id": 213,
      "original_text": "servikal lenfadenopati",
      "synonyms": ["boyun lenf bezlerinde şişlik"],
      "category": "Enfeksiyon"
    },
    {
      "id": 214,
      "original_text": "ateş",
      "synonyms": ["febrilite"],
      "category": "Enfeksiyon"
    },
    {
      "id": 215,
      "original_text": "boğaz ağrısı",
      "synonyms": ["ağrı şiddetli"],
      "category": "Enfeksiyon"
    },
    {
      "id": 216,
      "original_text": "tonsiller hipertrofi",
      "synonyms": ["bademcik büyümesi"],
      "category": "Enfeksiyon"
    },
    {
      "id": 217,
      "original_text": "halitozis",
      "synonyms": ["ağız kokusu"],
      "category": "Enfeksiyon"
    },
    {
      "id": 218,
      "original_text": "kulak ağrısı",
      "synonyms": ["otalji"],
      "category": "Enfeksiyon"
    },
    {
      "id": 219,
      "original_text": "ateş",
      "synonyms": ["febrilite"],
      "category": "Enfeksiyon"
    },
    {
      "id": 220,
      "original_text": "işitme kaybı",
      "synonyms": ["duyma azalması"],
      "category": "Enfeksiyon"
    },
    {
      "id": 221,
      "original_text": "otorre",
      "synonyms": ["kulaktan akıntı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 222,
      "original_text": "baş ağrısı",
      "synonyms": ["alın ağrısı"],
      "category": "Solunum"
    },
    {
      "id": 223,
      "original_text": "burun tıkanıklığı",
      "synonyms": ["nezle"],
      "category": "Solunum"
    },
    {
      "id": 224,
      "original_text": "postnazal drip",
      "synonyms": ["arkaya akıntı"],
      "category": "Solunum"
    },
    {
      "id": 225,
      "original_text": "yüz ağrısı",
      "synonyms": ["sinüs bölgesinde ağrı"],
      "category": "Solunum"
    },
    {
      "id": 226,
      "original_text": "ateş",
      "synonyms": ["subfebril"],
      "category": "Solunum"
    },
    {
      "id": 227,
      "original_text": "kronik öksürük",
      "synonyms": ["3 aydan uzun süren"],
      "category": "Solunum"
    },
    {
      "id": 228,
      "original_text": "balgam",
      "synonyms": ["çok miktarda"],
      "category": "Solunum"
    },
    {
      "id": 229,
      "original_text": "hemoptizi",
      "synonyms": ["kanlı balgam"],
      "category": "Solunum"
    },
    {
      "id": 230,
      "original_text": "dispne",
      "synonyms": ["nefes darlığı"],
      "category": "Solunum"
    },
    {
      "id": 231,
      "original_text": "ani başlayan göğüs ağrısı",
      "synonyms": ["pleuritik ağrı"],
      "category": "Solunum"
    },
    {
      "id": 232,
      "original_text": "dispne",
      "synonyms": ["nefes darlığı"],
      "category": "Solunum"
    },
    {
      "id": 233,
      "original_text": "taşipne",
      "synonyms": ["hızlı solunum"],
      "category": "Solunum"
    },
    {
      "id": 234,
      "original_text": "siyanoz",
      "synonyms": ["morarma"],
      "category": "Solunum"
    },
    {
      "id": 235,
      "original_text": "dispne",
      "synonyms": ["nefes darlığı"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 236,
      "original_text": "göğüs ağrısı",
      "synonyms": ["pleuritik"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 237,
      "original_text": "hemoptizi",
      "synonyms": ["kanlı balgam"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 238,
      "original_text": "taşikardi",
      "synonyms": ["hızlı nabız"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 239,
      "original_text": "ateş",
      "synonyms": ["subfebril"],
      "category": "Kardiyovasküler"
    },
    {
      "id": 240,
      "original_text": "ani başlayan şiddetli baş ağrısı",
      "synonyms": ["en kötü baş ağrısı"],
      "category": "Nöroloji"
    },
    {
      "id": 241,
      "original_text": "ense sertliği",
      "synonyms": ["nukal rijidite"],
      "category": "Nöroloji"
    },
    {
      "id": 242,
      "original_text": "bilinç kaybı",
      "synonyms": ["koma"],
      "category": "Nöroloji"
    },
    {
      "id": 243,
      "original_text": "nöbet",
      "synonyms": ["konvülsiyon"],
      "category": "Nöroloji"
    },
    {
      "id": 244,
      "original_text": "fasiyal asimetri",
      "synonyms": ["yüz felci"],
      "category": "Nöroloji"
    },
    {
      "id": 245,
      "original_text": "hemiparezi",
      "synonyms": ["tek taraflı kol/bacak zayıflığı"],
      "category": "Nöroloji"
    },
    {
      "id": 246,
      "original_text": "afazi",
      "synonyms": ["konuşamama"],
      "category": "Nöroloji"
    },
    {
      "id": 247,
      "original_text": "ataksi",
      "synonyms": ["denge kaybı"],
      "category": "Nöroloji"
    },
    {
      "id": 248,
      "original_text": "görme kaybı",
      "synonyms": ["homonymous hemianopsi"],
      "category": "Nöroloji"
    },
    {
      "id": 249,
      "original_text": "nöbet",
      "synonyms": ["konvülsiyon"],
      "category": "Nöroloji"
    },
    {
      "id": 250,
      "original_text": "bilinç kaybı",
      "synonyms": ["postiktal dönem"],
      "category": "Nöroloji"
    },
    {
      "id": 251,
      "original_text": "aura",
      "synonyms": ["nöbet öncesi uyarı"],
      "category": "Nöroloji"
    },
    {
      "id": 252,
      "original_text": "tremor",
      "synonyms": ["ellerde titreme"],
      "category": "Nöroloji"
    },
    {
      "id": 253,
      "original_text": "bradikinezi",
      "synonyms": ["hareket yavaşlığı"],
      "category": "Nöroloji"
    },
    {
      "id": 254,
      "original_text": "rijidite",
      "synonyms": ["kas katılığı"],
      "category": "Nöroloji"
    },
    {
      "id": 255,
      "original_text": "postural instabilite",
      "synonyms": ["denge bozukluğu"],
      "category": "Nöroji"
    },
    {
      "id": 256,
      "original_text": "unutkanlık",
      "synonyms": ["hafıza kaybı"],
      "category": "Nöroloji"
    },
    {
      "id": 257,
      "original_text": "yönelim bozukluğu",
      "synonyms": ["zaman/mekan karıştırma"],
      "category": "Nöroloji"
    },
    {
      "id": 258,
      "original_text": "kişilik değişikliği",
      "synonyms": ["agresiflik", "çekingenlik"],
      "category": "Nöroloji"
    },
    {
      "id": 259,
      "original_text": "günlük yaşam aktivitelerinde azalma",
      "synonyms": ["giyinme zorluğu"],
      "category": "Nöroloji"
    },
    {
      "id": 260,
      "original_text": "üzüntü",
      "synonyms": ["moral bozukluğu"],
      "category": "Psikiyatri"
    },
    {
      "id": 261,
      "original_text": "ilgi ve haz kaybı",
      "synonyms": ["anhedoni"],
      "category": "Psikiyatri"
    },
    {
      "id": 262,
      "original_text": "uyku bozukluğu",
      "synonyms": ["uykuya dalma zorluğu", "erken uyanma"],
      "category": "Psikiyatri"
    },
    {
      "id": 263,
      "original_text": "iştah kaybı",
      "synonyms": ["kilo kaybı"],
      "category": "Psikiyatri"
    },
    {
      "id": 264,
      "original_text": "suçluluk",
      "synonyms": ["kendini suçlama"],
      "category": "Psikiyatri"
    },
    {
      "id": 265,
      "original_text": "endişe",
      "synonyms": ["kaygı"],
      "category": "Psikiyatri"
    },
    {
      "id": 266,
      "original_text": "gerilim",
      "synonyms": ["huzursuzluk"],
      "category": "Psikiyatri"
    },
    {
      "id": 267,
      "original_text": "titreme",
      "synonyms": ["ellerde titreme"],
      "category": "Psikiyatri"
    },
    {
      "id": 268,
      "original_text": "palpitasyon",
      "synonyms": ["çarpıntı"],
      "category": "Psikiyatri"
    },
    {
      "id": 269,
      "original_text": "sanrı",
      "synonyms": ["halüsinasyon"],
      "category": "Psikiyatri"
    },
    {
      "id": 270,
      "original_text": "hezeyan",
      "synonyms": ["şaşkın konuşma"],
      "category": "Psikiyatri"
    },
    {
      "id": 271,
      "original_text": "duygudurukluk",
      "synonyms": ["duygusal tepkisizlik"],
      "category": "Psikiyatri"
    },
    {
      "id": 272,
      "original_text": "sosyal geri çekilme",
      "synonyms": ["toplumdan izolasyon"],
      "category": "Psikiyatri"
    },
    {
      "id": 273,
      "original_text": "manik dönem",
      "synonyms": ["aşırı neşe", "uyku gereksinimi azalması"],
      "category": "Psikiyatri"
    },
    {
      "id": 274,
      "original_text": "depresif dönem",
      "synonyms": ["aşırı üzüntü"],
      "category": "Psikiyatri"
    },
    {
      "id": 275,
      "original_text": "impulsivite",
      "synonyms": ["riskli davranış"],
      "category": "Psikiyatri"
    },
    {
      "id": 276,
      "original_text": "kilo kaybı",
      "synonyms": ["iştah artışı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 277,
      "original_text": "titreme",
      "synonyms": ["ellerde ince tremor"],
      "category": "Endokrinoloji"
    },
    {
      "id": 278,
      "original_text": "terleme",
      "synonyms": ["aşırı terleme"],
      "category": "Endokrinoloji"
    },
    {
      "id": 279,
      "original_text": "palpitasyon",
      "synonyms": ["çarpıntı"],
      "category": "Endokrinoloji"
    },
    {
      "id": 280,
      "original_text": "göz belirtileri",
      "synonyms": ["exoftalmus"],
      "category": "Endokrinoloji"
    },
    {
      "id": 281,
      "original_text": "kilo alma",
      "synonyms": ["iştahsızlık"],
      "category": "Endokrinoloji"
    },
    {
      "id": 282,
      "original_text": "kabızlık",
      "synonyms": ["konstipasyon"],
      "category": "Endokrinoloji"
    },
    {
      "id": 283,
      "original_text": "soğuk intoleransı",
      "synonyms": ["soğuğa duyarlılık"],
      "category": "Endokrinoloji"
    },
    {
      "id": 284,
      "original_text": "deri kuruluğu",
      "synonyms": ["pullanma"],
      "category": "Endokrinoloji"
    },
    {
      "id": 285,
      "original_text": "depresyon",
      "synonyms": ["moral bozukluğu"],
      "category": "Endokrinoloji"
    },
    {
      "id": 286,
      "original_text": "boyun şişliği",
      "synonyms": ["guatr"],
      "category": "Endokrinoloji"
    },
    {
      "id": 287,
      "original_text": "disfaji",
      "synonyms": ["yutma güçlüğü"],
      "category": "Endokrinoloji"
    },
    {
      "id": 288,
      "original_text": "oligüri",
      "synonyms": ["az idrar"],
      "category": "Nefroloji"
    },
    {
      "id": 289,
      "original_text": "ödem",
      "synonyms": ["periferik ödem"],
      "category": "Nefroloji"
    },
    {
      "id": 290,
      "original_text": "bilinç bulanıklığı",
      "synonyms": ["konfüzyon"],
      "category": "Nefroloji"
    },
    {
      "id": 291,
      "original_text": "halsizlik",
      "synonyms": ["yorgunluk"],
      "category": "Nefroloji"
    },
    {
      "id": 292,
      "original_text": "kaşıntı",
      "synonyms": ["pruritus"],
      "category": "Nefroloji"
    },
    {
      "id": 293,
      "original_text": "mide bulantısı",
      "synonyms": ["kusma"],
      "category": "Nefroloji"
    },
    {
      "id": 294,
      "original_text": "hipertansiyon",
      "synonyms": ["yüksek tansiyon"],
      "category": "Nefroloji"
    },
    {
      "id": 295,
      "original_text": "hematüri",
      "synonyms": ["idrarda kan"],
      "category": "Nefroloji"
    },
    {
      "id": 296,
      "original_text": "proteinüri",
      "synonyms": ["idrarda köpük"],
      "category": "Nefroloji"
    },
    {
      "id": 297,
      "original_text": "ödem",
      "synonyms": ["periorbital ödem"],
      "category": "Nefroloji"
    },
    {
      "id": 298,
      "original_text": "hipertansiyon",
      "synonyms": ["yüksek tansiyon"],
      "category": "Nefroloji"
    },
    {
      "id": 299,
      "original_text": "dizüri",
      "synonyms": ["idrar yaparken yanma"],
      "category": "Nefroloji"
    },
    {
      "id": 300,
      "original_text": "sık idrara çıkma",
      "synonyms": ["polakiüri"],
      "category": "Nefroloji"
    },
    {
      "id": 301,
      "original_text": "acil idrar hissi",
      "synonyms": ["urge"],
      "category": "Nefroloji"
    },
    {
      "id": 302,
      "original_text": "ateş",
      "synonyms": ["lokalize ağrı"],
      "category": "Nefroloji"
    },
    {
      "id": 303,
      "original_text": "kolik tarzı ağrı",
      "synonyms": ["flank ağrısı"],
      "category": "Nefroloji"
    },
    {
      "id": 304,
      "original_text": "hematüri",
      "synonyms": ["idrarda kan"],
      "category": "Nefroloji"
    },
    {
      "id": 305,
      "original_text": "mide bulantısı",
      "synonyms": ["kusma"],
      "category": "Nefroloji"
    },
    {
      "id": 306,
      "original_text": "ateş",
      "synonyms": ["lökositoz"],
      "category": "Nefroloji"
    },
    {
      "id": 307,
      "original_text": "idrar akımında zayıflama",
      "synonyms": ["kesik kesik idrar"],
      "category": "Üroloji"
    },
    {
      "id": 308,
      "original_text": "gece idrara çıkma",
      "synonyms": ["nocturia"],
      "category": "Üroloji"
    },
    {
      "id": 309,
      "original_text": "idrar kaçırma",
      "synonyms": ["inkontinans"],
      "category": "Üroloji"
    },
    {
      "id": 310,
      "original_text": "idrar yapamama",
      "synonyms": ["retansiyon"],
      "category": "Üroloji"
    },
    {
      "id": 311,
      "original_text": "hemospermia",
      "synonyms": ["menide kan"],
      "category": "Üroloji"
    },
    {
      "id": 312,
      "original_text": "kemik ağrısı",
      "synonyms": ["metastaz"],
      "category": "Üroloji"
    },
    {
      "id": 313,
      "original_text": "ateş",
      "synonyms": ["kilo kaybı"],
      "category": "Üroloji"
    },
    {
      "id": 314,
      "original_text": "simetrik poliartrit",
      "synonyms": ["el küçük eklemleri"],
      "category": "Romatoloji"
    },
    {
      "id": 315,
      "original_text": "matutinal rijidite",
      "synonyms": ["sabah tutukluğu"],
      "category": "Romatoloji"
    },
    {
      "id": 316,
      "original_text": "eklem şişliği",
      "synonyms": ["erozyon"],
      "category": "Romatoloji"
    },
    {
      "id": 317,
      "original_text": "subkutan nodül",
      "synonyms": ["el bileği"],
      "category": "Romatoloji"
    },
    {
      "id": 318,
      "original_text": "sistemik yakınmalar",
      "synonyms": ["ateş", "kilo kaybı"],
      "category": "Romatoloji"
    },
    {
      "id": 319,
      "original_text": "hareketle artan ağrı",
      "synonyms": ["dinlenmeyle azalma"],
      "category": "Romatoloji"
    },
    {
      "id": 320,
      "original_text": "eklem tutukluğu",
      "synonyms": ["hareket kısıtlılığı"],
      "category": "Romatoloji"
    },
    {
      "id": 321,
      "original_text": "krepitasyon",
      "synonyms": ["eklemde çıtırtı"],
      "category": "Romatoloji"
    },
    {
      "id": 322,
      "original_text": "malar rash",
      "synonyms": ["kelebek döküntüsü"],
      "category": "Romatoloji"
    },
    {
      "id": 323,
      "original_text": "diskoid lezyon",
      "synonyms": ["kalıcı skar"],
      "category": "Romatoloji"
    },
    {
      "id": 324,
      "original_text": "fotosensitivite",
      "synonyms": ["güneş sonrası döküntü"],
      "category": "Romatoloji"
    },
    {
      "id": 325,
      "original_text": "oral ülser",
      "synonyms": ["ağrısız"],
      "category": "Romatoloji"
    },
    {
      "id": 326,
      "original_text": "artrit",
      "synonyms": ["eklem ağrısı"],
      "category": "Romatoloji"
    },
    {
      "id": 327,
      "original_text": "monoartrit",
      "synonyms": ["podagra"],
      "category": "Romatoloji"
    },
    {
      "id": 328,
      "original_text": "eklem kızarıklığı",
      "synonyms": ["şişlik", "ısı artışı"],
      "category": "Romatoloji"
    },
    {
      "id": 329,
      "original_text": "ateş",
      "synonyms": ["akut atak"],
      "category": "Romatoloji"
    },
    {
      "id": 330,
      "original_text": "halsizlik",
      "synonyms": ["yorgunluk"],
      "category": "Hematoloji"
    },
    {
      "id": 331,
      "original_text": "solukluk",
      "synonyms": ["pallor"],
      "category": "Hematoloji"
    },
    {
      "id": 332,
      "original_text": "dispne",
      "synonyms": ["efor dispnesi"],
      "category": "Hematoloji"
    },
    {
      "id": 333,
      "original_text": "pika",
      "synonyms": ["dilde yanma"],
      "category": "Hematoloji"
    },
    {
      "id": 334,
      "original_text": "nörolojik bulgular",
      "synonyms": ["parestezi", "ataksi"],
      "category": "Hematoloji"
    },
    {
      "id": 335,
      "original_text": "glossit",
      "synonyms": ["dilde kızarıklık"],
      "category": "Hematoloji"
    },
    {
      "id": 336,
      "original_text": "diyare",
      "synonyms": ["ishal"],
      "category": "Hematoloji"
    },
    {
      "id": 337,
      "original_text": "ateş",
      "synonyms": ["lökositoz"],
      "category": "Hematoloji"
    },
    {
      "id": 338,
      "original_text": "kanama",
      "synonyms": ["peteşi", "ekimoz"],
      "category": "Hematoloji"
    },
    {
      "id": 339,
      "original_text": "kemik ağrısı",
      "synonyms": ["metafizyal ağrı"],
      "category": "Hematoloji"
    },
    {
      "id": 340,
      "original_text": "splenomegali",
      "synonyms": ["dalak büyümesi"],
      "category": "Hematoloji"
    },
    {
      "id": 341,
      "original_text": "splenomegali",
      "synonyms": ["dalak büyümesi"],
      "category": "Hematoloji"
    },
    {
      "id": 342,
      "original_text": "ateş",
      "synonyms": ["gece terlemesi"],
      "category": "Hematoloji"
    },
    {
      "id": 343,
      "original_text": "kilo kaybı",
      "synonyms": ["kacheksi"],
      "category": "Hematoloji"
    },
    {
      "id": 344,
      "original_text": "lenfadenopati",
      "synonyms": ["ağrısız lenf nodu"],
      "category": "Hematoloji"
    },
    {
      "id": 345,
      "original_text": "ateş",
      "synonyms": ["gece terlemesi"],
      "category": "Hematoloji"
    },
    {
      "id": 346,
      "original_text": "kilo kaybı",
      "synonyms": ["kacheksi"],
      "category": "Hematoloji"
    },
    {
      "id": 347,
      "original_text": "pruritus",
      "synonyms": ["kaşıntı"],
      "category": "Hematoloji"
    },
    {
      "id": 348,
      "original_text": "kemik ağrısı",
      "synonyms": ["vertebral kırık"],
      "category": "Hematoloji"
    },
    {
      "id": 349,
      "original_text": "hiperkalsemi",
      "synonyms": ["mide bulantısı", "konstipasyon"],
      "category": "Hematoloji"
    },
    {
      "id": 350,
      "original_text": "anemi",
      "synonyms": ["halsizlik"],
      "category": "Hematoloji"
    },
    {
      "id": 351,
      "original_text": "renal yetmezlik",
      "synonyms": ["BUN yüksekliği"],
      "category": "Hematoloji"
    },
    {
      "id": 352,
      "original_text": "periumbikalik ağrı",
      "synonyms": ["McBurney noktası hassasiyeti"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 353,
      "original_text": "ateş",
      "synonyms": ["lökositoz"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 354,
      "original_text": "mide bulantısı",
      "synonyms": ["kusma"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 355,
      "original_text": "anoreksi",
      "synonyms": ["iştahsızlık"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 356,
      "original_text": "sol alt kadran ağrısı",
      "synonyms": ["ateş", "lökositoz"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 357,
      "original_text": "konstipasyon",
      "synonyms": ["ishal"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 358,
      "original_text": "abdominal distansiyon",
      "synonyms": ["şişkinlik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 359,
      "original_text": "ishal",
      "synonyms": ["kanlı mukuslu dışkı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 360,
      "original_text": "karın ağrısı",
      "synonyms": ["kolik tarzı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 361,
      "original_text": "ateş",
      "synonyms": ["kilo kaybı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 362,
      "original_text": "tenesmus",
      "synonyms": ["bağışıklık"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 363,
      "original_text": "sarılık",
      "synonyms": ["jandis"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 364,
      "original_text": "askit",
      "synonyms": ["karında sıvı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 365,
      "original_text": "varis kanaması",
      "synonyms": ["hematemez", "melena"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 366,
      "original_text": "hepatomegali",
      "synonyms": ["karaciğer büyümesi"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 367,
      "original_text": "spider anjiyom",
      "synonyms": ["östrojen etkisi"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 368,
      "original_text": "epigastrik ağrı",
      "synonyms": ["sağ üst kadran"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 369,
      "original_text": "ateş",
      "synonyms": ["lökositoz"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 370,
      "original_text": "mide bulantısı",
      "synonyms": ["kusma"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 371,
      "original_text": "Murphy bulgusu",
      "synonyms": ["pozitif"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 372,
      "original_text": "epigastrik ağrı",
      "synonyms": ["sırta yayılan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 373,
      "original_text": "ateş",
      "synonyms": ["lökositoz"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 374,
      "original_text": "mide bulantısı",
      "synonyms": ["kusma"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 375,
      "original_text": "Grey-Turner belirtisi",
      "synonyms": ["flank morarması"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 376,
      "original_text": "ani başlayan şiddetli karın ağrısı",
      "synonyms": ["board-like abdomen"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 377,
      "original_text": "ateş",
      "synonyms": ["lökositoz"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 378,
      "original_text": "şok bulguları",
      "synonyms": ["hipotansiyon"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 379,
      "original_text": "karın ağrısı",
      "synonyms": ["kolik tarzı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 380,
      "original_text": "kusma",
      "synonyms": ["fıskiyonla"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 381,
      "original_text": "distansiyon",
      "synonyms": ["şişkinlik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 382,
      "original_text": "boru sesleri",
      "synonyms": ["metalik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 383,
      "original_text": "karın ağrısı",
      "synonyms": ["kolik tarzı"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 384,
      "original_text": "konstipasyon",
      "synonyms": ["obstipasyon"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 385,
      "original_text": "distansiyon",
      "synonyms": ["şişkinlik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 386,
      "original_text": "rektal kanama",
      "synonyms": ["dışkıda kan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 387,
      "original_text": "kilo kaybı",
      "synonyms": ["kacheksi"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 388,
      "original_text": "ishal",
      "synonyms": ["alternan"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 389,
      "original_text": "anemi",
      "synonyms": ["halsizlik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 390,
      "original_text": "meme kitlesi",
      "synonyms": ["ağrısız"],
      "category": "Onkoloji"
    },
    {
      "id": 391,
      "original_text": "meme başı akıntısı",
      "synonyms": ["kanlı"],
      "category": "Onkoloji"
    },
    {
      "id": 392,
      "original_text": "meme cildinde çöküntü",
      "synonyms": ["portakal kabuğu görünümü"],
      "category": "Onkoloji"
    },
    {
      "id": 393,
      "original_text": "postkoital kanama",
      "synonyms": ["cinsel ilişki sonrası kanama"],
      "category": "Onkoloji"
    },
    {
      "id": 394,
      "original_text": "vajinal akıntı",
      "synonyms": ["kötü kokulu"],
      "category": "Onkoloji"
    },
    {
      "id": 395,
      "original_text": "pelvik ağrı",
      "synonyms": ["sabit"],
      "category": "Onkoloji"
    },
    {
      "id": 396,
      "original_text": "postmenopozal kanama",
      "synonyms": ["menopoz sonrası kanama"],
      "category": "Onkoloji"
    },
    {
      "id": 397,
      "original_text": "pelvik ağrı",
      "synonyms": ["sabit"],
      "category": "Onkoloji"
    },
    {
      "id": 398,
      "original_text": "pelvik kitle",
      "synonyms": ["asemptomatik"],
      "category": "Onkoloji"
    },
    {
      "id": 399,
      "original_text": "kilo kaybı",
      "synonyms": ["kacheksi"],
      "category": "Onkoloji"
    },
    {
      "id": 400,
      "original_text": "karın distansiyonu",
      "synonyms": ["askit"],
      "category": "Onkoloji"
    },
    {
      "id": 401,
      "original_text": "kronik öksürük",
      "synonyms": ["3 haftadan uzun"],
      "category": "Onkoloji"
    },
    {
      "id": 402,
      "original_text": "hemoptizi",
      "synonyms": ["kanlı balgam"],
      "category": "Onkoloji"
    },
    {
      "id": 403,
      "original_text": "kilo kaybı",
      "synonyms": ["kacheksi"],
      "category": "Onkoloji"
    },
    {
      "id": 404,
      "original_text": "dispne",
      "synonyms": ["nefes darlığı"],
      "category": "Onkoloji"
    }, 
    
    {
      "id": 405,
      "original_text": "şiddetli öksürük nöbetleri",
      "synonyms": ["iç çekmeli solunum", "kusma ile eşlik eden öksürük"],
      "category": "Solunum"
    },
    {
      "id": 406,
      "original_text": "pnömoni dışlama",
      "synonyms": ["plörezi", "sinüzit"],
      "category": "Solunum"
    },
    {
      "id": 407,
      "original_text": "boğmaca salgını",
      "synonyms": ["çevrede hastalık varlığı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 408,
      "original_text": "ateş",
      "synonyms": ["gece terlemesi", "eklem ağrısı"],
      "category": "Enfeksiyon"
    },
    {
      "id": 409,
      "original_text": "halsizlik",
      "synonyms": ["bel ağrısı", "baş ağrısı", "iştahsızlık"],
      "category": "Enfeksiyon"
    },
    {
      "id": 410,
      "original_text": "hepatosplenomegali",
      "synonyms": ["lenfadenopati", "depresyon"],
      "category": "Enfeksiyon"
    },
    {
      "id": 411,
      "original_text": "organ tutulumu",
      "synonyms": ["sakroileit", "spondilit", "epididimoorşit"],
      "category": "Enfeksiyon"
    },
    {
      "id": 412,
      "original_text": "genital vezikül",
      "synonyms": ["ülser", "ağrı", "kaşıntı"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 413,
      "original_text": "lenf düğümü tutulumu",
      "synonyms": ["sert", "duyarlı"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 414,
      "original_text": "rekürrens",
      "synonyms": ["yılda 6'dan fazla atak"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 415,
      "original_text": "şankr",
      "synonyms": ["tek ülser", "ağrısız"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 416,
      "original_text": "lenf düğümü şişliği",
      "synonyms": ["sert", "mobil", "duyarlı değil"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 417,
      "original_text": "deri döküntüsü",
      "synonyms": ["papüler", "mukozal"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 418,
      "original_text": "vajinal akıntı",
      "synonyms": ["pis koku", "grimsi"],
      "category": "Jinekoloji"
    },
    {
      "id": 419,
      "original_text": "pH > 4.5",
      "synonyms": ["balık kokusu"],
      "category": "Jinekoloji"
    },
    {
      "id": 420,
      "original_text": "clue hücreleri",
      "synonyms": ["Gram boyamada"],
      "category": "Jinekoloji"
    },
    {
      "id": 421,
      "original_text": "köpüklü akıntı",
      "synonyms": ["sarı-yeşil", "kaşıntı"],
      "category": "Jinekoloji"
    },
    {
      "id": 422,
      "original_text": "hareketli trofozoit",
      "synonyms": ["taze yaymada"],
      "category": "Jinekoloji"
    },
    {
      "id": 423,
      "original_text": "dizüri",
      "synonyms": ["%20 olguda"],
      "category": "Jinekoloji"
    },
    {
      "id": 424,
      "original_text": "alt karın ağrısı",
      "synonyms": ["adneks duyarlılığı", "servikal duyarlılık"],
      "category": "Jinekoloji"
    },
    {
      "id": 425,
      "original_text": "yüksek ateş",
      "synonyms": [">38°C"],
      "category": "Jinekoloji"
    },
    {
      "id": 426,
      "original_text": "düzensiz kanama",
      "synonyms": ["vajinal akıntı"],
      "category": "Jinekoloji"
    },
    {
      "id": 427,
      "original_text": "karnıbahar görünümü",
      "synonyms": ["pembe papül", "anüs çevresi"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 428,
      "original_text": "sulantılı kötü koku",
      "synonyms": ["kondiloma aküminata"],
      "category": "Cinsel Yolla Bulaşan Enfeksiyon"
    },
    {
      "id": 429,
      "original_text": "boğaz ağrısı",
      "synonyms": ["düşük ateş"],
      "category": "Enfeksiyon"
    },
    {
      "id": 430,
      "original_text": "membran",
      "synonyms": ["gri-beyaz", "kaldırılınca kanama"],
      "category": "Enfeksiyon"
    },
    {
      "id": 431,
      "original_text": "boyun şişliği",
      "synonyms": ["boğa boynu"],
      "category": "Enfeksiyon"
    },
    {
      "id": 432,
      "original_text": "kanlı mukuslu dışkılama",
      "synonyms": ["dizanteri", "tenezm"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 433,
      "original_text": "demir eksikliği anemisi",
      "synonyms": ["kancalı kurtlar"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 434,
      "original_text": "ishal",
      "synonyms": ["karın ağrısı", "gaz"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 435,
      "original_text": "büyüme geriliği",
      "synonyms": ["G. lamblia"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 436,
      "original_text": "anal kaşıntı",
      "synonyms": ["gece şiddetli"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 437,
      "original_text": "karın ağrısı",
      "synonyms": ["gaz", "gerginlik"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 438,
      "original_text": "rektal prolapsus",
      "synonyms": ["T. trichiura"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 439,
      "original_text": "demir eksikliği anemisi",
      "synonyms": ["kansızlık"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 440,
      "original_text": "büyüme gelişme geriliği",
      "synonyms": ["kancalı kurtlar"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 441,
      "original_text": "parazit görülmesi",
      "synonyms": ["dışkıda halka"],
      "category": "Gastroenteroloji"
    },
    {
      "id": 442,
      "original_text": "bası belirtileri",
      "synonyms": ["hepatomegali", "sarılık"],
      "category": "Parazitoloji"
    },
    {
      "id": 443,
      "original_text": "eozinofili",
      "synonyms": ["seroloji pozitifliği"],
      "category": "Parazitoloji"
    },
    {
      "id": 444,
      "original_text": "kanser benzeri ilerleme",
      "synonyms": ["hızlı büyüme"],
      "category": "Parazitoloji"
    },
    {
      "id": 445,
      "original_text": "sık sarılık",
      "synonyms": ["orta-doğu anadolu"],
      "category": "Parazitoloji"
    },
    {
      "id": 446,
      "original_text": "servikal lenfadenopati",
      "synonyms": ["ensefalit"],
      "category": "Parazitoloji"
    },
    {
      "id": 447,
      "original_text": "konjenital toksoplazmoz",
      "synonyms": ["hidrosefali", "koryoretinit"],
      "category": "Parazitoloji"
    },
    {
      "id": 448,
      "original_text": "eozinofili",
      "synonyms": ["lökositoz"],
      "category": "Parazitoloji"
    },
    {
      "id": 449,
      "original_text": "görme bozukluğu",
      "synonyms": ["karaciğer tutulumu"],
      "category": "Parazitoloji"
    },
    {
      "id": 450,
      "original_text": "hayvan türü belirleme",
      "synonyms": ["sahipli mi", "aşı durumu"],
      "category": "Zoonoz"
    },
    {
      "id": 451,
      "original_text": "yara temizliği",
      "synonyms": ["bol su ve sabun"],
      "category": "Zoonoz"
    },
    {
      "id": 452,
      "original_text": "prodromal belirtiler",
      "synonyms": ["halsizlik", "ateş", "baş ağrısı"],
      "category": "Zoonoz"
    },
    {
      "id": 453,
      "original_text": "hidrofobi",
      "synonyms": ["su korkusu"],
      "category": "Zoonoz"
    },
    {
      "id": 454,
      "original_text": "paralizi",
      "synonyms": ["Guillain-Barré benzeri"],
      "category": "Zoonoz"
    },
    {
      "id": 455,
      "original_text": "ağrısız papül",
      "synonyms": ["giriş yeri"],
      "category": "Zoonoz"
    },
    {
      "id": 456,
      "original_text": "bölgesel lenfadenopati",
      "synonyms": ["aksiller", "servikal"],
      "category": "Zoonoz"
    },
    {
      "id": 457,
      "original_text": "ağrısız deri lezyonu",
      "synonyms": ["siyah kabuk"],
      "category": "Zoonoz"
    },
    {
      "id": 458,
      "original_text": "gram pozitif basiller",
      "synonyms": ["kültürde"],
      "category": "Zoonoz"
    },
    {
      "id": 459,
      "original_text": "ülser",
      "synonyms": ["lenfadenopati", "giriş yeri"],
      "category": "Zoonoz"
    },
    {
      "id": 460,
      "original_text": "konjonktivit",
      "synonyms": ["pnömoni", "tifoya benzer"],
      "category": "Zoonoz"
    },
    {
      "id": 461,
      "original_text": "sarılık",
      "synonyms": ["merkez sinir sistemi bulguları"],
      "category": "Zoonoz"
    },
    {
      "id": 462,
      "original_text": "böbrek yetmezliği",
      "synonyms": ["konjonktival kanama"],
      "category": "Zoonoz"
    },
    {
      "id": 463,
      "original_text": "eritema kronikum migrans",
      "synonyms": ["ortası soluk dairesel lezyon"],
      "category": "Zoonoz"
    },
    {
      "id": 464,
      "original_text": "kas ağrısı",
      "synonyms": ["halsizlik", "ateş"],
      "category": "Zoonoz"
    },
    {
      "id": 465,
      "original_text": "denetim yitimi",
      "synonyms": ["bedensel sorunlar", "yasal sorunlar"],
      "category": "Psikiyatri"
    },
    {
      "id": 466,
      "original_text": "tolerans gelişimi",
      "synonyms": ["artan doz gereksinimi"],
      "category": "Psikiyatri"
    },
    {
      "id": 467,
      "original_text": "yoksunluk semptomları",
      "synonyms": ["tremor", "anksiyete", "terleme"],
      "category": "Psikiyatri"
    },
    {
      "id": 468,
      "original_text": "sorumluluklarını yerine getirememe",
      "synonyms": ["iş, ev, sosyal yaşam"],
      "category": "Psikiyatri"
    },
    {
      "id": 469,
      "original_text": "yasal sorunlar",
      "synonyms": ["alkol kullanımı nedeniyle"],
      "category": "Psikiyatri"
    },
    {
      "id": 470,
      "original_text": "ajitasyon",
      "synonyms": ["algı bozukluğu", "bilinç bulanıklığı"],
      "category": "Psikiyatri"
    },
    {
      "id": 471,
      "original_text": "otonomik bozukluklar",
      "synonyms": ["taşikardi", "ateş", "terleme"],
      "category": "Psikiyatri"
    },
    {
      "id": 472,
      "original_text": "tremor",
      "synonyms": ["elllerde", "ataksi"],
      "category": "Psikiyatri"
    },
    {
      "id": 473,
      "original_text": "gelecekle ilgili kaygı",
      "synonyms": ["her gün en az 6 ay süren"],
      "category": "Psikiyatri"
    },
    {
      "id": 474,
      "original_text": "kontrol etmekte güçlük",
      "synonyms": ["endişe duyma"],
      "category": "Psikiyatri"
    },
    {
      "id": 475,
      "original_text": "bedensel belirtiler",
      "synonyms": ["çarpıntı", "titreme", "baş dönmesi"],
      "category": "Psikiyatri"
    },
    {
      "id": 476,
      "original_text": "beklenmedik panik atak",
      "synonyms": ["10 dakikada zirve", "1 saat sürer"],
      "category": "Psikiyatri"
    },
    {
      "id": 477,
      "original_text": "yeniden atak korkusu",
      "synonyms": ["1 aydan uzun süreli"],
      "category": "Psikiyatri"
    },
    {
      "id": 478,
      "original_text": "kaçınma davranışları",
      "synonyms": ["agorafobi"],
      "category": "Psikiyatri"
    },
    {
      "id": 479,
      "original_text": "obsesyonlar",
      "synonyms": ["mantıksız düşünceler", "atamaz"],
      "category": "Psikiyatri"
    },
    {
      "id": 480,
      "original_text": "kompulsiyonlar",
      "synonyms": ["yineleyici davranışlar", "zorunlu"],
      "category": "Psikiyatri"
    },
    {
      "id": 481,
      "original_text": "özgül fobi",
      "synonyms": ["aşırı korku", "durum veya nesne"],
      "category": "Psikiyatri"
    },
    {
      "id": 482,
      "original_text": "sosyal fobi",
      "synonyms": ["performans korkusu", "küçük düşme"],
      "category": "Psikiyatri"
    },
    {
      "id": 483,
      "original_text": "travmatik yaşantı",
      "synonyms": ["doğal afet", "şiddet", "kaza"],
      "category": "Psikiyatri"
    },
    {
      "id": 484,
      "original_text": "travmayı tekrar yaşama",
      "synonyms": ["rüya", "flashback"],
      "category": "Psikiyatri"
    },
    {
      "id": 485,
      "original_text": "aşırı duyarlılık",
      "synonyms": ["normal duyumlara karşı"],
      "category": "Psikiyatri"
    },
    {
      "id": 486,
      "original_text": "ciddi hastalık yorumu",
      "synonyms": ["anksiyete", "ikna edilemezlik"],
      "category": "Psikiyatri"
    },
    {
      "id": 487,
      "original_text": "çok sayıda bedensel şikayet",
      "synonyms": ["kadında 14, erkekte 12"],
      "category": "Psikiyatri"
    },
    {
      "id": 488,
      "original_text": "organik neden olmaması",
      "synonyms": ["psikolojik köken"],
      "category": "Psikiyatri"
    },
    {
      "id": 489,
      "original_text": "organik neden olmayan ağrı",
      "synonyms": ["psikososyal stresör"],
      "category": "Psikiyatri"
    },
    {
      "id": 490,
      "original_text": "kolay lokalize edilememe",
      "synonyms": ["geniş alan"],
      "category": "Psikiyatri"
    },
    {
      "id": 491,
      "original_text": "nörolojik hastalığa benzer",
      "synonyms": ["motor veya duyusal kayıp"],
      "category": "Psikiyatri"
    },
    {
      "id": 492,
      "original_text": "nöroanatomik dağılıma uymama",
      "synonyms": ["güzel aldırmazlık"],
      "category": "Psikiyatri"
    },
    {
      "id": 493,
      "original_text": "hayali kusur",
      "synonyms": ["gerçekten çok küçük"],
      "category": "Psikiyatri"
    },
    {
      "id": 494,
      "original_text": "kozmetik cerrahi arayışı",
      "synonyms": ["obsesif özellik"],
      "category": "Psikiyatri"
    },
    {
      "id": 495,
      "original_text": "uykuya geçme sorunu",
      "synonyms": ["uykuyu sürdürme"],
      "category": "Nöroloji"
    },
    {
      "id": 496,
      "original_text": "uyku hijyeni bozukluğu",
      "synonyms": ["stres", "depresyon", "ilaçlar"],
      "category": "Nöroloji"
    },
    {
      "id": 497,
      "original_text": "horlama",
      "synonyms": ["tanıklı apne"],
      "category": "Nöroloji"
    },
    {
      "id": 498,
      "original_text": "aşırı gündüz uykusu",
      "synonyms": ["uyku apnesi"],
      "category": "Nöroloji"
    },
    {
      "id": 499,
      "original_text": "mekanik ağrı",
      "synonyms": ["aktivite ile artar", "istirahat ile azalır"],
      "category": "Ortopedi"
    },
    {
      "id": 500,
      "original_text": "bacak ağrısı",
      "synonyms": ["siyatik", "nörolojik bulgu"],
      "category": "Ortopedi"
    },
    {
      "id": 501,
      "original_text": "idrar kaçırma",
      "synonyms": ["cauda equina"],
      "category": "Ortopedi"
    },
    {
      "id": 502,
      "original_text": "minimal travma ile kırık",
      "synonyms": ["vertebra", "ön kol distali"],
      "category": "Ortopedi"
    },
    {
      "id": 503,
      "original_text": "torakal kifoz",
      "synonyms": ["skolyoz", "boy kısalması"],
      "category": "Ortopedi"
    },
    {
      "id": 504,
      "original_text": "postür değişikliği",
      "synonyms": ["fizik muayenede"],
      "category": "Ortopedi"
    },
    {
      "id": 505,
      "original_text": "VKİ ≥ 30",
      "synonyms": ["vücut kitle indeksi"],
      "category": "Endokrinoloji"
    },
    {
      "id": 506,
      "original_text": "abdominal obezite",
      "synonyms": ["bel çevresi erkek >102, kadın >88 cm"],
      "category": "Endokrinoloji"
    },
    {
      "id": 507,
      "original_text": "marasmus",
      "synonyms": ["kalori eksikliği", "zayıflık"],
      "category": "Pediatri"
    },
    {
      "id": 508,
      "original_text": "kwashiorkor",
      "synonyms": ["protein eksikliği", "ödem", "deri değişikliği"],
      "category": "Pediatri"
    },
    {
      "id": 509,
      "original_text": "şişlik",
      "synonyms": ["vücudun herhangi bir yerinde"],
      "category": "Onkoloji"
    },
    {
      "id": 510,
      "original_text": "iyileşmeyen yara",
      "synonyms": ["kanama", "yutma güçlüğü"],
      "category": "Onkoloji"
    },
    {
      "id": 511,
      "original_text": "nikotin bağımlılığı",
      "synonyms": ["Fagerström testi"],
      "category": "Psikiyatri"
    },
    {
      "id": 512,
      "original_text": "yoksunluk belirtileri",
      "synonyms": ["sinirlilik", "dikkat dağınıklığı"],
      "category": "Psikiyatri"
    },
    {
  "id": 513,
  "original_text": "bilinç bulanıklığı",
  "synonyms": ["konfüzyon", "stupor"],
  "category": "Zehirlenme"
},
{
  "id": 514,
  "original_text": "ataksi",
  "synonyms": ["denge bozukluğu", "yürümede zorluk"],
  "category": "Nöroloji"
},
{
  "id": 515,
  "original_text": "kusma",
  "synonyms": ["emetus", "mide boşalması"],
  "category": "Gastroenteroloji"
},
{
  "id": 516,
  "original_text": "solunum depresyonu",
  "synonyms": ["yavaş solunum", "hipoventilasyon"],
  "category": "Acil Tıp"
},
{
  "id": 517,
  "original_text": "ellerde tremor",
  "synonyms": ["titreme", "sallantı"],
  "category": "Psikiyatri"
},
{
  "id": 518,
  "original_text": "anksiyete",
  "synonyms": ["huzursuzluk", "endişe"],
  "category": "Psikiyatri"
},
{
  "id": 519,
  "original_text": "terleme",
  "synonyms": ["aşırı ter", "soğuk ter"],
  "category": "Psikiyatri"
},
{
  "id": 520,
  "original_text": "uykusuzluk",
  "synonyms": ["insomnia", "uyku kaybı"],
  "category": "Psikiyatri"
},
{
  "id": 521,
  "original_text": "karın ağrısı",
  "synonyms": ["abdominal kramplar"],
  "category": "Parazitoloji"
},
{
  "id": 522,
  "original_text": "ishal",
  "synonyms": ["sulu dışkılama"],
  "category": "Parazitoloji"
},
{
  "id": 523,
  "original_text": "gelişme geriliği",
  "synonyms": ["kilo alma yetersizliği", "boy kısalığı"],
  "category": "Pediatri"
},
{
  "id": 524,
  "original_text": "madde kullanımı sonrası anksiyete",
  "synonyms": ["ilaç/alkol sonrası panik"],
  "category": "Psikiyatri"
},
{
  "id": 525,
  "original_text": "palpitasyon",
  "synonyms": ["çarpıntı", "kalp atışlarını hissetme"],
  "category": "Psikiyatri"
},
{
  "id": 526,
  "original_text": "titreme",
  "synonyms": ["tremor", "vücut titremesi"],
  "category": "Psikiyatri"
},
{
  "id": 527,
  "original_text": "organik neden olmayan çok sistem şikayetleri",
  "synonyms": ["bedensel belirti bozukluğu"],
  "category": "Psikiyatri"
},
{
  "id": 528,
  "original_text": "psikolojik stres ile ilişkili fiziksel yakınmalar",
  "synonyms": ["somatizasyon"],
  "category": "Psikiyatri"
},
{
  "id": 529,
  "original_text": "vajinal kaşıntı",
  "synonyms": ["vulva kaşıntısı", "pruritus vulvae"],
  "category": "Jinekoloji"
},
{
  "id": 530,
  "original_text": "peynir kıvamında akıntı",
  "synonyms": ["beyaz kalın akıntı", "kazeöz sekresyon"],
  "category": "Jinekoloji"
},
{
  "id": 531,
  "original_text": "vajinal yanma",
  "synonyms": ["cinsel ilişki sırasında ağrı", "disparoni"],
  "category": "Jinekoloji"
}
  
  
  ]
}







////////////////////////

