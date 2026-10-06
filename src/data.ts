// Semua konten dari sambandha-live.html — dikemas ulang, tidak ada yang dibuang.
// Teks memakai **tebal** sebagai penanda sederhana.

export type Link = { label: string; href: string };

export const SHARE_URL =
  "https://wa.me/?text=Cek%20Sambandha%20SMANCA%20%E2%80%94%20panduan%20lengkap%20jalur%20masuk%20PTN%2C%20beasiswa%2C%20kedinasan%2C%20dan%20direktori%20alumni%20SMAN%201%20Candimulyo%3A%20https%3A%2F%2Fworkspace-theta-sandy.vercel.app%2Fsambandha-smanca";

export const COUNTDOWN_TARGET = "2027-04-21T00:00:00+07:00";

export const SCHOOL = {
  name: "SMA Negeri 1 Candimulyo",
  facts: [
    ["Berdiri", "26 Oktober 1995"],
    ["Akreditasi", "A · Negeri"],
    ["NPSN", "20307627"],
    ["Alamat", "Jl. Candimulyo Km. 4, Surojoyo"],
  ],
  site: "https://sman1candimulyo.sch.id/berita-sekolah/",
};

export const TESTS = [
  { code: "RSC", title: "Tes Minat Bakat (RIASEC)", source: "SeeMyPersonality", desc: "60 soal, Bahasa Indonesia, gratis tanpa daftar akun", href: "https://www.seemypersonality.com/id/Career-Test" },
  { code: "16P", title: "Tes Kepribadian (16 Tipe)", source: "16Personalities", desc: "±10 menit, Bahasa Indonesia, paling populer", href: "https://www.16personalities.com" },
  { code: "OCN", title: "Tes Big Five (OCEAN)", source: "BigFive Test", desc: "Open-source berbasis IPIP, Bahasa Indonesia tersedia", href: "https://bigfive-test.com" },
  { code: "AKP", title: "Tes Gaya Belajar + Penjurusan", source: "Aku Pintar", desc: "Gratis: gaya belajar visual/auditori/kinestetik dan tes penjurusan kuliah", href: "https://akupintar.id/tes-gaya-belajar" },
];
export const TEST_NOTE =
  "**Catatan:** tes online ini adalah refleksi atau skrining awal, bukan pengganti tes psikologi profesional. Untuk memahami hasil lebih dalam, diskusikan dengan guru BK atau psikolog.";

export const TIPS_INTRO =
  "Hasil tes bukan vonis. Gabungkan apa yang kamu suka, kemampuan yang sudah terlihat, dan kondisi nyata—lalu susun pilihan yang benar-benar mau kamu jalani.";
export const TIPS = [
  {
    label: "01 · Baca peluang",
    title: "Daya tampung & keketatan",
    body: "**Daya tampung** adalah jumlah kursi yang tersedia. **Keketatan** membandingkan jumlah pendaftar dengan kursi; makin ketat, biasanya makin sulit ditembus.",
    list: [
      "Pilihan 1: jurusan utama yang paling kamu incar dan siap perjuangkan.",
      "Pilihan 2: tetap cocok untukmu, tetapi peluangnya lebih realistis—bukan sekadar pilihan asal aman.",
    ],
    after: "Angka berubah tiap tahun. Cek data terbaru di portal SNPMB dan laman resmi kampus tujuan.",
    link: { label: "Portal SNPMB ↗", href: "https://portal.snpmb.id" },
  },
  {
    label: "02 · Seimbangkan",
    title: "Tiga sisi pertimbangan",
    points: [
      ["Minat", "Apa yang membuatmu penasaran dan betah dipelajari? Pakai hasil tes di atas sebagai pemantik."],
      ["Kemampuan", "Lihat pola nilai rapor, pelajaran yang kuat, dan hasil tryout—bukan satu nilai saja."],
      ["Prospek", "Telusuri arah karier, biaya kuliah dan hidup, serta lokasi kampus."],
    ],
    after: "Tidak ada satu jawaban yang paling benar untuk semua orang. Cari titik temu yang paling masuk akal untuk kondisimu.",
  },
  {
    label: "03 · Hindari",
    title: "Jebakan yang sering terjadi",
    list: [
      "Ikut-ikutan teman.",
      "Tergoda gengsi atau nama jurusan yang terdengar keren.",
      "Mengejar prospek gaji tanpa mempertimbangkan minat.",
      "Mengabaikan biaya dan lokasi kampus.",
      "Tidak menyiapkan rencana cadangan.",
    ],
  },
  {
    label: "04 · Lakukan",
    title: "Empat langkah praktis",
    steps: [
      "Kenali diri lewat tes di atas dan catatan pengalaman belajarmu.",
      "Riset 3–5 jurusan kandidat: mata kuliah, kegiatan belajar, dan jalur kariernya.",
      "Cek daya tampung dan keketatan terbaru dari sumber resmi.",
      "Diskusikan dengan guru BK, orang tua, atau alumni di halaman ini.",
    ],
  },
] as {
  label: string;
  title: string;
  body?: string;
  list?: string[];
  points?: string[][];
  steps?: string[];
  after?: string;
  link?: Link;
}[];

export type Scholarship = { id: string; kicker: string; title: string; desc: string; details: string[]; link?: Link };
export const SCHOLARSHIP_INTRO =
  "Panduan awal untuk lulusan SMA/sederajat yang ingin kuliah. Mulai dari bantuan pemerintah, jalur prestasi, sampai beasiswa kampus.";
