# Raksa Product Experience System (RPX)

> **Technology makes Raksa possible. Experience makes Raksa valuable.**

---

# Part I — Foundation

## 1. Introduction

Raksa bukan hanya kumpulan fitur produktivitas.

Raksa adalah AI Workspace Platform yang dirancang untuk membantu pengguna memahami pekerjaan, menjaga konteks, menghubungkan pengetahuan, dan mengambil keputusan dengan lebih baik.

Selama Phase 1 hingga Phase 7, pengembangan Raksa berfokus pada pembangunan fondasi teknis yang memungkinkan AI, Workspace, Search, Knowledge Management, Collaboration, dan sistem internal bekerja sebagai satu kesatuan.

Namun kemampuan teknis tidak secara otomatis menghasilkan pengalaman pengguna yang baik.

Pengguna tidak merasakan Event Bus, CQRS, Projection, maupun AI Context Builder.

Yang mereka rasakan adalah bagaimana seluruh kemampuan tersebut hadir sebagai pengalaman yang sederhana, konsisten, dan membantu mereka menyelesaikan pekerjaan.

Raksa Product Experience System (RPX) dibangun untuk menjembatani kesenjangan tersebut.

RPX mendefinisikan bagaimana identitas produk diterjemahkan menjadi bahasa visual, pola interaksi, pengalaman AI, serta prinsip desain yang konsisten di seluruh platform Raksa.

---

## 2. Purpose of RPX

RPX memiliki satu tujuan utama:

> Menerjemahkan Product Vision menjadi pengalaman produk yang konsisten.

Dokumen ini menjadi acuan bersama bagi seluruh disiplin yang terlibat dalam pengembangan Raksa, termasuk Product, UX, UI, Frontend, Backend, AI Engineering, dan Quality Assurance.

RPX tidak mendefinisikan implementasi teknis maupun detail visual seperti warna, ukuran, atau komponen.

Sebaliknya, RPX menetapkan prinsip-prinsip yang harus menjadi dasar bagi setiap keputusan desain dan implementasi di masa depan.

Dengan demikian, identitas Raksa dapat tetap terjaga meskipun teknologi, platform, maupun tampilan visual terus berkembang.

---

## 3. Relationship with Product Vision

RPX bukan dokumen yang berdiri sendiri.

RPX merupakan kelanjutan dari empat dokumen fondasi produk yang telah disusun sebelumnya.

```
Product Evolution
        ↓
Product Definition
        ↓
User Persona
        ↓
Experience Vision
        ↓
Product Experience System (RPX)
```

Hubungan tersebut membentuk satu rantai keputusan yang utuh.

- Product Evolution menjelaskan mengapa Raksa berevolusi.
- Product Definition mendefinisikan apa itu Raksa.
- User Persona menjelaskan siapa pengguna Raksa dan masalah yang dihadapi.
- Experience Vision menjelaskan pengalaman yang ingin diberikan kepada pengguna.
- RPX menerjemahkan pengalaman tersebut menjadi bahasa produk yang dapat diwujudkan melalui desain dan implementasi.

Setiap keputusan mengenai pengalaman pengguna harus dapat ditelusuri kembali ke rantai tersebut.

---

## 4. Experience Translation

Experience Vision mendefinisikan pengalaman yang ingin dirasakan pengguna.

RPX menerjemahkan pengalaman tersebut menjadi arah bagi seluruh keputusan desain.

Sebagai contoh:

| Experience Vision | Product Experience Direction |
|-------------------|------------------------------|
| Calm | Mengurangi gangguan visual, memperjelas hierarki informasi, dan menyajikan hanya informasi yang relevan. |
| Aware | Memberikan ringkasan kondisi workspace sehingga pengguna memahami apa yang terjadi tanpa harus mencarinya. |
| Connected | Menampilkan hubungan antar informasi, aktivitas, proyek, dan pengetahuan sebagai satu konteks yang utuh. |
| Supportive | Menghadirkan AI sebagai pendamping yang membantu memahami, bukan mengambil alih keputusan pengguna. |
| Trustworthy | Menjelaskan alasan di balik setiap rekomendasi AI serta menjaga transparansi terhadap sumber informasi. |

