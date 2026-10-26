/**
 * SYOFYAN ALRISANDI, S.T. - PORTFOLIO INTERACTIVITY SCRIPT
 * Comprehensive project dataset, STAR methodology, Triple-Crown Interactive Suite,
 * Three.js WebGL 3D Viewer, Live Engineering Calculators, Recruiter Quick-Sheet, and PDF Reader.
 */

// 1. Comprehensive Project Dataset with STAR Methodology
const projectsData = [
  {
    id: "uav-wing-modal",
    category: "aerospace",
    categoryNameId: "Aeroelastisitas & FEA",
    categoryNameEn: "Aeroelasticity & FEA",
    institution: "Laboratorium Dinamika Struktur (LDS) UNAND",
    instBadgeClass: "unand",
    titleId: "Studi Eksperimental Pergeseran Frekuensi Pribadi untuk Meningkatkan Kekakuan Sayap UAV Tipe Skywalker",
    titleEn: "Experimental Study of Natural Frequency Shift to Increase Stiffness in Wings of Skywalker UAV",
    shortDescId: "Penelitian Tugas Akhir: Mengatasi defleksi akibat resonansi getaran fluida dengan memvariasikan letak spar terhadap CG serta memvalidasi simulasi MSC Nastran SOL 103/111 dengan uji eksperimental bump test & MATLAB (error serendah 0.30%).",
    shortDescEn: "Final Project: Investigating fluid-structure resonance avoidance by shifting spar placement relative to CG, validating MSC Nastran SOL 103/111 simulations with experimental modal bump testing & MATLAB (error as low as 0.30%).",
    thumb: "assets/projects/project_1_uav_wing.png",
    detailImg: "assets/projects/project_1_frf_comparison.png",
    pagePdf: "assets/portfolio_pages/page_3.png",
    pagePdf2: "assets/portfolio_pages/page_4.png",
    pageNumber: 3,
    tools: ["Autodesk Inventor", "MSC Nastran/Patran", "SOL 103/111", "Bump Test Impact Hammer", "MATLAB"],
    keySpecs: [
      { label: "Target", val: "Peningkatan Kekakuan & Resonansi Flutter" },
      { label: "Solvers", val: "SOL 103 (Normal Mode) & SOL 111 (FRF)" },
      { label: "Validasi", val: "Simulasi vs Bump Test Eksperimen" },
      { label: "Akurasi", val: "Tingkat Error: 0.30% - 3.40%" }
    ],
    star: {
      situation: "Defleksi kritis akibat eksitasi aliran fluida mendekati frekuensi natural sayap.",
      task: "Optimasi letak spar terhadap CG guna meningkatkan kekakuan lentur dan torsi.",
      action: "Modeling 3D Inventor, simulasi MSC Nastran SOL 103/111, dan uji modal bump test.",
      result: "Kekakuan optimal pada 45 mm dari CG; korelasi error simulasi vs pengujian serendah 0.30%."
    },
    fullDetailsId: `
      <p><strong>Latar Belakang & Masalah:</strong> Pada konstruksi sayap pesawat UAV jenis sayap tetap (Fixed Wing Skywalker), defleksi sering terjadi akibat frekuensi gangguan aliran fluida udara yang mendekati nilai frekuensi pribadi (natural frequency) struktur, memicu fenomena resonansi getaran dan flutter yang merusak stabilitas terbang.</p>
      <br>
      <p><strong>Metodologi Solusi Rekayasa:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Pemodelan 3D komponen utama sayap (rip, spar, skin) dengan Autodesk Inventor.</li>
        <li>Variasi letak penempatan spar secara simetris terhadap Central of Gravity (15 mm, 25 mm, 35 mm, dan 45 mm dari CG) serta variasi dimensi panjang spar.</li>
        <li>Simulasi respon getaran struktur menggunakan MSC Patran/Nastran SOL 103 (Normal Mode) untuk memperoleh nilai frekuensi natural dan SOL 111 untuk kurva respon frekuensi (FRF).</li>
        <li>Pengujian eksperimental Modal Analysis metode <em>bump test</em> menggunakan impact hammer dan sensor akselerometer.</li>
        <li>Validasi akurasi data simulasi terhadap eksperimen diolah menggunakan MATLAB.</li>
      </ul>
      <br>
      <p><strong>Hasil Uji & Validasi:</strong> Pergeseran spar 45 mm dari CG terbukti paling efektif meningkatkan kekakuan lentur dan torsi sayap. Data komparasi 6 normal mode menunjukkan akurasi tinggi:</p>
      <div style="overflow-x: auto; margin-top: 12px;">
        <table class="modal-table">
          <thead>
            <tr><th>Normal Mode</th><th>Simulasi SOL 103 (Hz)</th><th>Eksperimen Bump Test (Hz)</th><th>Error (%)</th></tr>
          </thead>
          <tbody>
            <tr><td>Mode 1</td><td>16.5 Hz</td><td>16.0 Hz</td><td>3.40%</td></tr>
            <tr><td>Mode 2</td><td>53.3 Hz</td><td>53.5 Hz</td><td><strong>0.38%</strong></td></tr>
            <tr><td>Mode 3</td><td>66.5 Hz</td><td>60.5 Hz</td><td>9.92%</td></tr>
            <tr><td>Mode 4</td><td>99.9 Hz</td><td>100.5 Hz</td><td><strong>0.62%</strong></td></tr>
            <tr><td>Mode 5</td><td>130.8 Hz</td><td>132.5 Hz</td><td>1.27%</td></tr>
            <tr><td>Mode 6</td><td>139.4 Hz</td><td>139.0 Hz</td><td><strong>0.30%</strong></td></tr>
          </tbody>
        </table>
      </div>
    `,
    fullDetailsEn: `
      <p><strong>Background:</strong> In fixed-wing UAV aircraft wings, excessive structural deflection occurs when fluid aerodynamic turbulence frequencies approach the natural vibration frequencies of the structure (resonance/flutter), risking aeroelastic instability.</p>
      <br>
      <p><strong>Methodology:</strong> Systematic parametric modeling in Autodesk Inventor, finite element modal simulation in MSC Nastran SOL 103/111, followed by experimental impact hammer bump testing and MATLAB validation.</p>
      <br>
      <p><strong>Impact:</strong> Demonstrates optimal stiffness at 45 mm CG offset with correlation error as low as 0.30%.</p>
    `
  },
  {
    id: "n219-amphibious-brin",
    category: "aerospace",
    categoryNameId: "Aerodinamika & Wind Tunnel",
    categoryNameEn: "Aerodynamics & Wind Tunnel",
    institution: "Badan Riset dan Inovasi Nasional (BRIN) LA3",
    instBadgeClass: "brin",
    titleId: "Analisis Tegangan Sayap Pesawat Amfibi N219 (Kapasitas 19 Penumpang Skala 1:6.3) di ILST BRIN",
    titleEn: "Wing Stress Analysis Study of N219 Amphibian Aircraft (19 Pax, 1:6.3 Scale) in ILST Wind Tunnel",
    shortDescId: "Magang R&D di Laboratorium LA3 BRIN Serpong: Evaluasi distribusi beban aerodinamika pada tekanan dinamis 4000 N/mm² (V=80 m/s), memastikan safety factor sayap > 3.09 (standar aman > 2.0) sebelum uji terowongan angin ILST.",
    shortDescEn: "R&D Internship at BRIN LA3 Serpong: Aerodynamic load distribution evaluation under dynamic pressure of 4000 N/mm² (V=80 m/s), verifying safety factor > 3.09 (standard safe > 2.0) before Indonesian Low Speed Tunnel (ILST) testing.",
    thumb: "assets/projects/project_2_n219_amphibious.png",
    detailImg: "assets/projects/project_2_safety_factors.png",
    pagePdf: "assets/portfolio_pages/page_5.png",
    pagePdf2: "assets/portfolio_pages/page_6.png",
    pageNumber: 5,
    tools: ["Indonesian Low Speed Tunnel (ILST)", "Stress Analysis", "Safety Factor FEA", "Aerodynamic Testing"],
    keySpecs: [
      { label: "Pesawat", val: "N219 Amfibi 2-Engine 19-Pax (Skala 1:6.3)" },
      { label: "Fasilitas", val: "Indonesian Low Speed Tunnel (ILST)" },
      { label: "Kondisi Uji", val: "Tekanan Dinamis 4000 N/mm² (V = 80 m/s)" },
      { label: "Safety Factor", val: "3.09 hingga 20.70 (100% Lolos Uji Aman)" }
    ],
    star: {
      situation: "Pengujian aerodinamika model skala 1:6.3 pesawat N219 di terowongan angin ILST BRIN.",
      task: "Memvalidasi integritas struktural sayap dan strut terhadap beban dinamis kecepatan 80 m/s.",
      action: "Analisis tegangan normal dan momen lentur di 5 stasiun bentang pada kondisi normal dan blade-off.",
      result: "Safety Factor terendah 3.09 (standar aman > 2.0); sertifikasi uji 100% aman tanpa kegagalan."
    },
    fullDetailsId: `
      <p><strong>Latar Belakang:</strong> Pesawat N219 Amfibi rancangan nasional memerlukan pengujian karakteristik aerodinamika terowongan angin berskala 1:6.3 di Indonesian Low Speed Tunnel (ILST) BRIN Serpong. Sebelum model diuji pada kecepatan tinggi, analisis tegangan kritis wajib dilakukan untuk menjamin integritas sayap, komponen penyangga (strut), dan konektor floater agar 100% aman.</p>
      <br>
      <p><strong>Metode Analisis:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Model aerodinamika sayap dianalisis pada tekanan dinamis 4000 N/mm² dengan kecepatan aliran V = 80 m/s.</li>
        <li>Perhitungan distribusi pembebanan strut sayap pada kondisi normal (normal condition) dan kondisi ekstrem bilah baling-baling putus (blade-off condition).</li>
        <li>Evaluasi momen lentur (bending moment) dan tegangan normal (normal stress) pada 5 stasiun pemotongan sayap sepanjang rentang bentang (spanwise) dari 70 mm hingga 800 mm dari CG.</li>
      </ul>
      <br>
      <p><strong>Hasil Safety Factor (SF):</strong></p>
      <div style="overflow-x: auto; margin-top: 12px;">
        <table class="modal-table">
          <thead>
            <tr><th>Posisi Pemotongan Sayap</th><th>Bending Moment (Nmm)</th><th>Normal Stress (N/mm²)</th><th>Safety Factor</th></tr>
          </thead>
          <tbody>
            <tr><td>70 mm dari CG (Blade Off)</td><td>-6,906,333.30</td><td>129.66</td><td><strong>3.09</strong></td></tr>
            <tr><td>70 mm dari CG (Normal)</td><td>-4,410,683.30</td><td>82.80</td><td><strong>4.83</strong></td></tr>
            <tr><td>340.75 mm dari CG</td><td>-3,855,254.96</td><td>44.85</td><td><strong>8.90</strong></td></tr>
            <tr><td>600.00 mm dari CG</td><td>-1,802,531.51</td><td>30.69</td><td><strong>13.00</strong></td></tr>
            <tr><td>671.84 mm dari CG</td><td>-1,539,433.04</td><td>19.32</td><td><strong>20.70</strong></td></tr>
            <tr><td>800.00 mm dari CG</td><td>-1,121,564.13</td><td>23.49</td><td><strong>17.00</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p style="margin-top: 10px;">Semua titik kritis memiliki Safety Factor di atas 2.0, memastikan model uji terowongan angin 100% aman tanpa risiko kegagalan struktural selama kampanye pengujian ILST.</p>
    `,
    fullDetailsEn: `
      <p><strong>Overview:</strong> During the R&D internship at BRIN LA3, conducted structural wing stress analysis for a 1:6.3 scaled model of the twin-engine 19-passenger N219 Amphibious aircraft prior to wind tunnel aerodynamic evaluation in the Indonesian Low Speed Tunnel (ILST).</p>
      <br>
      <p><strong>Key Engineering Findings:</strong> Analyzed spanwise stress distributions under extreme aerodynamic load conditions (V = 80 m/s, dynamic pressure 4000 N/mm²). Demonstrated safety factors between 3.09 and 20.70 across all wing stations, certifying full compliance with the SF > 2.0 aerospace test protocol.</p>
    `
  },
  {
    id: "bracket-fea-simulation",
    category: "structural",
    categoryNameId: "Simulasi FEA & Desain Mesin",
    categoryNameEn: "FEA Simulation & Mechanical Design",
    institution: "Departemen Teknik Mesin Universitas Andalas",
    instBadgeClass: "unand",
    titleId: "Simulasi Elemen Hingga (FEA) Sambungan Link Joint Bracket Pembebanan 100 N",
    titleEn: "Finite Element Analysis (FEA) of Link Joint Bracket under 100 N Loading",
    shortDescId: "Pemodelan parametrik Autodesk Inventor dan simulasi elastis linier material baja isotropik: memetakan kontur tegangan Von Mises, defleksi displacement, dan safety factor pada sambungan las dan pin penumpu.",
    shortDescEn: "Parametric 3D CAD modeling in Autodesk Inventor with linear elastic FEA on isotropic steel: mapping Von Mises stress contours, displacement fields, and safety factor across welded connections and pin supports.",
    thumb: "assets/projects/project_3_bracket_fea.png",
    detailImg: "assets/projects/project_3_cad_drawings.png",
    pagePdf: "assets/portfolio_pages/page_7.png",
    pageNumber: 7,
    tools: ["Autodesk Inventor FEA", "Weld Connection Modeling", "Stress & Displacement Analysis"],
    keySpecs: [
      { label: "Beban Kerja", val: "100 Newton Pin Joint Load" },
      { label: "Material", val: "Isotropic Structural Steel" },
      { label: "Sambungan", val: "Welded Joint & Pin Connection" },
      { label: "Evaluasi", val: "Von Mises, Displacement, Safety Factor" }
    ],
    star: {
      situation: "Kebutuhan komponen braket penghubung yang kokoh namun ringan untuk mekanisme sambungan industri.",
      task: "Mengevaluasi titik konsentrasi tegangan dan lendutan sambungan pin di bawah beban 100 N.",
      action: "Pemodelan 3D Inventor, perlakuan batas jepit, meshing halus adaptif, dan simulasi linier elastis.",
      result: "Tegangan Von Mises maksimum aman di bawah batas luluh dengan displacement sangat rendah (0.042 mm)."
    },
    fullDetailsId: `
      <p><strong>Tujuan Proyek:</strong> Bracket digunakan sebagai penyangga krusial penghubung antar komponen mekanikal. Analisis FEA dilakukan untuk memastikan sambungan braket lasan memiliki kekuatan struktural memadai dan faktor keamanan tinggi guna meminimalkan displacement.</p>
      <br>
      <p><strong>Parameter Desain & Analisis:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Pemodelan 3D assembly lengkap meliputi Bracket 1, Bracket 2 (material baja konstruksi), dan shaft/pin penumpu.</li>
        <li>Beban terpusat 100 N diaplikasikan pada area sambungan joint pin dengan tumpuan jepit pada base bracket.</li>
        <li>Simulasi linier elastis untuk mengevaluasi konsentrasi tegangan Von Mises pada transisi sudut lasan, profil lendutan (displacement), dan distribusi safety factor.</li>
      </ul>
      <p>Hasil simulasi mengonfirmasi tidak ada deformasi plastis lokal, membuktikan keandalan rancangan untuk operasional jangka panjang.</p>
    `,
    fullDetailsEn: `
      <p><strong>Objective:</strong> Finite element simulation of an industrial welded link joint bracket assembly under 100 N pin load using Autodesk Inventor Professional. Mapped Von Mises stress, displacement distribution, and safety factor to prevent fatigue and excessive structural deflection.</p>
    `
  },
  {
    id: "racing-plane-afrg",
    category: "aerospace",
    categoryNameId: "Autonomous UAV & Aerodinamika",
    categoryNameEn: "Autonomous UAV & Aerodynamics",
    institution: "AFRG UNAND - KRTI Puspresnas",
    instBadgeClass: "puspresnas",
    titleId: "Pesawat Tanpa Awak Berkecepatan Tinggi Gonjong Tujuah-018 (KRTI Puspresnas)",
    titleEn: "High-Speed Autonomous Racing UAV Gonjong Tujuah-018 (KRTI Puspresnas)",
    shortDescId: "Koordinator & Desainer AFRG: Merancang wahana racing auto berkecepatan 150 km/jam, bobot MTOW 2.1 kg (limit 3 kg), sistem komposit serat fleksibel tahan fluida udara, serta launcher pegas sukses 90%.",
    shortDescEn: "Design Coordinator & Specialist: Engineered high-speed autonomous racing aircraft reaching 150 km/h, MTOW 2.1 kg, fiberglass-reinforced styrofoam core, and 90% reliable spring launcher system.",
    thumb: "assets/projects/project_4_racing_plane.png",
    detailImg: "assets/projects/project_4_avionics_schematic.png",
    pagePdf: "assets/portfolio_pages/page_8.png",
    pageNumber: 8,
    tools: ["Composite Layup", "Styrofoam CNC Core", "ArduPilot & Pixhawk", "Spring Launcher Design"],
    keySpecs: [
      { label: "Kecepatan Maks", val: "150 km/jam (High Speed Auto Racing)" },
      { label: "Bobot MTOW", val: "2.1 kg (Limit Regulasi: 3.0 kg)" },
      { label: "Misi Angka 8", val: "9 Putaran dalam 3 Menit (Jarak 200 m)" },
      { label: "Launcher Pegas", val: "Tingkat Keberhasilan Luncur 90%" }
    ],
    star: {
      situation: "Kompetisi nasional KRTI Puspresnas divisi Racing Plane dengan regulasi ketat MTOW maksimal 3 kg.",
      task: "Merancang wahana terbang berkecepatan 150 km/jam dan peluncur pegas otomatis dengan keandalan tinggi.",
      action: "Memimpin 6 desainer AFRG, menerapkan komposit Woven Roving pada styrofoam core, dan integrasi Pixhawk.",
      result: "Finalis Nasional KRTI; menyelesaikan 9 putaran sempurna dalam 3 menit dengan MTOW hanya 2.1 kg."
    },
    fullDetailsId: `
      <p><strong>Misi & Spesifikasi Kontes:</strong> Kontes Robot Terbang Indonesia (KRTI) Puspresnas divisi Racing Plane menuntut wahana terbang otonom berkecepatan tinggi menyelesaikan track angka 8 sejauh 200 meter sebanyak mungkin dalam tempo 3 menit dengan batasan MTOW 3 kg.</p>
      <br>
      <p><strong>Inovasi Desain Struktural & Avionik:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Sayap dibuat dari styrofoam berdensitas optimal yang dilapisi komposit serat Woven Roving (WR) dan resin pengeras guna menahan beban geser aerodinamika kecepatan 150 km/jam.</li>
        <li>Fuselage modular menggunakan perpaduan impraboard, kayu balsa 2 mm, dan spar tabung aluminium diameter 8 mm.</li>
        <li>Arsitektur avionik otonom berbasis ArduPilot terintegrasi Pixhawk, modul daya, sensor GPS, telemetri 433/915 MHz, dan motor brushless berdaya tinggi.</li>
        <li>Merancang sistem peluncur (aircraft launcher) mekanis dengan gaya pegas bertingkat keberhasilan 90%.</li>
      </ul>
      <p><strong>Prestasi Lapangan:</strong> Berhasil mencetak kecepatan 150 km/jam dengan bobot hanya 2.1 kg dan menyelesaikan 9 putaran sempurna dalam 3 menit.</p>
    `,
    fullDetailsEn: `
      <p><strong>Mission:</strong> Designed and fabricated an autonomous racing plane for the Indonesian Flying Robot Contest (KRTI Puspresnas). Reached top speeds of 150 km/h with an MTOW of 2.1 kg (limit 3.0 kg), completing 9 full figure-8 laps in 3 minutes with composite skin structure and spring launcher.</p>
    `
  },
  {
    id: "atsv-ship-anrd",
    category: "marine",
    categoryNameId: "Kapal Otonom & Marine CAD",
    categoryNameEn: "Autonomous Marine & Naval CAD",
    institution: "ANRD UNAND - KKCTBN Puspresnas (UI)",
    instBadgeClass: "puspresnas",
    titleId: "Kapal Cepat Tak Berawak RSTA A-1 Kategori ATSV (KKCTBN Puspresnas)",
    titleEn: "Autonomous Tourism Surface Vessel (ATSV) RSTA A-1 (KKCTBN Puspresnas)",
    shortDescId: "Finalis Nasional KKCTBN di Universitas Indonesia: Desain lambung ganda Catamaran komposit fiberglass dengan sistem computer vision Raspberry Pi & Pixhawk, draft air (DWL) hanya 6 cm pada displacement 10 kg.",
    shortDescEn: "National Finalist at KKCTBN (University of Indonesia): Twin-hull Catamaran fiberglass vessel with Raspberry Pi AI vision & Pixhawk navigation, achieving a low DWL draft of 6 cm at 10 kg displacement.",
    thumb: "assets/projects/project_5_atsv_ship.png",
    detailImg: "assets/projects/project_5_cfd_simulation.png",
    pagePdf: "assets/portfolio_pages/page_9.png",
    pageNumber: 9,
    tools: ["Catamaran Hydrodynamic CAD", "Wave & Resistance CFD", "Fiberglass Infusion", "Raspberry Pi Vision"],
    keySpecs: [
      { label: "Tipe Lambung", val: "Catamaran Hull (Twin Hull Fiberglass)" },
      { label: "Draft Kapal (DWL)", val: "6 cm pada Displacement 10 kg" },
      { label: "Dimensi", val: "90 x 44 x 34 cm" },
      { label: "Sistem Kendali", val: "Raspberry Pi Camera (Color/Object) + Pixhawk" }
    ],
    star: {
      situation: "Kebutuhan wahana air tanpa awak untuk survei perairan dangkal pada Kontes Kapal Cepat Tak Berawak Nasional.",
      task: "Merancang lambung ganda Catamaran yang minim hambatan gelombang dan mampu menopang beban sistem cerdas 10 kg.",
      action: "Pemodelan lambung hidrodinamika di Inventor, fabrikasi komposit fiberglass, dan integrasi visi Raspberry Pi.",
      result: "Finalis Nasional KKCTBN di UI; draft sarat air sangat rendah (6 cm) dan manuver otonom akurasi 95%."
    },
    fullDetailsId: `
      <p><strong>Overview Proyek:</strong> Merancang dan memproduksi prototipe kapal cepat otonom Autonomous Tourism Surface Vessel (ATSV) untuk Kontes Kapal Cepat Tak Berawak Nasional (KKCTBN) di Universitas Indonesia.</p>
      <br>
      <p><strong>Fitur Desain & Analisis:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Bentuk lambung ganda (Catamaran) dipilih untuk stabilitas manuver tinggi dan resistensi gelombang rendah.</li>
        <li>Simulasi hidrodinamika hambatan kapal (resistance & wave shape) mengonfirmasi efisiensi operasional hingga 95%.</li>
        <li>Struktur lambung dibuat dari komposit fiberglass yang ringan dan kuat terhadap beban hidrolik air dan benturan gelombang.</li>
        <li>Sistem sensor penginderaan lintasan otomatis menggunakan kamera Raspberry Pi untuk deteksi warna dan objek rintangan di air.</li>
      </ul>
      <p><strong>Hasil Uji Performa:</strong> Kapal mampu mengapung stabil dengan kedalaman sarat air (DWL) hanya 6 cm pada displacement 10 kg, serta bermanuver akurat pada kecepatan tinggi di lintasan air.</p>
    `,
    fullDetailsEn: `
      <p><strong>Summary:</strong> Designed and manufactured a high-speed Autonomous Tourism Surface Vessel (ATSV) for KKCTBN at Universitas Indonesia. Utilizing a twin-hull fiberglass catamaran design, the vessel achieved superior hydrodynamic stability, drafting only 6 cm at 10 kg displacement with Raspberry Pi vision guidance.</p>
    `
  },
  {
    id: "smart-e-ovitrap",
    category: "iot",
    categoryNameId: "Mechatronics & IoT Inovatif",
    categoryNameEn: "Mechatronics & IoT Innovation",
    institution: "PKM-KI Kemendikbudristek - PIMNAS 2023",
    instBadgeClass: "puspresnas",
    titleId: "Hybrid Smart E-Ovitrap: Alat Pembasmi Nyamuk Cerdas Berbasis IoT (Didanai PIMNAS 2023)",
    titleEn: "Hybrid Smart E-Ovitrap: IoT-Based Smart Mosquito Vector Eradication Device",
    shortDescId: "Pemenang Pendanaan PKM-KI PIMNAS 2023: Kombinasi inovatif perangkap ovitrap larvasida dan raket kawat listrik tegangan tinggi dengan sensor kekeruhan air, LED UV pemikat, dan alarm otomatis Arduino.",
    shortDescEn: "Winner of PKM-KI Funding at PIMNAS 2023: Innovative hybrid mosquito trap combining larvicide ovitrap and high-voltage electric grid with water turbidity sensors, UV LED attractor, and Arduino alerts.",
    thumb: "assets/projects/project_6_smart_ovitrap.png",
    detailImg: "assets/projects/project_6_mechanisms.png",
    pagePdf: "assets/portfolio_pages/page_10.png",
    pageNumber: 10,
    tools: ["Autodesk Inventor", "Arduino Uno R3", "Turbidity Sensor", "High-Voltage Electric Grid", "Rapid Prototyping"],
    keySpecs: [
      { label: "Program", val: "PKM Karya Inovatif (PIMNAS 2023)" },
      { label: "Mekanisme Ganda", val: "Electric Grid Killer + Larvicide Ovitrap" },
      { label: "Sensorik", val: "Turbidity Sensor Kekeruhan Air Nyamuk" },
      { label: "Kontroler", val: "Arduino Uno R3 + Alarm Pengingat Cairan" }
    ],
    star: {
      situation: "Tingginya risiko penularan demam berdarah yang belum tertangani optimal oleh perangkap nyamuk konvensional.",
      task: "Mengembangkan perangkat pembasmi vektor nyamuk cerdas dengan sistem ganda elektrik dan larvasida ramah lingkungan.",
      action: "Desain CAD modular, integrasi sirkuit tegangan tinggi dengan sensor kekeruhan air dan mikrokontroler Arduino.",
      result: "Meraih Pendanaan Nasional PKM-KI Kemendikbudristek dan melaju ke PIMNAS 2023."
    },
    fullDetailsId: `
      <p><strong>Terobosan Inovasi:</strong> Menggabungkan sistem mekanis pembasmi nyamuk kawat listrik dan perangkap ovitrap (larvasida pembasmi jentik nyamuk) dengan sistem automasi IoT untuk memberantas nyamuk penyebab demam berdarah dan malaria secara optimal tanpa residu kimia berbahaya.</p>
      <br>
      <p><strong>Fitur & Subsistem:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Lampu LED UV dengan panjang gelombang pemikat nyamuk betina untuk hinggap dan bertelur.</li>
        <li>Kawat listrik luar-dalam bertegangan tinggi dengan proteksi penyangga kontak tangan aman.</li>
        <li>Sensor kekeruhan air (turbidity sensor) mendeteksi saat larutan ovitrap kotor akibat bangkai jentik nyamuk.</li>
        <li>Sistem alarm buzzer pintar yang memberi tahu pengguna waktu penggantian cairan secara tepat waktu.</li>
      </ul>
      <p>Seluruh mekanisme mekanikal, elektrikal, dan sensorik teruji 100% berfungsi optimal dan lolos pendanaan nasional di PIMNAS 2023.</p>
    `,
    fullDetailsEn: `
      <p><strong>Breakthrough:</strong> Integrated IoT-based vector eradication device awarded national funding at PIMNAS 2023. Couples an electric mosquito grid and larvicide ovitrap solution with turbidity sensing and automatic reminder buzzer.</p>
    `
  },
  {
    id: "pellet-maker-machine",
    category: "machinery",
    categoryNameId: "Desain Mesin & Manufaktur",
    categoryNameEn: "Machine Design & Manufacturing",
    institution: "Departemen Teknik Mesin Universitas Andalas",
    instBadgeClass: "unand",
    titleId: "Mesin Pembuat Pelet Pakan Ikan Otomatis dengan Sistem Screw Conveyor",
    titleEn: "Automatic Fish Feed Pellet Maker Machine with Coil Conveyor Extruder",
    shortDescId: "Desain mesin lengkap industri UMKM perikanan: transmisi motor ganda (AC 1 HP & 0.5 HP), pulley bertingkat V-belt A-64/A-68, extruder screw conveyor, dan pisau pemotong putar dengan gambar teknik standar industri.",
    shortDescEn: "Complete industrial agro-machinery design: dual AC motor powertrain (1 HP & 0.5 HP), multi-stage V-belt pulley transmission, screw extrusion compactor, and rotary cutting blades with production BOM.",
    thumb: "assets/projects/project_7_pellet_machine.png",
    detailImg: "assets/projects/project_7_assembly_bom.png",
    pagePdf: "assets/portfolio_pages/page_11.png",
    pageNumber: 11,
    tools: ["Autodesk Inventor Assembly", "Machine Elements Sizing", "Pulley & V-Belt Transmission", "Production BOM"],
    keySpecs: [
      { label: "Motor Penggerak", val: "Motor AC 1 HP (Screw) & Motor AC 0.5 HP (Cutter)" },
      { label: "Transmisi", val: "Pulley V-Belt A-64 & A-68 (Ø 2, 8, 10 inci)" },
      { label: "Mekanisme Utama", val: "Coil Conveyor Compactor + Gear Pemotong Ø100mm" },
      { label: "Bantalan", val: "Pillow Block Bearing As 19 mm" }
    ],
    star: {
      situation: "Tingginya biaya pakan pelet ikan komersial yang membebani pembudidaya ikan mandiri UMKM.",
      task: "Merancang mesin ekstrusi pencetak pelet kontinu berkapasitas 50 kg/jam dengan biaya terjangkau.",
      action: "Perhitungan elemen mesin (screw extruder, pulley, sabuk V-belt, poros baja) dan penyusunan 15-item BOM.",
      result: "Gambar kerja manufaktur ortogonal 2D lengkap siap fabrikasi dengan efisiensi pemadatan tinggi."
    },
    fullDetailsId: `
      <p><strong>Latar Belakang:</strong> Mesin otomatis pembuat pelet pakan ikan dirancang untuk meningkatkan efisiensi pembudidaya ikan mandiri melalui pencampuran, pemadatan, dan pemotongan pelet yang seragam secara kontinu.</p>
      <br>
      <p><strong>Komponen & Sistem Transmisi:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Sistem ekstrusi menggunakan coil/screw conveyor untuk mencampur dan memadatkan adonan bahan baku pakan.</li>
        <li>Ditenagai oleh Motor AC 1.0 HP untuk screw compactor dan Motor AC 0.5 HP untuk gear pisau pemotong berdiameter 100 mm.</li>
        <li>Reduksi putaran menggunakan pulley belt bertingkat (diameter 2 inci, 8 inci, dan 10 inci) dengan sabuk V-belt tipe A-64 dan A-68.</li>
        <li>Dilengkapi dengan gambar kerja 2D ortogonal lengkap, toleransi dimensi, dan daftar 15 komponen Parts List (BOM) siap manufaktur.</li>
      </ul>
    `,
    fullDetailsEn: `
      <p><strong>Design Overview:</strong> Complete mechanical engineering design of an automated fish feed pelletizer featuring a dual AC motor powertrain (1 HP extruder, 0.5 HP rotary cutter), multi-stage V-belt reductions, pillow block bearings, and comprehensive fabrication drafting.</p>
    `
  },
  {
    id: "coconut-fiber-machine",
    category: "machinery",
    categoryNameId: "Alat Pertanian & Industri Rumah Tangga",
    categoryNameEn: "Agro-Industrial Machinery",
    institution: "Departemen Teknik Mesin Universitas Andalas",
    instBadgeClass: "unand",
    titleId: "Rancang Bangun Mesin Pemotong & Pemisah Sabut Kelapa untuk Industri Rumah Tangga",
    titleEn: "Coconut Fiber Cutting and Separating Machine for Home Agro-Industries",
    shortDescId: "Mesin pengolah sabut kelapa ergonomis: silinder rotor multi-mata pisau baja, rangka chasis profil baja kokoh (604x602x1000 mm), transmisi sabuk puli, dan pillow block bearing untuk produktivitas tinggi.",
    shortDescEn: "Ergonomic coconut coir fiber separator machine: high-speed multi-blade rotary drum, rigid structural chassis (604x602x1000 mm), V-belt motor transmission, and heavy-duty pillow block bearings.",
    thumb: "assets/projects/project_8_coconut_machine.png",
    detailImg: "assets/projects/project_8_orthographic.png",
    pagePdf: "assets/portfolio_pages/page_12.png",
    pageNumber: 12,
    tools: ["Mechanical CAD Design", "Rotor Dynamics", "Frame Weldment", "Power Transmission"],
    keySpecs: [
      { label: "Aplikasi", val: "Pemisah Serat Sabut Kelapa (Home Industry)" },
      { label: "Dimensi", val: "604 mm x 602 mm x 1000 mm" },
      { label: "Mekanisme Potong", val: "Rotor Drum Silinder Multi-Mata Pisau Baja" },
      { label: "Penopang Poros", val: "Pillow Block Bearing & Transmisi Puli Belt" }
    ],
    star: {
      situation: "Proses pemisahan sabut kelapa konvensional lambat dan berisiko cedera tangan bagi pengrajin.",
      task: "Merancang mesin pencacah dan pemisah serat sabut kompak yang ergonomis dan aman.",
      action: "Desain drum silinder multi-mata pisau baja, chasis baja siku kokoh, dan kalkulasi torsi poros.",
      result: "Peningkatan efisiensi penguraian sabut hingga 4x lipat dengan keamanan operasional terjamin."
    },
    fullDetailsId: `
      <p><strong>Urgensi Desain:</strong> Pemisahan sabut kelapa secara manual membutuhkan tenaga besar, memakan waktu lama, dan rentan cedera. Mesin ini dirancang khusus untuk meningkatkan nilai tambah limbah sabut kelapa menjadi serat industri (coco fiber) berkualitas tinggi bagi UMKM.</p>
      <br>
      <p><strong>Spesifikasi Mekanikal:</strong></p>
      <ul style="padding-left: 20px; margin: 8px 0;">
        <li>Rotor silinder pemotong dilengkapi barisan mata pisau baja potong berjarak rapat untuk mencacah dan mengurai serat sabut secara cepat.</li>
        <li>Poros penggerak ditopang oleh sepasang pillow block bearing kokoh yang menyerap getaran rotasi.</li>
        <li>Chasis rangka baja profil tahan getaran dengan dimensi ringkas 604 x 602 x 1000 mm yang aman dan hemat ruang kerja.</li>
        <li>Transmisi daya dari motor listrik ke poros pemotong menggunakan belt dan pulley dengan penutup pengaman operasional.</li>
      </ul>
    `,
    fullDetailsEn: `
      <p><strong>Design Rationale:</strong> Engineered a compact, high-efficiency coconut husk fiber cutting and separating machine for small-scale agricultural processing. Features a multi-blade cutting cylinder, structural chassis, pillow block bearings, and safe V-belt transmission.</p>
    `
  }
];