export const SCHOLARSHIPS: Scholarship[] = [
  {
    id: "kip",
    kicker: "Utama · Pemerintah",
    title: "KIP Kuliah",
    desc: "Program Kemdiktisaintek untuk calon mahasiswa dengan keterbatasan ekonomi dan potensi akademik.",
    details: [
      "**Sasaran 2026:** lulusan SMA/SMK/MA tahun 2024–2026, maksimal dua tahun setelah lulus.",
      "**Syarat ekonomi:** penghasilan kotor orang tua/wali maksimal Rp4.000.000 per bulan atau Rp750.000 per anggota keluarga. Prioritas bagi pemegang KIP sekolah, penerima PKH/KKS, serta siswa yang terdata di DTKS/PIP.",
      "**Cakupan:** bebas biaya kuliah (UKT), bantuan biaya hidup Rp800.000–Rp1.400.000 per bulan menurut lima klaster wilayah, dan total biaya pendidikan S1 maksimal delapan semester sebesar Rp33.600.000.",
      "**Pilihan kampus:** berlaku di PTN melalui SNBP, SNBT, atau Mandiri maupun PTS dengan program studi minimal terakreditasi C.",
      "**Pendaftaran akun 2026:** 3 Februari–31 Oktober 2026; jalur mandiri masih dibuka sampai 31 Oktober 2026.",
      "**Catatan UTBK:** pembebasan biaya selektif hanya untuk pemegang KIP pendidikan menengah yang datanya terverifikasi, bukan otomatis untuk semua pendaftar KIP Kuliah.",
    ],
    link: { label: "Buka laman resmi KIP Kuliah ↗", href: "https://kip-kuliah.kemdikbud.go.id" },
  },
  {
    id: "bu",
    kicker: "Prestasi · Kemendikdasmen",
    title: "Beasiswa Unggulan",
    desc: "Jalur prestasi untuk mahasiswa baru program S1/D4.",
    details: [
      "Lulusan maksimal dua tahun sebelumnya dan usia maksimal 22 tahun untuk mahasiswa baru.",
      "Memiliki LoA unconditional serta sertifikat UKBI minimal predikat Madya dengan skor 482.",
      "Menulis esai 1.000–1.500 kata; prestasi tingkat nasional atau internasional diutamakan.",
    ],
    link: { label: "Buka laman resmi ↗", href: "https://beasiswaunggulan.kemendikdasmen.go.id/" },
  },
  {
    id: "teladan",
    kicker: "Kepemimpinan · Tanoto Foundation",
    title: "Beasiswa TELADAN",
    desc: "Untuk mahasiswa baru semester satu di 10 PTN mitra.",
    details: [
      "**PTN mitra:** UGM, UI, ITB, IPB, UB, UNDIP, UNHAS, UNMUL, UNRI, dan USU.",
      "**Cakupan:** UKT hingga delapan semester, tunjangan hidup, dan program pengembangan kepemimpinan.",
      "**Syarat:** rata-rata rapor kelas XII minimal 8,0, aktif berorganisasi, dan tidak sedang menerima beasiswa lain. Penerima KIP Kuliah tetap boleh mendaftar.",
      "Dibuka setiap tahun sekitar Juli–September.",
    ],
    link: { label: "Buka TELADAN 2027 ↗", href: "https://www.tanotofoundation.org/teladan-2027/" },
  },
  {
    id: "aperti",
    kicker: "Kampus BUMN",
    title: "Beasiswa APERTI BUMN",
    desc: "Skema beasiswa penuh dan parsial untuk lulusan SMA/SMK/MA tahun 2025–2026.",
    details: [
      "**Kampus:** Telkom University, Universitas Pertamina, Institut Teknologi PLN, ULBI, UISI, dan Politeknik Semen Indonesia.",
      "Menyiapkan rapor semester 1–5 dan hanya boleh memilih satu kampus tujuan.",
      "Pendaftaran tahunan biasanya sekitar Mei–Juni. Pantau informasi di Instagram **@apertibumn**.",
    ],
  },
  {
    id: "pts",
    kicker: "Jalur Kampus",
    title: "Beasiswa Prestasi PTS",
    desc: "Banyak perguruan tinggi swasta menawarkan potongan UKT 20–50% untuk prestasi akademik atau nonakademik, tahfidz, dan olahraga.",
    details: [
      "Contoh kampus: Universitas AMIKOM Yogyakarta dan UMS melalui jalur BKHAD, BTUM, hafidz, serta unggulan.",
      "Skema dan syarat berbeda di setiap kampus; periksa laman PMB kampus tujuanmu.",
    ],
  },
];
export const UKT = [
  "**UKT (Uang Kuliah Tunggal)** adalah biaya kuliah per semester di PTN. Besarnya **TIDAK** sama untuk semua orang — dibagi ke dalam beberapa golongan berdasarkan kemampuan ekonomi orang tua/wali.",
  "Golongan ditetapkan dari verifikasi data ekonomi saat daftar ulang: penghasilan orang tua, tagihan listrik, PBB, foto rumah, dan dokumen pendukung lain. Golongan 1 paling ringan, makin tinggi golongannya makin besar biayanya.",
  "Karena itu: isi data ekonomi dengan **JUJUR** dan lengkap. Data yang tidak jujur bisa berakibat penetapan golongan yang salah atau masalah administratif.",
  "Penerima KIP Kuliah dibebaskan dari UKT dan mendapat bantuan biaya hidup.",
  "**Catatan:** sistem UKT hanya berlaku di PTN. PTS memakai skema biaya sendiri (SPP/uang semester) sesuai ketentuan masing-masing kampus.",
];
export const SCHOLARSHIP_NOTE =
  "**Susun prioritas:** Djarum Beasiswa Plus, Pertamina Sobat Bumi, dan Beasiswa Bank Indonesia umumnya ditujukan untuk mahasiswa yang sudah kuliah—minimal semester 2–4 dengan IPK minimal 3,0. Jadi, fokus ke lima pilihan di atas saat baru lulus, lalu kejar program on-going setelah kuliah berjalan. Jadwal dan syarat dapat berubah setiap tahun; selalu cek laman resmi masing-masing program.";

