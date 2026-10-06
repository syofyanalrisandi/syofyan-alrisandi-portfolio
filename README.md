# 📐 ECEK2 CAD

> **Platform Web Pembelajaran Gambar Teknik Profesional dengan 100 Dokumen Nyata (Tampak Isometri 3D & Proyeksi 2D Lengkap)**

![ECEK2 CAD](https://img.shields.io/badge/ECEK2-CAD-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)
![Dokumen](https://img.shields.io/badge/PDF_Technical_Drawings-100_Files-success?style=for-the-badge)
![Autodesk Inventor](https://img.shields.io/badge/Ready_For-Autodesk_Inventor_%26_SolidWorks-E51937?style=for-the-badge)

---

## 🌟 Tentang ECEK2 CAD

**ECEK2 CAD** adalah aplikasi web viewer gambar teknik interaktif yang dirancang khusus untuk pemula hingga tingkat lanjut dalam mempelajari software CAD 3D seperti **Autodesk Inventor** dan **SolidWorks**.

Antarmuka dirancang mengadopsi tema **LinkedIn / LinkedIn Learning Workspace** yang rapi, modern, dan profesional, memudahkan navigasi melalui silabus 100 dokumen gambar teknik berdimensi standar industri.

### ✨ Keunggulan Utama:
1. **100 Dokumen Asli Berfitur Tampak Isometri 3D**:
   - Seluruh 100 lembar kerja menyertakan pandangan **3D Isometri (*Isometric / 3D Shaded View*)** di sudut lembar, memudahkan visualisasi bentuk 3D benda secara instan.
   - Dilengkapi **Proyeksi Ortogonal 2D (*Front, Top, Side Views*)** dan potongan penampang (*Section Cut A-A*) lengkap dengan dimensi presisi (diameter, radius, toleransi, alur pasak, counterbore).
2. **LinkedIn Learning UI Experience**:
   - Sidebar playlist silabus 3-kolom dengan filter kategori cepat (*Pill Filters*).
   - Pencarian real-time instan berdasarkan nama komponen atau nomor drawing.
   - Kartu spesifikasi teknis dan rekomendasi alur kerja fitur CAD (*Extrude, Revolve, Hole, Fillet, Sweep, dll.*).
3. **100% Bebas Ketergantungan Eksternal**:
   - Berjalan mandiri secara lokal dengan server bawaan PowerShell.

---

## 📂 Struktur Repositori

```text
ECEK2-CAD/
├── index.html          # Halaman utama viewer web (LinkedIn UI Layout)
├── index.css           # Styling lengkap tema LinkedIn Learning
├── app.js              # Logika interaktif viewer, pencarian, & filter
├── js/
│   └── data.js         # Metadata lengkap 100 gambar teknik (PDF-001 s/d PDF-100)
├── pdf/                # Koleksi 100 file PDF gambar teknik asli
│   ├── ENG_01_Advanced_Clamp_Fixture.pdf ... ENG_10_3D_Mechanical_Part.pdf
│   └── ISO_3D_01.pdf ... ISO_3D_90.pdf
├── server.ps1          # Server lokal ringan (PowerShell HTTP Listener)
├── .gitignore          # Konfigurasi pengabaian file non-proyek
└── README.md           # Dokumentasi proyek
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone repositori**:
   ```bash
   git clone https://github.com/syofyanalrisandi/ECEK2-CAD.git
   cd ECEK2-CAD
   ```

2. **Jalankan Server Lokal**:
   - Buka PowerShell di folder proyek dan jalankan:
     ```powershell
     powershell -ExecutionPolicy Bypass -File .\server.ps1
     ```

3. **Buka Aplikasi**:
   - Akses browser Anda di: [http://localhost:8080](http://localhost:8080)

---

## 📚 Klasifikasi 100 Dokumen Gambar Teknik

| Kategori | Jumlah File | Rentang File | Karakteristik Teknik |
|---|---|---|---|
| **Machinist Fixture & Assemblies** | 10 Dokumen | `ENG_01` s/d `ENG_10` | Klem perkakas, flens karburator, clevis fork, sheet metal, dll. Tampak 2D ortogonal + potongan + 3D isometri. |
| **Precision Mounts & Housings** | 30 Dokumen | `ISO_3D_01` s/d `ISO_3D_30` | Pillow block, bracket pivot, offset fork, dovetail slide, flanged mount, dll. 2D ortogonal berdimensi + isometri 3D berwarna. |
| **Flanged & Transmission Components** | 30 Dokumen | `ISO_3D_31` s/d `ISO_3D_60` | T-slot clamp, flens kopling ganda, puli beralur, braket rusuk penguat segitiga, dll. 2D + potongan + isometri 3D. |
| **Machined Tooling Jigs & Complex Solids** | 30 Dokumen | `ISO_3D_61` s/d `ISO_3D_90` | Baji sudut, impeller hub, spindel bushing, sliding track base, landasan jig kompleks, dll. 2D + dimensi toleransi + isometri 3D. |

---

## 🛠️ Lisensi & Hak Cipta
Dokumen gambar teknik dikumpulkan dari arsip sumber terbuka untuk keperluan edukasi dan latihan pemodelan CAD 3D.
Semua hak cipta gambar teknis berada pada pembuat dan pemilik masing-masing.
Aplikasi web dikembangkan oleh [Syofyan Alrisandi](https://github.com/syofyanalrisandi).