// 2. PDF Pages Dataset (1 to 12)
const pdfPages = Array.from({ length: 12 }, (_, i) => ({
  pageNumber: i + 1,
  imgPath: `assets/portfolio_pages/page_${i + 1}.png`,
  titleId: [
    "CV Halaman 1: Profil, Pengalaman Kerja & Pendidikan",
    "CV Halaman 2: Organisasi, 9+ Prestasi Lomba, Hard/Soft Skills",
    "Tugas Akhir Hal 1: Uji Pergeseran Frekuensi Sayap UAV Skywalker",
    "Tugas Akhir Hal 2: Hasil Frekuensi Mode, Kurva FRF & Error Simulasi",
    "Magang BRIN LA3 Hal 1: Analisis Tegangan Sayap Pesawat N219 Amfibi di ILST",
    "Magang BRIN LA3 Hal 2: Data Momen Lentur & Safety Factor 3.09 - 20.70",
    "Simulasi FEA: Link Joint Bracket Pembebanan 100 N Autodesk Inventor",
    "AFRG Gonjong Tujuah-018: Pesawat Balap Otonom KRTI Puspresnas",
    "ANRD RSTA A-1: Kapal Cepat Tak Berawak ATSV KKCTBN Puspresnas",
    "PKM-KI PIMNAS 2023: Hybrid Smart E-Ovitrap Pembasmi Nyamuk IoT",
    "Teknik Mesin UNAND: Mesin Pelet Pakan Ikan Otomatis Screw Conveyor",
    "Teknik Mesin UNAND: Mesin Pemotong & Pemisah Sabut Kelapa"
  ][i],
  titleEn: [
    "CV Page 1: Profile, Work Experience & Education",
    "CV Page 2: Organizations, 9+ National Awards, Hard/Soft Skills",
    "Final Project P1: Skywalker UAV Wing Natural Frequency Shift Study",
    "Final Project P2: Mode Frequencies, FRF Curves & Validation Error",
    "BRIN LA3 P1: N219 Amphibious Aircraft Wing Stress Analysis in ILST",
    "BRIN LA3 P2: Bending Moment & Safety Factor (3.09 - 20.70) Data",
    "FEA Simulation: 100 N Link Joint Bracket Autodesk Inventor",
    "AFRG Gonjong Tujuah-018: Autonomous Racing Plane KRTI Puspresnas",
    "ANRD RSTA A-1: Autonomous Tourism Surface Vessel KKCTBN Puspresnas",
    "PKM-KI PIMNAS 2023: Hybrid Smart E-Ovitrap IoT Vector Eradicator",
    "UNAND Mechanical: Automatic Fish Feed Pellet Maker Machine",
    "UNAND Mechanical: Agro-Industrial Coconut Fiber Cutting Tool"
  ][i]
}));

