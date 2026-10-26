# RISET TEKNIS DAN RANCANGAN PRODUKSI — REMOTION x FLOWGUARD AI

Tanggal riset: 26 Oktober 2026 (WIB)
Jenis pekerjaan: riset dan rancangan, **bukan pembuatan video final, bukan submission**.
Batas operasi: **READ-ONLY untuk FlowGuard AI, GitHub, TestSprite, Vercel, Discord**. Semua video asset/proyek produksi kelak dibangun pada direktori terpisah.

## 1. Kesimpulan utama

Remotion cocok untuk membuat video demo FlowGuard AI yang ditulis dan dianimasikan sepenuhnya oleh agen AI, tetapi **bukan model generatif text-to-video**. Remotion menyediakan runtime React/TypeScript, frame timeline, media, transisi, renderer ke MP4, sementara agen menyiapkan desain, storyboard, scene code, subtitle, mix audio, dan ekspor.

Remotion adalah **source-available, bukan perangkat lunak open-source dengan lisensi OSI**. Individu dan badan usaha kecil tertentu dapat menggunakan lisensi gratis termasuk video komersial menurut ketentuan; badan usaha yang lebih besar perlu mengecek lisensi perusahaan. Repo resmi: https://github.com/remotion-dev/remotion ; syarat: https://www.remotion.dev/docs/license/pricing ; FAQ: https://www.remotion.dev/docs/license/faq.

Riset mengenai klaim “viral TikTok”: ada tren publik penggunaan coding agent untuk membuat video Remotion, beserta galeri, demo, dan artikel yang melaporkan karya viral di X, namun **tidak dapat diverifikasi bahwa setiap unggahan TikTok atau angka views tertentu yang disebut di TikTok berkaitan dengan repo resmi yang sama**. Jangan menyamakan tren dengan bukti kualitas otomatis.

## 2. Apa yang dilakukan oleh siapa

| Lapisan | Peran | Output | Catatan |
|---|---|---|---|
| Agen AI / coding agent | Baca sumber, storyboard, code, QA | TSX scenes, captions, timeline | Tidak otomatis selalu benar |
| Remotion | Jalankan scene React per frame | urutan frame/komposisi | Deterministic bila input stabil |
| Chromium + renderer + FFmpeg | Render, encode dan mux | MP4 H.264/AAC | Butuh CPU/RAM/penyimpanan |
| Aset bukti asli FlowGuard | Bukti UI dan hasil tes | screenshot, log, URLs | Tidak boleh diubah untuk mengarang keberhasilan |
| Narasi TTS opsional | Voice AI | WAV/MP3 | Dapat butuh API & biaya; lisensi voice |
| Musik/SFX | Sound design | audio tracks | Harus berlisensi sesuai penggunaan |
| QA otomatis + inspeksi frame | Validasi tulisan, frame, audio | checklist & log | Tetap kritis untuk typo, cropping, timing |

Arsitektur: `[GitHub/ZIP handoff/readme] -> [provenance & claim ledger] -> [script + storyboard] -> [Remotion project terpisah] -> [video assets + captions + audio] -> [draft render] -> [QA visual/audio + claim checking] -> [final MP4] -> [upload video terpisah, copy URL ke Discord]`.

## 3. Sumber aset nyata siap pakai

Berasal dari handoff ZIP yang sudah ada dan file media yang juga terdapat dalam GitHub tree `main`; jalur historis `.../docs/assets/readme/`:
- `homepage-desktop.webp`: 1600×900, asli halaman depan.
- `homepage-mobile.webp`: halaman mobile asli.
- `analysis-workspace.webp`: UI input analisis.
- `analysis-risk-results.webp`: 1600×900, output risiko.
- `verification-lab-overview.webp`: kontrol lab.
- `lab-vulnerable-evidence.webp`: 1600×900, **2** refund side effects, `VERIFIED_FAIL` pada **first-party synthetic fixture**.
- `lab-corrected-evidence.webp`: 1600×900, **1** side effect, `VERIFIED_PASS` pada fixture terkoreksi.
- `before-after-authentic.webp`: 2520×1160, komposit asli kedua kondisi lab.
- `architecture-invariants.webp`: arsitektur/prinsip.
- `github-pr14-checks.webp`, `github-regression-actions.webp`: bukti pada saat screenshot historis.
- `testsprite-97-passed-overview.webp`: **bukti historis pada commit terdahulu**. JANGAN klaim screenshot ini dari **PR head final** tanpa label historis.
- `docs/assets/readme/PROVENANCE.md`: membedakan screenshot asli, komposit, dan konsep yang digenerasi AI.
- `source-originals/*.png`: 13 PNG sumber tak diubah.