Dengan pendekatan tersebut, setiap keputusan visual maupun interaksi selalu memiliki dasar yang berasal dari Experience Vision.

RPX memastikan bahwa pengalaman Raksa tidak dibangun berdasarkan tren desain atau preferensi visual semata, tetapi berdasarkan identitas produk yang telah didefinisikan sebelumnya.

# Part II — Product Language

## 5. Product Personality

Raksa dirancang sebagai AI Workspace yang membantu pengguna berpikir, memahami, dan mengambil keputusan dengan lebih baik.

Oleh karena itu, setiap pengalaman yang diberikan Raksa harus mencerminkan karakter produk yang konsisten.

Raksa memiliki enam karakter utama.

### Calm

Raksa menghadirkan lingkungan kerja yang tenang.

Informasi disusun dengan hierarki yang jelas sehingga pengguna dapat fokus pada hal yang paling penting tanpa terdistraksi oleh elemen visual yang tidak diperlukan.

---

### Professional

Raksa menggunakan bahasa, visual, dan interaksi yang profesional.

Setiap elemen dirancang untuk mendukung pekerjaan nyata, bukan sekadar memberikan kesan menarik secara visual.

---

### Reliable

Raksa harus memberikan rasa percaya.

Pengguna dapat memahami kondisi workspace, menelusuri informasi, dan memverifikasi rekomendasi AI dengan mudah.

---

### Intelligent

Kecerdasan Raksa diwujudkan melalui pemahaman konteks, bukan melalui banyaknya fitur AI.

AI membantu ketika dibutuhkan, memahami hubungan antar informasi, dan memberikan rekomendasi yang relevan.

---

### Helpful

Raksa hadir untuk membantu pengguna menyelesaikan pekerjaan.

Setiap rekomendasi, ringkasan, maupun insight harus memberikan nilai nyata dan membantu pengguna bergerak menuju keputusan berikutnya.

---

### Focused

Raksa membantu pengguna mempertahankan fokus.

Informasi, navigasi, dan AI diarahkan untuk mengurangi context switching serta menjaga alur kerja tetap berjalan.

---

## 6. Experience Rules

Seluruh pengalaman di dalam Raksa harus mengikuti aturan berikut.

### Context First

Setiap informasi harus disajikan bersama konteksnya.

Pengguna tidak hanya melihat data, tetapi juga memahami hubungan antar informasi.

---

### Information Before Navigation

Tujuan utama pengguna adalah memahami informasi.

Navigasi hanya menjadi sarana untuk mencapai pemahaman tersebut.

---

### AI Supports, Humans Decide

AI memberikan insight, rekomendasi, dan penjelasan.

Keputusan tetap berada di tangan pengguna.

---

### Consistency Builds Trust

Perilaku antarmuka harus konsisten di seluruh modul.

Pengalaman yang dapat diprediksi membangun kepercayaan terhadap produk.

---

### Progressive Disclosure

Informasi ditampilkan secara bertahap.

Raksa hanya menampilkan detail ketika benar-benar diperlukan sehingga beban kognitif pengguna tetap rendah.

---

### Every Screen Has a Purpose

Setiap halaman harus membantu pengguna menjawab pertanyaan atau menyelesaikan pekerjaan tertentu.

Tidak ada halaman yang hanya berfungsi sebagai kumpulan fitur.

---

## 7. Visual Language

Bahasa visual Raksa bertujuan membantu pengguna memahami informasi dengan cepat dan nyaman.

Visual bukan sekadar elemen estetika, tetapi sarana komunikasi.

Visual Raksa harus memiliki karakter sebagai berikut.

- Fokus pada keterbacaan.
- Hierarki informasi yang jelas.
- Kepadatan informasi yang seimbang.
- Konsisten di seluruh workspace.
- Mengurangi gangguan visual.
- Menggunakan aksen hanya untuk menyoroti informasi penting.

Setiap keputusan visual harus memperkuat pengalaman pengguna, bukan mengalihkan perhatian mereka.

---

## 8. Interaction Language

Interaksi di dalam Raksa harus terasa alami dan dapat diprediksi.