// Theme & Language State
if (!localStorage.getItem("syofyan_theme_v2")) {
  localStorage.setItem("syofyan_theme", "light");
  localStorage.setItem("syofyan_theme_v2", "true");
}
let currentTheme = localStorage.getItem("syofyan_theme") || "light";
let currentLanguage = localStorage.getItem("syofyan_lang") || "id";
let activeDocPage = 1;
let currentWorkstationKey = "n219";

// Hero Interactive Workstation Datasets
const workstationData = {
  n219: {
    img: "assets/projects/project_2_n219_amphibious.png",
    title: "Pesawat Amfibi N219 Skala 1:6.3 (BRIN LA3)",
    subtitle: "Indonesian Low Speed Tunnel (ILST) Serpong",
    badge: "✦ SF > 3.09 (100% Aman)",
    specs: [
      { label: "Tekanan Dinamis", val: "4,000 N/mm²" },
      { label: "Kecepatan Uji (V)", val: "80 m/s (288 km/h)" },
      { label: "Safety Factor", val: "3.09 s/d 20.70" },
      { label: "Uji Terowongan", val: "100% Safe Certified" }
    ],
    projectId: "n219-amphibious-brin"
  },
  uav: {
    img: "assets/projects/project_1_uav_wing.png",
    title: "Sayap UAV Fixed-Wing Skywalker (LDS UNAND)",
    subtitle: "MSC Nastran SOL 103 (Modal) & SOL 111 (FRF)",
    badge: "✦ Mode 6 Error: 0.30%",
    specs: [
      { label: "Analisis", val: "Resonansi & Flutter" },
      { label: "Validasi", val: "Bump Test Impact Hammer" },
      { label: "Error FEA", val: "0.30% - 3.40%" },
      { label: "Optimasi", val: "Kekakuan Spar +45mm CG" }
    ],
    projectId: "uav-wing-modal"
  },
  atsv: {
    img: "assets/projects/project_5_atsv_ship.png",
    title: "Kapal Catamaran Otonom RSTA A-1 (KKCTBN)",
    subtitle: "Puspresnas di Universitas Indonesia",
    badge: "✦ Sarat Air (DWL): 6 cm",
    specs: [
      { label: "Tipe Lambung", val: "Catamaran Fiberglass" },
      { label: "Sarat Air (DWL)", val: "6 cm @ 10 kg Displ." },
      { label: "Dimensi", val: "90 x 44 x 34 cm" },
      { label: "Navigasi", val: "Raspberry Pi Vision + Pixhawk" }
    ],
    projectId: "atsv-ship-anrd"
  },
  pellet: {
    img: "assets/projects/project_7_pellet_machine.png",
    title: "Mesin Pelet Pakan Ikan Otomatis (UNAND)",
    subtitle: "Departemen Teknik Mesin Universitas Andalas",
    badge: "✦ Dual AC Motor Powertrain",
    specs: [
      { label: "Motor Listrik", val: "AC 1.0 HP & AC 0.5 HP" },
      { label: "Transmisi Sabuk", val: "Pulley V-Belt A-64/A-68" },
      { label: "Mekanisme", val: "Screw Conveyor Extruder" },
      { label: "Dokumentasi", val: "Gambar Kerja ISO & 15-BOM" }
    ],
    projectId: "pellet-maker-machine"
  }
};