**Bukti final yang benar untuk teks animasi:** PR #14 `0f575c33d3d424843885eac73b46f2ff4b832d0e` benar-benar 97/97 pada official TestSprite V3, 0 fail, 0 blocked. Bot comment & status: https://github.com/allfridhosaragii/FlowGuard-AI/pull/14 ; vendor run: https://www.testsprite.com/dashboard-v3/o/28a6d5ec-2a40-54eb-9bf6-0c87db224fde/projects/570eab99-607a-49fa-96b2-fe5ef724f2d9/execution/901e7027-1c4a-477f-adc9-ca0d17b16635 . `main` postmerge `dd00c0b0a64712da5137c454927ef9c50cebd8be` memiliki **Git tree SHA identik**; itu tidak berarti vendor run secara terpisah terjadi di squash commit `main`.

Tes setelah merge: 118/118 Vitest & 70/70 Playwright Chromium, CI https://github.com/allfridhosaragii/FlowGuard-AI/actions/runs/40273469302 . Vercel deployment status success, https://flowguard-ai-smoky.vercel.app/ ; pemilik sudah menguji website browser biasa serta incognito tanpa login. Historical fresh anonymous 5 endpoints returned HTTP 200 on Oct 24; lebih baru main Vercel success but no fresh independent browser read via model session.

## 4. Akurasi narasi — larangan klaim

- Jangan mengubah `POTENTIAL` pada analisis PR eksternal menjadi `VERIFIED_FAIL` seolah kode PR eksternal telah dieksekusi.
- Jangan mengklaim bahwa lab mengakses bank, Stripe, rekening, backend production, pembayaran sungguhan; refund lab menggunakan fixtures sintetik internal.
- Jangan menyebut neural AI selalu aktif: aplikasi fallback jujur ke `deterministic-heuristic-v1`, neural opt-in jika konfigurasi memungkinkan.
- Jangan menggunakan ilustrasi AI bergaya screenshot sebagai bukti tes asli. Boleh ilustrasi artistik dengan label **Conceptual illustration**.
- Jangan mengklaim TestSprite Season 4 menggunakan suite vendor *V4*: **Season 4 adalah edisi hackathon, bukti pengujian menggunakan TestSprite V3**.
- Jangan menempel hasil yang bukan eksekusi terbaru pada layar fake vendor dashboard; pakai screenshot asli historis berlabel atau motion-text yang mengutip URL bukti final.
- Jangan menyebut browser compatibility 21/21 sebagai pengujian 21 kasus pada latest SHA jika catatan hanya historis.
- Jangan klaim 0 risiko security: production npm audit high-critical green namun dev dependency punya 2 critical & 4 moderate advisory, Semgrep 30 warning, ZAP warnings. Tak perlu membawa detail itu ke video promo pendek; cukup jangan klaim “100% secure”.
- Jangan menyebut URL Discord/submit sebagai telah terkirim jika belum.

## 5. Konsep visual disarankan

Tema: *Cinematic evidence-driven engineering*. Ratio master 16:9 (1920×1080, 30fps), durasi ideal sekitar 100–120 detik. Buat teaser social kedua 9:16 (1080×1920, 30–40 detik) dengan komposisi khusus supaya UI tetap terbaca.

Warna mengikuti situs/referensi screenshot asli, tidak diganti sesuka hati. Tampilan: dasar dark navy/hitam, aksen cyan/teal dan indikator red/green hanya ketika menampilkan FAIL/PASS secara sah. Gunakan grid tipis, panel floating, parallax 2.5D ringan, scroll/zoom atas screenshot, pulse pada idempotency key, dan animasi transaction side-effect counter. 3D kompleks dan efek blur intens dikurangi agar screenshot tetap mudah dibaca.

