var hastaliklar = {
  "diseases": [
    {
      "id": 1,
      "name": "Akne Vulgaris",
      "icd10": "L70.0",
      "symptom_ids": [1, 2, 3, 5, 6],
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
      "symptom_ids": [11,12],
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
      "symptom_ids": [13, 14, 15],
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
      "symptom_ids": [15],
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
      "symptom_ids": [16],
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
      "symptom_ids": [17],
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
      "symptom_ids": [18, 19, 20, 21, 22],
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
      "symptom_ids": [23, 24],
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
      "symptom_ids": [13, 16],
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
      "symptom_ids": [31, 32, 33, 34, 35],
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
      "symptom_ids": [36, 37, 38, 39, 40],
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
      "symptom_ids": [41, 42, 43, 44],
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
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": ["kan lipid profili", "total kolesterol", "LDL-K", "HDL-K", "trigliserid", "transaminazlar"]
    },
    {
      "id": 15,
      "name": "Hipertansiyon",
      "icd10": "I10",
      "symptom_ids": [],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 43}
      ],
      "tests": ["tam idrar incelemesi", "potasyum", "sodyum", "klor", "BUN", "kreatinin", "ürik asit", "kan şekeri", "total kolesterol", "HDL kolesterol", "LDL-Kolesterol", "trigliserid", "EKG", "telekardiyogram"]
    },
    {
      "id": 16,
      "name": "Konjestif Kalp Yetmezliği (Erişkin)",
      "icd10": "I50.9",
      "symptom_ids": [47, 48, 49, 50],
      "differential_diagnosis": [],
      "tests": ["EKG", "telekardiyografi", "tam kan sayımı", "biyokimyasal inceleme", "tiroid fonksiyon testleri"]
    },
    {
      "id": 17,
      "name": "Akut Miyokard Enfarktüsü",
      "icd10": "I21.9",
      "symptom_ids": [41, 42, 44],
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
      "symptom_ids": [80, 81, 82, 83],
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
      "symptom_ids": [85, 86, 87, 88, 89],
      "differential_diagnosis": [],
      "tests": ["akciğer grafisi", "tüberkülin deri testi", "balgam mikroskobik inceleme", "mide suyu kültürü"]
    },
    {
      "id": 20,
      "name": "Akciğer Tüberkülozu (Erişkin)",
      "icd10": "A15.0",
      "symptom_ids": [91, 92, 93, 94, 95, 96],
      "differential_diagnosis": [],
      "tests": ["akciğer grafisi", "balgam yayması", "balgam kültürü"]
    },
    {
      "id": 21,
      "name": "Akut Astım Atağı (Erişkin)",
      "icd10": "J45.9",
      "symptom_ids": [98, 99, 100, 101, 102],
      "differential_diagnosis": [],
      "tests": ["PEF", "oksijen satürasyonu"]
    },
    {
      "id": 22,
      "name": "Akut Astım Atağı (Çocuk)",
      "icd10": "J45.9",
      "symptom_ids": [104, 105, 106, 107, 108],
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
    }// ... diğer semptomlar  
  
  ]
}







////////////////////////