export type Campus = { name: string; desc: string; links: Link[] };
export type Route = {
  id: string;
  num: string;
  island: string;
  title: string;
  intro: string;
  details: string[];
  links: Link[];
  campuses?: Campus[];
  extra?: { title: string; body: string; links: Link[]; note: string };
  countdown?: boolean;
};
export const ROUTES_INTRO =
  "Setiap jalur punya ritme persiapan yang berbeda. Kenali mekanismenya, catat tenggat, lalu pilih strategi yang paling masuk akal untukmu.";
export const ROUTES: Route[] = [
  {
    id: "snbt",
    num: "01",
    island: "Pulau Teropong",
    title: "SNBT & UTBK",
    countdown: true,
    intro: "SNBT menyeleksi berdasarkan hasil UTBK. Peserta bebas memilih PTN lintas wilayah.",
    details: [
      "**Materi:** Tes Potensi Skolastik—Penalaran Umum, Pengetahuan dan Pemahaman Umum, Pemahaman Bacaan dan Menulis, serta Pengetahuan Kuantitatif—dan Tes Literasi Bahasa Indonesia, Bahasa Inggris, serta Penalaran Matematika.",
      "**Pilihan:** maksimal 4 program studi, dengan batas maksimal 2 Sarjana dan 2 Vokasi.",
      "UTBK hanya dapat diikuti 1 kali; hasilnya berlaku pada tahun yang sama.",
      "**Biaya UTBK 2026:** Rp200.000. Pemegang KIP Kuliah kategori 1 tidak dikenai biaya.",
    ],
    links: [{ label: "Informasi resmi UTBK-SNBT ↗", href: "https://snpmb.id/utbk-snbt/informasi-umum" }],
  },
  {
    id: "snbp",
    num: "02",
    island: "Pulau Medali",
    title: "SNBP",
    intro:
      "Seleksi Nasional Berdasarkan Prestasi menilai rapor serta prestasi akademik dan nonakademik. Kuotanya minimum 20% daya tampung PTN; biaya seleksi ditanggung pemerintah.",
    details: [
      "**Syarat siswa:** kelas 12, punya NISN dan terdaftar di PDSS, punya nilai TKA, serta memiliki Akun SNPMB Siswa.",
      "**Pilihan:** maksimal 2 program studi di 1–2 PTN. Jika memilih 2, salah satunya harus berada di PTN seprovinsi dengan sekolah asal.",
      "**Perhatikan:** siswa yang lulus SNBP tidak boleh mengikuti UTBK-SNBT pada tahun yang sama maupun tahun-tahun berikutnya (praktis selamanya), serta tidak boleh mengikuti Jalur Mandiri pada tahun yang sama. Penjelasan lengkap ada di Perapian Cerita (FAQ).",
    ],
    links: [
      { label: "Informasi resmi SNBP ↗", href: "https://snpmb.id/snbp/informasi-umum" },
      { label: "Portal akun SNPMB ↗", href: "https://portal.snpmb.id" },
    ],
    extra: {
      title: "TKA — Syarat Wajib SNBP",
      body: "**TKA (Tes Kemampuan Akademik) Kemdikdasmen** menjadi syarat wajib pendaftaran SNBP, sehingga siswa yang mengincar jalur prestasi perlu mengikuti TKA.",
      links: [
        { label: "SainsIn — Try Out TKA ↗", href: "https://sainsin.com/tryout/233" },
        { label: "Alternatifa — Persiapan TKA-SNBP ↗", href: "https://www.alternatifa.com/" },
      ],
      note: "Jadwal dan ketentuan TKA mengikuti pengumuman resmi Kemdikdasmen dan SNPMB.",
    },
  },
  {
    id: "mandiri",
    num: "03",
    island: "Pulau Peta",
    title: "Mandiri",
    intro:
      "SNPMB mengenalkan tiga jalur masuk PTN: SNBP, SNBT, dan Seleksi Mandiri yang diselenggarakan masing-masing PTN. Syarat, biaya, serta jadwalnya dapat berbeda antarkampus.",
    details: ["Siswa yang sudah lulus SNBP tidak boleh mengikuti Jalur Mandiri pada tahun yang sama."],
    links: [{ label: "Ketentuan resmi SNBP ↗", href: "https://snpmb.id/snbp/informasi-umum" }],
    campuses: [
      {
        name: "Universitas Tidar",
        desc: "SMUT (ujian tulis), SMUTBK (nilai UTBK), SMJP (prestasi), dan SMJK (kerja sama).",
        links: [
          { label: "Info seleksi ↗", href: "https://um.untidar.ac.id/" },
          { label: "Daftar ↗", href: "https://smart.untidar.ac.id/" },
        ],
      },
      { name: "Universitas Gadjah Mada", desc: "UM UGM dengan pendaftaran online dan ujian CBT.", links: [{ label: "Info & daftar ↗", href: "https://um.ugm.ac.id/" }] },
      { name: "Universitas Sebelas Maret", desc: "SPMB UNS.", links: [{ label: "Info & daftar ↗", href: "https://spmb.uns.ac.id/" }] },
    ],
  },
  {
    id: "pts",
    num: "04",
    island: "Pulau Ransel",
    title: "Perguruan tinggi swasta",
    intro:
      "Eksplorasi tes internal, beasiswa, dan program kerja sama sekolah yang tersedia. Untuk syarat dan jadwal, selalu periksa laman resmi kampus tujuan.",
    details: [],
    links: [],
    campuses: [
      {
        name: "Universitas Muhammadiyah Magelang",
        desc: "UNIMMA · akreditasi Unggul · pendaftaran gelombang serta jalur PMDK/prestasi bebas biaya pendaftaran.",
        links: [{ label: "Info & daftar ↗", href: "https://pmb.unimma.ac.id/" }],
      },
    ],
  },
];