Pengguna tidak perlu mempelajari ulang pola interaksi ketika berpindah antar modul.

Interaksi Raksa mengikuti prinsip berikut.

- Predictable
- Contextual
- Efficient
- Forgiving
- Discoverable

Raksa selalu memberikan umpan balik yang jelas terhadap tindakan pengguna dan membantu mereka memahami apa yang sedang terjadi.

---

## 9. AI Language

AI merupakan bagian dari workspace, bukan fitur yang berdiri sendiri.

AI selalu hadir sebagai pendamping yang memahami konteks pekerjaan pengguna.

AI di dalam Raksa harus:

- memahami konteks sebelum memberikan jawaban;
- menjelaskan alasan di balik setiap rekomendasi;
- memberikan alternatif ketika memungkinkan;
- menggunakan bahasa yang jelas dan mudah dipahami;
- menjaga transparansi terhadap sumber informasi.

AI tidak mengambil alih pekerjaan pengguna.

AI memperkuat kemampuan pengguna dalam memahami, merencanakan, dan mengambil keputusan.

---

## 10. Workspace Language

Workspace merupakan pusat pengalaman Raksa.

Seluruh modul harus terasa sebagai bagian dari satu workspace yang saling terhubung.

Workspace Raksa memiliki karakter berikut.

- Selalu memberikan orientasi kepada pengguna.
- Menampilkan kondisi workspace secara ringkas.
- Menghubungkan proyek, tugas, pengetahuan, aktivitas, dan AI.
- Memudahkan pengguna melanjutkan pekerjaan tanpa kehilangan konteks.

Pengguna tidak seharusnya merasa berpindah di antara banyak aplikasi.

Mereka seharusnya merasa bekerja di dalam satu workspace yang utuh.

---

## 11. Information Language

Informasi adalah aset utama di dalam Raksa.

Cara informasi disajikan harus membantu pengguna membangun pemahaman, bukan sekadar menemukan data.

Setiap informasi sebaiknya menjawab lima pertanyaan berikut.

- Apa yang terjadi?
- Mengapa hal tersebut penting?
- Apa hubungannya dengan pekerjaan saya?
- Apa yang berubah?
- Apa langkah berikutnya?

Informasi yang mampu menjawab kelima pertanyaan tersebut akan membantu pengguna mengambil keputusan dengan lebih cepat dan percaya diri.
# Part III — Experience Direction

## 12. Layout Direction

Layout di dalam Raksa harus membantu pengguna memahami kondisi workspace sebelum meminta mereka melakukan tindakan.

Setiap halaman harus memiliki orientasi yang jelas, memperlihatkan informasi yang paling penting terlebih dahulu, kemudian menyediakan akses menuju detail secara bertahap.

Layout Raksa mengikuti prinsip berikut.

- Workspace menjadi pusat orientasi.
- Informasi lebih diprioritaskan daripada aksi.
- Hierarki visual membantu pengguna memahami prioritas.
- AI hadir sebagai pendamping, bukan pusat perhatian.
- Pengguna selalu mengetahui posisi dan konteks pekerjaannya.

Setiap layout harus membantu pengguna menjawab pertanyaan:

> "Apa yang sedang terjadi, dan apa yang sebaiknya saya lakukan selanjutnya?"

---

## 13. Motion Direction

Motion digunakan untuk memperjelas pengalaman, bukan untuk menarik perhatian.

Animasi harus memiliki tujuan yang jelas.

Motion di dalam Raksa digunakan untuk:

- memberikan umpan balik terhadap tindakan pengguna;
- membantu perpindahan konteks;
- memperjelas perubahan status;
- menjaga kontinuitas pengalaman.

Motion tidak boleh:

- mengganggu fokus;
- memperlambat pekerjaan;
- digunakan hanya sebagai dekorasi.

Motion terbaik adalah motion yang membantu pengguna memahami perubahan tanpa mereka sadari.

---

## 14. Component Direction

Komponen merupakan bahasa visual yang digunakan secara berulang di seluruh Raksa.

Setiap komponen harus memiliki perilaku yang konsisten sehingga pengguna tidak perlu mempelajari ulang cara berinteraksi ketika berpindah antar modul.