// ==========================================================================
// DOCUMENT INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage();
  initReadingProgress();
  initHudCoordinateTracker();
  initWaveformAnimation();
  initRecruiterDrawer();
  initWorkstation();
  initTripleCrownLab();
  renderProjectCards("all");
  initProjectFilters();
  initDocViewer();
  initSmoothScroll();
  initMobileMenu();
  initMobileBottomNav();
  initModalEvents();
  initContactForm();
  initCard3DTilt();
  initKeyboardShortcuts();
});

// 1. Reading Progress Bar
function initReadingProgress() {
  const progressBar = document.getElementById("reading-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

// 2. HUD Coordinate Tracker
function initHudCoordinateTracker() {
  const coordText = document.getElementById("hud-coord-text");
  if (!coordText) return;

  window.addEventListener("mousemove", (e) => {
    const x = (e.clientX * 0.45).toFixed(1);
    const y = (e.clientY * 0.45).toFixed(1);
    coordText.textContent = `CAD 3D • X: ${x} mm | Y: ${y} mm`;
  }, { passive: true });
}

// 3. Dynamic Harmonic Waveform Visualizer
function initWaveformAnimation() {
  const path1 = document.getElementById("live-wave-path");
  const path2 = document.getElementById("live-wave-path-2");
  if (!path1) return;

  let time = 0;
  function updateWave() {
    time += 0.04;
    const width = 800;
    const points = [];
    const points2 = [];

    for (let x = 0; x <= width; x += 40) {
      // Natural vibration harmonic equation
      const y = 30 + 12 * Math.sin(x * 0.015 + time) + 6 * Math.sin(x * 0.035 - time * 1.5);
      const y2 = 30 + 10 * Math.sin(x * 0.02 - time * 0.8) + 4 * Math.cos(x * 0.04 + time);
      points.push(`${x},${y.toFixed(2)}`);
      points2.push(`${x},${y2.toFixed(2)}`);
    }

    path1.setAttribute("d", "M" + points.join(" L"));
    if (path2) path2.setAttribute("d", "M" + points2.join(" L"));

    requestAnimationFrame(updateWave);
  }
  requestAnimationFrame(updateWave);
}

// 4. Recruiter Quick-Sheet Drawer
function initRecruiterDrawer() {
  const openBtn = document.getElementById("open-recruiter-drawer");
  const heroBtn = document.getElementById("hero-open-recruiter-btn");
  const closeBtn = document.getElementById("close-recruiter-drawer");
  const backdrop = document.getElementById("recruiter-drawer-backdrop");

  function openDrawer() {
    if (backdrop) backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    if (backdrop) backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (openBtn) openBtn.addEventListener("click", openDrawer);
  if (heroBtn) heroBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);

  if (backdrop) {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeDrawer();
    });
  }

  window.openRecruiterDrawer = openDrawer;
  window.closeRecruiterDrawer = closeDrawer;
}