export const SCHEDULE = {
  note: "**Jadwal siklus 2026 (sudah selesai).** Cek snpmb.id untuk jadwal terbaru.",
  cols: [
    {
      title: "SNBP 2026",
      items: [
        ["Registrasi Akun Sekolah", "5–26 Jan 2026"],
        ["Pengisian PDSS", "5 Jan–2 Feb 2026"],
        ["Registrasi Akun Siswa", "12 Jan–18 Feb 2026"],
        ["Pendaftaran SNBP", "3–18 Feb 2026"],
        ["Pengumuman", "31 Mar 2026"],
      ],
    },
    {
      title: "UTBK-SNBT 2026",
      items: [
        ["Pendaftaran", "25 Mar–7 Apr 2026"],
        ["Unduh Kartu Peserta", "11–15 Apr 2026"],
        ["Pelaksanaan UTBK", "21–30 Apr 2026"],
        ["Pengumuman", "25 Mei 2026"],
        ["Unduh Sertifikat", "26 Mei–31 Jul 2026"],
      ],
    },
  ],
  link: { label: "Lihat jadwal resmi SNPMB ↗", href: "https://snpmb.id/jadwal-penting" },
};

export const PRACTICE_INTRO =
  "Pilih platform yang sesuai dengan ritme belajarmu untuk latihan soal, try out, les online, fokus, dan evaluasi materi.";
export const PRACTICE = [
  { tag: "Latihan", title: "Siapkan ritme belajarmu.", body: "Try out, drill soal, dan pembahasan video tersedia di SainsIn.", link: { label: "Buka SainsIn ↗", href: "https://sainsin.com/" } },
  {
    tag: "Latihan",
    title: "Ukur progresmu bersama Pahamify.",
    body: "Bimbel online persiapan UTBK dengan Try Out bersistem penilaian serupa UTBK asli, peringkat nasional, Smart Analysis, bank soal, video belajar animasi, dan persiapan terpandu Pegasus. Tersedia pilihan gratis dan premium.",
    link: { label: "Buka Pahamify ↗", href: "https://pahamify.com/" },
  },
  {
    tag: "Les Online",
    title: "Belajar bareng Alternatifa Project.",
    body: "Komunitas belajar online untuk persiapan UTBK-SNBT, TKA-SNBP, SIMAK UI, UM UGM, dan ujian mandiri—dengan mentoring, pembahasan soal yang detail, latihan harian, serta lingkungan belajar suportif. Menurut situsnya, Alternatifa telah mendampingi 200 ribu+ siswa sejak 2021; 70% siswa aktif lulus seleksi PTN tiap tahun dan 10 ribu+ siswa lolos UI, UGM, ITB, serta PTN terbaik pada 2024–2025.",
    link: { label: "Buka Alternatifa ↗", href: "https://www.alternatifa.com/" },
  },
  {
    tag: "Aplikasi Fokus Belajar",
    title: "Jaga konsistensi bersama Yeolpumta.",
    body: "YPT — Yeolpumta adalah stopwatch belajar dari Pallo Inc., Korea, dengan 5 juta+ unduhan di Google Play. Catat waktu per mata pelajaran, blokir aplikasi pengganggu saat sesi fokus, bergabung dalam grup belajar dengan progres dan peringkat realtime, lalu tinjau statistik harian, mingguan, bulanan, planner, serta hitung mundur D-Day ujian.",
    link: { label: "Download di Google Play ↗", href: "https://play.google.com/store/apps/details?id=com.pallo.passiontimerscoped" },
  },
];
export const OFFLINE = [
  { title: "Ganesha Operation (GO)", body: "Bimbel tatap muka, ada 3 cabang di Magelang (Jl. Mayjend Sutoyo, Jl. Pahlawan, Mertoyudan); kelas intensif persiapan PTN", href: "https://ganeshaoperation.com/" },
  { title: "Neutron Yogyakarta", body: "Bimbel tatap muka & live streaming, 121+ cabang di 50 kota; ada program khusus UTBK-SNBT dan Kedinasan — cek cabang terdekat di webnya", href: "http://neutron.co.id/" },
];
export const BOOKS = [
  { title: "Wangsit", credit: "Om Jero", body: "Buku latihan soal UTBK/SNBT paling populer; cocok untuk persiapan SNBT/UTBK mandiri." },
  { title: "Buku SKD CPNS & Kedinasan", credit: "Al Faiz (Privat Alfaiz)", body: "Materi TWK, TIU, TKP + soal HOTS sesuai kisi-kisi terbaru; cocok untuk persiapan SKD sekolah kedinasan." },
];
export const BOOK_NOTE = "Buku-buku ini terbit dengan edisi baru tiap tahun — pastikan membeli edisi terbaru di toko buku atau toko online resmi.";

export const OFFICIAL = [
  { label: "Portal SNPMB ↗", sub: "Registrasi dan akses akun siswa", href: "https://portal.snpmb.id" },
  { label: "Helpdesk SNPMB ↗", sub: "Call Centre 08041450450", href: "https://halo.snpmb.id" },
  { label: "KIP Kuliah ↗", sub: "Informasi program dan pendaftaran", href: "https://kip-kuliah.kemdikbud.go.id" },
  { label: "FAQ SNPMB ↗", sub: "Jawaban resmi untuk pertanyaan umum", href: "https://snpmb.id/faq" },
];

export const ALT_INTRO =
  "Kuliah bukan cuma soal PTN. Kenali pilihan yang mengarah ke ikatan dinas, karier pertahanan dan kepolisian, pendidikan vokasi, pelatihan kerja, atau membangun usaha.";
