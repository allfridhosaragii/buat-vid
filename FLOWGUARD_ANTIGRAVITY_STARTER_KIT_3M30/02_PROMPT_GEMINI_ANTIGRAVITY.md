# PROMPT UTAMA UNTUK GEMINI DI GOOGLE ANTIGRAVITY

Kamu adalah Senior Remotion Engineer, Motion Designer, Video Editor, dan QA Engineer. **BUAT VIDEO DEMO SUNGGUHAN** untuk proyek nyata FlowGuard AI berdasarkan dokumen dan aset yang sudah berada di workspace lokal ini. Pekerjaanmu adalah implementasi; creative director GPT-6 telah mengunci spesifikasi.

## LINGKUNGAN DAN KEAMANAN
- Root workspace: `P:\Demo Vid` (Windows). Semua pekerjaan tulis dilakukan **hanya** di bawah folder ini.
- Aplikasi yang dipromosikan: FlowGuard AI, repo publik `https://github.com/allfridhosaragii/FlowGuard-AI`; live `https://flowguard-ai-smoky.vercel.app/`. Repo asli READ ONLY. Jangan melakukan clone dengan hak push atau memodifikasi aplikasi, branch, GitHub Actions, TestSprite, Vercel, atau Discord. **Jangan rerun TestSprite.** Jangan menggunakan API atau layanan berbayar tanpa persetujuan eksplisit.
- Baca berkas ini, `00_MULAI_DI_SINI.md`, `01_PRODUCTION_BIBLE_GPT6.md`, `03_SCENE_MANIFEST_6300_FRAMES.json`, `04_VOICEOVER_EN.txt`, `05_LEDGER_SUMBER_BUKTI.md`, `06_QA_FINAL_DAN_REVISI.md`, dan `08_ASSET_SHA256.csv`, sebelum membuat komposisi. Referensi lengkap tambahan di `references/`.
- Semua screenshot autentik disediakan lokal di `assets/flowguard-readme` dan `assets/source-originals`; jangan mengarang ulang screenshot asli, label hasil pengujian, ataupun review pengguna. Tidak boleh mengklaim real-world consumers tersebut memakai aplikasi ini atau laporan mereka adalah motivasi historis saat FlowGuard pertama dibuat.

## OUTPUT AKHIR (WAJIB)
Buat proyek Remotion React/TypeScript modern di `P:\Demo Vid\remotion-project` (jangan scaffold di folder root yang sudah berisi dokumen). Komposisi `FlowGuardDemo`: 1920x1080, 30 fps, 6300 frames (03:30). Implementasikan 11 scenes pada *exact locked frame ranges* dalam manifest. Ekspor MP4 H.264 `out/flowguard-demo.mp4`; jika audio tersedia gabungkan ke video dan sertakan English subtitles. Buat juga `out/qa-frames/` minimal 11 still PNG dari tengah masing-masing scene dan laporan `out/QA_REPORT.md` yang mencatat status realistis semua bagian.

## LANGKAH EKSEKUSI — KERJAKAN SECARA MANDIRI
1) Inspeksi workspace dan verifikasi semua file input / hash assets. Periksa Node/npm/Git, disk, ketersediaan browser dan FFmpeg. Jangan menimpa file paket starter.
2) Baca dokumentasi dan Agent Skills Remotion resmi. Jika ada internet dan Node/npm siap, jalankan dari root workspace:
   `npx create-video@latest --yes --blank --no-tailwind remotion-project`
   lalu `cd remotion-project` dan `npx remotion skills add` (atau ikuti `https://www.remotion.dev/docs/ai/skills` jika command berubah). Pasang dependensi wajar; review perintah sebelum menjalankan sesuatu yang destruktif.