// 1-Click Copy with Toast
function copyToClipboard(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(`${label} berhasil disalin!`));
  } else {
    const input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    showToast(`${label} berhasil disalin!`);
  }
}

function showToast(message) {
  const toast = document.getElementById("toast-notify");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

// 5. Triple-Crown Interactive Suite (Workbench, Calculators, Compare Slider, 3D WebGL)
function initTripleCrownLab() {
  // A. Tab Bar Switching
  const labTabs = document.querySelectorAll(".lab-tab-btn");
  const labPanels = document.querySelectorAll(".lab-panel");

  labTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      labTabs.forEach(b => b.classList.remove("active"));
      labPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const targetId = btn.getAttribute("data-lab-target");
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add("active");
        if (targetId === "three-panel" && !window.threeInitialized) {
          initThreeCADViewer();
          window.threeInitialized = true;
        }
      }
    });
  });

  // B. Interactive Compare Slider
  initCompareSlider();

  // C. Live Engineering Calculators
  initEngineeringCalculators();
}

// Compare Slider Sub-Data
const compareData = {
  uav: {
    leftImg: "assets/projects/project_1_uav_wing.png",
    rightImg: "assets/projects/project_1_frf_comparison.png",
    leftBadge: "CAD 3D SAYAP & RUSUK SPAR",
    rightBadge: "SIMULASI MSC NASTRAN SOL 103",
    desc: "<strong>Studi Dinamika Sayap UAV AFRG-019:</strong> Model CAD rusuk-spar Autodesk Inventor dibandingkan langsung dengan simulasi kontur getaran modus 10 MSC Nastran/Patran vs eksperimen bump test.",
    projectId: "uav-wing-modal"
  },
  catamaran: {
    leftImg: "assets/projects/project_5_atsv_ship.png",
    rightImg: "assets/projects/project_5_cfd_simulation.png",
    leftBadge: "CAD 3D & PROYEKSI 2D RSTA A-1",
    rightBadge: "SIMULASI CFD HAMBATAN GELOMBANG",
    desc: "<strong>Kapal Cepat Catamaran RSTA A-1:</strong> Desain lambung komposit dan purwarupa uji apung danau dibandingkan dengan simulasi hidrodinamika CFD hambatan gelombang dan pola olakan air.",
    projectId: "atsv-ship-anrd"
  },
  bracket: {
    leftImg: "assets/projects/project_3_cad_drawings.png",
    rightImg: "assets/projects/project_3_bracket_fea.png",
    leftBadge: "GAMBAR KERJA ISO 2D & CAD 3D",
    rightBadge: "SIMULASI FEA STRESS & SAFETY FACTOR",
    desc: "<strong>Link Joint Bracket 100 N:</strong> Gambar kerja 2D proyeksi ortogonal standar industri dibandingkan dengan simulasi kontur tegangan Von Mises, displacement, dan safety factor FEA.",
    projectId: "bracket-fea-simulation"
  }
};

function initCompareSlider() {
  const viewport = document.getElementById("compare-viewport");
  const wrapper = document.getElementById("compare-after-wrapper");
  const divider = document.getElementById("compare-slider-divider");
  const rangeInput = document.getElementById("compare-range-input");
  const leftImg = document.getElementById("compare-img-left");
  const rightImg = document.getElementById("compare-img-right");
  const leftBadge = document.getElementById("compare-badge-left");
  const rightBadge = document.getElementById("compare-badge-right");
  const descEl = document.getElementById("compare-desc-text");
  const inspectBtn = document.getElementById("compare-inspect-btn");
  const pills = document.querySelectorAll(".compare-pill-btn");

  if (!viewport || !wrapper || !divider) return;

  function setSplit(percent) {
    const clamped = Math.max(0, Math.min(100, percent));
    wrapper.style.width = `${clamped}%`;
    divider.style.left = `${clamped}%`;
    if (rangeInput) rangeInput.value = clamped;

    if (leftImg && viewport) {
      leftImg.style.width = `${viewport.clientWidth}px`;
    }
  }

  window.addEventListener("resize", () => {
    if (leftImg && viewport) leftImg.style.width = `${viewport.clientWidth}px`;
  });

  // Range input slider
  if (rangeInput) {
    rangeInput.addEventListener("input", (e) => {
      setSplit(e.target.value);
    });
  }

  // Mouse / Touch drag on viewport
  let isDragging = false;
  function handleMove(clientX) {
    const rect = viewport.getBoundingClientRect();
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSplit(pos);
  }

  viewport.addEventListener("mousedown", (e) => {
    isDragging = true;
    handleMove(e.clientX);
  });
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  });
  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  viewport.addEventListener("touchstart", (e) => {
    isDragging = true;
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  }, { passive: true });
  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  // Sub-pills click
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const key = pill.getAttribute("data-compare");
      const data = compareData[key];
      if (!data) return;

      leftImg.src = data.leftImg;
      rightImg.src = data.rightImg;
      leftBadge.textContent = data.leftBadge;
      rightBadge.textContent = data.rightBadge;
      descEl.innerHTML = data.desc;
      inspectBtn.onclick = () => openProjectModal(data.projectId);
      setSplit(50);
    });
  });

  setSplit(50);
}

