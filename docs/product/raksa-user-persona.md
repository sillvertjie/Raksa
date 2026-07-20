# Raksa User Persona & Problem Analysis

## 1. Introduction

Dokumen ini menjelaskan pengguna utama Raksa, masalah yang mereka hadapi, serta bagaimana Raksa membantu menyelesaikan masalah tersebut melalui pendekatan AI Workspace.

Dokumen ini dibuat berdasarkan hasil evaluasi perjalanan pengembangan Raksa Phase 1 hingga Phase 7.

Fokus utama dokumen ini bukan mendefinisikan fitur, tetapi memahami:

- siapa pengguna Raksa,
- bagaimana workflow mereka,
- masalah apa yang muncul,
- bagaimana Raksa memberikan nilai.

---

# 2. User Research Assumption

Saat ini Raksa masih berada pada tahap pengembangan internal.

Oleh karena itu, dokumen ini tidak dianggap sebagai hasil riset pasar formal.

Analisis pengguna berdasarkan:

- pengalaman pengembangan Raksa,
- observasi workflow software development,
- pola kerja knowledge worker,
- masalah yang muncul ketika mengelola informasi kompleks.

Tujuannya adalah memberikan arah produk yang berpusat pada masalah pengguna.

---

# 3. Primary Persona

Raksa memiliki dua primary persona.

Keduanya dipilih karena memiliki kebutuhan tinggi terhadap pengelolaan konteks, informasi, dan pengetahuan.

---

# 3.1 Software Developer

## Profile
Role:

Software Developer

Environment:

Software Project Development

Software developer menjadi pengguna awal utama Raksa karena pekerjaan mereka memiliki tingkat kompleksitas informasi yang tinggi.

---

## Daily Activities

Developer biasanya melakukan:

- menulis kode,
- memahami sistem,
- membaca dokumentasi,
- membuat keputusan teknis,
- melakukan debugging,
- mengelola task,
- melakukan review perubahan,
- mempelajari project history.

---

## Current Working Environment

Informasi developer biasanya tersebar pada:
Source Code

Documentation

Issue Tracker

Chat Communication

Meeting Notes

Personal Notes

Browser References

---

## Core Problems

## 1. Context Switching

Developer harus berpindah antara berbagai sumber informasi.

Contoh:
Code

↓

Documentation

↓

Issue

↓

Discussion

↓

Previous Decision

Akibatnya:

- fokus berkurang,
- waktu habis untuk mencari informasi,
- pekerjaan menjadi lebih lambat.

---

## 2. Lost Decision Context

Developer sering menemukan kondisi:

> "Mengapa sistem dibuat seperti ini?"

Informasi mungkin masih tersedia, tetapi alasan di balik keputusan sudah hilang.

Contoh:

- alasan pemilihan teknologi,
- alasan perubahan arsitektur,
- alasan implementasi tertentu.

---

## 3. Knowledge Fragmentation

Pengetahuan project tersebar di banyak tempat.

Contoh:
README

Git Commit

Documentation

Chat

Personal Memory

Akibat:

Project knowledge sulit dipahami secara menyeluruh.

---

## 4. Onboarding Difficulty

Developer baru membutuhkan waktu untuk memahami:

- struktur project,
- architecture decision,
- workflow,
- history perubahan.

---

# 3.2 Knowledge Worker

## Profile
Role:

Researcher
Analyst
Professional

Environment:

Information-based Work

Knowledge worker bekerja dengan informasi yang terus berkembang dan membutuhkan kemampuan untuk mengorganisasi serta memahami hubungan antar informasi.

---

## Daily Activities

Aktivitas:

- membuat laporan,
- melakukan penelitian,
- mengelola informasi,
- membuat keputusan,
- menyusun dokumentasi.

---

## Core Problems

## 1. Information Overload

Jumlah informasi meningkat lebih cepat dibanding kemampuan manusia untuk mengelolanya.

---

## 2. Difficult Knowledge Retrieval

Informasi lama sering sulit ditemukan ketika dibutuhkan.

---

## 3. Maintaining Context

Sulit menghubungkan:

- pekerjaan sebelumnya,
- informasi terbaru,
- keputusan yang sudah dibuat.

---

# 4. Secondary Persona

## 4.1 Technical Team

Technical team menjadi persona sekunder karena membutuhkan kemampuan kolaborasi dan shared context.

---

