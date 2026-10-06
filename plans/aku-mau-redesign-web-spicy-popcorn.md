# Sambandha × Wanderer — "The Living Map"

## Context
Redesign `src/imports/sambandha-live.html` (alumni hub SMA N 1 Candimulyo) jadi satu peta dunia hidup ala RPG yang dijelajahi lewat scroll. Struktur boleh dikemas ulang, tapi **tidak ada info hilang** (24 alumni, 7 FAQ, detail beasiswa, jalur, jadwal SNPMB, tes, tips, tautan). Aturan tetap: tanpa email palsu, tanpa link grup WA publik, tanpa deploy.

## Sistem visual
Palet: Navy #0B1D33, Royal #1B4F9C, Azure #2E9BD6, Coral #FF6B8A, Kuning #FFD93D, Krem #F5E6C8, Putih. Font: Montserrat 800 / Inter / Caveat. Semua ilustrasi SVG inline original, gaya kartun 3D chunky (gradien volume, bayangan berlapis). Anotasi Caveat di banyak tempat.

## Arsitektur
- `src/data.ts` — semua konten diekstrak dari HTML (baca penuh termasuk `<script>`).
- `src/world/` — komponen: `Sky` (fixed background, gradien berubah per scroll: pagi→senja→malam berbintang→sunrise), `Biome*` per lokasi, `Wanderer`, `Passport`, `Cursor`, `Loader`, ilustrasi SVG (`art.tsx`).
- `src/App.tsx` — rangkai semua; `src/index.css` — fonts, `@theme`, keyframes.
- Lib: motion (`useScroll/useTransform/useInView` dari `motion/react`), lucide-react, sonner, canvas-confetti, Radix Accordion/Dialog. Install yang belum ada.

## Bioma (berurutan, transisi gradien mulus, garis rute putus-putus menyala sepanjang halaman)
1. **Pelabuhan Asal (hero)** — nav basecamp (Misi/Rute · logo jangkar-kompas + koordinat · Navigator/Terhubung, blur navy saat scroll), "SAMBANDHA" raksasa terlapisi kapal, mercusuar, ombak 3 lapis, camar, parallax, CTA "MULAI BERLAYAR"; info sekolah sebagai kartu paspor.
2. **Laut Lepas (stats)** — 4 stempel paspor mengambang (24 / 15+ / 4 / Est. 1995).
3. **Laut Dalam (#misi)** — efek gelombang saat masuk, god rays, gelembung, ikan, koral, peti tersembunyi #1, 3 paragraf Apa itu Sambandha.
4. **Kepulauan Bercabang (rute)** — 4 pulau = SNBP/SNBT/Mandiri/Swasta & Kedinasan (klik → Dialog detail asli + jadwal SNPMB & **countdown**). Kuis 3 pertanyaan "Pilih bekalmu" → pulau rekomendasi menyala. Hujan rintik di bioma ini.
5. **Gua Harta (bekal)** — gua kristal; peti bercahaya, klik buka → tiket perforasi KIP Kuliah, Unggulan, TELADAN, APERTI, PTS (detail lengkap). Peti tersembunyi #2.
6. **Puncak Kompas** — parallax gunung + observatorium; kompas kuningan besar jarum ikut mouse; klik 4 arah = 4 "ramalan perjalanan" (dipetakan ke RIASEC, menyarankan tes); 4 boarding pass tes + tips memilih jurusan sebagai halaman jurnal.
7. **Desa Pemandu (navigator)** — peta gabus: pin kampus, klik → zoom/filter cluster alumni dengan benang merah animasi; search + filter; 24 kartu dengan stiker koper + "Salin Kontak" (toast). Rekomendasi belajar & tautan resmi sebagai papan pengumuman desa.
8. **Pulau Terpencil (#menfess)** — botol mengambang (float), klik = buka surat; kirim → botol dihanyutkan; feed gulungan (state lokal).
9. **Perapian Cerita (FAQ)** — malam, api unggun, kunang-kunang, Accordion 7 item lentera. Peti tersembunyi #3.
10. **Cakrawala (#terhubung + footer)** — sunrise, share WhatsApp (`wa.me/?text=`), ajakan form alumni, "© 2026 Sambandha SMANCA · vBeta", koordinat, "to be continued…".

## Sistem global
- **Wanderer**: siluet bertopi+ransel di rel kiri, posisi = scroll progress; perahu di bioma laut, jalan kaki di darat.
- **Paspor digital** (kanan bawah): stempel "DUK!" per bioma dikunjungi (useInView), panel lihat semua lokasi.
- **Odometer** "X km berlayar". **3 peti tersembunyi** → konfeti + pesan rahasia alumni.
- **Kursor kompas** (desktop, pointer:fine) jarum ke arah gerak. **Loader** kapal ≤2 dtk.
- `useReducedMotion`: matikan parallax, partikel, kursor custom, loader.
- Responsive: ilustrasi diskalakan, kartu 1/2/4 kolom, pulau & peta gabus jadi grid/stack di mobile, wanderer jadi bar tipis bawah.

## Verifikasi
`pnpm build` lulus; cek preview: semua anchor, search/filter/salin, countdown, kuis, peti, paspor, accordion, menfess, share; mobile 390px; reduced-motion.