Seluruh komponen Raksa harus memenuhi prinsip berikut.

- Mudah dikenali.
- Konsisten di seluruh produk.
- Mendukung aksesibilitas.
- Memberikan umpan balik yang jelas.
- Mengurangi beban kognitif pengguna.

Komponen bukan sekadar elemen antarmuka.

Komponen adalah alat komunikasi antara sistem dan pengguna.

---

## 15. Design Token Direction

Design Token merupakan representasi visual dari identitas Raksa.

RPX tidak mendefinisikan nilai teknis seperti warna, ukuran, maupun tipografi.

Sebaliknya, RPX menetapkan arah yang harus diwujudkan melalui Design System.

Seluruh Design Token Raksa harus mencerminkan karakter produk.

- Tenang.
- Profesional.
- Modern.
- Mudah dibaca.
- Konsisten.
- Nyaman digunakan dalam waktu lama.

Implementasi teknis Design Token dapat berkembang seiring evolusi platform tanpa mengubah identitas pengalaman Raksa.

---

## 16. Accessibility Direction

Raksa dirancang untuk dapat digunakan oleh berbagai jenis pengguna dalam sesi kerja yang panjang.

Aksesibilitas bukan fitur tambahan, melainkan bagian dari kualitas produk.

Seluruh pengalaman Raksa harus:

- mudah dibaca;
- mudah dinavigasi;
- memiliki kontras yang memadai;
- dapat digunakan dengan keyboard maupun perangkat bantu;
- memberikan umpan balik yang jelas terhadap setiap interaksi.

Pengalaman yang inklusif akan menghasilkan produk yang lebih mudah digunakan oleh semua pengguna.

Aksesibilitas harus dipertimbangkan sejak awal proses desain dan implementasi, bukan ditambahkan setelah produk selesai dibangun.
# Part IV — Evolution

## 17. Future Evolution

RPX dirancang sebagai sistem yang dapat berkembang bersama Raksa.

Seiring bertambahnya kemampuan produk, platform, dan kebutuhan pengguna, implementasi pengalaman dapat berubah.

Namun perubahan tersebut harus tetap mempertahankan identitas yang telah ditetapkan melalui Product Evolution, Product Definition, User Persona, dan Experience Vision.

RPX menjadi acuan agar evolusi produk tidak mengorbankan konsistensi pengalaman.

Perubahan terhadap RPX hanya dilakukan apabila:

- terdapat perubahan strategi produk;
- muncul kebutuhan pengguna yang belum terakomodasi oleh prinsip yang ada;
- evolusi teknologi membuka peluang untuk memberikan pengalaman yang lebih baik tanpa mengubah identitas Raksa.

Seluruh perubahan RPX harus dievaluasi terhadap Product Foundation sebelum diadopsi menjadi bagian dari produk.

Dengan pendekatan tersebut, Raksa dapat terus berkembang tanpa kehilangan karakter yang telah dibangun.

---

## 18. Conclusion

Raksa bukan sekadar aplikasi produktivitas.

Raksa adalah AI Workspace Platform yang membantu pengguna memahami pekerjaan, menjaga konteks, menghubungkan pengetahuan, dan mengambil keputusan dengan lebih baik.

RPX memastikan bahwa setiap pengalaman yang diberikan Raksa selalu berasal dari identitas produk yang sama.

Mulai dari visual, interaksi, AI, hingga penyajian informasi, seluruh keputusan harus memperkuat pengalaman yang ingin dirasakan pengguna.

RPX bukan Design System.

RPX bukan UI Guideline.

RPX adalah bahasa produk yang menerjemahkan Product Vision menjadi pengalaman yang konsisten di seluruh platform Raksa.

Setiap implementasi dapat berubah.

Teknologi akan terus berkembang.

Platform akan terus bertambah.

Namun pengalaman yang dirasakan pengguna harus tetap mencerminkan identitas Raksa.

> **Technology makes Raksa possible.  
> Experience makes Raksa valuable.**

Selama prinsip tersebut dijaga, Raksa akan terus berkembang sebagai AI Workspace yang konsisten, dapat dipercaya, dan benar-benar membantu penggunanya.