Audio: voice-over bahasa Inggris (juri lintas negara), teks layar ringkas bahasa Inggris dan subtitle rapi. Musik elektronik/ambient low volume dengan lisensi jelas; ducking pada voice-over. No narrator avatar necessary. Judul awal tidak lebih dari 7 kata per panel besar. Jangan memakai microtext hasil screenshot untuk bukti; crop dan highlight region angka penting.

## 6. Storyboard master ±112 detik

| Timecode | Cerita | Gambar | Teks on-screen | Validasi |
|---|---|---|---|---|
| 00:00–00:08 | Hook risiko nyata | layar gelap, dua transaksi bersaing | `One request. Two side effects.` | Ajakan hipotetis, bukan kasus bank asli |
| 00:08–00:20 | Masalah | parallel call graph dan business invariant | `Code can pass checks — and still violate a rule.` | Hindari klaim semua tools gagal |
| 00:20–00:31 | Perkenalan | homepage-desktop.webp + animasi kamera | `FlowGuard AI` / `Evidence before verdicts` | screenshot asli |
| 00:31–00:48 | Workflow analisis | analysis-workspace -> analysis-risk-results | `Requirement Analyst → Risk Hunter → Verification Planner` / `POTENTIAL` | tidak melakukan eksekusi PR asing |
| 00:48–01:12 | Inti demonstasi | lab asli vulnerable, event parallel, FAIL | `2 concurrent attempts → 2 side effects` / `VERIFIED_FAIL` | synthetic fixture first-party |
| 01:12–01:28 | Fix before/after | lab corrected, split-screen, PASS | `Same invariant. Corrected fixture. 1 side effect.` | synthetic fixture first-party |
| 01:28–01:42 | Bukti otomatis | GitHub PR #14 + logo TestSprite + ticker | `TestSprite V3: 97 / 97 passed · 0 blocked` | final SHA 0f575c3 only |
| 01:42–01:49 | CI discipline | check list GitHub actions | `118 / 118 Vitest · 70 / 70 Playwright` | CI main run 40273469302 |
| 01:49–01:52 | Outro | brand + URL, quiet end | `Don't just review code. Prove the behavior.` | call-to-action URL publik |

Catatan: storyboard dapat dipadatkan menjadi 90–100s setelah TTS pacing dan proof readability.

## 7. Narasi voice-over kerja — sekitar 170 kata

> Code can look correct, while a business rule still breaks under concurrency.
>
> Imagine two refund requests racing with the same idempotency key. The rule is simple: only one side effect may be committed.
>
> Meet FlowGuard AI: a developer tool that turns business requirements and code changes into structured risk hypotheses and verification plans.
>
> Its three analysis stages identify invariants, highlight potential failure paths, and suggest assertions. Potential findings are not presented as executed proof.
>
> In our controlled verification lab, we can test a deliberately vulnerable refund fixture. Two concurrent attempts produce two committed side effects. The invariant fails.
>
> Now we switch to the corrected fixture. Under the same rule, only one side effect is committed. The controlled test passes.
>
> The build-and-test loop is genuine too. TestSprite automatically checked our final pull request. All ninety-seven checks passed, with no failures or blocked tests.
>
> Post-merge verification also passed one hundred eighteen unit tests and seventy browser tests.
>
> FlowGuard AI. Evidence before verdicts. Don't just review code. Prove the behavior.

Periksa hasil TTS dan sesuaikan scene mengikuti durasi aktual, bukan mengubah tempo suara secara ekstrem.

## 8. Bagaimana Remotion bekerja

`Composition` mendefinisikan resolusi/fps/durasi; `useCurrentFrame` memberikan nomor frame; `spring`/`interpolate` menggerakkan UI; `Sequence` mengatur waktu, `TransitionSeries` menggabungkan adegan; `staticFile` merujuk aset lokal; `@remotion/captions` dapat membantu subtitle; audio tergantung format dan paket media yang digunakan. Bisa dirender H.264 MP4, audio AAC, dan berbagai format lain; untuk kompatibilitas juri pakai H.264/AAC.

Contoh inisialisasi **di direktori terpisah, BUKAN repo FlowGuard**:

```bash
npx create-video@latest --yes --blank flowguard-video-demo
cd flowguard-video-demo
npx remotion skills add
npm run dev
```

Jika composition diberi ID `FlowGuardDemo`, ekspor setelah kode dan aset siap:

```bash
npx remotion render FlowGuardDemo out/flowguard-demo.mp4 --codec h264 --crf 18
```

Pin versi dependency aktual, terutama `remotion` dan `@remotion/*` supaya kompatibel. Rendering video 112s x 30fps sekitar **3360 frames**; jumlah ini hasil perhitungan, bukan benchmark waktu render. Estimasi waktu, biaya CPU, penggunaan RAM, ukuran MP4 tidak dapat dipastikan tanpa pengujian mesin target.

## 9. Skills & repos yang patut diselidiki

**Prioritas aman:** `remotion-dev/skills` (official). Skill tersedia termasuk `remotion-best-practices`, `remotion-create`, `remotion-render`, `remotion-captions`, `remotion-markup`, `remotion-studio`, `remotion-docs`. https://www.remotion.dev/docs/ai/skills

**Lainnya:**
- `syklayou-glitch/video-shotcraft`: 152 shot recipe cards dan 209 motion previews yang diklaim repo; menarik untuk product promo tetapi periksa dependency dan lisensinya sebelum memasang: https://github.com/syklayou-glitch/video-shotcraft
- `sub-level/marketing-videos`: contoh pipeline coding agent Remotion + AI footage via Higgsfield MCP: https://github.com/sub-level/marketing-videos . Butuh layanan model video dan mungkin biaya; untuk demo aplikasi nyata justru screenshot asli lebih efektif.
- `Remocn/remocn-collections`: galeri one-prompt motion design agent: https://github.com/Remocn/remocn-collections . Untuk inspirasi, bukan keharusan.
- `haidrrrry/claude-remotion-skill`: community skill untuk iterasi frame-render-review: https://github.com/haidrrrry/claude-remotion-skill . Evaluasi keamanannya, tidak sembarangan eksekusi shell dari repo tak dikenal.
- Official `Prompt to Video` template menggunakan OpenAI dan ElevenLabs: https://www.remotion.dev/templates/prompt-to-video . Bukan prasyarat; mungkin butuh API berbayar.

**Trend**: artikel pihak ketiga melaporkan video Remotion + Claude viral di X, sedangkan sumber galeri contoh juga ada. Jangan menganggap angka views TikTok sudah terbukti. https://huuush.com/en/blog/development-automation/claude-code-remotion-tv-opening-video ; https://motion-hunt.com/tools/remotion

## 10. Dua opsi proses produksi

### A. Bukti nyata + semua animasi dibuat AI (REKOMENDASI)

Gunakan screenshot asli + motion graphics Remotion + voice AI + data CI/TestSprite yang di-hardcode dari tautan resmi yang diverifikasi. Hasil bisa sepenuhnya disunting AI sambil tetap mempertahankan kredibilitas data; label footage UI sebagai layar asli/screenshot, bukan simulasi interaksi end-to-end.

### B. AI video generatif sinematik sebagai intro

Gunakan image/video model hanya untuk visual abstrak seperti garis transaksional atau sirkuit, bukan merekonstruksi angka tes, UI, log, atau checkout sungguhan. Kelemahan: biaya API, konsistensi merek, teks salah eja, artifact, sulit dicek. Cocok untuk 3–5 detik hook saja.

## 11. QA yang wajib sebelum submit

Bukti: verifikasi teks PR #14 vendor final; cek semua angka TestSprite & CI; cek narasi `synthetic first-party fixture`. Tampilan: frame representative setiap scene dan transisi; periksa cropping, logo, keterbacaan layar ponsel, tidak ada black frame atau whitespace tak sengaja. Audio: tidak ada clipping, subtitle timing pas, volume narasi jelas, musik tidak mengganggu. Teknis: `ffprobe` cek 1920x1080, H264/AAC, fps, durasi; putar MP4 utuh; nama file jelas. Privasi: sensor token API, email/handle bila tidak perlu, browser address bar sensitif, repo private. Hak cipta: musik, suara, font, gambar pihak ketiga harus punya lisensi. Jangan memasukkan data X/Reddit bersifat pribadi atau mengubah makna sumber.