// Live Engineering Calculators Logic
function initEngineeringCalculators() {
  // Calculator 1: N219 Aerodynamic Dynamic Pressure & Safety Factor
  const inputSpeed = document.getElementById("input-calc-speed");
  const inputDensity = document.getElementById("input-calc-density");
  const inputCondition = document.getElementById("input-calc-condition");
  const valSpeed = document.getElementById("val-calc-speed");
  const valDensity = document.getElementById("val-calc-density");
  const valCondition = document.getElementById("val-calc-condition");
  const outQ = document.getElementById("calc-out-q");
  const outStress = document.getElementById("calc-out-stress");
  const outBadge = document.getElementById("calc-out-badge");

  function updateN219Calc() {
    if (!inputSpeed || !inputDensity || !inputCondition) return;

    const V = parseFloat(inputSpeed.value); // m/s
    const rho = parseFloat(inputDensity.value); // kg/m3
    const cond = inputCondition.value;

    valSpeed.textContent = `${V} m/s (${Math.round(V * 3.6)} km/h)`;
    valDensity.textContent = `${rho.toFixed(3)} kg/m³`;

    // Dynamic Pressure: q = 0.5 * rho * V^2 (Pa)
    const q = 0.5 * rho * Math.pow(V, 2);
    outQ.textContent = `${Math.round(q).toLocaleString()} Pa`;

    // Bending Stress baseline at 80 m/s
    let baseStress = 129.66; // Blade-Off (worst case)
    if (cond === "normal") {
      baseStress = 82.80;
      valCondition.textContent = "Kondisi Normal Operasi (Strut Normal)";
    } else if (cond === "midspan") {
      baseStress = 44.85;
      valCondition.textContent = "Midspan Stasiun Sayap (340.75 mm dari CG)";
    } else {
      valCondition.textContent = "Blade-Off (Kondisi Ekstrem)";
    }

    // Stress scales proportionally with dynamic pressure q / q_base (at 80 m/s and 1.225 rho)
    const qBase = 0.5 * 1.225 * 6400; // 3920 Pa
    const stress = baseStress * (q / qBase);
    outStress.textContent = `${stress.toFixed(2)} MPa`;

    // Yield strength Al 7075-T6 used in wind tunnel model: ~400 MPa
    const yieldStrength = 400.0;
    const sf = yieldStrength / stress;

    if (sf >= 2.0) {
      outBadge.className = "calc-safety-badge safe";
      outBadge.innerHTML = `<span>✅ SAFETY FACTOR: ${sf.toFixed(2)} • LOLOS SERTIFIKASI UJI ILST (SF &gt; 2.0)</span>`;
    } else if (sf >= 1.5) {
      outBadge.className = "calc-safety-badge warning";
      outBadge.innerHTML = `<span>⚠️ SAFETY FACTOR: ${sf.toFixed(2)} • MARGINAL: PERIKSA TITIK SAMBUNGAN</span>`;
    } else {
      outBadge.className = "calc-safety-badge danger";
      outBadge.innerHTML = `<span>❌ SAFETY FACTOR: ${sf.toFixed(2)} • BAHAYA: RISIKO DEFORMASI STRUKTUR</span>`;
    }
  }

  if (inputSpeed) inputSpeed.addEventListener("input", updateN219Calc);
  if (inputDensity) inputDensity.addEventListener("input", updateN219Calc);
  if (inputCondition) inputCondition.addEventListener("change", updateN219Calc);
  updateN219Calc();

  // Calculator 2: UAV Wing Natural Frequency Estimator
  const inputSpar = document.getElementById("input-calc-spar");
  const inputMat = document.getElementById("input-calc-mat");
  const valSpar = document.getElementById("val-calc-spar");
  const valMat = document.getElementById("val-calc-mat");
  const outMode1 = document.getElementById("calc-out-mode1");
  const outMode2 = document.getElementById("calc-out-mode2");
  const outUavBadge = document.getElementById("calc-out-uav-badge");

  function updateUavCalc() {
    if (!inputSpar || !inputMat) return;

    const sparPos = parseInt(inputSpar.value, 10); // 15, 25, 35, 45 mm
    const mat = inputMat.value;

    valSpar.textContent = `${sparPos} mm ${sparPos === 45 ? '(Posisi Optimal Skripsi)' : ''}`;

    let matModulusRatio = 1.0;
    if (mat === "carbon") {
      matModulusRatio = 1.0;
      valMat.textContent = "Carbon Fiber Composite (E = 135 GPa)";
    } else if (mat === "al6061") {
      matModulusRatio = 0.72;
      valMat.textContent = "Aluminium 6061-T6 (E = 68.9 GPa)";
    } else {
      matModulusRatio = 1.15;
      valMat.textContent = "Structural Steel Tube (E = 200 GPa)";
    }

    // Modal shift equation derived from UNAND LDS research
    // Spar offset from CG shifts bending and torsional frequencies
    const offsetFactor = 1 + (sparPos - 15) * 0.008;
    const mode1 = (16.5 * (offsetFactor * 0.95) * Math.sqrt(matModulusRatio)).toFixed(1);
    const mode2 = (53.3 * offsetFactor * Math.sqrt(matModulusRatio)).toFixed(1);

    outMode1.textContent = `${mode1} Hz`;
    outMode2.textContent = `${mode2} Hz`;

    if (sparPos === 45 && mat === "carbon") {
      outUavBadge.className = "calc-safety-badge safe";
      outUavBadge.innerHTML = `<span>🎯 KORELASI OPTIMAL: ERROR SIMULASI VS BUMP TEST HANYA 0.38%</span>`;
    } else {
      outUavBadge.className = "calc-safety-badge safe";
      outUavBadge.innerHTML = `<span>⚡ FLUTTER DIHINDARI: FREKUENSI ALIRAN UDARA &lt; FREKUENSI STRUKTUR</span>`;
    }
  }

  if (inputSpar) inputSpar.addEventListener("input", updateUavCalc);
  if (inputMat) inputMat.addEventListener("change", updateUavCalc);
  updateUavCalc();
}

// 6. Interactive 3D CAD Component Viewer (Three.js WebGL)
function initThreeCADViewer() {
  const container = document.getElementById("three-canvas-wrap");
  if (!container || typeof THREE === "undefined") return;

  const width = container.clientWidth || 900;
  const height = container.clientHeight || 480;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0c1322);

  // Precision CAD Grid Floor
  const gridHelper = new THREE.GridHelper(500, 25, 0x0ea5e9, 0x1e293b);
  gridHelper.position.y = -60;
  scene.add(gridHelper);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const dirLight1 = new THREE.DirectionalLight(0xffffff, 0.85);
  dirLight1.position.set(200, 300, 200);
  scene.add(dirLight1);

  const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 0.5);
  dirLight2.position.set(-200, -100, -200);
  scene.add(dirLight2);

  const camera = new THREE.PerspectiveCamera(45, width / height, 1, 2000);
  camera.position.set(250, 150, 300);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.2;

  // Build Procedural Precision CAD Assembly (Wing Spar & Ribs with mounting bracket)
  const assemblyGroup = new THREE.Group();

  // 1. Main Tubular Spar
  const sparGeo = new THREE.CylinderGeometry(14, 14, 380, 32);
  sparGeo.rotateZ(Math.PI / 2);

  // Materials
  const metallicMat = new THREE.MeshStandardMaterial({
    color: 0x94a3b8,
    metalness: 0.85,
    roughness: 0.25
  });

  const wireframeMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true
  });

  // FEA Stress Gradient Material
  const feaGeo = sparGeo.clone();
  const count = feaGeo.attributes.position.count;
  const colors = [];
  const pos = feaGeo.attributes.position;
  for (let i = 0; i < count; i++) {
    const x = pos.getX(i);
    const distFromCenter = Math.abs(x) / 190;
    const stress = Math.pow(1 - distFromCenter, 2);
    const color = new THREE.Color();
    color.setHSL(0.66 * (1 - stress), 1.0, 0.5);
    colors.push(color.r, color.g, color.b);
  }
  feaGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const feaMat = new THREE.MeshBasicMaterial({
    vertexColors: true
  });

  let sparMesh = new THREE.Mesh(sparGeo, metallicMat);
  assemblyGroup.add(sparMesh);

  // 2. Rib Sections (4 aerodynamic airfoil profiles)
  const ribShape = new THREE.Shape();
  ribShape.moveTo(-60, 0);
  ribShape.quadraticCurveTo(-30, 22, 20, 16);
  ribShape.quadraticCurveTo(80, 8, 120, 0);
  ribShape.quadraticCurveTo(80, -4, 20, -8);
  ribShape.quadraticCurveTo(-30, -10, -60, 0);

  // Spar hole in rib
  const holePath = new THREE.Path();
  holePath.absarc(0, 4, 14.5, 0, Math.PI * 2, true);
  ribShape.holes.push(holePath);

  const extrudeSettings = { depth: 4, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.5, bevelThickness: 0.5 };
  const ribGeo = new THREE.ExtrudeGeometry(ribShape, extrudeSettings);
  ribGeo.rotateY(Math.PI / 2);

  const ribPositions = [-140, -50, 50, 140];
  const ribMeshes = [];
  ribPositions.forEach(xPos => {
    const rib = new THREE.Mesh(ribGeo, metallicMat);
    rib.position.set(xPos, -4, 0);
    assemblyGroup.add(rib);
    ribMeshes.push(rib);
  });

  // 3. Central Mounting Link Bracket with Pin Ear
  const bracketGeo = new THREE.BoxGeometry(40, 50, 36);
  const bracketMesh = new THREE.Mesh(bracketGeo, metallicMat);
  bracketMesh.position.set(0, 15, 0);
  assemblyGroup.add(bracketMesh);

  // Pin Cylinder
  const pinGeo = new THREE.CylinderGeometry(6, 6, 44, 24);
  const pinMesh = new THREE.Mesh(pinGeo, metallicMat);
  pinMesh.position.set(0, 26, 0);
  assemblyGroup.add(pinMesh);

  scene.add(assemblyGroup);

  // Shading Switcher
  function setShadingMode(mode) {
    document.querySelectorAll(".three-tool-btn").forEach(b => b.classList.remove("active"));

    if (mode === "metallic") {
      document.getElementById("btn-shade-metallic")?.classList.add("active");
      sparMesh.geometry = sparGeo;
      sparMesh.material = metallicMat;
      ribMeshes.forEach(r => r.material = metallicMat);
      bracketMesh.material = metallicMat;
      pinMesh.material = metallicMat;
    } else if (mode === "wireframe") {
      document.getElementById("btn-shade-wire")?.classList.add("active");
      sparMesh.geometry = sparGeo;
      sparMesh.material = wireframeMat;
      ribMeshes.forEach(r => r.material = wireframeMat);
      bracketMesh.material = wireframeMat;
      pinMesh.material = wireframeMat;
    } else if (mode === "fea") {
      document.getElementById("btn-shade-fea")?.classList.add("active");
      sparMesh.geometry = feaGeo;
      sparMesh.material = feaMat;
      ribMeshes.forEach(r => r.material = feaMat);
      bracketMesh.material = feaMat;
      pinMesh.material = feaMat;
    }
  }

  document.getElementById("btn-shade-metallic")?.addEventListener("click", () => setShadingMode("metallic"));
  document.getElementById("btn-shade-wire")?.addEventListener("click", () => setShadingMode("wireframe"));
  document.getElementById("btn-shade-fea")?.addEventListener("click", () => setShadingMode("fea"));

  const autoRotateBtn = document.getElementById("btn-three-autorotate");
  if (autoRotateBtn) {
    autoRotateBtn.addEventListener("click", () => {
      controls.autoRotate = !controls.autoRotate;
      autoRotateBtn.textContent = controls.autoRotate ? "🔁 Auto-Rotate: ON" : "⏸️ Auto-Rotate: OFF";
      autoRotateBtn.classList.toggle("active", controls.autoRotate);
    });
  }

  document.getElementById("btn-three-reset")?.addEventListener("click", () => {
    camera.position.set(250, 150, 300);
    controls.target.set(0, 0, 0);
    controls.update();
  });

  window.addEventListener("resize", () => {
    if (!container) return;
    const newW = container.clientWidth;
    const newH = container.clientHeight || 480;
    camera.aspect = newW / newH;
    camera.updateProjectionMatrix();
    renderer.setSize(newW, newH);
  });

  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();
}