export const KEDINASAN = {
  label: "01 · Ikatan dinas",
  title: "Sekolah Kedinasan",
  body: "Kuliah gratis. Setelah lulus, peserta berpeluang besar diangkat menjadi CPNS/ASN, dengan kewajiban ikatan dinas dan bersedia ditempatkan di seluruh Indonesia.",
  formation:
    "**Formasi 2026: 4.770 kursi di 9 kementerian/lembaga.** IPDN 1.410 · PKN STAN 1.000 · Kemenhub 891 · Polstat STIS 564 · Poltek Imigrasi & Pemasyarakatan 375 · Poltek Pengayoman 250 · STMKG 130 · STIN 100 · Poltek SSN 50.",
  portal: { label: "Portal pendaftaran SSCASN ↗", href: "https://sscasn.bkn.go.id" },
  deadline:
    "**Pendaftaran 2026 sudah lewat:** 18–30 Agustus 2026. Polanya dibuka tiap tahun sekitar Agustus; siapkan KTP, KK, rapor semester 1–5, dan surat keterangan belum menikah jauh-jauh hari.",
  schools: [
    { name: "PKN STAN ↗", href: "https://pknstan.ac.id", sub: "Kemenkeu · keuangan, pajak, bea cukai" },
    { name: "IPDN ↗", href: "https://spcp.ipdn.ac.id", sub: "Kemendagri · pemerintahan, semi militer" },
    { name: "Polstat STIS ↗", href: "https://spmb.stis.ac.id/", sub: "BPS · statistika" },
    { name: "STMKG ↗", href: "https://ptb.stmkg.ac.id/", sub: "BMKG · cuaca, iklim, geofisika" },
    { name: "STIN ↗", href: "https://ptb.stin.ac.id/", sub: "BIN · intelijen" },
    { name: "Poltek SSN ↗", href: "https://penerimaan.poltekssn.ac.id", sub: "BSSN · siber dan sandi" },
    { name: "Poltekim & Poltekip/Poltekpin ↗", href: "https://catar.kemenkumham.go.id/", sub: "Kemenkum · imigrasi dan pemasyarakatan" },
    { name: "Sekolah Kemenhub ↗", href: "https://sipencatar.dephub.go.id/", sub: "STTD, pelayaran, penerbangan" },
  ],
  details: [
    "**Syarat umum:** WNI; usia rata-rata 16–22 tahun; belum menikah dan tidak menikah selama pendidikan; tidak bertato atau bertindik kecuali karena adat/agama; sehat jasmani-rohani; serta memenuhi standar nilai sekolah tujuan. Khusus STAN, nilai Bahasa Inggris dan Matematika minimal 80.",
    "**Tahapan:** seleksi administrasi → SKD CAT BKN (TWK, TIU, TKP) → seleksi lanjutan berupa kesehatan, kesamaptaan/fisik, psikotes, dan wawancara sesuai sekolah.",
  ],
  skd: [
    { label: "Privat Al Faiz ↗", href: "https://privatalfaiz.id/", sub: "Bimbel online + tryout SKD CPNS & Kedinasan (TWK, TIU, TKP), ada aplikasi Android" },
    { label: "SainsIn ↗", href: "https://sainsin.com", sub: "Paket tryout SKD Kedinasan + pembahasan, materi, dan drill soal" },
  ],
};
export const ALT_CARDS = [
  {
    label: "02 · Pertahanan",
    title: "TNI",
    body: "Tiga jalur utama dengan ketentuan pendidikan yang berbeda.",
    details: [
      "**Akademi:** Akmil, AAL, dan AAU—khusus lulusan SMA/MA, bukan SMK.",
      "**Bintara & Tamtama:** terbuka untuk lulusan SMA/SMK/MA.",
      "**TNI AD TA 2026:** pendaftaran Bintara 1 Oktober 2026–13 Januari 2027; Tamtama sampai 10 Februari 2027.",
      "**Syarat usia:** 17 tahun 10 bulan–26 tahun dan belum menikah selama pendidikan.",
    ],
    links: [
      { label: "Portal TNI AD ↗", href: "https://ad.rekrutmen-tni.mil.id" },
      { label: "Portal TNI AL ↗", href: "https://al.rekrutmen-tni.mil.id/" },
      { label: "Portal TNI AU ↗", href: "https://au.rekrutmen-tni.mil.id" },
    ],
  },
  {
    label: "03 · Kepolisian",
    title: "Polri",
    body: "Seleksi memakai sistem gugur pada setiap tahap.",
    details: [
      "**Akpol:** SMA/MA saja; tinggi minimal 165 cm pria atau 163 cm wanita; usia 16–22 tahun.",
      "**Bintara PTU:** SMA/SMK/MA; tinggi minimal 165 cm pria atau 160 cm wanita.",
      "**Tamtama Brimob:** khusus pria.",
      "**Formasi 2026:** total 6.941.",
      "**Tahapan:** administrasi → kesehatan → psikologi dan akademik CAT → kesamaptaan → sidang akhir.",
    ],
    links: [{ label: "Portal penerimaan Polri ↗", href: "https://penerimaan.polri.go.id" }],
  },
  {
    label: "04 · Pilihan lain",
    title: "Non-PTN lainnya",
    body: "",
    details: [
      "**Politeknik/vokasi negeri dan swasta:** pembelajaran lebih banyak praktik dengan durasi yang lebih singkat. KIP Kuliah juga berlaku di PTN vokasi.",
      "**Balai Latihan Kerja (BLK):** pelatihan keahlian gratis dari pemerintah sebelum terjun ke dunia kerja.",
      "**Langsung kerja atau wirausaha:** sah-sah saja, tetapi bekali diri dengan satu keahlian yang jelas melalui kursus, sertifikasi, atau magang.",
    ],
    links: [],
  },
];
export const ALT_WARNING =
  "**Catatan jujur:** seleksi kedinasan, TNI, dan Polri sangat ketat—fisik, akademik, dan mental diuji semua. Persiapan idealnya dimulai sejak kelas XI, bukan dadakan di kelas XII. Waspadai calo atau penipuan yang menjanjikan kelulusan: seleksi resmi memakai CAT dan sistem gugur, tidak ada jalur titipan.";

