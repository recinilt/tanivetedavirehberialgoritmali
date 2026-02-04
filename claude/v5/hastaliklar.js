var hastaliklar = {
  "diseases": [
    {
      "id": 1,
      "name": "Akne Vulgaris",
      "icd10": "L70.0",
      "symptom_ids": [
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        56
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Rozasea"
        },
        {
          "type": "disease_name",
          "value": "Perioral Dermatit"
        },
        {
          "type": "disease_name",
          "value": "Folikülit"
        },
        {
          "type": "disease_name",
          "value": "Pityrosporum Foliküliti"
        },
        {
          "type": "disease_name",
          "value": "Demodikoz"
        }
      ],
      "tests": [],
      "synonyms": [
        "sivilce",
        "ergenlik sivilcesi",
        "akne"
      ]
    },
    {
      "id": 2,
      "name": "Tinea Kapitis",
      "icd10": "B35.0",
      "symptom_ids": [
        45,
        46,
        42,
        37,
        36,
        60
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 3
        },
        {
          "type": "disease_id",
          "value": 8
        },
        {
          "type": "disease_name",
          "value": "Seboreik Dermatit"
        },
        {
          "type": "disease_name",
          "value": "Psoriazis"
        },
        {
          "type": "disease_name",
          "value": "Alopecia Areata"
        },
        {
          "type": "disease_name",
          "value": "Trikotilomani"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "saç mantarı",
        "saçkıran",
        "scalp ringworm",
        "dermatophytosis capitis"
      ]
    },
    {
      "id": 3,
      "name": "Favus",
      "icd10": "B35.0",
      "symptom_ids": [
        45,
        42,
        60,
        37,
        36
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 2
        },
        {
          "type": "disease_name",
          "value": "Seboreik Dermatit"
        },
        {
          "type": "disease_name",
          "value": "Psoriazis"
        },
        {
          "type": "disease_name",
          "value": "İmpetigo"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "favus",
        "bal peteği mantarı",
        "tinea favosa"
      ]
    },
    {
      "id": 4,
      "name": "Tinea Pedis",
      "icd10": "B35.3",
      "symptom_ids": [
        37,
        42,
        36,
        39,
        57,
        46
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 9
        },
        {
          "type": "disease_id",
          "value": 8
        },
        {
          "type": "disease_id",
          "value": 10
        },
        {
          "type": "disease_name",
          "value": "Psoriazis"
        },
        {
          "type": "disease_name",
          "value": "Eritrazma"
        },
        {
          "type": "disease_name",
          "value": "Dishidrotik Egzama"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "ayak mantarı",
        "athlete's foot",
        "dermatophytosis pedis"
      ]
    },
    {
      "id": 5,
      "name": "Tinea Korporis",
      "icd10": "B35.4",
      "symptom_ids": [
        48,
        36,
        37,
        42,
        59
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 9
        },
        {
          "type": "disease_id",
          "value": 8
        },
        {
          "type": "disease_id",
          "value": 7
        },
        {
          "type": "disease_name",
          "value": "Psoriazis"
        },
        {
          "type": "disease_name",
          "value": "Pitriyazis Rozea"
        },
        {
          "type": "disease_name",
          "value": "Granuloma Annulare"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "vücut mantarı",
        "halka şeklinde mantar",
        "ringworm"
      ]
    },
    {
      "id": 6,
      "name": "Onikomikoz",
      "icd10": "B35.1",
      "symptom_ids": [
        47,
        42,
        37
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Tırnak Psoriazisi"
        },
        {
          "type": "disease_name",
          "value": "Tırnak Travması"
        },
        {
          "type": "disease_name",
          "value": "Liken Planus"
        },
        {
          "type": "disease_name",
          "value": "Sarı Tırnak Sendromu"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "tırnak mantarı",
        "tinea unguium",
        "dermatophytic onychomycosis"
      ]
    },
    {
      "id": 7,
      "name": "Pitriyazis Versikolor",
      "icd10": "B36.0",
      "symptom_ids": [
        50,
        51,
        42,
        37
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 5
        },
        {
          "type": "disease_name",
          "value": "Vitiligo"
        },
        {
          "type": "disease_name",
          "value": "Pitriyazis Rozea"
        },
        {
          "type": "disease_name",
          "value": "Pitriyazis Alba"
        },
        {
          "type": "disease_name",
          "value": "Seboreik Dermatit"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "kepek mantarı",
        "tinea versicolor",
        "pityriasis versicolor"
      ]
    },
    {
      "id": 8,
      "name": "Atopik Dermatit",
      "icd10": "L20",
      "symptom_ids": [
        37,
        36,
        55,
        42,
        43,
        44,
        39
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 9
        },
        {
          "type": "disease_name",
          "value": "Seboreik Dermatit"
        },
        {
          "type": "disease_name",
          "value": "Psoriazis"
        },
        {
          "type": "disease_name",
          "value": "Skabiyez"
        },
        {
          "type": "disease_name",
          "value": "Nummüler Dermatit"
        }
      ],
      "tests": [],
      "synonyms": [
        "atopik egzama",
        "egzama",
        "alerjik egzama",
        "eczema"
      ]
    },
    {
      "id": 9,
      "name": "Kontakt Dermatit",
      "icd10": "L23-L25",
      "symptom_ids": [
        36,
        37,
        39,
        40,
        42,
        44
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 8
        },
        {
          "type": "disease_name",
          "value": "Seboreik Dermatit"
        },
        {
          "type": "disease_name",
          "value": "Psoriazis"
        },
        {
          "type": "disease_name",
          "value": "Skabiyez"
        },
        {
          "type": "disease_id",
          "value": 5
        }
      ],
      "tests": [],
      "synonyms": [
        "temas dermatiti",
        "alerjik kontakt dermatit",
        "irritan dermatit"
      ]
    },
    {
      "id": 10,
      "name": "Kandidiyaz (Deri ve Tırnak)",
      "icd10": "B37.2",
      "symptom_ids": [
        36,
        37,
        42,
        39,
        46
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 4
        },
        {
          "type": "disease_id",
          "value": 5
        },
        {
          "type": "disease_id",
          "value": 8
        },
        {
          "type": "disease_name",
          "value": "İntertrigo"
        },
        {
          "type": "disease_name",
          "value": "Eritrazma"
        }
      ],
      "tests": [
        "nativ preparat"
      ],
      "synonyms": [
        "kandida enfeksiyonu",
        "mantar enfeksiyonu",
        "candidiasis"
      ]
    },
    {
      "id": 11,
      "name": "Ürtiker",
      "icd10": "L50.0",
      "symptom_ids": [
        48,
        37,
        49,
        36
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 9
        },
        {
          "type": "disease_name",
          "value": "Anafilaksi"
        },
        {
          "type": "disease_name",
          "value": "Ürtikeryal Vaskülit"
        },
        {
          "type": "disease_name",
          "value": "Eritema Multiforme"
        },
        {
          "type": "disease_name",
          "value": "İlaç Döküntüsü"
        }
      ],
      "tests": [],
      "synonyms": [
        "kurdeşen",
        "hive",
        "urticaria"
      ]
    },
    {
      "id": 12,
      "name": "Akut Romatizmal Ateş",
      "icd10": "I00",
      "symptom_ids": [
        1,
        356,
        357,
        82,
        120,
        38
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 76
        },
        {
          "type": "disease_name",
          "value": "Juvenil İdiyopatik Artrit"
        },
        {
          "type": "disease_name",
          "value": "Reaktif Artrit"
        },
        {
          "type": "disease_name",
          "value": "İnfektif Endokardit"
        },
        {
          "type": "disease_id",
          "value": 78
        }
      ],
      "tests": [
        "tam kan sayımı",
        "periferik yayma",
        "ESH",
        "CRP",
        "ASO",
        "EKG",
        "telekardiyografi",
        "ekokardiyografi"
      ],
      "synonyms": [
        "romatizma ateşi",
        "akut eklem romatizması",
        "rheumatic fever"
      ]
    },
    {
      "id": 13,
      "name": "Anjina Pektoris",
      "icd10": "I20.0",
      "symptom_ids": [
        81,
        83,
        90,
        91,
        92,
        82
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 17
        },
        {
          "type": "disease_name",
          "value": "Aort Diseksiyonu"
        },
        {
          "type": "disease_id",
          "value": 56
        },
        {
          "type": "disease_name",
          "value": "Perikardit"
        },
        {
          "type": "disease_id",
          "value": 18
        },
        {
          "type": "disease_name",
          "value": "Özofajit"
        },
        {
          "type": "disease_name",
          "value": "Kostokondrit"
        }
      ],
      "tests": [
        "EKG",
        "hemoglobin",
        "açlık kan şekeri",
        "kan kolesterol",
        "trigliserid",
        "akciğer grafisi"
      ],
      "synonyms": [
        "göğüs ağrısı",
        "angina",
        "koroner arter hastalığı belirtisi"
      ]
    },
    {
      "id": 14,
      "name": "Hiperlipidemi",
      "icd10": "E78.5",
      "symptom_ids": [],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_id",
          "value": 43
        },
        {
          "type": "disease_name",
          "value": "Nefrotik Sendrom"
        },
        {
          "type": "disease_name",
          "value": "Kolestaz"
        },
        {
          "type": "disease_name",
          "value": "Ailevi Hiperlipidemi"
        }
      ],
      "tests": [
        "kan lipid profili",
        "total kolesterol",
        "LDL-K",
        "HDL-K",
        "trigliserid",
        "transaminazlar"
      ],
      "synonyms": [
        "yüksek kolesterol",
        "dislipidemi",
        "hiperkolesterolemi"
      ]
    },
    {
      "id": 15,
      "name": "Hipertansiyon",
      "icd10": "I10",
      "symptom_ids": [
        191,
        195,
        83,
        82,
        88
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Feokromositoma"
        },
        {
          "type": "disease_name",
          "value": "Primer Hiperaldosteronizm"
        },
        {
          "type": "disease_name",
          "value": "Renal Arter Stenozu"
        },
        {
          "type": "disease_name",
          "value": "Cushing Sendromu"
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_id",
          "value": 70
        }
      ],
      "tests": [
        "tam idrar incelemesi",
        "potasyum",
        "sodyum",
        "klor",
        "BUN",
        "kreatinin",
        "ürik asit",
        "kan şekeri",
        "total kolesterol",
        "HDL kolesterol",
        "LDL-Kolesterol",
        "trigliserid",
        "EKG",
        "telekardiyogram"
      ],
      "synonyms": [
        "yüksek tansiyon",
        "kan basıncı yüksekliği",
        "HT"
      ]
    },
    {
      "id": 16,
      "name": "Konjestif Kalp Yetmezliği (Erişkin)",
      "icd10": "I50.9",
      "symptom_ids": [
        83,
        84,
        85,
        86,
        87,
        82,
        2,
        111
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 24
        },
        {
          "type": "disease_id",
          "value": 23
        },
        {
          "type": "disease_id",
          "value": 56
        },
        {
          "type": "disease_name",
          "value": "Pnömoni"
        },
        {
          "type": "disease_name",
          "value": "Nefrotik Sendrom"
        },
        {
          "type": "disease_id",
          "value": 89
        }
      ],
      "tests": [
        "EKG",
        "telekardiyografi",
        "tam kan sayımı",
        "biyokimyasal inceleme",
        "tiroid fonksiyon testleri"
      ],
      "synonyms": [
        "kalp yetmezliği",
        "konjestif kalp yetersizliği",
        "KKY",
        "heart failure"
      ]
    },
    {
      "id": 17,
      "name": "Akut Miyokard Enfarktüsü",
      "icd10": "I21.9",
      "symptom_ids": [
        81,
        83,
        90,
        91,
        92,
        82,
        148,
        95
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 13
        },
        {
          "type": "disease_name",
          "value": "Aort Diseksiyonu"
        },
        {
          "type": "disease_id",
          "value": 56
        },
        {
          "type": "disease_name",
          "value": "Perikardit"
        },
        {
          "type": "disease_id",
          "value": 55
        },
        {
          "type": "disease_name",
          "value": "Özofajit"
        },
        {
          "type": "disease_name",
          "value": "Akut Kolesistit"
        }
      ],
      "tests": [
        "EKG",
        "miyoglobin",
        "CK-MB",
        "troponin-T",
        "troponin-I"
      ],
      "synonyms": [
        "kalp krizi",
        "MI",
        "miyokard infarktüsü",
        "heart attack"
      ]
    },
    {
      "id": 18,
      "name": "Peptik Ülser",
      "icd10": "K27.9",
      "symptom_ids": [
        147,
        148,
        158,
        153,
        154,
        155
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Gastrit"
        },
        {
          "type": "disease_name",
          "value": "Gastroözofageal Reflü Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "Fonksiyonel Dispepsi"
        },
        {
          "type": "disease_id",
          "value": 90
        },
        {
          "type": "disease_id",
          "value": 91
        },
        {
          "type": "disease_name",
          "value": "Mide Kanseri"
        }
      ],
      "tests": [
        "anti Hp seroloji",
        "C13 üre soluk testi",
        "dışkıda Hp antijen testi"
      ],
      "synonyms": [
        "mide ülseri",
        "duodenal ülser",
        "gastrik ülser",
        "PU"
      ]
    },
    {
      "id": 19,
      "name": "Akciğer Tüberkülozu (Çocuk)",
      "icd10": "A15.0",
      "symptom_ids": [
        1,
        111,
        112,
        4,
        7,
        6,
        9
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 26
        },
        {
          "type": "disease_id",
          "value": 23
        },
        {
          "type": "disease_id",
          "value": 127
        },
        {
          "type": "disease_name",
          "value": "Yabancı Cisim Aspirasyonu"
        },
        {
          "type": "disease_id",
          "value": 84
        }
      ],
      "tests": [
        "akciğer grafisi",
        "tüberkülin deri testi",
        "balgam mikroskobik inceleme",
        "mide suyu kültürü"
      ],
      "synonyms": [
        "çocukluk tüberkülozu",
        "pediatrik TB",
        "çocuk verem"
      ]
    },
    {
      "id": 20,
      "name": "Akciğer Tüberkülozu (Erişkin)",
      "icd10": "A15.0",
      "symptom_ids": [
        1,
        111,
        112,
        113,
        4,
        6,
        7,
        2
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 25
        },
        {
          "type": "disease_id",
          "value": 100
        },
        {
          "type": "disease_id",
          "value": 54
        },
        {
          "type": "disease_name",
          "value": "Akciğer Absesi"
        },
        {
          "type": "disease_name",
          "value": "Sarkoidoz"
        },
        {
          "type": "disease_name",
          "value": "Nokardioz"
        }
      ],
      "tests": [
        "akciğer grafisi",
        "balgam yayması",
        "balgam kültürü"
      ],
      "synonyms": [
        "akciğer veremi",
        "pulmoner TB",
        "tüberküloz",
        "verem"
      ]
    },
    {
      "id": 21,
      "name": "Akut Astım Atağı (Erişkin)",
      "icd10": "J45.9",
      "symptom_ids": [
        83,
        114,
        111,
        82,
        128
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 24
        },
        {
          "type": "disease_id",
          "value": 16
        },
        {
          "type": "disease_id",
          "value": 56
        },
        {
          "type": "disease_name",
          "value": "Vokal Kord Disfonksiyonu"
        },
        {
          "type": "disease_name",
          "value": "Anafilaksi"
        }
      ],
      "tests": [],
      "synonyms": [
        "astım krizi",
        "astım atağı",
        "asthma attack"
      ]
    },
    {
      "id": 22,
      "name": "Akut Astım Atağı (Çocuk)",
      "icd10": "J45.9",
      "symptom_ids": [
        83,
        114,
        111,
        82,
        128
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Bronşiyolit"
        },
        {
          "type": "disease_name",
          "value": "Yabancı Cisim Aspirasyonu"
        },
        {
          "type": "disease_id",
          "value": 127
        },
        {
          "type": "disease_name",
          "value": "Laringotrakeobronşit"
        },
        {
          "type": "disease_id",
          "value": 26
        }
      ],
      "tests": [],
      "synonyms": [
        "çocukluk astım krizi",
        "pediatrik astım atağı"
      ]
    },
    {
      "id": 23,
      "name": "Astım",
      "icd10": "J45.9",
      "symptom_ids": [
        83,
        114,
        111,
        128
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 24
        },
        {
          "type": "disease_id",
          "value": 16
        },
        {
          "type": "disease_name",
          "value": "Bronşiektazi"
        },
        {
          "type": "disease_name",
          "value": "Vokal Kord Disfonksiyonu"
        },
        {
          "type": "disease_name",
          "value": "Alerjik Rinit"
        }
      ],
      "tests": [
        "solunum fonksiyon testleri",
        "peak flow"
      ],
      "synonyms": [
        "bronşiyal astım",
        "asthma",
        "nefes darlığı"
      ]
    },
    {
      "id": 24,
      "name": "Kronik Obstrüktif Akciğer Hastalığı",
      "icd10": "J44.9",
      "symptom_ids": [
        83,
        111,
        112,
        128
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 23
        },
        {
          "type": "disease_id",
          "value": 16
        },
        {
          "type": "disease_id",
          "value": 54
        },
        {
          "type": "disease_id",
          "value": 100
        },
        {
          "type": "disease_id",
          "value": 20
        }
      ],
      "tests": [
        "solunum fonksiyon testleri",
        "akciğer grafisi"
      ],
      "synonyms": [
        "KOAH",
        "kronik bronşit",
        "amfizem",
        "COPD"
      ]
    },
    {
      "id": 25,
      "name": "Toplum Kökenli Pnömoni (Erişkin)",
      "icd10": "J18.9",
      "symptom_ids": [
        1,
        111,
        112,
        83,
        81
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 20
        },
        {
          "type": "disease_id",
          "value": 100
        },
        {
          "type": "disease_id",
          "value": 56
        },
        {
          "type": "disease_id",
          "value": 16
        },
        {
          "type": "disease_name",
          "value": "Akciğer Absesi"
        }
      ],
      "tests": [
        "akciğer grafisi",
        "tam kan sayımı",
        "balgam kültürü"
      ],
      "synonyms": [
        "zatürree",
        "akciğer iltihabı",
        "pneumonia"
      ]
    },
    {
      "id": 26,
      "name": "Pnömoni (Çocuk)",
      "icd10": "J18.9",
      "symptom_ids": [
        1,
        111,
        83,
        128
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Bronşiyolit"
        },
        {
          "type": "disease_id",
          "value": 22
        },
        {
          "type": "disease_id",
          "value": 19
        },
        {
          "type": "disease_name",
          "value": "Yabancı Cisim Aspirasyonu"
        },
        {
          "type": "disease_id",
          "value": 127
        }
      ],
      "tests": [
        "akciğer grafisi",
        "tam kan sayımı"
      ],
      "synonyms": [
        "çocukluk pnömonisi",
        "pediatrik zatürree"
      ]
    },
    {
      "id": 27,
      "name": "Baş Ağrısı (Gerilim Tipi)",
      "icd10": "G44.2",
      "symptom_ids": [
        191,
        195
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 28
        },
        {
          "type": "disease_name",
          "value": "Küme Baş Ağrısı"
        },
        {
          "type": "disease_name",
          "value": "Servikal Spondiloz"
        },
        {
          "type": "disease_name",
          "value": "Temporomandibular Eklem Bozukluğu"
        },
        {
          "type": "disease_id",
          "value": 53
        }
      ],
      "tests": [],
      "synonyms": [
        "gerilim baş ağrısı",
        "tension headache",
        "stres baş ağrısı"
      ]
    },
    {
      "id": 28,
      "name": "Migren",
      "icd10": "G43.9",
      "symptom_ids": [
        191,
        148,
        149,
        193,
        194
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 27
        },
        {
          "type": "disease_name",
          "value": "Küme Baş Ağrısı"
        },
        {
          "type": "disease_id",
          "value": 57
        },
        {
          "type": "disease_name",
          "value": "Beyin Tümörü"
        },
        {
          "type": "disease_name",
          "value": "Menenjit"
        },
        {
          "type": "disease_id",
          "value": 53
        }
      ],
      "tests": [],
      "synonyms": [
        "migren baş ağrısı",
        "migraine",
        "vasküler baş ağrısı"
      ]
    },
    {
      "id": 29,
      "name": "Bilinç Bozukluğu",
      "icd10": "R40.9",
      "symptom_ids": [
        197,
        198,
        195,
        18
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 44
        },
        {
          "type": "disease_id",
          "value": 58
        },
        {
          "type": "disease_name",
          "value": "Menenjit"
        },
        {
          "type": "disease_name",
          "value": "Ensefalit"
        },
        {
          "type": "disease_id",
          "value": 175
        },
        {
          "type": "disease_name",
          "value": "İlaç İntoksikasyonu"
        },
        {
          "type": "disease_id",
          "value": 59
        }
      ],
      "tests": [
        "kan şekeri",
        "elektrolitler",
        "tam kan sayımı",
        "BUN",
        "kreatinin",
        "EKG"
      ],
      "synonyms": [
        "şuur bulanıklığı",
        "konfüzyon",
        "altered mental status"
      ]
    },
    {
      "id": 30,
      "name": "Febril Konvülsiyon",
      "icd10": "R56.0",
      "symptom_ids": [
        1,
        199,
        200
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 59
        },
        {
          "type": "disease_name",
          "value": "Menenjit"
        },
        {
          "type": "disease_name",
          "value": "Ensefalit"
        },
        {
          "type": "disease_id",
          "value": 44
        },
        {
          "type": "disease_name",
          "value": "Elektrolit Bozukluğu"
        }
      ],
      "tests": [
        "tam kan sayımı",
        "biyokimyasal testler"
      ],
      "synonyms": [
        "ateşli havale",
        "ateşli nöbet",
        "febrile seizure"
      ]
    },
    {
      "id": 31,
      "name": "Disfonksiyonel Uterus Kanamaları",
      "icd10": "N93.8",
      "symptom_ids": [
        331,
        332,
        334
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Uterin Leiomyom"
        },
        {
          "type": "disease_name",
          "value": "Endometrial Polip"
        },
        {
          "type": "disease_id",
          "value": 98
        },
        {
          "type": "disease_name",
          "value": "Servikal Polip"
        },
        {
          "type": "disease_name",
          "value": "Koagülopati"
        },
        {
          "type": "disease_id",
          "value": 67
        }
      ],
      "tests": [
        "pelvik muayene"
      ],
      "synonyms": [
        "DUK",
        "anormal uterin kanama",
        "AUB",
        "düzensiz adet kanaması"
      ]
    },
    {
      "id": 32,
      "name": "Dismenore",
      "icd10": "N94.6",
      "symptom_ids": [
        333,
        146,
        148
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Endometriozis"
        },
        {
          "type": "disease_name",
          "value": "Adenomiyozis"
        },
        {
          "type": "disease_id",
          "value": 133
        },
        {
          "type": "disease_name",
          "value": "Uterin Leiomyom"
        },
        {
          "type": "disease_id",
          "value": 99
        }
      ],
      "tests": [],
      "synonyms": [
        "adet ağrısı",
        "regl ağrısı",
        "menstrüel kramp"
      ]
    },
    {
      "id": 33,
      "name": "Gebelik İzlemi",
      "icd10": "Z34.9",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": [
        "hemoglobin",
        "hematokrit",
        "kan grubu",
        "tam idrar incelemesi",
        "açlık kan şekeri",
        "HBsAg"
      ],
      "synonyms": [
        "hamilelik takibi",
        "prenatal bakım",
        "antenatal izlem"
      ]
    },
    {
      "id": 34,
      "name": "Menopoz",
      "icd10": "N95.1",
      "symptom_ids": [
        335,
        336,
        282,
        19,
        231,
        233
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_name",
          "value": "Prematür Over Yetmezliği"
        },
        {
          "type": "disease_name",
          "value": "Hiperprolaktinemi"
        }
      ],
      "tests": [
        "FSH",
        "östradiol"
      ],
      "synonyms": [
        "klimakterium",
        "kadınlık döneminin sonu",
        "change of life"
      ]
    },
    {
      "id": 35,
      "name": "Aile Planlaması",
      "icd10": "Z30.9",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": [],
      "synonyms": [
        "doğum kontrolü",
        "kontrasepsiyon",
        "gebelik önleme"
      ]
    },
    {
      "id": 36,
      "name": "Gebelikte Hipertansif Hastalıklar",
      "icd10": "O10-O16",
      "symptom_ids": [
        93,
        191,
        10,
        86
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 40
        },
        {
          "type": "disease_id",
          "value": 41
        },
        {
          "type": "disease_id",
          "value": 15
        },
        {
          "type": "disease_name",
          "value": "HELLP Sendromu"
        },
        {
          "type": "disease_id",
          "value": 70
        }
      ],
      "tests": [
        "tam idrar incelemesi",
        "proteinüri",
        "kan basıncı ölçümü",
        "BUN",
        "kreatinin",
        "AST",
        "ALT",
        "trombosit sayısı"
      ],
      "synonyms": [
        "gebelik hipertansiyonu",
        "gestasyonel hipertansiyon",
        "hamilelik tansiyonu"
      ]
    },
    {
      "id": 37,
      "name": "Gestasyonel Diyabet",
      "icd10": "O24.4",
      "symptom_ids": [
        271,
        272,
        2,
        275
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 42
        },
        {
          "type": "disease_id",
          "value": 43
        },
        {
          "type": "disease_name",
          "value": "Bozulmuş Glukoz Toleransı"
        }
      ],
      "tests": [
        "açlık kan şekeri",
        "OGTT (oral glukoz tolerans testi)"
      ],
      "synonyms": [
        "hamilelik şekeri",
        "gebelik diyabeti",
        "GDM"
      ]
    },
    {
      "id": 38,
      "name": "Anemi (Gebelikte)",
      "icd10": "O99.0",
      "symptom_ids": [
        2,
        11,
        83,
        82
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 80
        },
        {
          "type": "disease_id",
          "value": 81
        },
        {
          "type": "disease_name",
          "value": "Talasemi"
        },
        {
          "type": "disease_name",
          "value": "Hemolitik Anemi"
        }
      ],
      "tests": [
        "hemoglobin",
        "hematokrit",
        "serum ferritin",
        "serum demir",
        "TDBK"
      ],
      "synonyms": [
        "hamilelik anemisi",
        "gestasyonel anemi",
        "gebelik kansızlığı"
      ]
    },
    {
      "id": 39,
      "name": "Postpartum Hemoraji",
      "icd10": "O72.9",
      "symptom_ids": [
        342,
        94,
        95
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Uterus Atonisi"
        },
        {
          "type": "disease_name",
          "value": "Plasenta Retansiyonu"
        },
        {
          "type": "disease_name",
          "value": "Genital Travma"
        },
        {
          "type": "disease_name",
          "value": "Koagülopati"
        },
        {
          "type": "disease_name",
          "value": "Uterus İnversiyonu"
        }
      ],
      "tests": [
        "tam kan sayımı",
        "PT",
        "aPTT",
        "fibrinojen"
      ],
      "synonyms": [
        "doğum sonrası kanama",
        "postpartum kanama",
        "PPH"
      ]
    },
    {
      "id": 40,
      "name": "Preeklampsi",
      "icd10": "O14.9",
      "symptom_ids": [
        93,
        191,
        10,
        199,
        150
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 36
        },
        {
          "type": "disease_id",
          "value": 41
        },
        {
          "type": "disease_id",
          "value": 15
        },
        {
          "type": "disease_name",
          "value": "HELLP Sendromu"
        },
        {
          "type": "disease_name",
          "value": "Trombotik Trombositopenik Purpura"
        }
      ],
      "tests": [
        "tam idrar incelemesi",
        "proteinüri",
        "kan basıncı",
        "BUN",
        "kreatinin",
        "AST",
        "ALT",
        "trombosit"
      ],
      "synonyms": [
        "gebelik zehirlenmesi",
        "hamilelik zehirlenmesi",
        "toksemi"
      ]
    },
    {
      "id": 41,
      "name": "Eklampsi",
      "icd10": "O15.9",
      "symptom_ids": [
        199,
        200,
        198,
        93
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 40
        },
        {
          "type": "disease_id",
          "value": 59
        },
        {
          "type": "disease_name",
          "value": "İntrakraniyal Kanama"
        },
        {
          "type": "disease_name",
          "value": "Menenjit"
        },
        {
          "type": "disease_name",
          "value": "Serebral Venöz Tromboz"
        }
      ],
      "tests": [
        "tam idrar incelemesi",
        "proteinüri",
        "kan basıncı",
        "BUN",
        "kreatinin",
        "AST",
        "ALT",
        "trombosit",
        "EEG"
      ],
      "synonyms": [
        "gebelik nöbeti",
        "hamilelik konvülsiyonu",
        "eclamptic seizure"
      ]
    },
    {
      "id": 42,
      "name": "Diabetes Mellitus Tip 1",
      "icd10": "E10.9",
      "symptom_ids": [
        271,
        272,
        273,
        4,
        2,
        275
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 43
        },
        {
          "type": "disease_name",
          "value": "MODY"
        },
        {
          "type": "disease_name",
          "value": "LADA"
        },
        {
          "type": "disease_name",
          "value": "Sekonder Diyabet"
        },
        {
          "type": "disease_name",
          "value": "Pankreatik Diyabet"
        }
      ],
      "tests": [
        "açlık kan şekeri",
        "HbA1c",
        "C-peptid",
        "anti-GAD antikoru"
      ],
      "synonyms": [
        "tip 1 şeker hastalığı",
        "juvenil diyabet",
        "insüline bağımlı diyabet",
        "IDDM"
      ]
    },
    {
      "id": 43,
      "name": "Diabetes Mellitus Tip 2",
      "icd10": "E11.9",
      "symptom_ids": [
        271,
        272,
        273,
        5,
        2,
        275,
        199
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 42
        },
        {
          "type": "disease_name",
          "value": "MODY"
        },
        {
          "type": "disease_name",
          "value": "LADA"
        },
        {
          "type": "disease_name",
          "value": "Cushing Sendromu"
        },
        {
          "type": "disease_name",
          "value": "Akromegali"
        }
      ],
      "tests": [
        "açlık kan şekeri",
        "HbA1c",
        "tokluk kan şekeri",
        "lipid profili"
      ],
      "synonyms": [
        "tip 2 şeker hastalığı",
        "erişkin diyabeti",
        "NIDDM",
        "şeker hastalığı"
      ]
    },
    {
      "id": 44,
      "name": "Hipoglisemi",
      "icd10": "E16.2",
      "symptom_ids": [
        274,
        20,
        7,
        82,
        197,
        88
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 29
        },
        {
          "type": "disease_id",
          "value": 59
        },
        {
          "type": "disease_id",
          "value": 157
        },
        {
          "type": "disease_name",
          "value": "İnsülinoma"
        },
        {
          "type": "disease_name",
          "value": "Adrenal Yetmezlik"
        },
        {
          "type": "disease_name",
          "value": "Sepsis"
        }
      ],
      "tests": [
        "kan şekeri",
        "insülin düzeyi",
        "C-peptid"
      ],
      "synonyms": [
        "düşük kan şekeri",
        "şeker düşmesi",
        "hipoglisemik atak"
      ]
    },
    {
      "id": 45,
      "name": "Akut Gastroenterit",
      "icd10": "A09",
      "symptom_ids": [
        150,
        149,
        148,
        146,
        1,
        14
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 86
        },
        {
          "type": "disease_id",
          "value": 88
        },
        {
          "type": "disease_name",
          "value": "Gıda Zehirlenmesi"
        },
        {
          "type": "disease_id",
          "value": 136
        },
        {
          "type": "disease_id",
          "value": 137
        }
      ],
      "tests": [
        "tam kan sayımı",
        "elektrolitler",
        "dışkı direkt inceleme"
      ],
      "synonyms": [
        "mide bağırsak enfeksiyonu",
        "gastroenterit",
        "ishal kusma"
      ]
    },
    {
      "id": 46,
      "name": "İshal (Kronik)",
      "icd10": "K52.9",
      "symptom_ids": [
        150,
        4,
        146,
        171
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 88
        },
        {
          "type": "disease_name",
          "value": "Çölyak Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "Laktoz İntoleransı"
        },
        {
          "type": "disease_id",
          "value": 137
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_id",
          "value": 95
        }
      ],
      "tests": [
        "dışkı kültürü",
        "parazit incelemesi",
        "kolonoskopi"
      ],
      "synonyms": [
        "uzun süreli ishal",
        "kronik diyare",
        "persistent diarrhea"
      ]
    },
    {
      "id": 47,
      "name": "Konstipasyon",
      "icd10": "K59.0",
      "symptom_ids": [
        151,
        146,
        156,
        169
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_id",
          "value": 95
        },
        {
          "type": "disease_name",
          "value": "İrritabl Bağırsak Sendromu"
        },
        {
          "type": "disease_name",
          "value": "İlaç Yan Etkisi"
        },
        {
          "type": "disease_id",
          "value": 60
        }
      ],
      "tests": [
        "abdominal radyografi",
        "kolon transit zamanı"
      ],
      "synonyms": [
        "kabızlık",
        "peklik",
        "bağırsak tembelliği"
      ]
    },
    {
      "id": 48,
      "name": "Hemoroid",
      "icd10": "I84.9",
      "symptom_ids": [
        152,
        169,
        172,
        151
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Anal Fissür"
        },
        {
          "type": "disease_id",
          "value": 95
        },
        {
          "type": "disease_name",
          "value": "Rektal Prolapsus"
        },
        {
          "type": "disease_name",
          "value": "Anal Kanser"
        },
        {
          "type": "disease_name",
          "value": "Perianal Apse"
        }
      ],
      "tests": [
        "rektal muayene",
        "anoskopi"
      ],
      "synonyms": [
        "basur",
        "hemoroidal hastalık",
        "piles"
      ]
    },
    {
      "id": 49,
      "name": "Üst Solunum Yolu Enfeksiyonu",
      "icd10": "J06.9",
      "symptom_ids": [
        117,
        118,
        119,
        120,
        1,
        191,
        8
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 50
        },
        {
          "type": "disease_id",
          "value": 53
        },
        {
          "type": "disease_name",
          "value": "Alerjik Rinit"
        },
        {
          "type": "disease_name",
          "value": "İnfluenza"
        },
        {
          "type": "disease_name",
          "value": "COVID-19"
        }
      ],
      "tests": [],
      "synonyms": [
        "soğuk algınlığı",
        "nezle",
        "ÜSYE",
        "common cold"
      ]
    },
    {
      "id": 50,
      "name": "Akut Farenjit",
      "icd10": "J02.9",
      "symptom_ids": [
        120,
        1,
        160,
        9
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 51
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_id",
          "value": 135
        },
        {
          "type": "disease_name",
          "value": "Epiglottit"
        },
        {
          "type": "disease_name",
          "value": "Peritonsillar Apse"
        }
      ],
      "tests": [
        "boğaz kültürü",
        "hızlı streptokok testi"
      ],
      "synonyms": [
        "boğaz iltihabı",
        "farenjit",
        "sore throat"
      ]
    },
    {
      "id": 51,
      "name": "Akut Tonsillit",
      "icd10": "J03.9",
      "symptom_ids": [
        120,
        1,
        160,
        9,
        49
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 50
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_name",
          "value": "Peritonsillar Apse"
        },
        {
          "type": "disease_id",
          "value": 135
        },
        {
          "type": "disease_name",
          "value": "Herpangina"
        }
      ],
      "tests": [
        "boğaz kültürü",
        "tam kan sayımı"
      ],
      "synonyms": [
        "bademcik iltihabı",
        "tonsil enfeksiyonu",
        "tonsillitis"
      ]
    },
    {
      "id": 52,
      "name": "Akut Otitis Media",
      "icd10": "H66.9",
      "symptom_ids": [
        86,
        87,
        88,
        1,
        89
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Otitis Eksterna"
        },
        {
          "type": "disease_name",
          "value": "Efüzyonlu Otitis Media"
        },
        {
          "type": "disease_name",
          "value": "Mastoidit"
        },
        {
          "type": "disease_name",
          "value": "Yabancı Cisim"
        },
        {
          "type": "disease_name",
          "value": "Dental Apse"
        }
      ],
      "tests": [
        "otoskopi"
      ],
      "synonyms": [
        "orta kulak iltihabı",
        "kulak enfeksiyonu",
        "AOM"
      ]
    },
    {
      "id": 53,
      "name": "Sinüzit",
      "icd10": "J32.9",
      "symptom_ids": [
        118,
        117,
        90,
        191,
        1,
        125
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 49
        },
        {
          "type": "disease_name",
          "value": "Alerjik Rinit"
        },
        {
          "type": "disease_id",
          "value": 28
        },
        {
          "type": "disease_name",
          "value": "Dental Enfeksiyon"
        },
        {
          "type": "disease_name",
          "value": "Nazal Polip"
        }
      ],
      "tests": [
        "sinüs grafisi",
        "sinüs BT"
      ],
      "synonyms": [
        "sinüs enfeksiyonu",
        "rinosinüzit",
        "sinus infection"
      ]
    },
    {
      "id": 54,
      "name": "Bronşiektazi",
      "icd10": "J47.9",
      "symptom_ids": [
        111,
        112,
        113,
        83
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 24
        },
        {
          "type": "disease_id",
          "value": 20
        },
        {
          "type": "disease_id",
          "value": 100
        },
        {
          "type": "disease_name",
          "value": "Kistik Fibrozis"
        },
        {
          "type": "disease_name",
          "value": "Akciğer Absesi"
        }
      ],
      "tests": [
        "akciğer grafisi",
        "HRCT"
      ],
      "synonyms": [
        "bronş genişlemesi",
        "bronchiectasis"
      ]
    },
    {
      "id": 55,
      "name": "Pnömotoraks",
      "icd10": "J93.9",
      "symptom_ids": [
        81,
        83,
        111
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 56
        },
        {
          "type": "disease_id",
          "value": 17
        },
        {
          "type": "disease_name",
          "value": "Plevral Efüzyon"
        },
        {
          "type": "disease_name",
          "value": "Kosta Fraktürü"
        },
        {
          "type": "disease_name",
          "value": "Perikardit"
        }
      ],
      "tests": [
        "akciğer grafisi",
        "toraks BT"
      ],
      "synonyms": [
        "akciğer çökmesi",
        "collapsed lung"
      ]
    },
    {
      "id": 56,
      "name": "Pulmoner Emboli",
      "icd10": "I26.9",
      "symptom_ids": [
        83,
        81,
        111,
        82,
        94
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 17
        },
        {
          "type": "disease_id",
          "value": 55
        },
        {
          "type": "disease_id",
          "value": 25
        },
        {
          "type": "disease_name",
          "value": "Aort Diseksiyonu"
        },
        {
          "type": "disease_id",
          "value": 16
        },
        {
          "type": "disease_name",
          "value": "Perikardit"
        }
      ],
      "tests": [
        "D-dimer",
        "BT anjiyografi",
        "V/Q sintigrafisi"
      ],
      "synonyms": [
        "akciğer embolisi",
        "pulmoner tromboemboli",
        "PE"
      ]
    },
    {
      "id": 57,
      "name": "Subaraknoid Kanama",
      "icd10": "I60.9",
      "symptom_ids": [
        191,
        148,
        149,
        198,
        195
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 28
        },
        {
          "type": "disease_name",
          "value": "Menenjit"
        },
        {
          "type": "disease_id",
          "value": 58
        },
        {
          "type": "disease_name",
          "value": "İntraserebral Hemoraji"
        },
        {
          "type": "disease_name",
          "value": "Hipertansif Kriz"
        }
      ],
      "tests": [
        "BT beyin",
        "lomber ponksiyon"
      ],
      "synonyms": [
        "beyin kanaması",
        "SAK",
        "subarachnoid hemorrhage"
      ]
    },
    {
      "id": 58,
      "name": "Serebrovasküler Olay (Felç)",
      "icd10": "I63.9",
      "symptom_ids": [
        206,
        207,
        208,
        209,
        211,
        195
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Geçici İskemik Atak"
        },
        {
          "type": "disease_id",
          "value": 44
        },
        {
          "type": "disease_id",
          "value": 59
        },
        {
          "type": "disease_name",
          "value": "Beyin Tümörü"
        },
        {
          "type": "disease_id",
          "value": 28
        },
        {
          "type": "disease_name",
          "value": "Todd Parezisi"
        }
      ],
      "tests": [
        "BT beyin",
        "MRI beyin",
        "EKG",
        "karotis doppler USG"
      ],
      "synonyms": [
        "inme",
        "felç",
        "stroke",
        "serebrovasküler olay"
      ]
    },
    {
      "id": 59,
      "name": "Epilepsi",
      "icd10": "G40.9",
      "symptom_ids": [
        199,
        200,
        201,
        143,
        144
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Senkop"
        },
        {
          "type": "disease_name",
          "value": "Psikojenik Non-Epileptik Nöbet"
        },
        {
          "type": "disease_id",
          "value": 44
        },
        {
          "type": "disease_name",
          "value": "Kardiyak Aritmi"
        },
        {
          "type": "disease_id",
          "value": 157
        },
        {
          "type": "disease_name",
          "value": "Geçici İskemik Atak"
        }
      ],
      "tests": [
        "EEG",
        "BT/MRI beyin"
      ],
      "synonyms": [
        "sara",
        "nöbet hastalığı",
        "seizure disorder"
      ]
    },
    {
      "id": 60,
      "name": "Parkinson Hastalığı",
      "icd10": "G20",
      "symptom_ids": [
        202,
        203,
        204,
        205,
        138
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Esansiyel Tremor"
        },
        {
          "type": "disease_name",
          "value": "İlaç İndükte Parkinsonizm"
        },
        {
          "type": "disease_name",
          "value": "Progresif Supranükleer Palsi"
        },
        {
          "type": "disease_name",
          "value": "Multipl Sistem Atrofisi"
        },
        {
          "type": "disease_name",
          "value": "Lewy Cisimcikli Demans"
        }
      ],
      "tests": [
        "nörolojik muayene"
      ],
      "synonyms": [
        "titreme hastalığı",
        "Parkinson",
        "parkinsonizm"
      ]
    },
    {
      "id": 61,
      "name": "Alzheimer Hastalığı",
      "icd10": "G30.9",
      "symptom_ids": [
        212,
        213,
        197,
        245,
        241
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Vasküler Demans"
        },
        {
          "type": "disease_name",
          "value": "Lewy Cisimcikli Demans"
        },
        {
          "type": "disease_name",
          "value": "Frontotemporal Demans"
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_name",
          "value": "Normal Basınçlı Hidrosefali"
        }
      ],
      "tests": [
        "MMSE",
        "BT/MRI beyin"
      ],
      "synonyms": [
        "bunama",
        "demans",
        "Alzheimer demansı"
      ]
    },
    {
      "id": 62,
      "name": "Depresyon",
      "icd10": "F32.9",
      "symptom_ids": [
        231,
        232,
        241,
        3,
        4,
        2,
        242,
        243,
        240
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 65
        },
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_id",
          "value": 63
        },
        {
          "type": "disease_name",
          "value": "Distimi"
        },
        {
          "type": "disease_name",
          "value": "Yas Reaksiyonu"
        },
        {
          "type": "disease_name",
          "value": "Anemi"
        }
      ],
      "tests": [
        "PHQ-9",
        "Hamilton depresyon ölçeği"
      ],
      "synonyms": [
        "çökkünlük",
        "majör depresif bozukluk",
        "MDD"
      ]
    },
    {
      "id": 63,
      "name": "Anksiyete Bozukluğu",
      "icd10": "F41.9",
      "symptom_ids": [
        233,
        234,
        82,
        83,
        20,
        7,
        244,
        19
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_id",
          "value": 157
        },
        {
          "type": "disease_name",
          "value": "Feokromositoma"
        },
        {
          "type": "disease_name",
          "value": "Kafein İntoksikasyonu"
        },
        {
          "type": "disease_id",
          "value": 176
        }
      ],
      "tests": [
        "GAD-7"
      ],
      "synonyms": [
        "kaygı bozukluğu",
        "anksiyete",
        "anxiety disorder"
      ]
    },
    {
      "id": 64,
      "name": "Şizofreni",
      "icd10": "F20.9",
      "symptom_ids": [
        237,
        238,
        170,
        171,
        232,
        245
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 65
        },
        {
          "type": "disease_name",
          "value": "Şizoaffektif Bozukluk"
        },
        {
          "type": "disease_name",
          "value": "Sanrısal Bozukluk"
        },
        {
          "type": "disease_name",
          "value": "Madde İndükte Psikoz"
        },
        {
          "type": "disease_name",
          "value": "Kısa Psikotik Bozukluk"
        }
      ],
      "tests": [
        "nöropsikiyatrik değerlendirme"
      ],
      "synonyms": [
        "şizofreni",
        "psikoz",
        "schizophrenia"
      ]
    },
    {
      "id": 65,
      "name": "Bipolar Bozukluk",
      "icd10": "F31.9",
      "symptom_ids": [
        239,
        231,
        241,
        244,
        242
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 64
        },
        {
          "type": "disease_name",
          "value": "Siklotimik Bozukluk"
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_name",
          "value": "Borderline Kişilik Bozukluğu"
        }
      ],
      "tests": [
        "MDQ (Mood Disorder Questionnaire)"
      ],
      "synonyms": [
        "iki uçlu bozukluk",
        "manik depresif",
        "BP"
      ]
    },
    {
      "id": 66,
      "name": "Hipertiroidi",
      "icd10": "E05.9",
      "symptom_ids": [
        276,
        4,
        82,
        20,
        202,
        279,
        280,
        150
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 63
        },
        {
          "type": "disease_name",
          "value": "Feokromositoma"
        },
        {
          "type": "disease_name",
          "value": "Tiroidit"
        },
        {
          "type": "disease_name",
          "value": "İyatrojenik Hipertiroidi"
        },
        {
          "type": "disease_id",
          "value": 68
        }
      ],
      "tests": [
        "TSH",
        "serbest T4",
        "serbest T3",
        "tiroid USG"
      ],
      "synonyms": [
        "tiroid bezinin aşırı çalışması",
        "Graves hastalığı",
        "tireotoksikoz"
      ]
    },
    {
      "id": 67,
      "name": "Hipotiroidi",
      "icd10": "E03.9",
      "symptom_ids": [
        277,
        5,
        2,
        55,
        151,
        281,
        195
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 80
        },
        {
          "type": "disease_name",
          "value": "Kronik Yorgunluk Sendromu"
        },
        {
          "type": "disease_name",
          "value": "Fibromiyalji"
        },
        {
          "type": "disease_name",
          "value": "Adrenal Yetmezlik"
        }
      ],
      "tests": [
        "TSH",
        "serbest T4"
      ],
      "synonyms": [
        "tiroid bezinin az çalışması",
        "Hashimoto",
        "miksödem"
      ]
    },
    {
      "id": 68,
      "name": "Tiroid Nodülü",
      "icd10": "E04.1",
      "symptom_ids": [
        278,
        160,
        121
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Tiroid Kanseri"
        },
        {
          "type": "disease_name",
          "value": "Tiroidit"
        },
        {
          "type": "disease_name",
          "value": "Tiroid Kisti"
        },
        {
          "type": "disease_name",
          "value": "Multinodüler Guatr"
        },
        {
          "type": "disease_id",
          "value": 66
        }
      ],
      "tests": [
        "tiroid USG",
        "ince iğne aspirasyon biyopsisi"
      ],
      "synonyms": [
        "tiroid kitlesi",
        "guatr nodülü",
        "thyroid nodule"
      ]
    },
    {
      "id": 69,
      "name": "Akut Böbrek Yetmezliği",
      "icd10": "N17.9",
      "symptom_ids": [
        312,
        313,
        10,
        148,
        197
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 70
        },
        {
          "type": "disease_name",
          "value": "Prerenal Azotemi"
        },
        {
          "type": "disease_name",
          "value": "Akut Tübüler Nekroz"
        },
        {
          "type": "disease_name",
          "value": "Obstrüktif Üropati"
        },
        {
          "type": "disease_id",
          "value": 71
        }
      ],
      "tests": [
        "BUN",
        "kreatinin",
        "elektrolitler",
        "idrar analizi"
      ],
      "synonyms": [
        "akut renal yetmezlik",
        "ABY",
        "AKI",
        "acute kidney injury"
      ]
    },
    {
      "id": 70,
      "name": "Kronik Böbrek Yetmezliği",
      "icd10": "N18.9",
      "symptom_ids": [
        2,
        3,
        10,
        148,
        37,
        312,
        314
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 69
        },
        {
          "type": "disease_name",
          "value": "Diyabetik Nefropati"
        },
        {
          "type": "disease_name",
          "value": "Hipertansif Nefroskleroz"
        },
        {
          "type": "disease_id",
          "value": 71
        },
        {
          "type": "disease_name",
          "value": "Polikistik Böbrek Hastalığı"
        }
      ],
      "tests": [
        "BUN",
        "kreatinin",
        "eGFR",
        "idrar analizi",
        "renal USG"
      ],
      "synonyms": [
        "kronik renal yetmezlik",
        "KBY",
        "CKD",
        "böbrek yetersizliği"
      ]
    },
    {
      "id": 71,
      "name": "Glomerülonefrit",
      "icd10": "N00.9",
      "symptom_ids": [
        299,
        10,
        314,
        93
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 72
        },
        {
          "type": "disease_name",
          "value": "IgA Nefropatisi"
        },
        {
          "type": "disease_id",
          "value": 78
        },
        {
          "type": "disease_name",
          "value": "Poststreptokokal Glomerülonefrit"
        },
        {
          "type": "disease_name",
          "value": "Nefrotik Sendrom"
        }
      ],
      "tests": [
        "idrar analizi",
        "C3/C4",
        "ASO",
        "renal biyopsi"
      ],
      "synonyms": [
        "böbrek iltihabı",
        "nefrit",
        "glomerular disease"
      ]
    },
    {
      "id": 72,
      "name": "Üriner Traktus Enfeksiyonu",
      "icd10": "N39.0",
      "symptom_ids": [
        296,
        297,
        298,
        302,
        1
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Üretrit"
        },
        {
          "type": "disease_name",
          "value": "Vulvovajinit"
        },
        {
          "type": "disease_id",
          "value": 73
        },
        {
          "type": "disease_name",
          "value": "İnterstisyel Sistit"
        },
        {
          "type": "disease_name",
          "value": "Prostatit"
        }
      ],
      "tests": [
        "idrar analizi",
        "idrar kültürü"
      ],
      "synonyms": [
        "idrar yolu enfeksiyonu",
        "İYE",
        "UTI",
        "sistit"
      ]
    },
    {
      "id": 73,
      "name": "Böbrek Taşı",
      "icd10": "N20.9",
      "symptom_ids": [
        304,
        303,
        299,
        148,
        149
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 72
        },
        {
          "type": "disease_id",
          "value": 86
        },
        {
          "type": "disease_name",
          "value": "Ektopik Gebelik"
        },
        {
          "type": "disease_name",
          "value": "Over Kist Rüptürü"
        },
        {
          "type": "disease_name",
          "value": "Aort Anevrizması"
        }
      ],
      "tests": [
        "abdominal USG",
        "non-kontrast BT"
      ],
      "synonyms": [
        "üriner sistem taşı",
        "nefrolitiyazis",
        "renal kolik"
      ]
    },
    {
      "id": 74,
      "name": "Benign Prostat Hiperplazisi",
      "icd10": "N40.1",
      "symptom_ids": [
        311,
        297,
        298,
        300
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 75
        },
        {
          "type": "disease_name",
          "value": "Prostatit"
        },
        {
          "type": "disease_name",
          "value": "Üretra Darlığı"
        },
        {
          "type": "disease_name",
          "value": "Nörojenik Mesane"
        },
        {
          "type": "disease_id",
          "value": 72
        }
      ],
      "tests": [
        "prostat spesifik antijen (PSA)",
        "prostat USG",
        "ürin akım hızı"
      ],
      "synonyms": [
        "prostat büyümesi",
        "BPH",
        "iyi huylu prostat hipertrofisi"
      ]
    },
    {
      "id": 75,
      "name": "Prostat Kanseri",
      "icd10": "C61",
      "symptom_ids": [
        311,
        299,
        359,
        4
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 74
        },
        {
          "type": "disease_name",
          "value": "Prostatit"
        },
        {
          "type": "disease_id",
          "value": 72
        },
        {
          "type": "disease_name",
          "value": "Mesane Kanseri"
        }
      ],
      "tests": [
        "PSA",
        "prostat biyopsisi",
        "pelvik MR"
      ],
      "synonyms": [
        "prostat kanseri",
        "prostat karsinomu",
        "prostate cancer"
      ]
    },
    {
      "id": 76,
      "name": "Rheumatoid Artrit",
      "icd10": "M06.9",
      "symptom_ids": [
        356,
        357,
        358,
        367,
        2
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 77
        },
        {
          "type": "disease_id",
          "value": 78
        },
        {
          "type": "disease_name",
          "value": "Psöriatik Artrit"
        },
        {
          "type": "disease_id",
          "value": 79
        },
        {
          "type": "disease_name",
          "value": "Viral Artrit"
        }
      ],
      "tests": [
        "RF",
        "anti-CCP",
        "ESH",
        "CRP",
        "el bileği el grafisi"
      ],
      "synonyms": [
        "romatoid artrit",
        "RA",
        "eklem romatizması"
      ]
    },
    {
      "id": 77,
      "name": "Osteoartrit",
      "icd10": "M19.9",
      "symptom_ids": [
        356,
        358,
        229
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 76
        },
        {
          "type": "disease_id",
          "value": 79
        },
        {
          "type": "disease_name",
          "value": "Septik Artrit"
        },
        {
          "type": "disease_name",
          "value": "Psöriatik Artrit"
        },
        {
          "type": "disease_name",
          "value": "Avasküler Nekroz"
        }
      ],
      "tests": [
        "eklem grafisi"
      ],
      "synonyms": [
        "kireçlenme",
        "dejeneratif eklem hastalığı",
        "OA"
      ]
    },
    {
      "id": 78,
      "name": "Sistemik Lupus Eritematozus",
      "icd10": "M32.9",
      "symptom_ids": [
        369,
        356,
        357,
        2,
        1,
        45,
        38
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 76
        },
        {
          "type": "disease_name",
          "value": "Mikst Konnektif Doku Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "Dermatomiyozit"
        },
        {
          "type": "disease_name",
          "value": "Sjögren Sendromu"
        },
        {
          "type": "disease_name",
          "value": "İlaç İndükte Lupus"
        }
      ],
      "tests": [
        "ANA",
        "anti-dsDNA",
        "C3/C4",
        "idrar analizi"
      ],
      "synonyms": [
        "lupus",
        "SLE",
        "kelebek hastalığı"
      ]
    },
    {
      "id": 79,
      "name": "Gut",
      "icd10": "M10.9",
      "symptom_ids": [
        370,
        357,
        36,
        1
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Psödogut"
        },
        {
          "type": "disease_name",
          "value": "Septik Artrit"
        },
        {
          "type": "disease_id",
          "value": 76
        },
        {
          "type": "disease_name",
          "value": "Reaktif Artrit"
        },
        {
          "type": "disease_name",
          "value": "Selülit"
        }
      ],
      "tests": [
        "serum ürik asit",
        "eklem sıvısı kristal analizi"
      ],
      "synonyms": [
        "gut hastalığı",
        "damla hastalığı",
        "podagra"
      ]
    },
    {
      "id": 80,
      "name": "Demir Eksikliği Anemisi",
      "icd10": "D50.9",
      "symptom_ids": [
        381,
        11,
        2,
        83,
        82,
        55,
        47
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 81
        },
        {
          "type": "disease_name",
          "value": "Talasemi"
        },
        {
          "type": "disease_name",
          "value": "Kronik Hastalık Anemisi"
        },
        {
          "type": "disease_name",
          "value": "Sideroblastik Anemi"
        },
        {
          "type": "disease_id",
          "value": 95
        }
      ],
      "tests": [
        "hemoglobin",
        "MCV",
        "serum ferritin",
        "serum demir",
        "TDBK"
      ],
      "synonyms": [
        "demir eksikliği kansızlığı",
        "DEA",
        "iron deficiency anemia"
      ]
    },
    {
      "id": 81,
      "name": "Megaloblastik Anemi",
      "icd10": "D51.9",
      "symptom_ids": [
        381,
        11,
        2,
        211,
        195
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 80
        },
        {
          "type": "disease_name",
          "value": "Miyelodisplastik Sendrom"
        },
        {
          "type": "disease_name",
          "value": "Aplastik Anemi"
        },
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_name",
          "value": "Hemolitik Anemi"
        }
      ],
      "tests": [
        "B12 vitamini",
        "folik asit",
        "periferik yayma"
      ],
      "synonyms": [
        "B12 eksikliği anemisi",
        "pernisiyöz anemi",
        "makrositik anemi"
      ]
    },
    {
      "id": 82,
      "name": "Akut Lösemi",
      "icd10": "C91.0",
      "symptom_ids": [
        1,
        381,
        382,
        383,
        384,
        9,
        364
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Aplastik Anemi"
        },
        {
          "type": "disease_name",
          "value": "Miyelodisplastik Sendrom"
        },
        {
          "type": "disease_id",
          "value": 84
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_name",
          "value": "İdiyopatik Trombositopenik Purpura"
        }
      ],
      "tests": [
        "tam kan sayımı",
        "periferik yayma",
        "kemik iliği aspirasyonu"
      ],
      "synonyms": [
        "akut lösemi",
        "kan kanseri",
        "acute leukemia"
      ]
    },
    {
      "id": 83,
      "name": "Kronik Miyelositer Lösemi",
      "icd10": "C92.1",
      "symptom_ids": [
        2,
        4,
        385,
        6
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 82
        },
        {
          "type": "disease_name",
          "value": "Polisitemia Vera"
        },
        {
          "type": "disease_name",
          "value": "Primer Miyelofibrozis"
        },
        {
          "type": "disease_name",
          "value": "Kronik Lenfositik Lösemi"
        },
        {
          "type": "disease_name",
          "value": "Lökomoid Reaksiyon"
        }
      ],
      "tests": [
        "tam kan sayımı",
        "periferik yayma",
        "BCR-ABL"
      ],
      "synonyms": [
        "KML",
        "kronik lösemi",
        "CML"
      ]
    },
    {
      "id": 84,
      "name": "Lenfoma",
      "icd10": "C85.9",
      "symptom_ids": [
        9,
        1,
        4,
        6,
        37,
        2
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 82
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_id",
          "value": 20
        },
        {
          "type": "disease_name",
          "value": "Sarkoidoz"
        },
        {
          "type": "disease_name",
          "value": "Reaktif Lenfadenopati"
        }
      ],
      "tests": [
        "lenf nodu biyopsisi",
        "BT",
        "PET"
      ],
      "synonyms": [
        "lenfoma",
        "Hodgkin lenfoma",
        "non-Hodgkin lenfoma"
      ]
    },
    {
      "id": 85,
      "name": "Multiple Myelom",
      "icd10": "C90.0",
      "symptom_ids": [
        364,
        365,
        2,
        381
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Monoklonal Gammopati"
        },
        {
          "type": "disease_name",
          "value": "Waldenström Makroglobulinemisi"
        },
        {
          "type": "disease_name",
          "value": "Kemik Metastazı"
        },
        {
          "type": "disease_id",
          "value": 169
        },
        {
          "type": "disease_name",
          "value": "Primer Amiloidoz"
        }
      ],
      "tests": [
        "serum protein elektroforezi",
        "kemik iliği biyopsisi",
        "iskelet surveysi"
      ],
      "synonyms": [
        "multipl miyelom",
        "plazma hücreli miyelom",
        "MM"
      ]
    },
    {
      "id": 86,
      "name": "Akut Apandisit",
      "icd10": "K35.9",
      "symptom_ids": [
        146,
        148,
        149,
        1,
        3
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 45
        },
        {
          "type": "disease_name",
          "value": "Mezenterik Lenfadenit"
        },
        {
          "type": "disease_id",
          "value": 87
        },
        {
          "type": "disease_name",
          "value": "Ektopik Gebelik"
        },
        {
          "type": "disease_id",
          "value": 73
        },
        {
          "type": "disease_id",
          "value": 133
        }
      ],
      "tests": [
        "tam kan sayımı",
        "abdominal USG",
        "abdominal BT"
      ],
      "synonyms": [
        "apandisit",
        "kör bağırsak iltihabı",
        "appendicitis"
      ]
    },
    {
      "id": 87,
      "name": "Divertikülit",
      "icd10": "K57.9",
      "symptom_ids": [
        163,
        146,
        1,
        151,
        164
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 86
        },
        {
          "type": "disease_id",
          "value": 95
        },
        {
          "type": "disease_id",
          "value": 88
        },
        {
          "type": "disease_name",
          "value": "İskemik Kolit"
        },
        {
          "type": "disease_id",
          "value": 72
        }
      ],
      "tests": [
        "abdominal BT"
      ],
      "synonyms": [
        "bağırsak divertikül iltihabı",
        "diverticulitis",
        "kolon divertiküliti"
      ]
    },
    {
      "id": 88,
      "name": "İnflamatuar Bağırsak Hastalığı",
      "icd10": "K52.9",
      "symptom_ids": [
        150,
        152,
        146,
        4,
        2,
        170,
        171
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "İrritabl Bağırsak Sendromu"
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Kolit"
        },
        {
          "type": "disease_id",
          "value": 95
        },
        {
          "type": "disease_name",
          "value": "Çölyak Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "İskemik Kolit"
        }
      ],
      "tests": [
        "kolonoskopi",
        "kalprotektin",
        "CRP"
      ],
      "synonyms": [
        "iltihabi bağırsak hastalığı",
        "IBD",
        "Crohn",
        "ülseratif kolit"
      ]
    },
    {
      "id": 89,
      "name": "Karaciğer Sirozu",
      "icd10": "K74.6",
      "symptom_ids": [
        12,
        166,
        167,
        10,
        197,
        382
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Viral Hepatit"
        },
        {
          "type": "disease_name",
          "value": "Alkolik Karaciğer Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "Hepatosellüler Karsinom"
        },
        {
          "type": "disease_id",
          "value": 16
        },
        {
          "type": "disease_name",
          "value": "Budd-Chiari Sendromu"
        }
      ],
      "tests": [
        "AST",
        "ALT",
        "albumin",
        "protrombin zamanı",
        "karaciğer USG"
      ],
      "synonyms": [
        "karaciğer sertleşmesi",
        "siroz",
        "hepatik siroz"
      ]
    },
    {
      "id": 90,
      "name": "Kolesistit",
      "icd10": "K81.9",
      "symptom_ids": [
        161,
        148,
        149,
        1,
        12
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Safra Koliği"
        },
        {
          "type": "disease_id",
          "value": 91
        },
        {
          "type": "disease_id",
          "value": 18
        },
        {
          "type": "disease_name",
          "value": "Hepatit"
        },
        {
          "type": "disease_id",
          "value": 86
        }
      ],
      "tests": [
        "abdominal USG",
        "tam kan sayımı",
        "CRP"
      ],
      "synonyms": [
        "safra kesesi iltihabı",
        "akut kolesistit",
        "cholecystitis"
      ]
    },
    {
      "id": 91,
      "name": "Pankeatitis",
      "icd10": "K85.9",
      "symptom_ids": [
        147,
        146,
        148,
        149,
        1,
        164
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 90
        },
        {
          "type": "disease_id",
          "value": 92
        },
        {
          "type": "disease_id",
          "value": 17
        },
        {
          "type": "disease_id",
          "value": 93
        },
        {
          "type": "disease_name",
          "value": "Mezenter İskemisi"
        }
      ],
      "tests": [
        "amilaz",
        "lipaz",
        "abdominal USG",
        "BT"
      ],
      "synonyms": [
        "pankreas iltihabı",
        "akut pankreatit",
        "pancreatitis"
      ]
    },
    {
      "id": 92,
      "name": "Peptik Ülser Perforasyonu",
      "icd10": "K27.1",
      "symptom_ids": [
        146,
        164,
        165,
        149,
        94
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 91
        },
        {
          "type": "disease_id",
          "value": 86
        },
        {
          "type": "disease_id",
          "value": 17
        },
        {
          "type": "disease_name",
          "value": "Mezenter İskemisi"
        },
        {
          "type": "disease_name",
          "value": "Aort Anevrizması Rüptürü"
        }
      ],
      "tests": [
        "direkt batın grafisi",
        "BT"
      ],
      "synonyms": [
        "mide delinmesi",
        "ülser perforasyonu",
        "perforated ulcer"
      ]
    },
    {
      "id": 93,
      "name": "İnce Barsak Obstrüksiyonu",
      "icd10": "K56.6",
      "symptom_ids": [
        146,
        149,
        156,
        151,
        121
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 94
        },
        {
          "type": "disease_name",
          "value": "Paralitik İleus"
        },
        {
          "type": "disease_name",
          "value": "Adeziv Bant"
        },
        {
          "type": "disease_name",
          "value": "Fıtık"
        },
        {
          "type": "disease_id",
          "value": 45
        }
      ],
      "tests": [
        "direkt batın grafisi",
        "BT"
      ],
      "synonyms": [
        "ince bağırsak tıkanıklığı",
        "ileus",
        "SBO"
      ]
    },
    {
      "id": 94,
      "name": "Kolon Obstrüksiyonu",
      "icd10": "K56.6",
      "symptom_ids": [
        146,
        156,
        151,
        121,
        149
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 95
        },
        {
          "type": "disease_id",
          "value": 93
        },
        {
          "type": "disease_name",
          "value": "Volvulus"
        },
        {
          "type": "disease_id",
          "value": 87
        },
        {
          "type": "disease_name",
          "value": "Fekal İmpaksiyon"
        }
      ],
      "tests": [
        "kolonoskopi",
        "BT"
      ],
      "synonyms": [
        "kalın bağırsak tıkanıklığı",
        "kolon tıkanması",
        "LBO"
      ]
    },
    {
      "id": 95,
      "name": "Kolon Kanseri",
      "icd10": "C18.9",
      "symptom_ids": [
        152,
        151,
        4,
        146,
        2,
        112
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 88
        },
        {
          "type": "disease_id",
          "value": 87
        },
        {
          "type": "disease_id",
          "value": 48
        },
        {
          "type": "disease_name",
          "value": "Kolon Polipi"
        },
        {
          "type": "disease_name",
          "value": "İskemik Kolit"
        }
      ],
      "tests": [
        "kolonoskopi",
        "CEA",
        "BT"
      ],
      "synonyms": [
        "bağırsak kanseri",
        "kolorektal kanser",
        "colorectal cancer"
      ]
    },
    {
      "id": 96,
      "name": "Meme Kanseri",
      "icd10": "C50.9",
      "symptom_ids": [
        340,
        341,
        4,
        364
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Fibroadenom"
        },
        {
          "type": "disease_name",
          "value": "Fibrokistik Değişiklik"
        },
        {
          "type": "disease_name",
          "value": "Meme Kisti"
        },
        {
          "type": "disease_name",
          "value": "Mastit"
        },
        {
          "type": "disease_name",
          "value": "Yağ Nekrozu"
        }
      ],
      "tests": [
        "mammografi",
        "USG",
        "biyopsi"
      ],
      "synonyms": [
        "göğüs kanseri",
        "breast cancer",
        "meme karsinomu"
      ]
    },
    {
      "id": 97,
      "name": "Serviks Kanseri",
      "icd10": "C53.9",
      "symptom_ids": [
        338,
        306,
        337,
        4
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Servisit"
        },
        {
          "type": "disease_name",
          "value": "Servikal Polip"
        },
        {
          "type": "disease_name",
          "value": "Servikal İntraepitelyal Neoplazi"
        },
        {
          "type": "disease_id",
          "value": 98
        },
        {
          "type": "disease_id",
          "value": 134
        }
      ],
      "tests": [
        "pap smear",
        "kolposkopi",
        "biyopsi"
      ],
      "synonyms": [
        "rahim ağzı kanseri",
        "servikal kanser",
        "cervical cancer"
      ]
    },
    {
      "id": 98,
      "name": "Endometriyal Kanser",
      "icd10": "C54.1",
      "symptom_ids": [
        339,
        331,
        337,
        4
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 31
        },
        {
          "type": "disease_name",
          "value": "Endometrial Polip"
        },
        {
          "type": "disease_name",
          "value": "Endometrial Hiperplazi"
        },
        {
          "type": "disease_id",
          "value": 97
        },
        {
          "type": "disease_name",
          "value": "Uterin Sarkom"
        }
      ],
      "tests": [
        "transvajinal USG",
        "endometrial biyopsi"
      ],
      "synonyms": [
        "rahim kanseri",
        "endometrium kanseri",
        "uterine cancer"
      ]
    },
    {
      "id": 99,
      "name": "Over Kanseri",
      "icd10": "C56",
      "symptom_ids": [
        337,
        156,
        146,
        4,
        166
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Over Kisti"
        },
        {
          "type": "disease_id",
          "value": 98
        },
        {
          "type": "disease_name",
          "value": "Tuba Ovarii Kanseri"
        },
        {
          "type": "disease_name",
          "value": "Peritoneal Kanser"
        },
        {
          "type": "disease_name",
          "value": "Endometriozis"
        }
      ],
      "tests": [
        "CA-125",
        "pelvik USG",
        "BT"
      ],
      "synonyms": [
        "yumurtalık kanseri",
        "ovarian cancer",
        "over karsinomu"
      ]
    },
    {
      "id": 100,
      "name": "Akciğer Kanseri",
      "icd10": "C34.9",
      "symptom_ids": [
        111,
        113,
        83,
        81,
        4,
        121
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 20
        },
        {
          "type": "disease_id",
          "value": 25
        },
        {
          "type": "disease_name",
          "value": "Akciğer Metastazı"
        },
        {
          "type": "disease_name",
          "value": "Sarkoidoz"
        },
        {
          "type": "disease_name",
          "value": "Akciğer Absesi"
        }
      ],
      "tests": [
        "akciğer grafisi",
        "BT",
        "bronkoskopi",
        "biyopsi"
      ],
      "synonyms": [
        "akciğer kanseri",
        "bronş kanseri",
        "lung cancer"
      ]
    },
    {
      "id": 127,
      "name": "Boğmaca",
      "icd10": "A37.9",
      "symptom_ids": [
        126,
        127,
        149,
        1,
        13
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 49
        },
        {
          "type": "disease_name",
          "value": "Bronşiyolit"
        },
        {
          "type": "disease_id",
          "value": 23
        },
        {
          "type": "disease_name",
          "value": "Klamidya Pnömonisi"
        },
        {
          "type": "disease_name",
          "value": "Yabancı Cisim Aspirasyonu"
        }
      ],
      "tests": [],
      "synonyms": [
        "boğmaca öksürüğü",
        "pertusis",
        "whooping cough"
      ]
    },
    {
      "id": 128,
      "name": "Bruselloz",
      "icd10": "A23.9",
      "symptom_ids": [
        397,
        1,
        8,
        356,
        20,
        167,
        168
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 20
        },
        {
          "type": "disease_name",
          "value": "Tifo"
        },
        {
          "type": "disease_name",
          "value": "İnfektif Endokardit"
        },
        {
          "type": "disease_id",
          "value": 84
        },
        {
          "type": "disease_id",
          "value": 151
        }
      ],
      "tests": [
        "Wright testi",
        "Rose Bengal"
      ],
      "synonyms": [
        "malta humması",
        "brusella",
        "ondülan ateş"
      ]
    },
    {
      "id": 129,
      "name": "Genital Herpes",
      "icd10": "A60.0",
      "symptom_ids": [
        404,
        309,
        37,
        296
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 130
        },
        {
          "type": "disease_name",
          "value": "Şankroid"
        },
        {
          "type": "disease_id",
          "value": 134
        },
        {
          "type": "disease_name",
          "value": "Behçet Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "Kontakt Dermatit"
        }
      ],
      "tests": [],
      "synonyms": [
        "herpes simpleks tip 2",
        "HSV-2",
        "genital uçuk"
      ]
    },
    {
      "id": 130,
      "name": "Sifiliz",
      "icd10": "A51.0",
      "symptom_ids": [
        309,
        246,
        38,
        9
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 129
        },
        {
          "type": "disease_name",
          "value": "Şankroid"
        },
        {
          "type": "disease_name",
          "value": "Lenfogranuloma Venereum"
        },
        {
          "type": "disease_name",
          "value": "Granuloma İnguinale"
        },
        {
          "type": "disease_name",
          "value": "Travmatik Ülser"
        }
      ],
      "tests": [
        "VDRL",
        "RPR"
      ],
      "synonyms": [
        "frengi",
        "lues",
        "syphilis"
      ]
    },
    {
      "id": 131,
      "name": "Bakteriyel Vajinoz",
      "icd10": "N76.0",
      "symptom_ids": [
        306,
        247,
        307
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 132
        },
        {
          "type": "disease_id",
          "value": 180
        },
        {
          "type": "disease_name",
          "value": "Aerobik Vajinit"
        },
        {
          "type": "disease_name",
          "value": "Atrofik Vajinit"
        },
        {
          "type": "disease_name",
          "value": "Servisit"
        }
      ],
      "tests": [],
      "synonyms": [
        "BV",
        "Gardnerella vajiniti",
        "bacterial vaginosis"
      ]
    },
    {
      "id": 132,
      "name": "Trichomoniasis",
      "icd10": "A59.0",
      "symptom_ids": [
        306,
        248,
        307,
        296
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 131
        },
        {
          "type": "disease_id",
          "value": 180
        },
        {
          "type": "disease_name",
          "value": "Gonore"
        },
        {
          "type": "disease_name",
          "value": "Klamidya"
        },
        {
          "type": "disease_name",
          "value": "Atrofik Vajinit"
        }
      ],
      "tests": [],
      "synonyms": [
        "trikomonas enfeksiyonu",
        "trich",
        "trichomonas vaginitis"
      ]
    },
    {
      "id": 133,
      "name": "Pelvik İnflamatuvar Hastalık",
      "icd10": "N73.9",
      "symptom_ids": [
        337,
        306,
        1,
        148,
        308
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 86
        },
        {
          "type": "disease_name",
          "value": "Ektopik Gebelik"
        },
        {
          "type": "disease_name",
          "value": "Over Kist Rüptürü"
        },
        {
          "type": "disease_name",
          "value": "Endometriozis"
        },
        {
          "type": "disease_id",
          "value": 72
        }
      ],
      "tests": [],
      "synonyms": [
        "PİH",
        "adneksit",
        "pelvic inflammatory disease"
      ]
    },
    {
      "id": 134,
      "name": "Genital Siğil",
      "icd10": "A63.0",
      "symptom_ids": [
        310,
        37
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Molluskum Kontagiozum"
        },
        {
          "type": "disease_name",
          "value": "Kondiloma Lata"
        },
        {
          "type": "disease_name",
          "value": "Skuamöz Hücreli Karsinom"
        },
        {
          "type": "disease_name",
          "value": "Seboreik Keratoz"
        },
        {
          "type": "disease_name",
          "value": "Skin Tag"
        }
      ],
      "tests": [],
      "synonyms": [
        "kondilom",
        "HPV siğili",
        "genital wart"
      ]
    },
    {
      "id": 135,
      "name": "Difteri",
      "icd10": "A36.9",
      "symptom_ids": [
        398,
        120,
        1,
        9,
        83
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 51
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_name",
          "value": "Epiglottit"
        },
        {
          "type": "disease_name",
          "value": "Peritonsillar Apse"
        },
        {
          "type": "disease_name",
          "value": "Vincent Anjini"
        }
      ],
      "tests": [],
      "synonyms": [
        "kuşpalazı",
        "diphtheria",
        "difteri"
      ]
    },
    {
      "id": 136,
      "name": "Amibiyazis",
      "icd10": "A06.9",
      "symptom_ids": [
        150,
        152,
        146,
        1,
        170
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 88
        },
        {
          "type": "disease_name",
          "value": "Basilli Dizanteri"
        },
        {
          "type": "disease_id",
          "value": 45
        },
        {
          "type": "disease_id",
          "value": 95
        },
        {
          "type": "disease_name",
          "value": "İskemik Kolit"
        }
      ],
      "tests": [
        "dışkı mikroskobik inceleme"
      ],
      "synonyms": [
        "amip dizanterisi",
        "amebik kolit",
        "amebiasis"
      ]
    },
    {
      "id": 137,
      "name": "Giardiyazis",
      "icd10": "A07.1",
      "symptom_ids": [
        150,
        156,
        146,
        148,
        171
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 136
        },
        {
          "type": "disease_id",
          "value": 46
        },
        {
          "type": "disease_name",
          "value": "Çölyak Hastalığı"
        },
        {
          "type": "disease_name",
          "value": "Laktoz İntoleransı"
        },
        {
          "type": "disease_name",
          "value": "İrritabl Bağırsak Sendromu"
        }
      ],
      "tests": [
        "dışkı mikroskobik inceleme"
      ],
      "synonyms": [
        "giardia enfeksiyonu",
        "lamblia",
        "giardiasis"
      ]
    },
    {
      "id": 138,
      "name": "Enterobiyazis",
      "icd10": "B80",
      "symptom_ids": [
        172,
        173,
        19
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 48
        },
        {
          "type": "disease_name",
          "value": "Anal Fissür"
        },
        {
          "type": "disease_name",
          "value": "Perianal Dermatit"
        },
        {
          "type": "disease_id",
          "value": 8
        },
        {
          "type": "disease_id",
          "value": 10
        }
      ],
      "tests": [
        "selofan bant yöntemi"
      ],
      "synonyms": [
        "kıl kurdu",
        "oxiür",
        "pinworm"
      ]
    },
    {
      "id": 139,
      "name": "Askaris",
      "icd10": "B77.9",
      "symptom_ids": [
        146,
        150,
        173,
        111
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 140
        },
        {
          "type": "disease_id",
          "value": 141
        },
        {
          "type": "disease_id",
          "value": 93
        },
        {
          "type": "disease_id",
          "value": 23
        },
        {
          "type": "disease_name",
          "value": "Strongiloidiyaz"
        }
      ],
      "tests": [
        "dışkı mikroskobik inceleme"
      ],
      "synonyms": [
        "solucan enfeksiyonu",
        "askaryaz",
        "roundworm"
      ]
    },
    {
      "id": 140,
      "name": "Kancalı Kurt Enfeksiyonu",
      "icd10": "B76.9",
      "symptom_ids": [
        146,
        150,
        381,
        173
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 139
        },
        {
          "type": "disease_id",
          "value": 80
        },
        {
          "type": "disease_name",
          "value": "Strongiloidiyaz"
        },
        {
          "type": "disease_name",
          "value": "Trikuriaz"
        },
        {
          "type": "disease_id",
          "value": 88
        }
      ],
      "tests": [
        "dışkı mikroskobik inceleme"
      ],
      "synonyms": [
        "ankylostoma",
        "hookworm",
        "necatoriasis"
      ]
    },
    {
      "id": 141,
      "name": "Tenyazis",
      "icd10": "B68.9",
      "symptom_ids": [
        146,
        150,
        173,
        4
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 139
        },
        {
          "type": "disease_id",
          "value": 177
        },
        {
          "type": "disease_name",
          "value": "Diflobotriaz"
        },
        {
          "type": "disease_id",
          "value": 137
        },
        {
          "type": "disease_name",
          "value": "İrritabl Bağırsak Sendromu"
        }
      ],
      "tests": [
        "dışkı mikroskobik inceleme"
      ],
      "synonyms": [
        "şerit hastalığı",
        "tenya",
        "tapeworm"
      ]
    },
    {
      "id": 142,
      "name": "Kistik Ekinokokkoz",
      "icd10": "B67.9",
      "symptom_ids": [
        146,
        161,
        167
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 143
        },
        {
          "type": "disease_name",
          "value": "Karaciğer Kisti"
        },
        {
          "type": "disease_name",
          "value": "Karaciğer Absesi"
        },
        {
          "type": "disease_name",
          "value": "Hepatosellüler Karsinom"
        },
        {
          "type": "disease_name",
          "value": "Karaciğer Hemanjiomu"
        }
      ],
      "tests": [
        "abdominal USG",
        "seroloji"
      ],
      "synonyms": [
        "kist hidatik",
        "ekinokok kisti",
        "hydatid cyst"
      ]
    },
    {
      "id": 143,
      "name": "Alveoler Ekinokokkoz",
      "icd10": "B67.5",
      "symptom_ids": [
        146,
        161,
        167,
        12
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 142
        },
        {
          "type": "disease_name",
          "value": "Hepatosellüler Karsinom"
        },
        {
          "type": "disease_name",
          "value": "Karaciğer Metastazı"
        },
        {
          "type": "disease_name",
          "value": "Kolanjiyokarsinom"
        },
        {
          "type": "disease_id",
          "value": 89
        }
      ],
      "tests": [
        "abdominal USG",
        "BT",
        "seroloji"
      ],
      "synonyms": [
        "alveoler ekinokok",
        "multiloküler ekinokok",
        "alveolar echinococcosis"
      ]
    },
    {
      "id": 144,
      "name": "Toksoplazmoz",
      "icd10": "B58.9",
      "symptom_ids": [
        9,
        1,
        2,
        8
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_id",
          "value": 84
        },
        {
          "type": "disease_name",
          "value": "CMV Enfeksiyonu"
        },
        {
          "type": "disease_name",
          "value": "HIV Akut Enfeksiyonu"
        },
        {
          "type": "disease_name",
          "value": "Kedi Tırmığı Hastalığı"
        }
      ],
      "tests": [
        "seroloji"
      ],
      "synonyms": [
        "toksoplazma",
        "toxoplasmosis"
      ]
    },
    {
      "id": 145,
      "name": "Toksokara Enfeksiyonları",
      "icd10": "B83.0",
      "symptom_ids": [
        1,
        111,
        38,
        167
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 23
        },
        {
          "type": "disease_name",
          "value": "Löffler Sendromu"
        },
        {
          "type": "disease_id",
          "value": 139
        },
        {
          "type": "disease_name",
          "value": "Strongiloidiyaz"
        },
        {
          "type": "disease_name",
          "value": "Alerjik Bronkopulmoner Aspergilloz"
        }
      ],
      "tests": [
        "seroloji",
        "eozinofil sayımı"
      ],
      "synonyms": [
        "toksokariaz",
        "visseral larva migrans",
        "toxocariasis"
      ]
    },
    {
      "id": 146,
      "name": "Hayvan Isırığı",
      "icd10": "W54-W55",
      "symptom_ids": [
        399,
        36,
        10
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Selülit"
        },
        {
          "type": "disease_id",
          "value": 148
        },
        {
          "type": "disease_name",
          "value": "Pasteurella Enfeksiyonu"
        },
        {
          "type": "disease_id",
          "value": 147
        },
        {
          "type": "disease_name",
          "value": "Tetanoz"
        }
      ],
      "tests": [],
      "synonyms": [
        "hayvan ısırması",
        "köpek ısırığı",
        "animal bite"
      ]
    },
    {
      "id": 147,
      "name": "Kuduz",
      "icd10": "A82.9",
      "symptom_ids": [
        400,
        401,
        1,
        199,
        208
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Tetanoz"
        },
        {
          "type": "disease_name",
          "value": "Ensefalit"
        },
        {
          "type": "disease_name",
          "value": "Guillain-Barré Sendromu"
        },
        {
          "type": "disease_name",
          "value": "Botulizm"
        },
        {
          "type": "disease_name",
          "value": "Psikiyatrik Bozukluk"
        }
      ],
      "tests": [],
      "synonyms": [
        "kuduz hastalığı",
        "rabies",
        "hydrophobia"
      ]
    },
    {
      "id": 148,
      "name": "Kedi Tırmığı Hastalığı",
      "icd10": "A28.1",
      "symptom_ids": [
        9,
        1,
        36,
        399
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 144
        },
        {
          "type": "disease_name",
          "value": "İnfeksiyöz Mononükleoz"
        },
        {
          "type": "disease_id",
          "value": 84
        },
        {
          "type": "disease_id",
          "value": 20
        },
        {
          "type": "disease_name",
          "value": "Sporotrikoz"
        }
      ],
      "tests": [],
      "synonyms": [
        "kedi tırmık hastalığı",
        "Bartonella",
        "cat scratch disease"
      ]
    },
    {
      "id": 149,
      "name": "Şarbon",
      "icd10": "A22.9",
      "symptom_ids": [
        402,
        1,
        9,
        10
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Stafilokok Enfeksiyonu"
        },
        {
          "type": "disease_name",
          "value": "Kahverengi Örümcek Isırığı"
        },
        {
          "type": "disease_name",
          "value": "Selülit"
        },
        {
          "type": "disease_id",
          "value": 150
        },
        {
          "type": "disease_name",
          "value": "Orf"
        }
      ],
      "tests": [
        "Gram boyama",
        "kültür"
      ],
      "synonyms": [
        "anthrax",
        "karakabarcık",
        "anthrax"
      ]
    },
    {
      "id": 150,
      "name": "Tularemi",
      "icd10": "A21.9",
      "symptom_ids": [
        1,
        9,
        41,
        191,
        8
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 149
        },
        {
          "type": "disease_id",
          "value": 148
        },
        {
          "type": "disease_id",
          "value": 84
        },
        {
          "type": "disease_name",
          "value": "Sporotrikoz"
        },
        {
          "type": "disease_name",
          "value": "Veba"
        }
      ],
      "tests": [
        "seroloji",
        "kültür"
      ],
      "synonyms": [
        "tavşan hastalığı",
        "tularemia",
        "rabbit fever"
      ]
    },
    {
      "id": 151,
      "name": "Leptospiroz",
      "icd10": "A27.9",
      "symptom_ids": [
        1,
        191,
        8,
        12,
        148,
        149
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Viral Hepatit"
        },
        {
          "type": "disease_name",
          "value": "Dang Humması"
        },
        {
          "type": "disease_name",
          "value": "Malarya"
        },
        {
          "type": "disease_id",
          "value": 128
        },
        {
          "type": "disease_name",
          "value": "Hantavirus Enfeksiyonu"
        }
      ],
      "tests": [
        "seroloji"
      ],
      "synonyms": [
        "Weil hastalığı",
        "leptospira",
        "leptospirosis"
      ]
    },
    {
      "id": 152,
      "name": "Lyme Hastalığı",
      "icd10": "A69.2",
      "symptom_ids": [
        403,
        1,
        356,
        191
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 76
        },
        {
          "type": "disease_name",
          "value": "Viral Artrit"
        },
        {
          "type": "disease_name",
          "value": "Selülit"
        },
        {
          "type": "disease_name",
          "value": "Granuloma Annulare"
        },
        {
          "type": "disease_id",
          "value": 5
        }
      ],
      "tests": [
        "seroloji"
      ],
      "synonyms": [
        "kene hastalığı",
        "Lyme borreliosis",
        "erythema migrans"
      ]
    },
    {
      "id": 153,
      "name": "Alkol Bağımlılığı",
      "icd10": "F10.2",
      "symptom_ids": [
        251,
        2,
        148,
        167,
        202
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 154
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 63
        },
        {
          "type": "disease_name",
          "value": "Diğer Madde Kullanım Bozuklukları"
        },
        {
          "type": "disease_id",
          "value": 89
        }
      ],
      "tests": [],
      "synonyms": [
        "alkolizm",
        "alkol kullanım bozukluğu",
        "alcohol dependence"
      ]
    },
    {
      "id": 154,
      "name": "Alkol Kötüye Kullanımı",
      "icd10": "F10.1",
      "symptom_ids": [
        251,
        148,
        241
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 153
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_name",
          "value": "Sosyal İçicilik"
        },
        {
          "type": "disease_id",
          "value": 63
        }
      ],
      "tests": [],
      "synonyms": [
        "alkol suistimali",
        "zararlı alkol kullanımı",
        "alcohol abuse"
      ]
    },
    {
      "id": 155,
      "name": "Deliryum Tremens",
      "icd10": "F10.4",
      "symptom_ids": [
        250,
        202,
        199,
        237,
        197
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 176
        },
        {
          "type": "disease_name",
          "value": "Ensefalopati"
        },
        {
          "type": "disease_name",
          "value": "Menenjit"
        },
        {
          "type": "disease_id",
          "value": 44
        },
        {
          "type": "disease_name",
          "value": "Wernicke Ensefalopatisi"
        }
      ],
      "tests": [],
      "synonyms": [
        "alkol yoksunluk deliryumu",
        "DT",
        "delirium tremens"
      ]
    },
    {
      "id": 156,
      "name": "Yaygın Anksiyete Bozukluğu",
      "icd10": "F41.1",
      "symptom_ids": [
        233,
        244,
        82,
        19,
        242,
        362
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 157
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_name",
          "value": "Kafein İntoksikasyonu"
        },
        {
          "type": "disease_id",
          "value": 178
        }
      ],
      "tests": [],
      "synonyms": [
        "YAB",
        "generalize anksiyete",
        "GAD"
      ]
    },
    {
      "id": 157,
      "name": "Panik Bozukluğu",
      "icd10": "F41.0",
      "symptom_ids": [
        234,
        82,
        83,
        20,
        7,
        88
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 156
        },
        {
          "type": "disease_id",
          "value": 17
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_name",
          "value": "Feokromositoma"
        },
        {
          "type": "disease_id",
          "value": 56
        }
      ],
      "tests": [],
      "synonyms": [
        "panik atak",
        "panik nöbeti",
        "panic attack"
      ]
    },
    {
      "id": 158,
      "name": "Obsesif Kompulsif Bozukluk",
      "icd10": "F42",
      "symptom_ids": [
        235,
        236,
        233,
        244
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 156
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_name",
          "value": "Obsesif Kompulsif Kişilik Bozukluğu"
        },
        {
          "type": "disease_name",
          "value": "Tourette Sendromu"
        },
        {
          "type": "disease_id",
          "value": 64
        }
      ],
      "tests": [],
      "synonyms": [
        "OKB",
        "takıntı hastalığı",
        "obsessive-compulsive disorder"
      ]
    },
    {
      "id": 159,
      "name": "Fobik Bozukluk",
      "icd10": "F40.9",
      "symptom_ids": [
        246,
        178,
        233,
        234
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 157
        },
        {
          "type": "disease_id",
          "value": 156
        },
        {
          "type": "disease_name",
          "value": "Sosyal Anksiyete Bozukluğu"
        },
        {
          "type": "disease_id",
          "value": 160
        },
        {
          "type": "disease_name",
          "value": "Agorafobi"
        }
      ],
      "tests": [],
      "synonyms": [
        "fobi",
        "korku bozukluğu",
        "phobic disorder"
      ]
    },
    {
      "id": 160,
      "name": "Travma Sonrası Stres Bozukluğu",
      "icd10": "F43.1",
      "symptom_ids": [
        247,
        241,
        233,
        244,
        19
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Akut Stres Bozukluğu"
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 156
        },
        {
          "type": "disease_name",
          "value": "Uyum Bozukluğu"
        },
        {
          "type": "disease_id",
          "value": 65
        }
      ],
      "tests": [],
      "synonyms": [
        "TSSB",
        "travma sonrası stres",
        "PTSD"
      ]
    },
    {
      "id": 161,
      "name": "Hipokondriyazis",
      "icd10": "F45.2",
      "symptom_ids": [
        248,
        233,
        3
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 162
        },
        {
          "type": "disease_id",
          "value": 156
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 158
        },
        {
          "type": "disease_name",
          "value": "Hastalık Anksiyete Bozukluğu"
        }
      ],
      "tests": [],
      "synonyms": [
        "hastalık hastalığı",
        "sağlık kaygısı",
        "hypochondriasis"
      ]
    },
    {
      "id": 162,
      "name": "Somatizasyon Bozukluğu",
      "icd10": "F45.0",
      "symptom_ids": [
        249,
        146,
        233,
        2
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 161
        },
        {
          "type": "disease_id",
          "value": 163
        },
        {
          "type": "disease_id",
          "value": 164
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_name",
          "value": "Fibromiyalji"
        }
      ],
      "tests": [],
      "synonyms": [
        "somatizasyon",
        "bedensel belirti bozukluğu",
        "somatization disorder"
      ]
    },
    {
      "id": 163,
      "name": "Psikojen Ağrı Bozukluğu",
      "icd10": "F45.4",
      "symptom_ids": [
        249,
        233,
        241
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 162
        },
        {
          "type": "disease_name",
          "value": "Fibromiyalji"
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_name",
          "value": "Kronik Ağrı Sendromu"
        },
        {
          "type": "disease_id",
          "value": 164
        }
      ],
      "tests": [],
      "synonyms": [
        "psikojenik ağrı",
        "ağrı bozukluğu",
        "psychogenic pain"
      ]
    },
    {
      "id": 164,
      "name": "Konversiyon Bozukluğu",
      "icd10": "F44.9",
      "symptom_ids": [
        206,
        207,
        210,
        199
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 59
        },
        {
          "type": "disease_id",
          "value": 58
        },
        {
          "type": "disease_name",
          "value": "Multiple Skleroz"
        },
        {
          "type": "disease_name",
          "value": "Myastenia Gravis"
        },
        {
          "type": "disease_id",
          "value": 162
        }
      ],
      "tests": [],
      "synonyms": [
        "konversiyon",
        "fonksiyonel nörolojik belirti bozukluğu",
        "conversion disorder"
      ]
    },
    {
      "id": 165,
      "name": "Beden Dismorfik Bozukluğu",
      "icd10": "F45.2",
      "symptom_ids": [
        250,
        233,
        232
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 158
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_name",
          "value": "Anoreksiya Nervoza"
        },
        {
          "type": "disease_name",
          "value": "Sosyal Anksiyete Bozukluğu"
        },
        {
          "type": "disease_id",
          "value": 64
        }
      ],
      "tests": [],
      "synonyms": [
        "dismorfofobi",
        "BDD",
        "body dysmorphic disorder"
      ]
    },
    {
      "id": 166,
      "name": "Uykusuzluk",
      "icd10": "G47.0",
      "symptom_ids": [
        19,
        2,
        241,
        244
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 167
        },
        {
          "type": "disease_id",
          "value": 62
        },
        {
          "type": "disease_id",
          "value": 63
        },
        {
          "type": "disease_name",
          "value": "Huzursuz Bacak Sendromu"
        },
        {
          "type": "disease_id",
          "value": 66
        }
      ],
      "tests": [],
      "synonyms": [
        "insomni",
        "uyku bozukluğu",
        "insomnia"
      ]
    },
    {
      "id": 167,
      "name": "Uyku Apne Sendromu",
      "icd10": "G47.3",
      "symptom_ids": [
        129,
        2,
        191,
        19
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 166
        },
        {
          "type": "disease_id",
          "value": 170
        },
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_name",
          "value": "Narkolepsi"
        },
        {
          "type": "disease_id",
          "value": 16
        }
      ],
      "tests": [
        "polisomnografi"
      ],
      "synonyms": [
        "uyku apnesi",
        "obstrüktif uyku apnesi",
        "OSA"
      ]
    },
    {
      "id": 168,
      "name": "Bel Ağrısı",
      "icd10": "M54.5",
      "symptom_ids": [
        361,
        362,
        363
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Disk Hernisi"
        },
        {
          "type": "disease_name",
          "value": "Spinal Stenoz"
        },
        {
          "type": "disease_id",
          "value": 77
        },
        {
          "type": "disease_name",
          "value": "Spondilolistezis"
        },
        {
          "type": "disease_id",
          "value": 73
        },
        {
          "type": "disease_name",
          "value": "Ankilozan Spondilit"
        }
      ],
      "tests": [
        "lomber grafi",
        "MRI"
      ],
      "synonyms": [
        "lumbalji",
        "low back pain",
        "sırt ağrısı"
      ]
    },
    {
      "id": 169,
      "name": "Osteoporoz",
      "icd10": "M81.9",
      "symptom_ids": [
        365,
        366,
        361
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Osteomalazi"
        },
        {
          "type": "disease_id",
          "value": 85
        },
        {
          "type": "disease_name",
          "value": "Kemik Metastazı"
        },
        {
          "type": "disease_name",
          "value": "Hiperparatiroidizm"
        },
        {
          "type": "disease_name",
          "value": "Paget Hastalığı"
        }
      ],
      "tests": [
        "DEXA",
        "kemik dansitometrisi"
      ],
      "synonyms": [
        "kemik erimesi",
        "osteoporosis",
        "düşük kemik yoğunluğu"
      ]
    },
    {
      "id": 170,
      "name": "Obesite",
      "icd10": "E66.9",
      "symptom_ids": [
        5,
        83,
        356
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 67
        },
        {
          "type": "disease_name",
          "value": "Cushing Sendromu"
        },
        {
          "type": "disease_name",
          "value": "Hipotalamik Obesite"
        },
        {
          "type": "disease_name",
          "value": "Polikistik Over Sendromu"
        },
        {
          "type": "disease_name",
          "value": "İnsülin Direnci"
        }
      ],
      "tests": [
        "BKİ",
        "bel çevresi",
        "lipid profili"
      ],
      "synonyms": [
        "obezite",
        "şişmanlık",
        "aşırı kilo"
      ]
    },
    {
      "id": 171,
      "name": "Protein-Enerji Malnütrisyonu",
      "icd10": "E46",
      "symptom_ids": [
        4,
        2,
        10,
        381
      ],
      "differential_diagnosis": [
        {
          "type": "disease_name",
          "value": "Marasmus"
        },
        {
          "type": "disease_name",
          "value": "Kwashiorkor"
        },
        {
          "type": "disease_name",
          "value": "Anoreksiya Nervoza"
        },
        {
          "type": "disease_name",
          "value": "Malabsorbsiyon Sendromu"
        },
        {
          "type": "disease_name",
          "value": "Kronik Hastalık Kaşeksisi"
        }
      ],
      "tests": [
        "albumin",
        "prealbumin",
        "antropometrik ölçümler"
      ],
      "synonyms": [
        "malnütrisyon",
        "yetersiz beslenme",
        "PEM"
      ]
    },
    {
      "id": 172,
      "name": "Kanserli Hasta Yaklaşımı",
      "icd10": "Z51.1",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": [],
      "synonyms": [
        "onkolojik hasta takibi",
        "kanser hastası bakımı"
      ]
    },
    {
      "id": 173,
      "name": "Sigarayı Bırakma",
      "icd10": "F17.2",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": [],
      "synonyms": [
        "sigara bırakma",
        "tütün bağımlılığı tedavisi",
        "smoking cessation"
      ]
    },
    {
      "id": 174,
      "name": "Aşı Takvimi",
      "icd10": "Z23",
      "symptom_ids": [],
      "differential_diagnosis": [],
      "tests": [],
      "synonyms": [
        "aşılama",
        "immunizasyon",
        "vaccination schedule"
      ]
    },
    {
      "id": 175,
      "name": "Akut Alkol Zehirlenmesi",
      "icd10": "F10.0",
      "symptom_ids": [
        197,
        148,
        149,
        195,
        138
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 44
        },
        {
          "type": "disease_name",
          "value": "Kafa Travması"
        },
        {
          "type": "disease_name",
          "value": "İlaç İntoksikasyonu"
        },
        {
          "type": "disease_name",
          "value": "Diyabetik Ketoasidoz"
        },
        {
          "type": "disease_name",
          "value": "Hepatik Ensefalopati"
        }
      ],
      "tests": [
        "kan alkol düzeyi",
        "kan şekeri"
      ],
      "synonyms": [
        "alkol intoksikasyonu",
        "sarhoşluk",
        "alcohol intoxication"
      ]
    },
    {
      "id": 176,
      "name": "Alkol Yoksunluğu Sendromu",
      "icd10": "F10.3",
      "symptom_ids": [
        202,
        20,
        233,
        19,
        148
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 155
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_id",
          "value": 59
        },
        {
          "type": "disease_name",
          "value": "Benzodiazepin Yoksunluğu"
        },
        {
          "type": "disease_name",
          "value": "Ensefalit"
        }
      ],
      "tests": [
        "CIWA-Ar skorlaması"
      ],
      "synonyms": [
        "alkol çekilme sendromu",
        "alcohol withdrawal",
        "AWS"
      ]
    },
    {
      "id": 177,
      "name": "Himenolepiyazis",
      "icd10": "B71.0",
      "symptom_ids": [
        146,
        150,
        173
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 141
        },
        {
          "type": "disease_id",
          "value": 139
        },
        {
          "type": "disease_id",
          "value": 137
        },
        {
          "type": "disease_name",
          "value": "İrritabl Bağırsak Sendromu"
        },
        {
          "type": "disease_id",
          "value": 138
        }
      ],
      "tests": [
        "dışkı mikroskobik inceleme"
      ],
      "synonyms": [
        "cüce şerit",
        "Hymenolepis nana",
        "dwarf tapeworm"
      ]
    },
    {
      "id": 178,
      "name": "Madde Kullanımına Bağlı Anksiyete Bozukluğu",
      "icd10": "F19.8",
      "symptom_ids": [
        233,
        234,
        82,
        19
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 156
        },
        {
          "type": "disease_id",
          "value": 157
        },
        {
          "type": "disease_id",
          "value": 176
        },
        {
          "type": "disease_id",
          "value": 66
        },
        {
          "type": "disease_name",
          "value": "Kafein İntoksikasyonu"
        }
      ],
      "tests": [
        "idrar toksikoloji taraması"
      ],
      "synonyms": [
        "madde kaynaklı anksiyete",
        "substance-induced anxiety",
        "ilaç kaynaklı kaygı"
      ]
    },
    {
      "id": 179,
      "name": "Somatoform Bozukluklar",
      "icd10": "F45.9",
      "symptom_ids": [
        249,
        233,
        2
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 162
        },
        {
          "type": "disease_id",
          "value": 161
        },
        {
          "type": "disease_id",
          "value": 163
        },
        {
          "type": "disease_id",
          "value": 164
        },
        {
          "type": "disease_id",
          "value": 62
        }
      ],
      "tests": [],
      "synonyms": [
        "somatoform bozukluk",
        "bedenselleştirme",
        "somatic symptom disorder"
      ]
    },
    {
      "id": 180,
      "name": "Vulvovajinal Kandidiyaz",
      "icd10": "B37.3",
      "symptom_ids": [
        307,
        306,
        37,
        296
      ],
      "differential_diagnosis": [
        {
          "type": "disease_id",
          "value": 131
        },
        {
          "type": "disease_id",
          "value": 132
        },
        {
          "type": "disease_name",
          "value": "Atrofik Vajinit"
        },
        {
          "type": "disease_name",
          "value": "Kontakt Dermatit"
        },
        {
          "type": "disease_name",
          "value": "Liken Sklerozus"
        }
      ],
      "tests": [
        "vajinal akıntı mikroskobisi"
      ],
      "synonyms": [
        "vajinal mantar",
        "vulvar kandidiyaz",
        "vaginal yeast infection"
      ]
    }
  ],
  "symptoms": [
    {
      "id": 1,
      "original_text": "ateş",
      "synonyms": [
        "yüksek ateş",
        "febril",
        "hipertermi",
        "fever"
      ],
      "category": "Genel"
    },
    {
      "id": 2,
      "original_text": "halsizlik",
      "synonyms": [
        "yorgunluk",
        "bitkinlik",
        "fatigue",
        "asteni"
      ],
      "category": "Genel"
    },
    {
      "id": 3,
      "original_text": "iştahsızlık",
      "synonyms": [
        "anoreksi",
        "iştah kaybı",
        "yemek istememe"
      ],
      "category": "Genel"
    },
    {
      "id": 4,
      "original_text": "kilo kaybı",
      "synonyms": [
        "zayıflama",
        "istem dışı kilo kaybı",
        "weight loss"
      ],
      "category": "Genel"
    },
    {
      "id": 5,
      "original_text": "kilo artışı",
      "synonyms": [
        "şişmanlama",
        "weight gain"
      ],
      "category": "Genel"
    },
    {
      "id": 6,
      "original_text": "gece terlemesi",
      "synonyms": [
        "noktürnal hiperhidrozis",
        "night sweats"
      ],
      "category": "Genel"
    },
    {
      "id": 7,
      "original_text": "titreme",
      "synonyms": [
        "üşüme",
        "rigor",
        "chills"
      ],
      "category": "Genel"
    },
    {
      "id": 8,
      "original_text": "genel vücut ağrısı",
      "synonyms": [
        "miyalji",
        "kas ağrısı",
        "body ache"
      ],
      "category": "Genel"
    },
    {
      "id": 9,
      "original_text": "lenf nodu büyümesi",
      "synonyms": [
        "lenfadenopati",
        "bezlerin şişmesi",
        "LAP"
      ],
      "category": "Genel"
    },
    {
      "id": 10,
      "original_text": "ödem",
      "synonyms": [
        "şişlik",
        "su toplanması",
        "swelling"
      ],
      "category": "Genel"
    },
    {
      "id": 11,
      "original_text": "solukluk",
      "synonyms": [
        "solgun görünüm",
        "pallor"
      ],
      "category": "Genel"
    },
    {
      "id": 12,
      "original_text": "sarılık",
      "synonyms": [
        "ikter",
        "jaundice",
        "gözlerde sararma"
      ],
      "category": "Genel"
    },
    {
      "id": 13,
      "original_text": "siyanoz",
      "synonyms": [
        "morarma",
        "cyanosis"
      ],
      "category": "Genel"
    },
    {
      "id": 14,
      "original_text": "dehidratasyon",
      "synonyms": [
        "su kaybı",
        "susuzluk",
        "dehydration"
      ],
      "category": "Genel"
    },
    {
      "id": 15,
      "original_text": "aşırı susama",
      "synonyms": [
        "polidipsi",
        "çok su içme"
      ],
      "category": "Genel"
    },
    {
      "id": 16,
      "original_text": "ağız kuruluğu",
      "synonyms": [
        "kserostomi",
        "dry mouth"
      ],
      "category": "Genel"
    },
    {
      "id": 17,
      "original_text": "iştah artışı",
      "synonyms": [
        "polifaji",
        "hiperfaji",
        "aşırı yeme isteği"
      ],
      "category": "Genel"
    },
    {
      "id": 18,
      "original_text": "uyku hali",
      "synonyms": [
        "somnolans",
        "letarji",
        "drowsiness"
      ],
      "category": "Genel"
    },
    {
      "id": 19,
      "original_text": "uykusuzluk",
      "synonyms": [
        "insomni",
        "uyuyamama",
        "insomnia"
      ],
      "category": "Genel"
    },
    {
      "id": 20,
      "original_text": "terleme",
      "synonyms": [
        "hiperhidrozis",
        "aşırı terleme",
        "sweating"
      ],
      "category": "Genel"
    },
    {
      "id": 31,
      "original_text": "komedon",
      "synonyms": [
        "siyah nokta",
        "beyaz nokta",
        "açık komedon",
        "kapalı komedon"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 32,
      "original_text": "papül",
      "synonyms": [
        "küçük kabarık lezyon",
        "papula"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 33,
      "original_text": "püstül",
      "synonyms": [
        "irin dolu kabarcık",
        "sivilce"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 34,
      "original_text": "nodül",
      "synonyms": [
        "deri altı sertlik",
        "nodule"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 35,
      "original_text": "kist",
      "synonyms": [
        "deri kisti",
        "sebore kist"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 36,
      "original_text": "eritem",
      "synonyms": [
        "kızarıklık",
        "deri kızarması",
        "redness"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 37,
      "original_text": "kaşıntı",
      "synonyms": [
        "pruritus",
        "kaşınma",
        "itching"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 38,
      "original_text": "döküntü",
      "synonyms": [
        "raş",
        "egzanthem",
        "rash"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 39,
      "original_text": "vezikül",
      "synonyms": [
        "su kabarcığı",
        "küçük kabarcık",
        "vesicle"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 40,
      "original_text": "bül",
      "synonyms": [
        "büyük su kabarcığı",
        "bulla"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 41,
      "original_text": "ülser",
      "synonyms": [
        "yara",
        "açık yara",
        "ulcer"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 42,
      "original_text": "skuam",
      "synonyms": [
        "kepeklenme",
        "pullanma",
        "scaling"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 43,
      "original_text": "likenifikasyon",
      "synonyms": [
        "deri kalınlaşması",
        "lichenification"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 44,
      "original_text": "ekskoriasyon",
      "synonyms": [
        "kaşıntı yarası",
        "sıyrık"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 45,
      "original_text": "saç dökülmesi",
      "synonyms": [
        "alopesi",
        "kellik",
        "hair loss"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 46,
      "original_text": "saçta kırılma",
      "synonyms": [
        "kırık saçlar",
        "saç kopması"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 47,
      "original_text": "tırnak değişikliği",
      "synonyms": [
        "tırnak kalınlaşması",
        "tırnak renkleşmesi",
        "onikoliz"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 48,
      "original_text": "ürtiker plağı",
      "synonyms": [
        "kurdeşen döküntüsü",
        "kaşıntılı kabarıklık",
        "wheal"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 49,
      "original_text": "anjiyoödem",
      "synonyms": [
        "dudak şişmesi",
        "yüz şişmesi",
        "angioedema"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 50,
      "original_text": "hiperpigmentasyon",
      "synonyms": [
        "deri koyulaşması",
        "leke"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 51,
      "original_text": "hipopigmentasyon",
      "synonyms": [
        "deri renginde açılma",
        "beyaz leke"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 52,
      "original_text": "peteşi",
      "synonyms": [
        "küçük kırmızı noktalar",
        "petechiae"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 53,
      "original_text": "ekimoz",
      "synonyms": [
        "çürük",
        "morluk",
        "bruise"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 54,
      "original_text": "purpura",
      "synonyms": [
        "mor döküntü",
        "kanama döküntüsü"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 55,
      "original_text": "kuru cilt",
      "synonyms": [
        "kserozis",
        "cilt kuruluğu",
        "dry skin"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 56,
      "original_text": "yağlı cilt",
      "synonyms": [
        "sebore",
        "aşırı yağlanma"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 57,
      "original_text": "cilt çatlağı",
      "synonyms": [
        "fissür",
        "çatlak"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 58,
      "original_text": "kabuklanma",
      "synonyms": [
        "krutlanma",
        "yara kabuğu",
        "crust"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 59,
      "original_text": "plak lezyon",
      "synonyms": [
        "yüzeysel kabarık alan",
        "plaque"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 60,
      "original_text": "skutula",
      "synonyms": [
        "bal peteği kabuk",
        "favus kabuğu"
      ],
      "category": "Dermatoloji"
    },
    {
      "id": 81,
      "original_text": "göğüs ağrısı",
      "synonyms": [
        "retrosternal ağrı",
        "chest pain",
        "prekordial ağrı"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 82,
      "original_text": "çarpıntı",
      "synonyms": [
        "palpitasyon",
        "kalp çarpması",
        "palpitation"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 83,
      "original_text": "nefes darlığı",
      "synonyms": [
        "dispne",
        "nefes alamama",
        "dyspnea"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 84,
      "original_text": "ortopne",
      "synonyms": [
        "yatınca nefes darlığı",
        "orthopnea"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 85,
      "original_text": "paroksismal noktürnal dispne",
      "synonyms": [
        "gece ani nefes darlığı",
        "PND"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 86,
      "original_text": "bacak ödemi",
      "synonyms": [
        "ayak şişliği",
        "pretibial ödem",
        "leg swelling"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 87,
      "original_text": "boyun damarlarında dolgunluk",
      "synonyms": [
        "juguler venöz dolgunluk",
        "JVD"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 88,
      "original_text": "senkop",
      "synonyms": [
        "bayılma",
        "bilinç kaybı",
        "fainting"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 89,
      "original_text": "presenkop",
      "synonyms": [
        "bayılacak gibi olma",
        "baş dönmesi"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 90,
      "original_text": "kol ağrısı",
      "synonyms": [
        "sol kol ağrısı",
        "üst ekstremite ağrısı"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 91,
      "original_text": "çene ağrısı",
      "synonyms": [
        "alt çene ağrısı",
        "jaw pain"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 92,
      "original_text": "soğuk terleme",
      "synonyms": [
        "diaforez",
        "cold sweats"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 93,
      "original_text": "hipertansiyon",
      "synonyms": [
        "yüksek tansiyon",
        "kan basıncı yüksekliği"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 94,
      "original_text": "hipotansiyon",
      "synonyms": [
        "düşük tansiyon",
        "low blood pressure"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 95,
      "original_text": "taşikardi",
      "synonyms": [
        "hızlı kalp atımı",
        "nabız hızlılığı"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 96,
      "original_text": "bradikardi",
      "synonyms": [
        "yavaş kalp atımı",
        "nabız yavaşlığı"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 97,
      "original_text": "aritmi",
      "synonyms": [
        "düzensiz kalp atımı",
        "ritim bozukluğu"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 98,
      "original_text": "intermittan klodikasyo",
      "synonyms": [
        "yürüyünce bacak ağrısı",
        "claudication"
      ],
      "category": "Kardiyovasküler"
    },
    {
      "id": 111,
      "original_text": "öksürük",
      "synonyms": [
        "kuru öksürük",
        "cough"
      ],
      "category": "Solunum"
    },
    {
      "id": 112,
      "original_text": "balgamlı öksürük",
      "synonyms": [
        "prodüktif öksürük",
        "wet cough"
      ],
      "category": "Solunum"
    },
    {
      "id": 113,
      "original_text": "hemoptizi",
      "synonyms": [
        "kanlı balgam",
        "kan tükürme",
        "hemoptysis"
      ],
      "category": "Solunum"
    },
    {
      "id": 114,
      "original_text": "wheezing",
      "synonyms": [
        "hırıltılı solunum",
        "hışıltı",
        "sibilant ronküs"
      ],
      "category": "Solunum"
    },
    {
      "id": 115,
      "original_text": "stridor",
      "synonyms": [
        "üst solunum yolu tıkanıklığı sesi"
      ],
      "category": "Solunum"
    },
    {
      "id": 116,
      "original_text": "takipne",
      "synonyms": [
        "hızlı solunum",
        "tachypnea"
      ],
      "category": "Solunum"
    },
    {
      "id": 117,
      "original_text": "burun akıntısı",
      "synonyms": [
        "rinore",
        "burun tıkanıklığı",
        "nasal discharge"
      ],
      "category": "Solunum"
    },
    {
      "id": 118,
      "original_text": "burun tıkanıklığı",
      "synonyms": [
        "nazal konjesyon",
        "nasal obstruction"
      ],
      "category": "Solunum"
    },
    {
      "id": 119,
      "original_text": "hapşırma",
      "synonyms": [
        "aksırma",
        "sneezing"
      ],
      "category": "Solunum"
    },
    {
      "id": 120,
      "original_text": "boğaz ağrısı",
      "synonyms": [
        "odinofaji",
        "faringeal ağrı",
        "sore throat"
      ],
      "category": "Solunum"
    },
    {
      "id": 121,
      "original_text": "ses kısıklığı",
      "synonyms": [
        "disfoni",
        "hoarseness"
      ],
      "category": "Solunum"
    },
    {
      "id": 122,
      "original_text": "plöretik göğüs ağrısı",
      "synonyms": [
        "nefes alınca ağrı",
        "pleuritic pain"
      ],
      "category": "Solunum"
    },
    {
      "id": 123,
      "original_text": "ronküs",
      "synonyms": [
        "ral",
        "akciğer sesi"
      ],
      "category": "Solunum"
    },
    {
      "id": 124,
      "original_text": "krepitan ral",
      "synonyms": [
        "çıtırtı sesi",
        "crepitation"
      ],
      "category": "Solunum"
    },
    {
      "id": 125,
      "original_text": "pürülan balgam",
      "synonyms": [
        "sarı-yeşil balgam",
        "iltihaplı balgam"
      ],
      "category": "Solunum"
    },
    {
      "id": 126,
      "original_text": "boğmaca tarzı öksürük",
      "synonyms": [
        "paroksismal öksürük",
        "whooping cough"
      ],
      "category": "Solunum"
    },
    {
      "id": 127,
      "original_text": "posttusif kusma",
      "synonyms": [
        "öksürük sonrası kusma"
      ],
      "category": "Solunum"
    },
    {
      "id": 128,
      "original_text": "inspiratuar çekilme",
      "synonyms": [
        "interkostal çekilme",
        "retraksiyon"
      ],
      "category": "Solunum"
    },
    {
      "id": 146,
      "original_text": "karın ağrısı",
      "synonyms": [
        "abdominal ağrı",
        "stomach pain"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 147,
      "original_text": "epigastrik ağrı",
      "synonyms": [
        "mide ağrısı",
        "üst karın ağrısı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 148,
      "original_text": "bulantı",
      "synonyms": [
        "mide bulantısı",
        "nausea"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 149,
      "original_text": "kusma",
      "synonyms": [
        "vomiting",
        "emezis"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 150,
      "original_text": "ishal",
      "synonyms": [
        "diyare",
        "sulu dışkı",
        "diarrhea"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 151,
      "original_text": "kabızlık",
      "synonyms": [
        "konstipasyon",
        "peklik",
        "constipation"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 152,
      "original_text": "kanlı dışkı",
      "synonyms": [
        "hematokezya",
        "rektal kanama",
        "bloody stool"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 153,
      "original_text": "melena",
      "synonyms": [
        "siyah dışkı",
        "katran dışkı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 154,
      "original_text": "hematemez",
      "synonyms": [
        "kanlı kusma",
        "kan kusma"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 155,
      "original_text": "hazımsızlık",
      "synonyms": [
        "dispepsi",
        "sindirim güçlüğü",
        "indigestion"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 156,
      "original_text": "şişkinlik",
      "synonyms": [
        "distansiyon",
        "meteorizm",
        "bloating"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 157,
      "original_text": "gaz",
      "synonyms": [
        "flatülans",
        "yellenme"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 158,
      "original_text": "mide yanması",
      "synonyms": [
        "pirozis",
        "heartburn",
        "reflü"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 159,
      "original_text": "regürjitasyon",
      "synonyms": [
        "ağza geri gelme",
        "yiyecek geri gelmesi"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 160,
      "original_text": "yutma güçlüğü",
      "synonyms": [
        "disfaji",
        "yutamama",
        "dysphagia"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 161,
      "original_text": "sağ üst kadran ağrısı",
      "synonyms": [
        "RUQ ağrısı",
        "safra kesesi bölgesi ağrısı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 162,
      "original_text": "sağ alt kadran ağrısı",
      "synonyms": [
        "RLQ ağrısı",
        "apandisit bölgesi ağrısı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 163,
      "original_text": "sol alt kadran ağrısı",
      "synonyms": [
        "LLQ ağrısı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 164,
      "original_text": "defans",
      "synonyms": [
        "karın sertliği",
        "guarding"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 165,
      "original_text": "rebound",
      "synonyms": [
        "geri çekilme hassasiyeti",
        "periton irritasyonu"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 166,
      "original_text": "ascites",
      "synonyms": [
        "karında sıvı",
        "asit"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 167,
      "original_text": "hepatomegali",
      "synonyms": [
        "karaciğer büyümesi"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 168,
      "original_text": "splenomegali",
      "synonyms": [
        "dalak büyümesi"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 169,
      "original_text": "anorektal ağrı",
      "synonyms": [
        "makat ağrısı",
        "anal ağrı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 170,
      "original_text": "tenesmus",
      "synonyms": [
        "dışkılama hissi",
        "ıkınma"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 171,
      "original_text": "mukuslu dışkı",
      "synonyms": [
        "sümüksü dışkı"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 172,
      "original_text": "anal kaşıntı",
      "synonyms": [
        "perianal pruritus"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 173,
      "original_text": "dışkıda parazit",
      "synonyms": [
        "dışkıda kurt"
      ],
      "category": "Gastrointestinal"
    },
    {
      "id": 191,
      "original_text": "baş ağrısı",
      "synonyms": [
        "sefalji",
        "headache"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 192,
      "original_text": "migren tipi baş ağrısı",
      "synonyms": [
        "zonklayıcı baş ağrısı",
        "unilateral baş ağrısı"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 193,
      "original_text": "gerilim tipi baş ağrısı",
      "synonyms": [
        "bant tarzı ağrı",
        "sıkıştırıcı ağrı"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 194,
      "original_text": "ani şiddetli baş ağrısı",
      "synonyms": [
        "thunderclap headache",
        "yıldırım düşmesi gibi ağrı"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 195,
      "original_text": "baş dönmesi",
      "synonyms": [
        "vertigo",
        "denge kaybı",
        "dizziness"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 196,
      "original_text": "bulantı ile baş dönmesi",
      "synonyms": [
        "vestibüler bulantı"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 197,
      "original_text": "bilinç bulanıklığı",
      "synonyms": [
        "konfüzyon",
        "dezoryantasyon",
        "confusion"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 198,
      "original_text": "bilinç kaybı",
      "synonyms": [
        "şuur kaybı",
        "koma",
        "stupor"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 199,
      "original_text": "nöbet",
      "synonyms": [
        "konvülsiyon",
        "epileptik atak",
        "seizure"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 200,
      "original_text": "tonik-klonik nöbet",
      "synonyms": [
        "grand mal",
        "jeneralize nöbet"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 201,
      "original_text": "absans nöbet",
      "synonyms": [
        "dalma nöbeti",
        "petit mal"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 202,
      "original_text": "tremor",
      "synonyms": [
        "titreme",
        "el titremesi"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 203,
      "original_text": "rijidite",
      "synonyms": [
        "kas sertliği",
        "rigidity"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 204,
      "original_text": "bradikinezi",
      "synonyms": [
        "hareketlerde yavaşlama"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 205,
      "original_text": "postural instabilite",
      "synonyms": [
        "denge bozukluğu",
        "düşme eğilimi"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 206,
      "original_text": "hemiparezi",
      "synonyms": [
        "yarım vücut güçsüzlüğü",
        "hemipleji"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 207,
      "original_text": "afazi",
      "synonyms": [
        "konuşma bozukluğu",
        "konuşamama"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 208,
      "original_text": "dizartri",
      "synonyms": [
        "peltek konuşma",
        "konuşma zorluğu"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 209,
      "original_text": "görme kaybı",
      "synonyms": [
        "körlük",
        "amaurosis"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 210,
      "original_text": "çift görme",
      "synonyms": [
        "diplopi",
        "double vision"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 211,
      "original_text": "parestezi",
      "synonyms": [
        "uyuşukluk",
        "karıncalanma",
        "numbness"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 212,
      "original_text": "hafıza kaybı",
      "synonyms": [
        "amnezi",
        "unutkanlık",
        "memory loss"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 213,
      "original_text": "kognitif bozukluk",
      "synonyms": [
        "bilişsel gerileme",
        "demans"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 214,
      "original_text": "ense sertliği",
      "synonyms": [
        "meningismus",
        "nuchal rigidity"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 215,
      "original_text": "fotofobi",
      "synonyms": [
        "ışık hassasiyeti",
        "ışıktan kaçınma"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 216,
      "original_text": "fonofobi",
      "synonyms": [
        "ses hassasiyeti",
        "sesten rahatsız olma"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 217,
      "original_text": "aura",
      "synonyms": [
        "migren öncesi belirti",
        "görsel aura"
      ],
      "category": "Nörolojik"
    },
    {
      "id": 231,
      "original_text": "depresif duygudurum",
      "synonyms": [
        "çökkünlük",
        "mutsuzluk",
        "üzgün hissetme"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 232,
      "original_text": "anhedoni",
      "synonyms": [
        "zevk alamama",
        "ilgi kaybı"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 233,
      "original_text": "anksiyete",
      "synonyms": [
        "kaygı",
        "endişe",
        "anxiety"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 234,
      "original_text": "panik atak",
      "synonyms": [
        "ani korku nöbeti",
        "panik nöbeti"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 235,
      "original_text": "obsesyon",
      "synonyms": [
        "takıntı",
        "obsesif düşünce"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 236,
      "original_text": "kompulsiyon",
      "synonyms": [
        "zorlantı",
        "tekrarlayıcı davranış"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 237,
      "original_text": "halüsinasyon",
      "synonyms": [
        "olmayan şeyleri görme/duyma",
        "varsanı"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 238,
      "original_text": "sanrı",
      "synonyms": [
        "hezeyan",
        "delusion"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 239,
      "original_text": "manik dönem",
      "synonyms": [
        "aşırı enerji",
        "uyku ihtiyacı azalması",
        "grandiyozite"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 240,
      "original_text": "intihar düşüncesi",
      "synonyms": [
        "suisidal ideation",
        "özkıyım düşüncesi"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 241,
      "original_text": "uyku bozukluğu",
      "synonyms": [
        "erken uyanma",
        "uykuya dalamama"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 242,
      "original_text": "konsantrasyon güçlüğü",
      "synonyms": [
        "dikkat dağınıklığı",
        "odaklanamama"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 243,
      "original_text": "değersizlik hissi",
      "synonyms": [
        "düşük özsaygı",
        "suçluluk duygusu"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 244,
      "original_text": "ajitasyon",
      "synonyms": [
        "huzursuzluk",
        "yerinde duramama"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 245,
      "original_text": "psikomotor retardasyon",
      "synonyms": [
        "hareketlerde yavaşlama",
        "konuşmada yavaşlama"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 246,
      "original_text": "fobi",
      "synonyms": [
        "korku",
        "irrasyonel korku"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 247,
      "original_text": "travma sonrası belirtiler",
      "synonyms": [
        "flashback",
        "kabus",
        "kaçınma davranışı"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 248,
      "original_text": "somatik yakınmalar",
      "synonyms": [
        "bedensel yakınmalar",
        "açıklanamayan ağrılar"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 249,
      "original_text": "hastalık kaygısı",
      "synonyms": [
        "hipokondriak düşünce",
        "hastalık korkusu"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 250,
      "original_text": "alkol yoksunluk belirtileri",
      "synonyms": [
        "tremor",
        "terleme",
        "ajitasyon",
        "nöbet"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 251,
      "original_text": "madde bağımlılığı belirtileri",
      "synonyms": [
        "craving",
        "tolerans",
        "yoksunluk"
      ],
      "category": "Psikiyatrik"
    },
    {
      "id": 271,
      "original_text": "poliüri",
      "synonyms": [
        "sık idrara çıkma",
        "çok idrar yapma"
      ],
      "category": "Endokrin"
    },
    {
      "id": 272,
      "original_text": "polidipsi",
      "synonyms": [
        "aşırı susama",
        "çok su içme"
      ],
      "category": "Endokrin"
    },
    {
      "id": 273,
      "original_text": "polifaji",
      "synonyms": [
        "aşırı yeme",
        "açlık hissi"
      ],
      "category": "Endokrin"
    },
    {
      "id": 274,
      "original_text": "hipoglisemi belirtileri",
      "synonyms": [
        "terleme",
        "çarpıntı",
        "titreme",
        "açlık"
      ],
      "category": "Endokrin"
    },
    {
      "id": 275,
      "original_text": "hiperglisemi belirtileri",
      "synonyms": [
        "susuzluk",
        "sık idrar",
        "bulanık görme"
      ],
      "category": "Endokrin"
    },
    {
      "id": 276,
      "original_text": "tirotoksikoz belirtileri",
      "synonyms": [
        "taşikardi",
        "terleme",
        "kilo kaybı",
        "tremor"
      ],
      "category": "Endokrin"
    },
    {
      "id": 277,
      "original_text": "hipotiroidi belirtileri",
      "synonyms": [
        "yorgunluk",
        "kabızlık",
        "soğuk intoleransı",
        "kilo artışı"
      ],
      "category": "Endokrin"
    },
    {
      "id": 278,
      "original_text": "guatr",
      "synonyms": [
        "tiroid büyümesi",
        "boyunda şişlik"
      ],
      "category": "Endokrin"
    },
    {
      "id": 279,
      "original_text": "ekzoftalmus",
      "synonyms": [
        "göz fırlaması",
        "proptozis"
      ],
      "category": "Endokrin"
    },
    {
      "id": 280,
      "original_text": "sıcak intoleransı",
      "synonyms": [
        "sıcaktan rahatsız olma"
      ],
      "category": "Endokrin"
    },
    {
      "id": 281,
      "original_text": "soğuk intoleransı",
      "synonyms": [
        "soğuğa tahammülsüzlük"
      ],
      "category": "Endokrin"
    },
    {
      "id": 282,
      "original_text": "menstrüel düzensizlik",
      "synonyms": [
        "adet düzensizliği",
        "oligomenore",
        "amenore"
      ],
      "category": "Endokrin"
    },
    {
      "id": 296,
      "original_text": "dizüri",
      "synonyms": [
        "ağrılı idrar yapma",
        "yanmalı idrar"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 297,
      "original_text": "sık idrara çıkma",
      "synonyms": [
        "pollakiüri",
        "frequency"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 298,
      "original_text": "noktüri",
      "synonyms": [
        "gece idrara çıkma"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 299,
      "original_text": "hematüri",
      "synonyms": [
        "kanlı idrar",
        "idrarda kan"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 300,
      "original_text": "idrar retansiyonu",
      "synonyms": [
        "idrar yapamama",
        "mesane dolgunluğu"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 301,
      "original_text": "inkontinans",
      "synonyms": [
        "idrar kaçırma",
        "mesane kontrolsüzlüğü"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 302,
      "original_text": "suprapubik ağrı",
      "synonyms": [
        "mesane ağrısı",
        "alt karın ağrısı"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 303,
      "original_text": "yan ağrısı",
      "synonyms": [
        "böbrek bölgesi ağrısı",
        "flank pain"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 304,
      "original_text": "renal kolik",
      "synonyms": [
        "taş ağrısı",
        "şiddetli yan ağrısı"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 305,
      "original_text": "üretral akıntı",
      "synonyms": [
        "penis akıntısı",
        "gonoroik akıntı"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 306,
      "original_text": "vajinal akıntı",
      "synonyms": [
        "vajinal discharge",
        "lökore"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 307,
      "original_text": "vajinal kaşıntı",
      "synonyms": [
        "vulvar pruritus"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 308,
      "original_text": "disparoni",
      "synonyms": [
        "ağrılı cinsel ilişki"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 309,
      "original_text": "genital ülser",
      "synonyms": [
        "genital yara",
        "şankr"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 310,
      "original_text": "genital siğil",
      "synonyms": [
        "kondilom",
        "genital wart"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 311,
      "original_text": "prostatizm",
      "synonyms": [
        "zayıf idrar akımı",
        "kesik kesik idrar",
        "damla damla idrar"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 312,
      "original_text": "oligüri",
      "synonyms": [
        "az idrar yapma",
        "idrar azlığı"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 313,
      "original_text": "anüri",
      "synonyms": [
        "idrar yapamama",
        "idrar çıkışı olmaması"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 314,
      "original_text": "proteinüri",
      "synonyms": [
        "idrarda protein",
        "köpüklü idrar"
      ],
      "category": "Ürogenital"
    },
    {
      "id": 331,
      "original_text": "menoraji",
      "synonyms": [
        "aşırı adet kanaması",
        "ağır adet"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 332,
      "original_text": "metroraji",
      "synonyms": [
        "adetler arası kanama",
        "düzensiz kanama"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 333,
      "original_text": "dismenore",
      "synonyms": [
        "adet ağrısı",
        "menstrüel kramp"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 334,
      "original_text": "amenore",
      "synonyms": [
        "adet görememe",
        "adet kesilmesi"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 335,
      "original_text": "sıcak basması",
      "synonyms": [
        "hot flash",
        "vazomotor semptom"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 336,
      "original_text": "vajinal kuruluk",
      "synonyms": [
        "atrofik vajinit"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 337,
      "original_text": "pelvik ağrı",
      "synonyms": [
        "alt karın ağrısı",
        "pelvic pain"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 338,
      "original_text": "postkoital kanama",
      "synonyms": [
        "ilişki sonrası kanama"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 339,
      "original_text": "postmenopozal kanama",
      "synonyms": [
        "menopoz sonrası kanama"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 340,
      "original_text": "meme kitlesi",
      "synonyms": [
        "meme nodülü",
        "memede sertlik"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 341,
      "original_text": "meme başı akıntısı",
      "synonyms": [
        "galaktore",
        "nipple discharge"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 342,
      "original_text": "doğum sonrası kanama",
      "synonyms": [
        "postpartum hemoraji",
        "PPH"
      ],
      "category": "Jinekoloji"
    },
    {
      "id": 356,
      "original_text": "eklem ağrısı",
      "synonyms": [
        "artralji",
        "joint pain"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 357,
      "original_text": "eklem şişliği",
      "synonyms": [
        "artrit",
        "eklem iltihabı"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 358,
      "original_text": "eklem sertliği",
      "synonyms": [
        "sabah tutukluğu",
        "joint stiffness"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 359,
      "original_text": "bel ağrısı",
      "synonyms": [
        "lumbalji",
        "low back pain"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 360,
      "original_text": "boyun ağrısı",
      "synonyms": [
        "servikal ağrı",
        "neck pain"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 361,
      "original_text": "sırt ağrısı",
      "synonyms": [
        "dorsalji",
        "back pain"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 362,
      "original_text": "kas güçsüzlüğü",
      "synonyms": [
        "kuvvetsizlik",
        "muscle weakness"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 363,
      "original_text": "kas krampı",
      "synonyms": [
        "kas spazmı",
        "cramping"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 364,
      "original_text": "kemik ağrısı",
      "synonyms": [
        "osseous pain"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 365,
      "original_text": "patolojik kırık",
      "synonyms": [
        "spontan kırık"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 366,
      "original_text": "boy kısalması",
      "synonyms": [
        "vertebral çökme"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 367,
      "original_text": "simetrik artrit",
      "synonyms": [
        "bilateral eklem tutulumu"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 368,
      "original_text": "monoartrit",
      "synonyms": [
        "tek eklem tutulumu"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 369,
      "original_text": "kelebek döküntüsü",
      "synonyms": [
        "malar rash",
        "yüzde kızarıklık"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 370,
      "original_text": "podagra",
      "synonyms": [
        "ayak başparmağı ağrısı",
        "gut artriti"
      ],
      "category": "Kas-iskelet"
    },
    {
      "id": 381,
      "original_text": "anemi belirtileri",
      "synonyms": [
        "solukluk",
        "yorgunluk",
        "nefes darlığı"
      ],
      "category": "Hematoloji"
    },
    {
      "id": 382,
      "original_text": "kolay kanama",
      "synonyms": [
        "kanama eğilimi",
        "purpura"
      ],
      "category": "Hematoloji"
    },
    {
      "id": 383,
      "original_text": "kolay morarma",
      "synonyms": [
        "ekimoz oluşumu"
      ],
      "category": "Hematoloji"
    },
    {
      "id": 384,
      "original_text": "tekrarlayan enfeksiyonlar",
      "synonyms": [
        "bağışıklık yetersizliği"
      ],
      "category": "Hematoloji"
    },
    {
      "id": 385,
      "original_text": "hepatosplenomegali",
      "synonyms": [
        "karaciğer dalak büyümesi"
      ],
      "category": "Hematoloji"
    },
    {
      "id": 396,
      "original_text": "ateş ve titreme",
      "synonyms": [
        "rigor",
        "septik ateş"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 397,
      "original_text": "ondülan ateş",
      "synonyms": [
        "dalgalanan ateş",
        "brusella ateşi"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 398,
      "original_text": "gri membran",
      "synonyms": [
        "difteri membranı",
        "psödomembran"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 399,
      "original_text": "ısırık yarası",
      "synonyms": [
        "hayvan ısırığı",
        "bite wound"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 400,
      "original_text": "hidrofobi",
      "synonyms": [
        "su korkusu",
        "kuduz belirtisi"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 401,
      "original_text": "aerofobi",
      "synonyms": [
        "hava akımı korkusu"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 402,
      "original_text": "siyah kabuk",
      "synonyms": [
        "eskar",
        "şarbon kabuğu"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 403,
      "original_text": "eritema migrans",
      "synonyms": [
        "göç eden kızarıklık",
        "hedef lezyon",
        "Lyme döküntüsü"
      ],
      "category": "Enfeksiyon"
    },
    {
      "id": 404,
      "original_text": "veziküler döküntü",
      "synonyms": [
        "herpes döküntüsü",
        "su toplayıcı döküntü"
      ],
      "category": "Enfeksiyon"
    }
  ]
}