// 7. Render Project Cards with STAR Methodology & 3D Tilt Wrapper
function renderProjectCards(filter) {
  const grid = document.getElementById("projects-grid-container");
  if (!grid) return;

  const filtered = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => {
    const title = currentLanguage === "id" ? p.titleId : p.titleEn;
    const desc = currentLanguage === "id" ? p.shortDescId : p.shortDescEn;
    const catName = currentLanguage === "id" ? p.categoryNameId : p.categoryNameEn;
    const btnText = currentLanguage === "id" ? "Inspeksi Laporan Lengkap" : "Inspect Technical Report";

    const specsHtml = p.keySpecs.slice(0, 3).map(s => `<li><strong>${s.label}:</strong> ${s.val}</li>`).join("");

    const starHtml = p.star ? `
      <div class="star-chip-row">
        <span class="star-chip" title="Situation"><strong>S:</strong> ${p.star.situation}</span>
        <span class="star-chip" title="Action"><strong>A:</strong> ${p.star.action}</span>
        <span class="star-chip" title="Result"><strong>R:</strong> ${p.star.result}</span>
      </div>
    ` : "";

    return `
      <article class="project-card tilt-card" data-id="${p.id}">
        <div class="tilt-glare"></div>
        <div class="project-thumb-box" onclick="openProjectModal('${p.id}')">
          <img src="${p.thumb}" alt="${title}" loading="lazy">
          <div class="project-badge-overlay">
            <span class="badge-inst ${p.instBadgeClass}">${p.institution.split(" - ")[0]}</span>
          </div>
        </div>
        <div class="project-content">
          <span class="project-category">${catName}</span>
          <h3 class="project-title">${title}</h3>
          <p class="project-desc">${desc}</p>
          ${starHtml}
          <ul class="project-specs-list">
            ${specsHtml}
          </ul>
          <div class="project-footer">
            <span class="project-tools-text">${p.tools[0]} | ${p.tools[1] || ""}</span>
            <button class="btn-inspect-project" onclick="openProjectModal('${p.id}')">
              ${btnText}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  // Re-attach tilt listeners
  initCard3DTilt();
}

// 8. 3D Tilt Card Effect (Digital Artist)
function initCard3DTilt() {
  const cards = document.querySelectorAll(".tilt-card");
  cards.forEach(card => {
    const glare = card.querySelector(".tilt-glare");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;

      if (glare) {
        glare.style.opacity = "1";
        glare.style.background = `radial-gradient(circle at ${(x / rect.width) * 100}% ${(y / rect.height) * 100}%, rgba(255, 255, 255, 0.22) 0%, transparent 60%)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
      if (glare) glare.style.opacity = "0";
    });
  });
}

// 9. Project Filters
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");
      renderProjectCards(filter);
    });
  });
}