export const WORK_INTRO =
  "Kuliah bukan satu-satunya jalan. Buat yang mau langsung kerja setelah lulus — atau sambil kuliah — ini tiga jalur utama yang realistis buat lulusan SMA:";
export const WORK = [
  {
    title: "Kerja Kantoran",
    body: "Posisi yang terbuka buat lulusan SMA: admin, customer service, sales, operator produksi, kurir/logistik, barista, dan lainnya.",
    list: ["Bikin CV yang rapi + profil LinkedIn", "Lamar lewat platform: JobStreet, Glints, LinkedIn", "Siapkan diri untuk tes dan interview — pelajari perusahaannya dulu."],
    links: [
      { label: "JobStreet", href: "https://www.jobstreet.co.id" },
      { label: "Glints", href: "https://glints.com/id" },
      { label: "LinkedIn", href: "https://www.linkedin.com" },
    ],
  },
  {
    title: "Freelance",
    body: "Dibayar per proyek, waktu fleksibel. Skill yang laku: desain grafis, video editing, tulis artikel/copywriting, admin media sosial, programming.",
    list: ["Bangun portofolio — kumpulkan hasil kerjamu, sekecil apapun", "Cari proyek di: Sribulancer, Projects.co.id, Fiverr, Upwork", "Mulai dari tarif kecil untuk membangun reputasi dan review."],
    links: [
      { label: "Sribulancer", href: "https://www.sribulancer.com" },
      { label: "Projects.co.id", href: "https://projects.co.id" },
    ],
  },
  {
    title: "Wirausaha",
    body: "Mulai usaha sendiri, sekecil apapun. Contoh: kuliner, fashion/thrift, jasa (laundry, potong rambut), reseller.",
    list: ["Mulai dari yang kamu kuasai dengan modal kecil", "Pasarkan lewat media sosial dan marketplace (Shopee, Tokopedia, TikTok Shop)", "Pisahkan uang usaha dan uang pribadi sejak hari pertama."],
    links: [],
  },
  {
    title: "Kuliah Sambil Kerja",
    body: "Kerja bukan berarti berhenti belajar. Universitas Terbuka (UT) adalah PTN dengan sistem kuliah jarak jauh yang dirancang untuk yang bekerja.",
    list: [
      "Kuliah fleksibel (online/jarak jauh), biaya terjangkau, ijazah negeri — situs resmi Universitas Terbuka",
      "Alternatif lain: program kelas karyawan di berbagai PTS (kuliah malam atau akhir pekan) — cek kampus di kotamu.",
    ],
    links: [{ label: "Universitas Terbuka", href: "https://www.ut.ac.id" }],
  },
];
export const WORK_NOTE = "Kenalan dengan alumni yang sudah bekerja, wirausaha, atau freelance lewat direktori alumni — tanya pengalaman mereka langsung.";

export const FAQ = [
  ["Apa bedanya SNBP, SNBT, dan Mandiri?", "SNBP menyeleksi berdasarkan prestasi (nilai rapor via PDSS, tanpa tes). SNBT menyeleksi berdasarkan hasil UTBK. Seleksi Mandiri diadakan masing-masing PTN dengan aturan sendiri."],
  [
    "Kalau ikut SNBP, masih bisa ikut SNBT?",
    "Bisa, selama TIDAK lolos SNBP. Tapi kalau kamu dinyatakan LOLOS SNBP, aturannya tegas: kamu TIDAK BOLEH mengikuti UTBK-SNBT — bukan hanya di tahun yang sama, tapi juga di tahun-tahun berikutnya (yang lulus SNBP 2024, 2025, dan 2026 semuanya diblokir dari SNBT 2026). Praktisnya ini berlaku selamanya, karena SNBT sendiri hanya menerima lulusan 3 tahun terakhir. Selain itu, yang lolos SNBP 2026 juga TIDAK BOLEH mengikuti seleksi Jalur Mandiri di PTN mana pun pada tahun yang sama. Jadi pikir matang-matang sebelum mengambil kursi SNBP — sekali lolos, tidak ada jalan kembali ke jalur seleksi nasional lain.",
  ],
  ["Apakah mendaftar KIP Kuliah mengurangi peluang lolos seleksi?", "Tidak. Kelulusan seleksi (SNBP/SNBT/Mandiri) ditentukan murni dari prestasi atau hasil tes. Penetapan penerima KIP Kuliah adalah proses terpisah yang berjalan setelah kamu dinyatakan lolos seleksi."],
  [
    "Lulusan tahun lalu (gap year) bisa daftar apa saja?",
    "SNBT terbuka untuk lulusan 3 tahun terakhir; KIP Kuliah untuk lulusan maksimal 2 tahun setelah lulus; SNBP hanya untuk siswa kelas 12 tahun berjalan. Sekolah kedinasan, TNI/Polri, dan Mandiri punya batas tahun lulusan masing-masing — cek ketentuan tiap penyelenggara.",
  ],
  ["Berapa kali bisa ikut UTBK dalam setahun?", "Satu kali per tahun. Manfaatkan sebaik-baiknya."],
  ["Apakah TKA wajib?", "Hasil TKA menjadi syarat untuk mendaftar SNBP. Untuk jalur lain, ikuti ketentuan resmi Kemdikdasmen/SNPMB tahun berjalan."],
  [
    "Nilai raporku jelek di semester awal, masih ada harapan di SNBP?",
    "SNBP memakai nilai rapor semester 1–5 yang diisikan sekolah via PDSS — nilai yang sudah lewat tidak bisa diubah. Fokus maksimalkan semester yang tersisa, dan siapkan diri untuk SNBT sebagai jalur utama.",
  ],
];