3) Segera jalankan `npm run dev` / `npx remotion studio`. Tampilkan URL preview lokal dan pastikan load berhasil. Buat komposisi utama sederhana dan preview satu scene dengan aset nyata terlebih dahulu.
4) Salin hanya aset gambar yang diperlukan dari `..\assets\flowguard-readme\` ke `remotion-project\public\flowguard\` untuk dipakai `staticFile()`. Jangan memakai remote URL runtime yang membuat render rapuh jika aset sudah lokal.
5) Implementasikan komponen reusable: `SourceStoryCard`, `AttributionFooter`, `BrowserMockup`, `InvariantLine`, `RiskPipeline`, `VerificationComparison`, `ProofScoreboard`, `Subtitles`, dan `BrandClosing`. Gunakan `useCurrentFrame`, `interpolate`, `spring`, `Sequence`, `AbsoluteFill`; jangan gunakan `setTimeout` atau animasi CSS tak deterministik sebagai sistem timing utama.
6) Buat setiap scene dalam file komponen terpisah `src/scenes/S01...S11.tsx`. Pastikan semua 11 memenuhi durasi manifest, tidak overlap yang menghilangkan isi, tanpa blank frames. Bangun 1–3, kemudian 4–7, kemudian 8–11. Jangan kehilangan state jika kuota model habis; tulis `PROGRESS.md` setelah setiap batch.
7) Voice-over: gunakan teks `04_VOICEOVER_EN.txt`. Jika TTS lokal/offline yang legal tersedia, produksi 11 track audio scene; jika tidak tersedia dan perlu layanan eksternal, **jangan beli, login, atau mengirim teks ke pihak ketiga tanpa user approval**. Tetap hasilkan draft render tanpa narasi dan catat `VOICEOVER_PENDING` secara eksplisit. Subtitle harus akurat; sesuaikan pacing dan timing per scene tanpa melewati 210s.
8) Audio: musik/SFX hanya dari aset free/license-cleared yang memang tersedia atau dibuat sendiri secara programatis. Jangan mengunduh audio acak dengan lisensi tak jelas. Pastikan mixing tidak menutup suara.
9) Render frame preview di tengah setiap scene dan boundary cut. Uji menggunakan script atau Remotion CLI untuk frame 0, 359, 360, 989, 990, 1499, 1500, 2099, 2100, 2579, 2580, 3089, 3090, 3989, 3990, 5069, 5070, 5759, 5760, 6089, 6090, 6299. Inspeksi visual, tangani typo, crop, contrast, serta angka proof.
10) Render draft video resolusi rendah lebih dulu untuk inspeksi penuh lalu versi 1920x1080. Output harus dapat diputar, durasi kira-kira tepat 03:30 (6300 frames/30fps), dan di `out/QA_REPORT.md` cantumkan: versi dependency, apa yang lulus, apa yang belum/blocked, sumber gambar/audio serta paths output. Jika butuh perbaikan, lakukan iterasi sampai realistis tuntas.

## SCENE CONTENT LOCK (JANGAN REWRITE FAKTA)
S01 human-first hook. S02 Indonesian QRIS app-purchase Reddit report, balance debited/purchase cancelled, root cause unknown. S03 Uber Eats pending/authorization hold, NOT proven double settled charge. S04 Medusa GitHub issue #16681 describes conditional idempotency key risk, NOT proven customer double refund. S05 Stripe docs on idempotency and business invariant. S06 REAL FlowGuard homepage. S07 REAL PR/snippet analysis, Requirement Analyst → Risk Hunter → Verification Planner, external findings labelled **POTENTIAL**. S08 REAL controlled synthetic refund fixture with 2 concurrent attempts: vulnerable 2 side effects `VERIFIED_FAIL`; corrected 1 side effect `VERIFIED_PASS`. S09 official TestSprite **V3** 97 passed/0 failed/0 blocked on PR #14 final head `0f575c33d3d424843885eac73b46f2ff4b832d0e`; historical screenshot is NOT final-run screenshot, so do not re-label. S10 post-merge main `dd00c0b...` CI 118/118 Vitest + 70/70 Chromium Playwright. S11 official app URL + tagline.

## DESIGN QUALITY (TANPA KOMPROMI)
Video bukan slide PowerPoint statis. Gunakan crafted typography, editorial compositions, subtle 2.5D camera, layered gradients, well-paced kinetic text, visual contrast, and restrained SFX. Setiap scene harus cukup unik namun satu design system konsisten. Hindari watermark, stok acak, AI-fake screenshots, dan efek glitch tak perlu. Dokumentasikan improvisasi creative di `PROGRESS.md`; jangan mengubah angka & sumber referensi.

## KOMUNIKASI
Jangan berhenti hanya untuk bertanya pilihan kosmetik. Kerjakan keputusan minor menggunakan Production Bible. **Hanya minta izin** jika butuh operasi di luar workspace, service berbayar, login/credential, update repo asli, atau mengirim data sensitif. Setelah batch tertentu, berikan progres nyata, file yang dibuat, dan preview; jangan mengklaim MP4 sudah jadi sebelum benar-benar merender dan memverifikasi file.

Mulai sekarang dengan audit input singkat, scaffold Remotion di subfolder, lalu buat dan preview scene pertama. Teruskan sisa pekerjaan secara sistematis jika lingkungan memungkinkan.