Jika video menunjukkan vendor dashboard lama, label **historical run**, atau lebih baik buat layar typography yang mengutip tautan final.

## 12. Distribusi tanpa menyentuh repo

Demo video **OPTIONAL, not scored but judges watch it** menurut halaman resmi event: https://www.testsprite.com/hackathon-s4 . Jangan sampai produksi video menunda submission melewati batas. Video dapat diunggah sebagai unlisted YouTube atau penyedia publik yang dapat diakses tanpa akun; cek akses incognito. Link video di Discord bersama PR, situs, akun TestSprite. Tidak perlu commit/push/edit situs/redeploy. Screenshot atau GIF/video jangan diubah untuk menyembunyikan kegagalan asli. Submission resmi tetap oleh pengguna.

Deadline: situs TestSprite tampak memuat 22 Oct/kanal historis, sedangkan screenshot pengumuman Discord panitia pada 22 Oct dalam arsip pengguna mencatat perpanjangan **27 Oktober 2026 pukul 13.59 WIB** dan kanal `#hackathon-s4-submissions`. Pengumuman pinned terbaru Discord tetap sumber prioritas. Target pribadi pengguna 27 Oct sebelum 10.00 WIB.

## 13. Biaya dan lisensi

Untuk individu yang memenuhi lisensi, Remotion sendiri **gratis** untuk membuat video, termasuk komersial sesuai ketentuan. Beban berpotensi berasal dari AI coding agent/LLM, TTS berbayar, musik/sound packs, image/video generator, rendering cloud, penyimpanan dan transfer. Komputer lokal yang punya Node, Chromium, FFmpeg dapat menjadi render host; **ketiganya tersedia dalam runtime ini saat riset**, tetapi modul Remotion dan koneksi instalasi belum diuji, sehingga keberhasilan render belum dapat dijanjikan sebelum tes. Tidak ada kewajiban penggunaan cloud/Sora/Runway. Hati-hati lisensi third-party assets dan paket Remotion versi berbeda.

## 14. Pemisahan dari proyek asli

Tidak modifikasi `allfridhosaragii/FlowGuard-AI`. Buat proyek baru `/mnt/data/flowguard-video-demo/` atau proyek video tersendiri lokal. Salin hanya media yang diperlukan, pertahankan metadata asal file dan daftar SHA. Jangan jalankan `npm install`, `npx create-video`, atau PR di repo aplikasi production. Jangan jalankan TestSprite. Jangan panggil endpoint POST live yang bisa menghasilkan state nyata tanpa meninjau. Semua pengujian video pada render project baru.

## 15. Kesimpulan eksekusi

**Video terbaik adalah 100% hasil editing & animasi AI dari aset bukti asli**, bukan 100% visual halusinatif. Dua output disarankan: film juri 100–120s, H264 MP4 16:9, narasi Inggris + caption; teaser 30–40s 9:16 khusus TikTok bila diperlukan. Untuk hackathon, fokus bukti `POTENTIAL` vs `VERIFIED_FAIL/PASS`, dua vs satu refund fixture, serta final TestSprite 97/97 pada PR #14. Film ini adalah opsional sehingga priority submission tetap lebih tinggi daripada perfeksionisme visual.

## 16. Referensi resmi

- https://www.remotion.dev/docs/
- https://www.remotion.dev/docs/ai
- https://www.remotion.dev/docs/ai/skills
- https://www.remotion.dev/docs/ai/coding-agents
- https://www.remotion.dev/docs/render
- https://www.remotion.dev/docs/parameterized-rendering
- https://www.remotion.dev/docs/encoding
- https://www.remotion.dev/docs/transitions/
- https://www.remotion.dev/docs/ai/plugins
- https://www.remotion.dev/docs/license/pricing
- https://www.remotion.dev/docs/license/faq
- https://github.com/remotion-dev/remotion/blob/main/LICENSE.md
- https://www.remotion.dev/templates/prompt-to-video
- https://www.testsprite.com/hackathon-s4
- https://github.com/allfridhosaragii/FlowGuard-AI
- https://github.com/allfridhosaragii/FlowGuard-AI/pull/14
