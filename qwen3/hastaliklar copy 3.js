var hastaliklar = {
  "diseases": [
    {
      "id": 1,
      "name": "Anjina Pektoris",
      "icd10": "I20.9",
      "symptom_ids": [1, 2, 3, 4],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 4},
        {"type": "disease_id", "value": 40},
        {"type": "disease_id", "value": 41},
        {"type": "disease_id", "value": 42},
        {"type": "disease_id", "value": 43},
        {"type": "disease_id", "value": 44},
        {"type": "disease_id", "value": 45},
        {"type": "disease_id", "value": 46}
      ],
      "tests": ["EKG", "hemoglobin", "açlık kan şekeri", "kan kolesterol", "trigliserid", "akciğer grafisi"]
    },
    {
      "id": 2,
      "name": "Kararsız Anjina",
      "icd10": "I20.0",
      "symptom_ids": [1, 2, 3, 5],
      "differential_diagnosis": [{"type": "disease_id", "value": 4}],
      "tests": ["EKG", "hemoglobin", "açlık kan şekeri", "kan kolesterol", "trigliserid", "akciğer grafisi"]
    },
    {
      "id": 3,
      "name": "Stabil Anjina",
      "icd10": "I20.8",
      "symptom_ids": [1, 2, 3, 4],
      "differential_diagnosis": [{"type": "disease_id", "value": 4}],
      "tests": ["EKG", "hemoglobin", "açlık kan şekeri", "kan kolesterol", "trigliserid", "akciğer grafisi"]
    },
    {
      "id": 4,
      "name": "Akut Miyokard Enfarktüsü",
      "icd10": "I21.9",
      "symptom_ids": [1, 2, 3, 5, 6, 7],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 1},
        {"type": "disease_id", "value": 40},
        {"type": "disease_id", "value": 41},
        {"type": "disease_id", "value": 42},
        {"type": "disease_id", "value": 43},
        {"type": "disease_id", "value": 44},
        {"type": "disease_id", "value": 45},
        {"type": "disease_id", "value": 46}
      ],
      "tests": ["EKG", "hemoglobin", "açlık kan şekeri", "kan kolesterol", "trigliserid", "akciğer grafisi"]
    },
    {
      "id": 5,
      "name": "Hiperlipidemi",
      "icd10": "E78.5",
      "symptom_ids": [8],
      "differential_diagnosis": [],
      "tests": ["total kolesterol", "LDL-K", "HDL-K", "trigliserid"]
    },
    {
      "id": 6,
      "name": "Obezite",
      "icd10": "E66.9",
      "symptom_ids": [9],
      "differential_diagnosis": [],
      "tests": ["vücut kitle indeksi (VKİ)"]
    },
    {
      "id": 7,
      "name": "Metabolik Sendrom",
      "icd10": "E88.81",
      "symptom_ids": [9, 10, 11, 12, 13],
      "differential_diagnosis": [],
      "tests": ["bel çevresi ölçümü", "trigliserid", "HDL-K", "kan basıncı", "açlık kan şekeri"]
    },
    {
      "id": 8,
      "name": "Akne Vulgaris",
      "icd10": "L70.0",
      "symptom_ids": [14, 15, 16, 17],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 55},
        {"type": "disease_id", "value": 56},
        {"type": "disease_id", "value": 54},
        {"type": "text", "value": "İkinci dönem sifiliz püstülleri"},
        {"type": "text", "value": "İlaç akneleri"}
      ],
      "tests": []
    },
    {
      "id": 9,
      "name": "Akne Fulminans",
      "icd10": "L70.2",
      "symptom_ids": [14, 15, 18, 19, 20],
      "differential_diagnosis": [{"type": "disease_id", "value": 8}],
      "tests": []
    },
    {
      "id": 10,
      "name": "Atopik Dermatit",
      "icd10": "L20.9",
      "symptom_ids": [21, 22, 23, 24],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 13},
        {"type": "text", "value": "İmmün yetmezlik hastalıkları"}
      ],
      "tests": []
    },
    {
      "id": 11,
      "name": "Kontakt Dermatit",
      "icd10": "L23.9",
      "symptom_ids": [21, 22, 25, 26],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 10},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 50},
        {"type": "disease_id", "value": 25}
      ],
      "tests": []
    },
    {
      "id": 12,
      "name": "Seboreik Dermatit",
      "icd10": "L21.9",
      "symptom_ids": [27, 28, 29],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 10},
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 23}
      ],
      "tests": []
    },
    {
      "id": 13,
      "name": "Psöriyazis",
      "icd10": "L40.9",
      "symptom_ids": [30, 31, 32],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 10},
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 51},
        {"type": "disease_id", "value": 22}
      ],
      "tests": []
    },
    {
      "id": 14,
      "name": "Pitriyazis Rozasea",
      "icd10": "L42",
      "symptom_ids": [33, 34],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 48}
      ],
      "tests": []
    },
    {
      "id": 15,
      "name": "Egzema",
      "icd10": "L30.9",
      "symptom_ids": [21, 22, 23, 24, 25, 26],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 10},
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 25}
      ],
      "tests": []
    },
    {
      "id": 16,
      "name": "Ürtiker",
      "icd10": "L50.9",
      "symptom_ids": [35, 36, 37],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 59},
        {"type": "disease_id", "value": 60},
        {"type": "disease_id", "value": 57},
        {"type": "disease_id", "value": 58}
      ],
      "tests": []
    },
    {
      "id": 17,
      "name": "Anjiyoödem",
      "icd10": "T78.3",
      "symptom_ids": [38, 39, 40],
      "differential_diagnosis": [{"type": "disease_id", "value": 16}],
      "tests": []
    },
    {
      "id": 18,
      "name": "Tinea Kapitis",
      "icd10": "B35.0",
      "symptom_ids": [41, 42, 43, 44],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 23},
        {"type": "disease_id", "value": 48},
        {"type": "text", "value": "Alopesi areata"},
        {"type": "text", "value": "Trikotillomani"}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 19,
      "name": "Tinea Korporis",
      "icd10": "B35.3",
      "symptom_ids": [45, 46, 47],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 14}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 20,
      "name": "Tinea Pedis",
      "icd10": "B35.3",
      "symptom_ids": [48, 49, 50],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 11},
        {"type": "text", "value": "Hiperhidrozis"}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 21,
      "name": "Tinea Manum",
      "icd10": "B35.2",
      "symptom_ids": [48, 49, 50],
      "differential_diagnosis": [{"type": "disease_id", "value": 20}],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 22,
      "name": "Onikomikoz",
      "icd10": "B35.1",
      "symptom_ids": [51, 52, 53],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 51},
        {"type": "disease_id", "value": 15},
        {"type": "disease_id", "value": 26},
        {"type": "text", "value": "Travma"}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 23,
      "name": "Favus",
      "icd10": "B35.0",
      "symptom_ids": [41, 42, 54, 55],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 18},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 48},
        {"type": "text", "value": "Alopesi areata"},
        {"type": "text", "value": "Trikotillomani"}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 24,
      "name": "Kerion Celsi",
      "icd10": "B35.0",
      "symptom_ids": [56, 57, 58, 44],
      "differential_diagnosis": [{"type": "disease_id", "value": 18}],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 25,
      "name": "Pitriyazis Versikolor",
      "icd10": "B36.0",
      "symptom_ids": [59, 60, 61],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 19},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 14},
        {"type": "disease_id", "value": 48}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 26,
      "name": "Kandidiyaz",
      "icd10": "B37.9",
      "symptom_ids": [62, 63, 64],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 49},
        {"type": "disease_id", "value": 50},
        {"type": "text", "value": "Behçet Hastalığı"}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 27,
      "name": "Mukokutanöz Kandidiyaz",
      "icd10": "B37.2",
      "symptom_ids": [65, 66, 67],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 28},
        {"type": "disease_id", "value": 29},
        {"type": "disease_id", "value": 30}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 28,
      "name": "Oral Kandidiyaz (Pamukçuk)",
      "icd10": "B37.0",
      "symptom_ids": [68, 69, 70],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 53},
        {"type": "disease_id", "value": 51},
        {"type": "disease_id", "value": 48}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 29,
      "name": "Vajinal Kandidiyaz",
      "icd10": "B37.3",
      "symptom_ids": [71, 72, 73],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 52}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 30,
      "name": "Perianal Kandidiyaz",
      "icd10": "B37.2",
      "symptom_ids": [74, 75, 76],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 52}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 31,
      "name": "Paronişi",
      "icd10": "L03.0",
      "symptom_ids": [77, 78, 79],
      "differential_diagnosis": [],
      "tests": []
    },
    {
      "id": 32,
      "name": "Intertrigo",
      "icd10": "L30.4",
      "symptom_ids": [80, 81, 82],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 12},
        {"type": "disease_id", "value": 11},
        {"type": "disease_id", "value": 10}
      ],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 33,
      "name": "Erezyo Interdigitalis Blastomycetica",
      "icd10": "B35.3",
      "symptom_ids": [83, 84, 85],
      "differential_diagnosis": [{"type": "disease_id", "value": 20}],
      "tests": ["nativ preparat", "KOH mikroskobik inceleme"]
    },
    {
      "id": 34,
      "name": "Akut Romatizmal Ateş",
      "icd10": "I00",
      "symptom_ids": [86, 87, 88, 89, 90, 91],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 64},
        {"type": "disease_id", "value": 65},
        {"type": "disease_id", "value": 66},
        {"type": "disease_id", "value": 67},
        {"type": "text", "value": "Reaktif artrit"}
      ],
      "tests": ["ASO (antistreptolizin O)", "ESH", "CRP", "periferik yayma", "EKG", "boğaz kültürü", "ekokardiyografi", "telekardiyografi"]
    },
    {
      "id": 35,
      "name": "Romatizmal Kardit",
      "icd10": "I01.9",
      "symptom_ids": [92, 93, 94, 95],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ASO", "ESH", "CRP", "EKG", "ekokardiyografi", "telekardiyografi"]
    },
    {
      "id": 36,
      "name": "Poliartrit (Romatizmal)",
      "icd10": "I02.0",
      "symptom_ids": [96, 97, 98],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ASO", "ESH", "CRP"]
    },
    {
      "id": 37,
      "name": "Sydenham Koresi",
      "icd10": "I02.0",
      "symptom_ids": [99, 100],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ASO", "ESH", "CRP"]
    },
    {
      "id": 38,
      "name": "Eritema Marginatum",
      "icd10": "I00",
      "symptom_ids": [101, 102],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ASO", "ESH", "CRP"]
    },
    {
      "id": 39,
      "name": "Deri Altı Nodüller (Romatizmal)",
      "icd10": "I00",
      "symptom_ids": [103, 104],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ASO", "ESH", "CRP"]
    },
    {
      "id": 40,
      "name": "Aort Dissenksiyonu",
      "icd10": "I71.0",
      "symptom_ids": [105, 106, 107, 108],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 1},
        {"type": "disease_id", "value": 4}
      ],
      "tests": ["EKG", "akciğer grafisi"]
    },
    {
      "id": 41,
      "name": "Perikardit",
      "icd10": "I30.9",
      "symptom_ids": [109, 110, 111],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 1},
        {"type": "disease_id", "value": 4},
        {"type": "disease_id", "value": 44}
      ],
      "tests": ["EKG", "akciğer grafisi"]
    },
    {
      "id": 42,
      "name": "Pnömotoraks",
      "icd10": "J93.9",
      "symptom_ids": [112, 113, 114],
      "differential_diagnosis": [{"type": "disease_id", "value": 45}],
      "tests": ["akciğer grafisi"]
    },
    {
      "id": 43,
      "name": "Pulmoner Emboli",
      "icd10": "I26.9",
      "symptom_ids": [115, 116, 117, 118],
      "differential_diagnosis": [{"type": "disease_id", "value": 45}],
      "tests": ["D-dimer", "akciğer grafisi", "DVT değerlendirmesi"]
    },
    {
      "id": 44,
      "name": "Plörezit",
      "icd10": "J90",
      "symptom_ids": [119, 120, 121],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 45},
        {"type": "disease_id", "value": 41}
      ],
      "tests": ["akciğer grafisi"]
    },
    {
      "id": 45,
      "name": "Pnömoni",
      "icd10": "J18.9",
      "symptom_ids": [122, 123, 124, 125],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 43},
        {"type": "disease_id", "value": 44}
      ],
      "tests": ["akciğer grafisi", "tam kan sayımı"]
    },
    {
      "id": 46,
      "name": "Reflü Özofajit",
      "icd10": "K21.0",
      "symptom_ids": [126, 127, 128],
      "differential_diagnosis": [{"type": "disease_id", "value": 1}],
      "tests": []
    },
    {
      "id": 47,
      "name": "Kas İskelet Sistemi Ağrısı",
      "icd10": "M79.1",
      "symptom_ids": [129, 130],
      "differential_diagnosis": [],
      "tests": []
    },
    {
      "id": 48,
      "name": "Sifiliz (2. Dönem)",
      "icd10": "A51.3",
      "symptom_ids": [131, 132, 133],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 19},
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 25},
        {"type": "disease_id", "value": 14},
        {"type": "disease_id", "value": 28},
        {"type": "disease_id", "value": 53}
      ],
      "tests": ["VDRL/RPR", "FTA-ABS"]
    },
    {
      "id": 49,
      "name": "Behçet Hastalığı",
      "icd10": "M35.2",
      "symptom_ids": [134, 135, 136],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 26},
        {"type": "disease_id", "value": 53}
      ],
      "tests": []
    },
    {
      "id": 50,
      "name": "Herpes Simpleks",
      "icd10": "A60.9",
      "symptom_ids": [137, 138, 139],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 26},
        {"type": "disease_id", "value": 53}
      ],
      "tests": ["viral kültür", "PCR"]
    },
    {
      "id": 51,
      "name": "Liken Planus",
      "icd10": "L43.9",
      "symptom_ids": [140, 141, 142],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 13},
        {"type": "disease_id", "value": 28},
        {"type": "disease_id", "value": 48}
      ],
      "tests": []
    },
    {
      "id": 52,
      "name": "Liken Skleroatrofikus",
      "icd10": "L90.2",
      "symptom_ids": [143, 144, 145],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 29},
        {"type": "disease_id", "value": 30},
        {"type": "disease_id", "value": 11}
      ],
      "tests": []
    },
    {
      "id": 53,
      "name": "Aftöz Ülser",
      "icd10": "K12.0",
      "symptom_ids": [146, 147, 148],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 49},
        {"type": "disease_id", "value": 50},
        {"type": "disease_id", "value": 51},
        {"type": "disease_id", "value": 48}
      ],
      "tests": []
    },
    {
      "id": 54,
      "name": "Follikülit",
      "icd10": "L62",
      "symptom_ids": [149, 150],
      "differential_diagnosis": [{"type": "disease_id", "value": 8}],
      "tests": []
    },
    {
      "id": 55,
      "name": "Akne Rozasea",
      "icd10": "L71.9",
      "symptom_ids": [151, 152, 153],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 8},
        {"type": "disease_id", "value": 56}
      ],
      "tests": []
    },
    {
      "id": 56,
      "name": "Perioral Dermatit",
      "icd10": "L71.0",
      "symptom_ids": [154, 155, 156],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 8},
        {"type": "disease_id", "value": 55}
      ],
      "tests": []
    },
    {
      "id": 57,
      "name": "Eritema Multiforme",
      "icd10": "L51.9",
      "symptom_ids": [157, 158, 159],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 16},
        {"type": "disease_id", "value": 60}
      ],
      "tests": []
    },
    {
      "id": 58,
      "name": "Ürtikeryal Vaskülit",
      "icd10": "L95.9",
      "symptom_ids": [160, 161, 35],
      "differential_diagnosis": [{"type": "disease_id", "value": 16}],
      "tests": ["komplement düzeyleri", "ANCA", "CRP", "ESH"]
    },
    {
      "id": 59,
      "name": "Böcek Sokması Reaksiyonu",
      "icd10": "T78.4",
      "symptom_ids": [162, 163, 35],
      "differential_diagnosis": [{"type": "disease_id", "value": 16}],
      "tests": []
    },
    {
      "id": 60,
      "name": "Viral Döküntü",
      "icd10": "A63.0",
      "symptom_ids": [164, 165, 166],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 16},
        {"type": "disease_id", "value": 57}
      ],
      "tests": []
    },
    {
      "id": 61,
      "name": "Giardiazis",
      "icd10": "A07.1",
      "symptom_ids": [167, 168, 169],
      "differential_diagnosis": [],
      "tests": ["dışkıda Giardia kisti", "Lugol ile direkt inceleme"]
    },
    {
      "id": 62,
      "name": "Enterobius Vermicularis (Kıl Kurdu)",
      "icd10": "B80",
      "symptom_ids": [170, 171, 172],
      "differential_diagnosis": [],
      "tests": ["sellafon bant yöntemi"]
    },
    {
      "id": 63,
      "name": "Entamoeba Histolytica Enfeksiyonu",
      "icd10": "A06.9",
      "symptom_ids": [173, 174, 175],
      "differential_diagnosis": [],
      "tests": ["dışkıda trofozoit/kist", "serum fizyolojikte direkt bakı", "Lugol"]
    },
    {
      "id": 64,
      "name": "Juvenil Romatoid Artrit",
      "icd10": "M08.0",
      "symptom_ids": [176, 177, 178],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ESH", "CRP", "romatoid faktör", "ANA"]
    },
    {
      "id": 65,
      "name": "Sistemik Lupus Eritematozus",
      "icd10": "M32.9",
      "symptom_ids": [179, 180, 181, 182],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["ANA", "anti-dsDNA", "komplement (C3, C4)", "ESH", "CRP", "idrar analizi"]
    },
    {
      "id": 66,
      "name": "Septik Artrit",
      "icd10": "M00.9",
      "symptom_ids": [183, 184, 185],
      "differential_diagnosis": [
        {"type": "disease_id", "value": 34},
        {"type": "disease_id", "value": 64}
      ],
      "tests": ["eklem sıvısı analizi", "CRP", "ESH", "kan kültürü"]
    },
    {
      "id": 67,
      "name": "Akut Lösemi",
      "icd10": "C95.0",
      "symptom_ids": [186, 187, 188, 189],
      "differential_diagnosis": [{"type": "disease_id", "value": 34}],
      "tests": ["tam kan sayımı", "periferik yayma", "bone marrow aspirasyonu"]
    }
  ],
  "symptoms": [
  {
    "id": 1,
    "original_text": "göğüs ağrısı",
    "synonyms": ["prekordiyal ağrı", "sternal ağrı", "göğüs bölgesinde ağrı", "torasik ağrı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 2,
    "original_text": "baskı hissi",
    "synonyms": ["sıkışma hissi", "ağır baskı", "göğüste baskı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 3,
    "original_text": "kol/çene/boyuna yayılan ağrı",
    "synonyms": ["radyasyonlu ağrı", "irradiye ağrı", "yayılan göğüs ağrısı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 4,
    "original_text": "dinlenince geçen ağrı",
    "synonyms": ["eforla artan dinlenmeyle azalan ağrı", "stabil ağrı paterni"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 5,
    "original_text": "15 dakikadan uzun süren ağrı",
    "synonyms": ["uzun süreli göğüs ağrısı", "dinlenince geçmeyen ağrı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 6,
    "original_text": "terleme",
    "synonyms": ["diaforez", "aşırı terleme", "soğuk ter"],
    "category": "Genel"
  },
  {
    "id": 7,
    "original_text": "dispne",
    "synonyms": ["nefes darlığı", "solunum güçlüğü", "hışıltılı solunum"],
    "category": "Solunum"
  },
  {
    "id": 8,
    "original_text": "semptom yok",
    "synonyms": ["asemptomatik", "belirti vermeyen", "klinik bulgu yok"],
    "category": "Genel"
  },
  {
    "id": 9,
    "original_text": "vücut kitle indeksi yüksek",
    "synonyms": ["VKİ >30", "aşırı kilolu", "obez"],
    "category": "Endokrin"
  },
  {
    "id": 10,
    "original_text": "karın obezitesi",
    "synonyms": ["merkezi obezite", "viseral yağlanma", "bel çevresi geniş"],
    "category": "Endokrin"
  },
  {
    "id": 11,
    "original_text": "yüksek trigliserid",
    "synonyms": ["TG >150 mg/dl", "hipertrigliseridemi"],
    "category": "Endokrin"
  },
  {
    "id": 12,
    "original_text": "düşük HDL",
    "synonyms": ["HDL-K düşük", "HDL <40 mg/dl"],
    "category": "Endokrin"
  },
  {
    "id": 13,
    "original_text": "açlık kan şekeri yüksek",
    "synonyms": ["fasting glukoz >110 mg/dl", "glikemi yüksek"],
    "category": "Endokrin"
  },
  {
    "id": 14,
    "original_text": "komedon",
    "synonyms": ["siyah nokta", "beyaz nokta", "akne lezyonu"],
    "category": "Dermatolojik"
  },
  {
    "id": 15,
    "original_text": "papül/püstül",
    "synonyms": ["kırmızı kabarıklık", "irinli lezyon", "enflamatuar akne"],
    "category": "Dermatolojik"
  },
  {
    "id": 16,
    "original_text": "yağlı cilt",
    "synonyms": ["sebori", "sivilce", "yağlanma"],
    "category": "Dermatolojik"
  },
  {
    "id": 17,
    "original_text": "skar",
    "synonyms": ["iz", "leş", "postinflamatuar iz"],
    "category": "Dermatolojik"
  },
  {
    "id": 18,
    "original_text": "ateş",
    "synonyms": ["febril", "vücut ısısı yüksek", "pireksi"],
    "category": "Genel"
  },
  {
    "id": 19,
    "original_text": "artralji",
    "synonyms": ["eklem ağrısı", "poliartralji"],
    "category": "Kas-İskelet"
  },
  {
    "id": 20,
    "original_text": "genel durum bozukluğu",
    "synonyms": ["halsizlik", "bitkinlik", "malaise"],
    "category": "Genel"
  },
  {
    "id": 21,
    "original_text": "kaşıntı",
    "synonyms": ["pruritus", "kaşınma isteği", "deride kaşıntı"],
    "category": "Dermatolojik"
  },
  {
    "id": 22,
    "original_text": "kuru deri",
    "synonyms": ["kuruluk", "xerosis", "deri kuruluğu"],
    "category": "Dermatolojik"
  },
  {
    "id": 23,
    "original_text": "vezikül/sulantı",
    "synonyms": ["su toplaması", "erozyon", "eksuda"],
    "category": "Dermatolojik"
  },
  {
    "id": 24,
    "original_text": "fissür",
    "synonyms": ["deri çatlağı", "çatlak", "deri yarığı"],
    "category": "Dermatolojik"
  },
  {
    "id": 25,
    "original_text": "eritem",
    "synonyms": ["kızarıklık", "kızarıklık", "eritematöz plak"],
    "category": "Dermatolojik"
  },
  {
    "id": 26,
    "original_text": "kontakt sonrası reaksiyon",
    "synonyms": ["alerjen teması sonrası döküntü", "topikal irritasyon"],
    "category": "Dermatolojik"
  },
  {
    "id": 27,
    "original_text": "kepeklenme",
    "synonyms": ["skuama", "pullanma", "deri pullanması"],
    "category": "Dermatolojik"
  },
  {
    "id": 28,
    "original_text": "yağlı kepek",
    "synonyms": ["seborik skuama", "sarımsı kepek"],
    "category": "Dermatolojik"
  },
  {
    "id": 29,
    "original_text": "kaşınmayan kızarıklık",
    "synonyms": ["non-pruritik eritem", "hafif kızarıklık"],
    "category": "Dermatolojik"
  },
  {
    "id": 30,
    "original_text": "gümüş-beyaz skuamalar",
    "synonyms": ["kalın plaklar", "psöriatik plak"],
    "category": "Dermatolojik"
  },
  {
    "id": 31,
    "original_text": "kaşıntılı plak",
    "synonyms": ["pruritik plak", "kalınlaşmış deri"],
    "category": "Dermatolojik"
  },
  {
    "id": 32,
    "original_text": "koebner fenomeni",
    "synonyms": ["travma sonrası lezyon", "psöriyazis yayılması"],
    "category": "Dermatolojik"
  },
  {
    "id": 33,
    "original_text": "herald plak",
    "synonyms": ["ilk çıkan büyük lezyon", "ön plak"],
    "category": "Dermatolojik"
  },
  {
    "id": 34,
    "original_text": "hipopigmente makül",
    "synonyms": ["açık renkli leke", "pigment kaybı"],
    "category": "Dermatolojik"
  },
  {
    "id": 35,
    "original_text": "kaşıntılı ödemli plak",
    "synonyms": ["ürtiker", "kurdeşen", "wheal"],
    "category": "Dermatolojik"
  },
  {
    "id": 36,
    "original_text": "geçici döküntü",
    "synonyms": ["24 saatte kaybolan", "yer değiştirici döküntü"],
    "category": "Dermatolojik"
  },
  {
    "id": 37,
    "original_text": "basınca solan lezyon",
    "synonyms": ["transient wheal", "basınca bleaching"],
    "category": "Dermatolojik"
  },
  {
    "id": 38,
    "original_text": "dudak/dil şişliği",
    "synonyms": ["mukozal ödem", "derin dokuda şişlik"],
    "category": "KBB"
  },
  {
    "id": 39,
    "original_text": "solunum sıkıntısı",
    "synonyms": ["dispne", "stridor", "bronkospazm"],
    "category": "Solunum"
  },
  {
    "id": 40,
    "original_text": "larinks ödemi",
    "synonyms": ["boğaz şişliği", "hava yolu daralması"],
    "category": "KBB"
  },
  {
    "id": 41,
    "original_text": "saç dökülmesi",
    "synonyms": ["alopecia", "lokal saç kaybı", "saçsız alan"],
    "category": "Dermatolojik"
  },
  {
    "id": 42,
    "original_text": "kepekli saçlı deri",
    "synonyms": ["saçlı deride skuama", "mantarlı kepek"],
    "category": "Dermatolojik"
  },
  {
    "id": 43,
    "original_text": "kıl kırılması",
    "synonyms": ["kırık saç", "cansız saç"],
    "category": "Dermatolojik"
  },
  {
    "id": 44,
    "original_text": "iltihabi nodül",
    "synonyms": ["püstüler tümör", "kerion", "apse benzeri"],
    "category": "Dermatolojik"
  },
  {
    "id": 45,
    "original_text": "keskin sınırlı kırmızı halka",
    "synonyms": ["ringworm", "annüler plak", "merkezi açılma"],
    "category": "Dermatolojik"
  },
  {
    "id": 46,
    "original_text": "ortası iyileşmiş plak",
    "synonyms": ["aktif kenar", "periferik yayılma"],
    "category": "Dermatolojik"
  },
  {
    "id": 47,
    "original_text": "kaşıntılı mantar lezyonu",
    "synonyms": ["pruritik annüler döküntü", "mantar dairesi"],
    "category": "Dermatolojik"
  },
  {
    "id": 48,
    "original_text": "parmak arası eritem",
    "synonyms": ["interdigital kızarıklık", "ayak mantarı"],
    "category": "Dermatolojik"
  },
  {
    "id": 49,
    "original_text": "beyaz kabuk",
    "synonyms": ["makerasyon", "beyazlaşma", "deri soyulması"],
    "category": "Dermatolojik"
  },
  {
    "id": 50,
    "original_text": "sulantı",
    "synonyms": ["eksuda", "ıslak lezyon", "macerasyon"],
    "category": "Dermatolojik"
  },
  {
    "id": 51,
    "original_text": "tırnak kalınlaşması",
    "synonyms": ["hiperkeratoz", "subungual kalınlaşma"],
    "category": "Dermatolojik"
  },
  {
    "id": 52,
    "original_text": "tırnak rengi değişikliği",
    "synonyms": ["sararma", "esmerleşme", "disrenk"],
    "category": "Dermatolojik"
  },
  {
    "id": 53,
    "original_text": "tırnak kırılganlığı",
    "synonyms": ["kolay kırılma", "fragil tırnak"],
    "category": "Dermatolojik"
  },
  {
    "id": 54,
    "original_text": "sarı-yeşil krut",
    "synonyms": ["skutula", "godet", "mantar kabuğu"],
    "category": "Dermatolojik"
  },
  {
    "id": 55,
    "original_text": "kötü koku",
    "synonyms": ["fötör", "mantar kokusu"],
    "category": "Dermatolojik"
  },
  {
    "id": 56,
    "original_text": "püstüler tümör",
    "synonyms": ["apse", "iltihabi şişlik", "nodüler lezyon"],
    "category": "Dermatolojik"
  },
  {
    "id": 57,
    "original_text": "kalıcı alopesi",
    "synonyms": ["skarlı saç kaybı", "geri dönüşsüz alopecia"],
    "category": "Dermatolojik"
  },
  {
    "id": 58,
    "original_text": "ateşli inflamasyon",
    "synonyms": ["lokal ateş", "enflamatuvar ısı artışı"],
    "category": "Genel"
  },
  {
    "id": 59,
    "original_text": "sütlü kahverengi leke",
    "synonyms": ["hipopigmente makül", "pitriyazis versikolor lezyonu"],
    "category": "Dermatolojik"
  },
  {
    "id": 60,
    "original_text": "güneşle belirginleşen leke",
    "synonyms": ["UV ile hipopigmentasyon", "güneşten açık leke"],
    "category": "Dermatolojik"
  },
  {
    "id": 61,
    "original_text": "ince skuamalı makül",
    "synonyms": ["pullu leke", "hafif kepeklenme"],
    "category": "Dermatolojik"
  },
  {
    "id": 62,
    "original_text": "mukokutanöz tutulum",
    "synonyms": ["deri-mukoza birleşiminde lezyon", "mukozal mantar"],
    "category": "Dermatolojik"
  },
  {
    "id": 63,
    "original_text": "kaşıntılı eritem",
    "synonyms": ["pruritik kızarıklık", "mantar eritemi"],
    "category": "Dermatolojik"
  },
  {
    "id": 64,
    "original_text": "beyaz plak",
    "synonyms": ["pseudomembran", "mantar plağı"],
    "category": "Dermatolojik"
  },
  {
    "id": 65,
    "original_text": "ağız içinde beyaz plak",
    "synonyms": ["oral pamukçuk", "ağız mantarı"],
    "category": "KBB"
  },
  {
    "id": 66,
    "original_text": "dil üstünde gri plak",
    "synonyms": ["lingual mantar", "dilde zarlı plak"],
    "category": "KBB"
  },
  {
    "id": 67,
    "original_text": "ağrı ve yanma",
    "synonyms": ["mukozal hassasiyet", "oral discomfort"],
    "category": "KBB"
  },
  {
    "id": 68,
    "original_text": "kolay silinebilir beyaz plak",
    "synonyms": ["pamukçuk", "kazeöz membran"],
    "category": "KBB"
  },
  {
    "id": 69,
    "original_text": "altta eritematöz mukoza",
    "synonyms": ["temizlendikten sonra kızarıklık", "bazal eritem"],
    "category": "KBB"
  },
  {
    "id": 70,
    "original_text": "emzirme güçlüğü",
    "synonyms": ["beslenme sırasında ağrılı bebek", "emmede direnç"],
    "category": "KBB"
  },
  {
    "id": 71,
    "original_text": "vajinal akıntı",
    "synonyms": ["süt kesiği", "beyaz akıntı", "kaşıntılı akıntı"],
    "category": "Jinekolojik"
  },
  {
    "id": 72,
    "original_text": "vajende kızarıklık",
    "synonyms": ["vulvovajinal eritem", "mukozal inflamasyon"],
    "category": "Jinekolojik"
  },
  {
    "id": 73,
    "original_text": "vajinal kaşıntı",
    "synonyms": ["pruritus vulvae", "vajinal pruritus"],
    "category": "Jinekolojik"
  },
  {
    "id": 74,
    "original_text": "anüs çevresi kaşıntı",
    "synonyms": ["perianal pruritus", "anal kaşıntı"],
    "category": "Gastrointestinal"
  },
  {
    "id": 75,
    "original_text": "anüs çevresi beyaz lezyon",
    "synonyms": ["perianal eritem", "makul eritem"],
    "category": "Gastrointestinal"
  },
  {
    "id": 76,
    "original_text": "masere görünüm",
    "synonyms": ["ıslak eritem", "macerasyon"],
    "category": "Dermatolojik"
  },
  {
    "id": 77,
    "original_text": "tırnak çevresi şişlik",
    "synonyms": ["paronikiyum inflamasyonu", "perioniks"],
    "category": "Dermatolojik"
  },
  {
    "id": 78,
    "original_text": "kırmızılık",
    "synonyms": ["eritem", "lokal kızarıklık"],
    "category": "Dermatolojik"
  },
  {
    "id": 79,
    "original_text": "ağrılı şişlik",
    "synonyms": ["dolor", "lokal ağrı"],
    "category": "Dermatolojik"
  },
  {
    "id": 80,
    "original_text": "kasık altı eritem",
    "synonyms": ["intertriginöz bölge", "katlama eritemi"],
    "category": "Dermatolojik"
  },
  {
    "id": 81,
    "original_text": "eksuda",
    "synonyms": ["ıslak bölge", "sulantı"],
    "category": "Dermatolojik"
  },
  {
    "id": 82,
    "original_text": "keskin sınırlı plak",
    "synonyms": ["net sınırlı eritem", "well-demarcated"],
    "category": "Dermatolojik"
  },
  {
    "id": 83,
    "original_text": "el ayak parmak arası eritem",
    "synonyms": ["interdigital eritem", "blastomycetica"],
    "category": "Dermatolojik"
  },
  {
    "id": 84,
    "original_text": "beyaz kabuklu plak",
    "synonyms": ["makerase", "beyazlaşma"],
    "category": "Dermatolojik"
  },
  {
    "id": 85,
    "original_text": "nemli görünüm",
    "synonyms": ["macerasyon", "ıslak deri"],
    "category": "Dermatolojik"
  },
  {
    "id": 86,
    "original_text": "tonsillofarenjit öyküsü",
    "synonyms": ["boğaz enfeksiyonu geçmişi", "streptokokal faranjit"],
    "category": "KBB"
  },
  {
    "id": 87,
    "original_text": "poliartrit",
    "synonyms": ["gezici eklem ağrısı", "migratuvar artrit"],
    "category": "Kas-İskelet"
  },
  {
    "id": 88,
    "original_text": "kardit",
    "synonyms": ["kalp üfürümü", "mitral yetmezlik", "perikardit"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 89,
    "original_text": "eritema marginatum",
    "synonyms": ["gövde döküntüsü", "dalgalı kenarlı eritem"],
    "category": "Dermatolojik"
  },
  {
    "id": 90,
    "original_text": "deri altı nodül",
    "synonyms": ["subkutan nodül", "ekstansör yüz nodülü"],
    "category": "Dermatolojik"
  },
  {
    "id": 91,
    "original_text": "Sydenham koresi",
    "synonyms": ["koreiform hareket", "involunter hareket"],
    "category": "Nörolojik"
  },
  {
    "id": 92,
    "original_text": "taşikardi",
    "synonyms": ["hızlı nabız", "kalp hızı artışı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 93,
    "original_text": "üfürüm",
    "synonyms": ["kardiyak üfürüm", "valvüler yetmezlik sesi"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 94,
    "original_text": "perikardit sesi",
    "synonyms": ["perikardiyal frotman", "sürtünme sesi"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 95,
    "original_text": "kalp yetmezliği",
    "synonyms": ["kardiyak dekompanzasyon", "pulmoner konjesyon"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 96,
    "original_text": "diz/ankle tutulumu",
    "synonyms": ["büyük eklem artriti", "simetrik poliartrit"],
    "category": "Kas-İskelet"
  },
  {
    "id": 97,
    "original_text": "kardiyomegali",
    "synonyms": ["kalp büyümesi", "kardiyak genişleme"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 98,
    "original_text": "ESH yüksekliği",
    "synonyms": ["sedimentasyon artışı", "CRP pozitifliği"],
    "category": "Genel"
  },
  {
    "id": 99,
    "original_text": "involunter hareketler",
    "synonyms": ["kore", "hareket kontrol kaybı"],
    "category": "Nörolojik"
  },
  {
    "id": 100,
    "original_text": "tonsilofarenjitten 1-6 ay sonra başlangıç",
    "synonyms": ["gecikmiş nörolojik semptom", "post-streptokokal kore"],
    "category": "Nörolojik"
  },
  {
    "id": 101,
    "original_text": "gövde iç yüz eritemi",
    "synonyms": ["kol iç yüzü döküntüsü", "gövde dalgası"],
    "category": "Dermatolojik"
  },
  {
    "id": 102,
    "original_text": "dalgalı kenarlı döküntü",
    "synonyms": ["marginatum görünüm", "serpiginöz döküntü"],
    "category": "Dermatolojik"
  },
  {
    "id": 103,
    "original_text": "ekstansör yüz nodülü",
    "synonyms": ["el bileği nodülü", "tendon yapışma nodülü"],
    "category": "Dermatolojik"
  },
  {
    "id": 104,
    "original_text": "ağrısız sert nodül",
    "synonyms": ["subkutan fibrozis", "indolent nodül"],
    "category": "Dermatolojik"
  },
  {
    "id": 105,
    "original_text": "bıçak saplanır tarzda ağrı",
    "synonyms": ["ani şiddetli ağrı", "yırtıcı ağrı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 106,
    "original_text": "sırta yayılan ağrı",
    "synonyms": ["interskapüler ağrı", "sırt radyasyonu"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 107,
    "original_text": "nörolojik defisit",
    "synonyms": ["felç", "parestezi", "duyu kaybı"],
    "category": "Nörolojik"
  },
  {
    "id": 108,
    "original_text": "kan basıncı farkı",
    "synonyms": ["kol arası basınç farkı", "periferik nabız farklılığı"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 109,
    "original_text": "oturup öne eğilmekle azalan ağrı",
    "synonyms": ["perikardit pozisyonu", "rahatlatıcı pozisyon"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 110,
    "original_text": "perikardiyal frotman",
    "synonyms": ["sürtünme sesi", "perikard sesi"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 111,
    "original_text": "ateş",
    "synonyms": ["febril", "pireksi"],
    "category": "Genel"
  },
  {
    "id": 112,
    "original_text": "tek taraflı göğüs ağrısı",
    "synonyms": ["unilateral torasik ağrı", "pleuritik ağrı"],
    "category": "Solunum"
  },
  {
    "id": 113,
    "original_text": "nefes almakla artan ağrı",
    "synonyms": ["pleuritik karakter", "solunumla artan ağrı"],
    "category": "Solunum"
  },
  {
    "id": 114,
    "original_text": "solunum seslerinde azalma",
    "synonyms": ["hipoventilasyon", "hava girişi azalması"],
    "category": "Solunum"
  },
  {
    "id": 115,
    "original_text": "hemoptizi",
    "synonyms": ["kanlı balgam", "pulmoner kanama"],
    "category": "Solunum"
  },
  {
    "id": 116,
    "original_text": "takipne",
    "synonyms": ["hızlı solunum", "dispne"],
    "category": "Solunum"
  },
  {
    "id": 117,
    "original_text": "derin ven trombozu",
    "synonyms": ["bacak şişliği", "DVT"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 118,
    "original_text": "taşikardi",
    "synonyms": ["hızlı nabız", "sinüs taşikardisi"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 119,
    "original_text": "yan ağrısı",
    "synonyms": ["pleuritik ağrı", "lateral torasik ağrı"],
    "category": "Solunum"
  },
  {
    "id": 120,
    "original_text": "plevral frotman",
    "synonyms": ["sürtünme sesi", "pleura sesi"],
    "category": "Solunum"
  },
  {
    "id": 121,
    "original_text": "ral",
    "synonyms": ["rales", "pulmoner krepitan"],
    "category": "Solunum"
  },
  {
    "id": 122,
    "original_text": "ateş",
    "synonyms": ["pireksi", "vücut ısısı artışı"],
    "category": "Genel"
  },
  {
    "id": 123,
    "original_text": "öksürük",
    "synonyms": ["balgamlı öksürük", "kuru öksürük"],
    "category": "Solunum"
  },
  {
    "id": 124,
    "original_text": "göğüs ağrısı",
    "synonyms": ["pleuritik ağrı", "solunumla artan ağrı"],
    "category": "Solunum"
  },
  {
    "id": 125,
    "original_text": "dispne",
    "synonyms": ["nefes darlığı", "solunum güçlüğü"],
    "category": "Solunum"
  },
  {
    "id": 126,
    "original_text": "yemekten sonra yanma",
    "synonyms": ["postprandiyal pirosis", "mide ekşimesi"],
    "category": "Gastrointestinal"
  },
  {
    "id": 127,
    "original_text": "yatınca artan yanma",
    "synonyms": ["rekumbent pozisyonda artan GER", "nocturnal reflü"],
    "category": "Gastrointestinal"
  },
  {
    "id": 128,
    "original_text": "substernal yanma",
    "synonyms": ["göğüs arkası yanma", "özofageal yanma"],
    "category": "Gastrointestinal"
  },
  {
    "id": 129,
    "original_text": "palpasyonla artan ağrı",
    "synonyms": ["mekanik ağrı", "lokalize kas ağrısı"],
    "category": "Kas-İskelet"
  },
  {
    "id": 130,
    "original_text": "hareketle artan ağrı",
    "synonyms": ["fonksiyonel ağrı", "mobiliteyle artan ağrı"],
    "category": "Kas-İskelet"
  },
  {
    "id": 131,
    "original_text": "ikinci dönem sifiliz döküntüsü",
    "synonyms": ["palmoplantar döküntü", "generalize makülopapüler döküntü"],
    "category": "Dermatolojik"
  },
  {
    "id": 132,
    "original_text": "ağrısız ülser",
    "synonyms": ["şankr", "primer sifiliz lezyonu"],
    "category": "Dermatolojik"
  },
  {
    "id": 133,
    "original_text": "lenfadenopati",
    "synonyms": ["lenf bezi şişliği", "regional LAP"],
    "category": "Genel"
  },
  {
    "id": 134,
    "original_text": "oral aft",
    "synonyms": ["ağız ülseri", "rekürren aft"],
    "category": "KBB"
  },
  {
    "id": 135,
    "original_text": "genital ülser",
    "synonyms": ["vajinal aft", "penil ülser"],
    "category": "Jinekolojik"
  },
  {
    "id": 136,
    "original_text": "uveit",
    "synonyms": ["göz inflamasyonu", "irit"],
    "category": "Göz"
  },
  {
    "id": 137,
    "original_text": "vezikül",
    "synonyms": ["su dolu kabarcık", "herpetik vezikül"],
    "category": "Dermatolojik"
  },
  {
    "id": 138,
    "original_text": "ağrılı döküntü",
    "synonyms": ["doloröz lezyon", "neuralji"],
    "category": "Dermatolojik"
  },
  {
    "id": 139,
    "original_text": "gruplaşmış vezikül",
    "synonyms": ["herpetik küme", "vesiküler grup"],
    "category": "Dermatolojik"
  },
  {
    "id": 140,
    "original_text": "morumsu plak",
    "synonyms": ["viyole plak", "retiküler döküntü"],
    "category": "Dermatolojik"
  },
  {
    "id": 141,
    "original_text": "kaşıntılı olmayan lezyon",
    "synonyms": ["non-pruritik plak", "ağrılı plak"],
    "category": "Dermatolojik"
  },
  {
    "id": 142,
    "original_text": "ağız mukozası lezyonu",
    "synonyms": ["lingual erozyon", "bukkal plak"],
    "category": "KBB"
  },
  {
    "id": 143,
    "original_text": "vajinal daralma",
    "synonyms": ["stenoz", "mukozal atrofi"],
    "category": "Jinekolojik"
  },
  {
    "id": 144,
    "original_text": "beyaz atrofik plak",
    "synonyms": ["sklerotik lezyon", "porcelain-white"],
    "category": "Dermatolojik"
  },
  {
    "id": 145,
    "original_text": "kaşıntı",
    "synonyms": ["pruritus", "kaşınma"],
    "category": "Dermatolojik"
  },
  {
    "id": 146,
    "original_text": "ağrılı oral ülser",
    "synonyms": ["nokturnal ağız yarası", "rekürren aft"],
    "category": "KBB"
  },
  {
    "id": 147,
    "original_text": "sığ ülser",
    "synonyms": ["superficial erozyon", "mukozal defekt"],
    "category": "KBB"
  },
  {
    "id": 148,
    "original_text": "sarı tabanlı ülser",
    "synonyms": ["fibrin kaplı ülser", "eksuda varlığı"],
    "category": "KBB"
  },
  {
    "id": 149,
    "original_text": "kıllı follikül etrafı kızarıklık",
    "synonyms": ["folliküler papül", "follikülit"],
    "category": "Dermatolojik"
  },
  {
    "id": 150,
    "original_text": "püstül",
    "synonyms": ["irinli follikül", "folliküler apse"],
    "category": "Dermatolojik"
  },
  {
    "id": 151,
    "original_text": "yüzde eritem",
    "synonyms": ["merkezi yüz kızarıklığı", "butterfly eritem"],
    "category": "Dermatolojik"
  },
  {
    "id": 152,
    "original_text": "telanjiektazi",
    "synonyms": ["kılcal damar genişlemesi", "damarsal rozasea"],
    "category": "Dermatolojik"
  },
  {
    "id": 153,
    "original_text": "papül/püstül",
    "synonyms": ["inflamatuar rozasea", "papülopüstüler tip"],
    "category": "Dermatolojik"
  },
  {
    "id": 154,
    "original_text": "ağız çevresi döküntü",
    "synonyms": ["perioral eritem", "ağız kenarı egzema"],
    "category": "Dermatolojik"
  },
  {
    "id": 155,
    "original_text": "kaşıntı",
    "synonyms": ["pruritus", "kaşınma"],
    "category": "Dermatolojik"
  },
  {
    "id": 156,
    "original_text": "kuru skuamalı plak",
    "synonyms": ["perioral skuama", "pullanma"],
    "category": "Dermatolojik"
  },
  {
    "id": 157,
    "original_text": "hedef lezyon",
    "synonyms": ["target lesion", "iris lezyonu"],
    "category": "Dermatolojik"
  },
  {
    "id": 158,
    "original_text": "merkezi vezikül",
    "synonyms": ["bullöz merkez", "nekrotik merkez"],
    "category": "Dermatolojik"
  },
  {
    "id": 159,
    "original_text": "mukozal tutulum",
    "synonyms": ["ağız döküntüsü", "konjonktival lezyon"],
    "category": "KBB"
  },
  {
    "id": 160,
    "original_text": "24 saatten uzun süren döküntü",
    "synonyms": ["persistan ürtiker", "non-blanching"],
    "category": "Dermatolojik"
  },
  {
    "id": 161,
    "original_text": "basınca solmayan lezyon",
    "synonyms": ["vaskülitik döküntü", "purpura"],
    "category": "Dermatolojik"
  },
  {
    "id": 162,
    "original_text": "ısırık yeri",
    "synonyms": ["ponksiyon noktası", "merkezi nekroz"],
    "category": "Dermatolojik"
  },
  {
    "id": 163,
    "original_text": "lokal şişlik",
    "synonyms": ["lokal ödem", "reaktif enflamasyon"],
    "category": "Dermatolojik"
  },
  {
    "id": 164,
    "original_text": "viral prodrom",
    "synonyms": ["ateş, halsizlik", "viral sendrom"],
    "category": "Genel"
  },
  {
    "id": 165,
    "original_text": "makülopapüler döküntü",
    "synonyms": ["viral egzantem", "genel viral döküntü"],
    "category": "Dermatolojik"
  },
  {
    "id": 166,
    "original_text": "ateşli döküntü",
    "synonyms": ["febril egzantem", "infeksiyöz döküntü"],
    "category": "Dermatolojik"
  },
  {
    "id": 167,
    "original_text": "ishal",
    "synonyms": ["sulu dışkılama", "diyare"],
    "category": "Gastrointestinal"
  },
  {
    "id": 168,
    "original_text": "karın ağrısı",
    "synonyms": ["abdominal kolik", "gastrointestinal ağrı"],
    "category": "Gastrointestinal"
  },
  {
    "id": 169,
    "original_text": "bulantı/kusma",
    "synonyms": ["mide bulantısı", "emet"],
    "category": "Gastrointestinal"
  },
  {
    "id": 170,
    "original_text": "anal kaşıntı",
    "synonyms": ["pruritus ani", "gece kaşıntısı"],
    "category": "Gastrointestinal"
  },
  {
    "id": 171,
    "original_text": "perianal kazıntı",
    "synonyms": ["gece kaşıntısı", "perianal irritasyon"],
    "category": "Gastrointestinal"
  },
  {
    "id": 172,
    "original_text": "uyku bozukluğu",
    "synonyms": ["insomnia", "uyku sırasında kaşıntı"],
    "category": "Psikiyatrik"
  },
  {
    "id": 173,
    "original_text": "kanlı dışkılama",
    "synonyms": ["hematokezya", "dizenteri"],
    "category": "Gastrointestinal"
  },
  {
    "id": 174,
    "original_text": "mukuslu dışkılama",
    "synonyms": ["mukus varlığı", "mukoid diyare"],
    "category": "Gastrointestinal"
  },
  {
    "id": 175,
    "original_text": "karın ağrısı",
    "synonyms": ["kolik", "abdominal spazm"],
    "category": "Gastrointestinal"
  },
  {
    "id": 176,
    "original_text": "sabah tutukluğu",
    "synonyms": ["matinal rijidite", "eklem sertliği"],
    "category": "Kas-İskelet"
  },
  {
    "id": 177,
    "original_text": "simetrik poliartrit",
    "synonyms": ["el bileği tutulumu", "metakarpofalangeal artrit"],
    "category": "Kas-İskelet"
  },
  {
    "id": 178,
    "original_text": "eklem şişliği",
    "synonyms": ["sinovit", "artros"],
    "category": "Kas-İskelet"
  },
  {
    "id": 179,
    "original_text": "kelebek döküntüsü",
    "synonyms": ["malar eritem", "butterfly rash"],
    "category": "Dermatolojik"
  },
  {
    "id": 180,
    "original_text": "fotosensitivite",
    "synonyms": ["güneş hassasiyeti", "UV ile alevlenme"],
    "category": "Dermatolojik"
  },
  {
    "id": 181,
    "original_text": "renal tutulum",
    "synonyms": ["proteinüri", "glomerülonefrit"],
    "category": "Üriner"
  },
  {
    "id": 182,
    "original_text": "serozit",
    "synonyms": ["pleurit", "perikardit"],
    "category": "Kardiyovasküler"
  },
  {
    "id": 183,
    "original_text": "akut eklem ağrısı",
    "synonyms": ["monoartrit", "ateşli eklem"],
    "category": "Kas-İskelet"
  },
  {
    "id": 184,
    "original_text": "eklemde şişlik",
    "synonyms": ["efüzyon", "artros"],
    "category": "Kas-İskelet"
  },
  {
    "id": 185,
    "original_text": "ateş",
    "synonyms": ["pireksi", "febril"],
    "category": "Genel"
  },
  {
    "id": 186,
    "original_text": "halsizlik",
    "synonyms": ["asteni", "bitkinlik"],
    "category": "Genel"
  },
  {
    "id": 187,
    "original_text": "ateş",
    "synonyms": ["pireksi", "febril"],
    "category": "Genel"
  },
  {
    "id": 188,
    "original_text": "kanama",
    "synonyms": ["peteşi", "ekimoz", "epistaksis"],
    "category": "Genel"
  },
  {
    "id": 189,
    "original_text": "anemi",
    "synonyms": ["pallor", "hemoglobin düşüklüğü"],
    "category": "Genel"
  }
]

}