## Profile
Environment:

Engineering Team

Startup Team

Product Team

---

## Core Problems

## Knowledge Silos

Informasi hanya diketahui oleh individu tertentu.

---

## Collaboration Gap

Anggota tim tidak selalu memiliki pemahaman yang sama mengenai kondisi project.

---

## Decision Tracking

Keputusan penting sulit dilacak kembali.

---

# 5. User Workflow Before Raksa

Workflow umum pengguna sebelum menggunakan Raksa:
Start Work

↓

Check Current Task

↓

Open Multiple Tools

↓

Search Information

↓

Read Documentation

↓

Find Previous Discussion

↓

Understand Current Context

↓

Continue Work

Masalah utama:

Sebagian besar waktu digunakan untuk mencari konteks.

Bukan melakukan pekerjaan utama.

---

# 6. Core User Pain Points

## 6.1 Context Switching

Pengguna kehilangan fokus karena harus berpindah antar sumber informasi.

---

## 6.2 Information Fragmentation

Informasi tersedia tetapi tersebar.

---

## 6.3 Context Loss

Hubungan antara informasi, aktivitas, dan keputusan tidak selalu terjaga.

---

## 6.4 Knowledge Decay

Pengetahuan lama kehilangan nilai karena sulit ditemukan atau tidak terhubung.

---

## 6.5 Cognitive Overload

Semakin besar workspace, semakin besar beban pengguna untuk mengingat semuanya.

---

# 7. User Problem Hierarchy

Raksa melihat masalah pengguna dalam beberapa tingkatan.
Information Exists

    ↓

Information Is Fragmented

    ↓

Context Is Lost

    ↓

Decision Becomes Difficult

    ↓

AI Assistance Creates Value

---

## Explanation

### Level 1 — Information Exists

Pengguna sudah memiliki data dan informasi.

Masalah bukan selalu kekurangan informasi.

---

### Level 2 — Information Is Fragmented

Informasi tersebar di berbagai tempat.

---

### Level 3 — Context Is Lost

Hubungan antara informasi dan sejarah keputusan hilang.

---

### Level 4 — Decision Becomes Difficult

Tanpa konteks, pengguna sulit menentukan tindakan berikutnya.

---

### Level 5 — AI Assistance Creates Value

AI dapat membantu ketika memiliki konteks yang relevan.

---

# 8. Jobs To Be Done

## Software Developer
When I return to a project,

I want Raksa to understand
the current workspace context,

so I can continue working
without repeating previous research.

---

## Knowledge Worker
When information grows,

I want Raksa to organize
and connect my knowledge,

so I can find insights
and make better decisions.

---

## Technical Team
When collaborating,

I want shared workspace context,

so everyone understands
the same project situation.

---

# 9. How Raksa Helps

Raksa membantu pengguna melalui:

---

## Context Preservation

Menjaga hubungan antara:

- informasi,
- aktivitas,
- keputusan,
- history.

---

## Intelligent Retrieval

Membantu menemukan informasi yang relevan.

---

## Workspace Understanding

Memberikan pemahaman terhadap kondisi workspace.

---

## AI Assistance

Memberikan:

- insight,
- summary,
- recommendation,
- contextual help.

---

# 10. User Experience Principles

## Reduce Cognitive Load

Raksa harus mengurangi kebutuhan pengguna untuk mengingat semuanya.

---

## Bring Context Forward

Informasi penting harus muncul ketika dibutuhkan.

---

## Assist Before Ask

AI dapat memberikan bantuan berdasarkan konteks yang tersedia.

---

## Human Remains In Control

Pengguna tetap menjadi pengambil keputusan utama.

---

# 11. Future Persona Expansion

Raksa dapat berkembang untuk berbagai jenis workspace:
Student Workspace

Research Workspace

Business Workspace

Creator Workspace

Personal Knowledge Workspace

Namun prinsip utama tetap:
User

Workspace

Context

AI Assistance

---

# Conclusion

Raksa dibangun untuk membantu pengguna menghadapi masalah utama dalam lingkungan kerja modern:

bukan hanya kurangnya informasi, tetapi hilangnya konteks.

Dengan fokus awal pada Software Developer dan Knowledge Worker, Raksa menyediakan workspace berbasis AI yang membantu pengguna menjaga pengetahuan, memahami aktivitas, dan mengambil keputusan dengan bantuan konteks yang relevan.