export type Alumnus = { name: string; uni: string; fakultas: string; jurusan: string; year: string; kontak: string; salam: string; status?: string };
export const ALUMNI: Alumnus[] = [
  { name: "Ziendik Pancar Mudra Wirawan", uni: "ITS", fakultas: "FTEIC", jurusan: "TEKNIK ELEKTRO", year: "2023", kontak: "@itsjiwira", salam: "HALLO TEMAN TEMAN, SILAHKAN BOLEH TANYA TANYA" },
  { name: "Eka Azahra Zulsita", uni: "Universitas Tidar", fakultas: "Fakultas Keguruan dan Ilmu Pendidikan", jurusan: "Pendidikan IPA", year: "2026", kontak: "@zhrasita21", salam: "semoga sukses" },
  { name: "Muhamad Zidan Muzakki", uni: "UNIVERSITAS GADJAH MADA", fakultas: "Sekolah Vokasi", jurusan: "Teknik Pengelolaan dan Perawatan Alat Berat", year: "2025", kontak: "IG: zidan__muzakki / LinkedIn: linkedin.com/in/muhamadzidanmuzakki2025", salam: "-" },
  { name: "Lukman Muji Isnanto", uni: "Universitas Negeri Semarang", fakultas: "Fakultas Ekonomika dan Bisnis", jurusan: "Manajemen", year: "2026", kontak: "IG: lukmanmuji.i", salam: "Semangat terus broo" },
  { name: "Zahra Aqila Nabil", uni: "Universitas Tidar", fakultas: "Pertanian", jurusan: "Gizi", year: "2026", kontak: "ig: @z.zaqn_", salam: "haii" },
  { name: "Ghina Sonya Permatasari", uni: "UPNVY", fakultas: "Pertanian", jurusan: "Agribisnis", year: "2026", kontak: "ig: @ghinasp_22", salam: "sukses selalu!!" },
  { name: "Aliefia Nur Handhini", uni: "Universitas Diponegoro", fakultas: "Kedokteran", jurusan: "Keperawatan", year: "2026", kontak: "@aliefiandhnii_", salam: "Haiii semua :)" },
  { name: "Oktavianty Anggraeni", uni: "Universitas Sebelas Maret", fakultas: "Sekolah Vokasi", jurusan: "D3 Manajemen Administrasi", year: "2026", kontak: "@oktviantya_ / LinkedIn: Oktavianty Anggraeni", salam: "semangat berproses teman teman!!" },
  { name: "Kesya Rohimatul Husna", uni: "Poltekkes Kemenkes Semarang", fakultas: "Kesehatan", jurusan: "Kebidanan", year: "2026", kontak: "ig@ksy.syaa_", salam: "semangattt semuanya" },
  { name: "Sofiana Rahmadani", uni: "Poltekkes Kemenkes Semarang", fakultas: "Kesehatan", jurusan: "Teknologi Laboratorium Medik", year: "2026", kontak: "@_ssfiana", salam: "believe in your journey" },
  { name: "Lia Ramadhani", uni: "Universitas Tidar", fakultas: "Fakultas Keguruan dan Ilmu Pendidikan", jurusan: "Pendidikan Bahasa dan Sastra Indonesia", year: "2026", kontak: "Instagram: notliarrrr_", salam: "Hai semua, semangat selalu!" },
  { name: "Navida Salsabila", uni: "Gadjah Mada", fakultas: "Ilmu Budaya", jurusan: "Bahasa dan Sastra Indonesia", year: "2025", kontak: "@piwwgss4_", salam: "Halo, mari bercerita lebih banyak!" },
  { name: "Maulana Ridho Wicaksono", uni: "Universitas Tidar", fakultas: "Ekonomi", jurusan: "S1 Akuntansi", year: "2026", kontak: "maullpride_", salam: "Assalamualaikum" },
  { name: "Fajjri Muhamad Adam", uni: "Universitas Tidar", fakultas: "Ekonomi", jurusan: "Manajemen", year: "2026", kontak: "@fjjradamm", salam: "mekarlah dimanapun tempatnya" },
  { name: "Muhammad Hisyam Nurul Arifin", uni: "Diponegoro University", fakultas: "Faculty of Engineering", jurusan: "Civil Engineering", year: "2025", kontak: "@mdhsrfn_", salam: "semangat belajar di smanca n semangat ngejar univ impian" },
  { name: "Zafran Maulana Hamid", uni: "Universitas Tidar", fakultas: "Ilmu Sosial dan Ilmu Politik", jurusan: "Ilmu Komunikasi", year: "2025", kontak: "@zfranmaulana", salam: "Sekolah sing bener, kuliah cumlaude, kerja kepenak, tumbas Harley" },
  { name: "Ratna Syaidatun Rofiah", uni: "Universitas Tidar", fakultas: "Ilmu Sosial dan Ilmu Politik", jurusan: "Ilmu Komunikasi", year: "2025", kontak: "ratnasyaidatunn", salam: "semangat nyakkk" },
  { name: "Finja Abi Azzahra", uni: "Universitas Tidar", fakultas: "Fakultas Pertanian", jurusan: "Gizi", year: "2026", kontak: "@_finjaazzahra", salam: "hallo semuanya, salam kenall hihi" },
  { name: "Yosua Mulyo Nugroho", uni: "Universitas Sebelas Maret", fakultas: "Fakultas Pertanian", jurusan: "Soil Science", year: "2023", kontak: "yosuamlyoz", salam: "halo semuanya, selamat berjuang dan berproses" },
  { name: "Sani Aulia", uni: "Universitas Tidar", fakultas: "Fakultas Ekonomi", jurusan: "S1 Akuntansi", year: "2026", status: "Mahasiswa", kontak: "instagram: @ssaniawade", salam: "everything you lose is a step you take." },
  { name: "ZULFIAN SYIFAULINNAS", uni: "PIP MAKASSAR", fakultas: "Nautika", jurusan: "Nautika", year: "2023", status: "Mahasiswa", kontak: "085601727407", salam: "Dari smanca untuk indonesia" },
  {
    name: "Muhammad Syafiq Azizi",
    uni: "Universitas Tidar",
    fakultas: "Fakultas Teknik",
    jurusan: "S1 Teknologi Informasi",
    year: "2025",
    status: "Mahasiswa",
    kontak: "Ig: zizilyy_",
    salam:
      "Semangat dalam belajar untuk mengapai univ impian kalian temen temen, jangan lupa juga istirahat yg cukup jangan terlalu memaksakan diri untuk belajar terus menerus karena itu tidak efisien jika tidak diimbangi dengan istirahat yang cukup dan hasilnya nanti tidak akan maksimal",
  },
  {
    name: "Naufal Hanan Nafis",
    uni: "UNY",
    fakultas: "FIKK",
    jurusan: "PJKR",
    year: "2025",
    status: "Mahasiswa",
    kontak: "WA: 085742552012, IG: @naufalhanannafis",
    salam:
      "Apa pun tujuanmu setelah lulus SMA — entah mau gap year dulu, kerja, kedinasan, kuliah, membangun bisnis, menikah, dll — apa pun itu kamu harus bisa bertanggung jawab atas tujuanmu sendiri. Karena yang akan menjalani dan menikmatinya kelak adalah dirimu sendiri, bukan temanmu, gurumu, saudaramu, bahkan orangtuamu. Jangan takut gagal; semisal kamu gagal, teruslah mencoba. Kalau kamu capek, istirahatlah sebentar, lalu setelah kamu pulih lanjutkan lagi sampai kamu berhasil mendapatkan apa yang kamu inginkan. Ingat, kamu masih muda dan jalanmu masih panjang. Enjoy your life. Salam sehat dari saya, Nopal, alumni SMANCA angkatan 25.",
  },
  { name: "Doni Aditiya Priatmoko", uni: "Universitas Gadjah Mada", fakultas: "Sekolah Vokasi", jurusan: "Manajemen dan Penilaian Properti", year: "2025", status: "Mahasiswa", kontak: "instagram: @doniadtya__", salam: "Hidup cuma sekali, tidak bisa diulangi." },
];