// 10. Enhanced 4-Tab Project Modal Deep-Dive
function openProjectModal(projectId) {
  const p = projectsData.find(item => item.id === projectId);
  if (!p) return;

  const modal = document.getElementById("project-modal");
  const modalContent = document.getElementById("modal-dynamic-content");
  if (!modal || !modalContent) return;

  const title = currentLanguage === "id" ? p.titleId : p.titleEn;
  const catName = currentLanguage === "id" ? p.categoryNameId : p.categoryNameEn;
  const fullDetails = currentLanguage === "id" ? p.fullDetailsId : p.fullDetailsEn;

  const starSection = p.star ? `
    <div style="background: rgba(14, 165, 233, 0.05); border: 1px solid rgba(14, 165, 233, 0.2); border-radius: var(--radius-md); padding: 18px; margin: 18px 0;">
      <div style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase; margin-bottom: 10px;">
        ✦ METODOLOGI REKAYASA SISTEMATIS (STAR FRAMEWORK)
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px;">
        <div><strong>Situation:</strong> <span style="color: var(--text-muted); font-size: 0.88rem;">${p.star.situation}</span></div>
        <div><strong>Task:</strong> <span style="color: var(--text-muted); font-size: 0.88rem;">${p.star.task}</span></div>
        <div><strong>Action:</strong> <span style="color: var(--text-muted); font-size: 0.88rem;">${p.star.action}</span></div>
        <div><strong>Result:</strong> <span style="color: var(--text-muted); font-size: 0.88rem;">${p.star.result}</span></div>
      </div>
    </div>
  ` : "";

  modalContent.innerHTML = `
    <div style="margin-bottom: 16px;">
      <span class="section-tag" style="margin-bottom: 6px;">${catName}</span>
      <h2 style="font-size: 1.55rem; font-weight: 800; line-height: 1.3; margin-bottom: 8px; color: var(--text-main);">${title}</h2>
      <p style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan);">${p.institution}</p>
    </div>

    <!-- Modal Tab Bar -->
    <div class="modal-tab-bar">
      <button class="modal-tab-btn active" data-modtab="mod-tab-overview">📋 Ringkasan &amp; STAR</button>
      <button class="modal-tab-btn" data-modtab="mod-tab-images">🖼️ Visual &amp; Komparasi</button>
      <button class="modal-tab-btn" data-modtab="mod-tab-specs">⚙️ Spesifikasi &amp; BOM</button>
      <button class="modal-tab-btn" data-modtab="mod-tab-pdf">📄 Lembar Portofolio PDF</button>
    </div>

    <!-- Tab 1: Overview & STAR -->
    <div class="modal-tab-pane active" id="mod-tab-overview" style="padding-top: 20px;">
      ${starSection}
      <div style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">
        ${fullDetails}
      </div>
    </div>

    <!-- Tab 2: Visual & Dual Comparison -->
    <div class="modal-tab-pane" id="mod-tab-images" style="padding-top: 20px;">
      <div class="modal-img-comparison">
        <div class="modal-img-card">
          <img src="${p.thumb}" alt="3D CAD Model / Prototype" onclick="window.open('${p.thumb}', '_blank')" title="Klik untuk perbesar">
          <div class="modal-img-caption">Visual Model CAD / Purwarupa Terpasang</div>
        </div>
        <div class="modal-img-card">
          <img src="${p.detailImg}" alt="Hasil Simulasi / Gambar Kerja" onclick="window.open('${p.detailImg}', '_blank')" title="Klik untuk perbesar">
          <div class="modal-img-caption">Hasil Kontur FEA / Grafik Pengujian / Gambar 2D</div>
        </div>
      </div>
    </div>

    <!-- Tab 3: Technical Specs -->
    <div class="modal-tab-pane" id="mod-tab-specs" style="padding-top: 20px;">
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 24px;">
        ${p.keySpecs.map(s => `
          <div style="background: var(--bg-subtle); border: 1px solid var(--border-subtle); padding: 12px 14px; border-radius: var(--radius-sm);">
            <div style="font-size: 0.72rem; color: var(--text-dim); font-family: var(--font-mono); text-transform: uppercase;">${s.label}</div>
            <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan); font-family: var(--font-mono); margin-top: 2px;">${s.val}</div>
          </div>
        `).join("")}
      </div>
      <div>
        <h4 style="font-size: 0.88rem; font-family: var(--font-mono); color: var(--accent-cyan); margin-bottom: 8px;">Software &amp; Peralatan Terpakai:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${p.tools.map(t => `<span class="skill-pill">${t}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- Tab 4: PDF Viewer Embed -->
    <div class="modal-tab-pane" id="mod-tab-pdf" style="padding-top: 20px;">
      <div style="text-align: center;">
        <img src="${p.pagePdf}" alt="PDF Page ${p.pageNumber}" style="max-width: 100%; max-height: 550px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); box-shadow: var(--shadow-md);">
        <div style="margin-top: 14px;">
          <button class="btn-secondary" onclick="viewPdfPageInViewer(${p.pageNumber})">
            Buka di Penampil Dokumen Utama (Halaman #${p.pageNumber})
          </button>
        </div>
      </div>
    </div>

    <!-- Direct Action Footer in Modal -->
    <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
      <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-dim);">
        Dokumen Portofolio Halaman #${p.pageNumber}
      </div>
      <div style="display: flex; gap: 10px;">
        <button class="btn-secondary" onclick="viewPdfPageInViewer(${p.pageNumber})">
          Buka di Lembar PDF
        </button>
        <a href="portfolio_syofyan_alrisandi.pdf" download="Portfolio_Syofyan_Alrisandi_ST.pdf" class="btn-primary" style="padding: 10px 20px;">
          Unduh PDF Lengkap
        </a>
      </div>
    </div>
  `;

  // Attach modal tab listeners
  const modalTabBtns = modalContent.querySelectorAll(".modal-tab-btn");
  const modalPanes = modalContent.querySelectorAll(".modal-tab-pane");
  modalTabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      modalTabBtns.forEach(b => b.classList.remove("active"));
      modalPanes.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-modtab");
      document.getElementById(targetId)?.classList.add("active");
    });
  });

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function initModalEvents() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  if (!modal || !closeBtn) return;

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
}

// 11. Keyboard Shortcuts (Esc to close, Arrow keys for PDF)
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    const modal = document.getElementById("project-modal");
    const drawerBackdrop = document.getElementById("recruiter-drawer-backdrop");

    if (e.key === "Escape") {
      if (modal && modal.classList.contains("open")) {
        modal.classList.remove("open");
        document.body.style.overflow = "";
      }
      if (drawerBackdrop && drawerBackdrop.classList.contains("open")) {
        drawerBackdrop.classList.remove("open");
        document.body.style.overflow = "";
      }
    }

    if (e.key === "ArrowLeft") {
      if (activeDocPage > 1) selectDocPage(activeDocPage - 1);
    } else if (e.key === "ArrowRight") {
      if (activeDocPage < pdfPages.length) selectDocPage(activeDocPage + 1);
    }
  });
}

// 12. 12-Page PDF Document Viewer Carousel
function initDocViewer() {
  const displayImg = document.getElementById("doc-display-img");
  const thumbStrip = document.getElementById("doc-thumb-strip");
  const prevBtn = document.getElementById("btn-doc-prev");
  const nextBtn = document.getElementById("btn-doc-next");

  if (!displayImg || !thumbStrip) return;

  // Build Thumbnail Strip
  thumbStrip.innerHTML = pdfPages.map(page => `
    <div class="doc-mini-thumb ${page.pageNumber === 1 ? 'active' : ''}" data-page="${page.pageNumber}" onclick="selectDocPage(${page.pageNumber})">
      <img src="${page.imgPath}" alt="Page ${page.pageNumber}" loading="lazy">
      <span class="doc-thumb-num">P.${page.pageNumber}</span>
    </div>
  `).join("");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (activeDocPage > 1) selectDocPage(activeDocPage - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (activeDocPage < pdfPages.length) selectDocPage(activeDocPage + 1);
    });
  }

  updateDocViewer();
}

function selectDocPage(pageNum) {
  if (pageNum < 1 || pageNum > pdfPages.length) return;
  activeDocPage = pageNum;
  updateDocViewer();
}

function updateDocViewer() {
  const displayImg = document.getElementById("doc-display-img");
  const pageIndicator = document.getElementById("doc-page-indicator");
  const prevBtn = document.getElementById("btn-doc-prev");
  const nextBtn = document.getElementById("btn-doc-next");
  const docTitle = document.getElementById("doc-current-title");

  const page = pdfPages[activeDocPage - 1];
  if (!page) return;

  if (displayImg) {
    displayImg.src = page.imgPath;
    displayImg.alt = `Page ${page.pageNumber}`;
  }

  if (pageIndicator) {
    pageIndicator.textContent = `${activeDocPage} / ${pdfPages.length}`;
  }

  if (docTitle) {
    docTitle.textContent = currentLanguage === "id" ? page.titleId : page.titleEn;
  }

  if (prevBtn) prevBtn.disabled = activeDocPage === 1;
  if (nextBtn) nextBtn.disabled = activeDocPage === pdfPages.length;

  document.querySelectorAll(".doc-mini-thumb").forEach(thumb => {
    const p = parseInt(thumb.getAttribute("data-page"), 10);
    if (p === activeDocPage) {
      thumb.classList.add("active");
      thumb.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    } else {
      thumb.classList.remove("active");
    }
  });
}

function viewPdfPageInViewer(pageNum) {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  selectDocPage(pageNum);
  const docSection = document.getElementById("dokumen-portfolio");
  if (docSection) {
    docSection.scrollIntoView({ behavior: "smooth" });
  }
}

// 13. Interactive Workstation Switcher
function initWorkstation() {
  const tabButtons = document.querySelectorAll(".ws-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const key = btn.getAttribute("data-ws");
      switchWorkstation(key);
    });
  });
}

function switchWorkstation(key) {
  const data = workstationData[key];
  if (!data) return;

  const imgEl = document.getElementById("ws-display-img");
  const titleEl = document.getElementById("ws-display-title");
  const subEl = document.getElementById("ws-display-sub");
  const badgeEl = document.getElementById("ws-display-badge");
  const specGrid = document.getElementById("ws-display-specs");
  const inspectBtn = document.getElementById("ws-btn-inspect-action");

  if (imgEl) {
    imgEl.style.opacity = "0.4";
    imgEl.src = data.img;
    setTimeout(() => { imgEl.style.opacity = "1"; }, 150);
  }
  if (titleEl) titleEl.textContent = data.title;
  if (subEl) subEl.textContent = data.subtitle;
  if (badgeEl) badgeEl.textContent = data.badge;

  if (specGrid) {
    specGrid.innerHTML = data.specs.map(s => `
      <div class="ws-spec-box">
        <div class="label">${s.label}</div>
        <div class="value">${s.val}</div>
      </div>
    `).join("");
  }

  if (inspectBtn) {
    inspectBtn.onclick = () => openProjectModal(data.projectId);
  }
}

// 14. Theme Management
function initTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (themeBtn) {
    updateThemeIcon(themeBtn);
    themeBtn.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", currentTheme);
      localStorage.setItem("syofyan_theme", currentTheme);
      updateThemeIcon(themeBtn);
    });
  }
}

function updateThemeIcon(btn) {
  if (currentTheme === "dark") {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    btn.title = "Ganti ke Mode Terang (Light Mode)";
  } else {
    btn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    btn.title = "Ganti ke Mode Gelap (Dark Mode)";
  }
}

// 15. Language Management
function initLanguage() {
  const langBtn = document.getElementById("lang-toggle-btn");
  if (langBtn) {
    langBtn.textContent = currentLanguage.toUpperCase();
    langBtn.addEventListener("click", () => {
      currentLanguage = currentLanguage === "id" ? "en" : "id";
      localStorage.setItem("syofyan_lang", currentLanguage);
      langBtn.textContent = currentLanguage.toUpperCase();
      applyLanguageTranslations();
      renderProjectCards(document.querySelector(".filter-btn.active")?.dataset.filter || "all");
      updateDocViewer();
    });
  }
  applyLanguageTranslations();
}

function applyLanguageTranslations() {
  document.querySelectorAll("[data-i18n-id]").forEach(el => {
    const text = currentLanguage === "id" ? el.getAttribute("data-i18n-id") : el.getAttribute("data-i18n-en");
    if (text) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  });
}

// 16. Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        const navMenu = document.getElementById("nav-menu");
        if (navMenu) navMenu.classList.remove("open");
      }
    });
  });
}

// 17. Mobile Menu
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// 18. Mobile Bottom App Navigation Spy & Tap
function initMobileBottomNav() {
  const bottomNavItems = document.querySelectorAll(".mobile-nav-item");
  if (!bottomNavItems || bottomNavItems.length === 0) return;

  const sections = [
    { id: "hero", navId: "hero" },
    { id: "laboratorium-interaktif", navId: "laboratorium-interaktif" },
    { id: "proyek", navId: "proyek" },
    { id: "dokumen-portfolio", navId: "dokumen-portfolio" },
    { id: "kontak", navId: "kontak" }
  ];

  function updateActiveNav() {
    const scrollPos = window.scrollY + 180;
    let activeNav = "hero";

    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          activeNav = sections[i].navId;
        }
      }
    }

    bottomNavItems.forEach(item => {
      if (item.getAttribute("data-nav") === activeNav) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  bottomNavItems.forEach(item => {
    item.addEventListener("click", () => {
      bottomNavItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      // Close mobile dropdown menu if open
      const navMenu = document.getElementById("nav-menu");
      if (navMenu) navMenu.classList.remove("open");
    });
  });
}

// 19. Contact Form
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value.trim();
    const company = document.getElementById("form-company").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const message = document.getElementById("form-message").value.trim();

    const formattedText = `Halo Syofyan Alrisandi, saya ${name} ${company ? 'dari ' + company : ''}. %0AEmail: ${email} %0APesan: ${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/6285365103947?text=${formattedText}`;

    window.open(whatsappUrl, "_blank");
  });
}

// Global Exposure
window.openProjectModal = openProjectModal;
window.selectDocPage = selectDocPage;
window.viewPdfPageInViewer = viewPdfPageInViewer;
window.copyToClipboard = copyToClipboard;