// Pin kampus di peta gabus (posisi % ilustratif, bukan skala).
export const CAMPUSES = [
  { key: "UNTIDAR", full: "Universitas Tidar", label: "Untidar", city: "Magelang", x: 44, y: 52, match: ["tidar"] },
  { key: "UGM", full: "Universitas Gadjah Mada", label: "UGM", city: "Yogyakarta", x: 47, y: 74, match: ["gadjah"] },
  { key: "UPNVY", full: 'UPN "Veteran" Yogyakarta', label: "UPNVY", city: "Yogyakarta", x: 39, y: 82, match: ["upnvy"] },
  { key: "UNY", full: "Universitas Negeri Yogyakarta", label: "UNY", city: "Yogyakarta", x: 55, y: 84, match: ["uny"] },
  { key: "UNS", full: "Universitas Sebelas Maret", label: "UNS", city: "Surakarta", x: 63, y: 62, match: ["sebelas maret"] },
  { key: "UNDIP", full: "Universitas Diponegoro", label: "Undip", city: "Semarang", x: 55, y: 24, match: ["diponegoro"] },
  { key: "UNNES", full: "Universitas Negeri Semarang", label: "Unnes", city: "Semarang", x: 45, y: 18, match: ["negeri semarang"] },
  { key: "POLTEKKES", full: "Poltekkes Kemenkes Semarang", label: "Poltekkes", city: "Semarang", x: 64, y: 30, match: ["poltekkes"] },
  { key: "ITS", full: "Institut Teknologi Sepuluh Nopember", label: "ITS", city: "Surabaya", x: 84, y: 40, match: ["its"] },
  { key: "PIP", full: "Politeknik Ilmu Pelayaran Makassar", label: "PIP", city: "Makassar", x: 93, y: 12, match: ["pip makassar"] },
];

export function campusOf(a: Alumnus) {
  const u = a.uni.toLowerCase();
  return CAMPUSES.find((c) => c.match.some((m) => (m === "its" || m === "uny" ? u === m : u.includes(m))))!;
}

export const MENFESS_NORMS = [
  "Ini ruang umum — jaga bahasa dan adab dalam setiap kiriman.",
  "Dilarang: ujaran kebencian/SARA, perundungan, konten pornografi, dan menyebar data pribadi orang lain.",
  "Anonimitas bukan alasan untuk menyakiti orang lain.",
  "Kiriman yang melanggar akan disembunyikan oleh pengurus.",
];

// Endpoint publik yang sudah dipakai halaman asli (anon key, RLS di sisi Supabase).
export const SUPA_URL = "https://jogjkjymlnujckukzeyg.supabase.co";
export const SUPA_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvZ2pranltbG51amNrdWt6ZXlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEyNjEzMDMsImV4cCI6MjEwNjgzNzMwM30.wU-JcYvNGERDYs9-dPndizTSlraNBfwPDwgM7PnIqow";

export const BIOMES = [
  { id: "pelabuhan", name: "Pelabuhan Asal", sea: true },
  { id: "laut", name: "Laut Lepas", sea: true },
  { id: "misi", name: "Laut Dalam", sea: true },
  { id: "rute", name: "Kepulauan Bercabang", sea: true },
  { id: "bekal", name: "Gua Harta", sea: false },
  { id: "kompas", name: "Puncak Kompas", sea: false },
  { id: "navigator", name: "Desa Pemandu", sea: false },
  { id: "menfess", name: "Pulau Terpencil", sea: true },
  { id: "perapian", name: "Perapian Cerita", sea: false },
  { id: "terhubung", name: "Cakrawala", sea: true },
];
