# AI Workspace Architecture

Status: Accepted  
Phase: Phase 4 — AI Workspace Foundation  
Decision: AI Workspace Architecture Blueprint

---

# 1. Overview

AI Workspace merupakan fondasi utama kemampuan AI pada Project Raksa.

Arsitektur ini dirancang agar Raksa dapat berkembang dari integrasi AI sederhana menjadi workspace AI yang scalable dengan kemampuan:

- Multi AI Provider.
- Prompt Management.
- Context Management.
- Conversation Management.
- AI Service Orchestration.
- Future AI capabilities.

AI Workspace tidak dianggap sebagai utility module, tetapi sebagai domain utama aplikasi.

---

# 2. Architecture Principles

AI Workspace mengikuti prinsip arsitektur Project Raksa:

- Clean Architecture.
- Separation of Concerns.
- Dependency Inversion.
- Single Responsibility Principle.
- Low Coupling.
- High Cohesion.
- Interface First Design.

Tujuan utama:

- Mudah dikembangkan.
- Mudah diuji.
- Mudah diperluas.
- Menghindari vendor lock-in.

---

# 3. AI Workspace Module Overview

AI Workspace terdiri dari beberapa modul utama:

AI Workspace

├── AI Core Layer
│
│   ├── Provider
│   ├── Prompt
│   ├── Context
│   ├── Conversation
│   ├── Service
│   └── Storage
│
└── AI Feature Layer
    │
    ├── AI Chat
    ├── AI Note Assistant
    ├── AI Search
    ├── AI Content Generation
    ├── AI Summary
    └── AI Productivity Tools

Setiap modul memiliki tanggung jawab yang berbeda.

Feature Layer dapat menggunakan AI Core.

AI Core tidak boleh bergantung kepada Feature Layer.

Conversation merupakan capability umum untuk seluruh interaksi AI pada Raksa.

AI Core Layer bertanggung jawab menyediakan kemampuan dasar AI.

AI Feature Layer bertanggung jawab menyediakan capability AI yang digunakan pengguna.

---

# 4. Module Responsibility

## 4.1 AI Service

AI Service merupakan orchestration layer.

Tanggung jawab:

- Mengatur workflow AI.
- Menghubungkan prompt, context, conversation, dan provider.
- Mengelola proses request AI.

AI Service tidak bertanggung jawab untuk:

- Membuat prompt.
- Membuat context.
- Mengetahui implementasi provider.

---

## 4.2 Provider Module

Provider bertanggung jawab sebagai adapter komunikasi dengan AI provider eksternal.

Contoh implementasi:

- OpenAI Provider.
- Gemini Provider.
- Provider lainnya.

Tanggung jawab:

- Mengirim request.
- Menerima response.
- Mapping format provider.

Provider tidak mengetahui:

- Prompt logic.
- Context logic.
- Conversation logic.

---

## 4.3 Prompt Module

Prompt module bertanggung jawab terhadap prompt management.

Tanggung jawab:

- Prompt template.
- Prompt rendering.
- Prompt preparation.

Future capability:

- Prompt versioning.
- Prompt optimization.
- Prompt experimentation.

---

## 4.4 Context Module

Context module bertanggung jawab membangun context sebelum request AI.

Tanggung jawab:

- Mengumpulkan informasi context.
- Menyiapkan context final.
- Mengatur context pipeline.

Future capability:

- Token budgeting.
- Context caching.
- External knowledge integration.

---

## 4.5 Conversation Module

Conversation module bertanggung jawab terhadap percakapan AI.

Konsep utama:

- Conversation.
- Message.
- Session.

Tanggung jawab:

- Conversation lifecycle.
- Message management.
- Conversation state.

---

## 4.6 Storage Module

Storage module merupakan boundary untuk persistence.

Tanggung jawab:

- Mendefinisikan kebutuhan penyimpanan.
- Menyediakan contract repository.

Implementasi database dilakukan pada DEV-064.

---

# 5. Dependency Rules

Dependency direction:
API Route
↓
AI Service
↓
┌──────────┬──────────┬──────────────┬──────────┐
↓ ↓ ↓ ↓
Prompt Context Conversation Provider

Rules:

- AI Service boleh menggunakan seluruh module contract.
- Module tidak boleh mengakses implementasi internal module lain.
- Provider tidak boleh bergantung pada AI Service.
- Provider tidak boleh mengetahui Prompt atau Context.
- Tidak boleh terjadi circular dependency.

---

# 6. Provider Architecture

AI Provider menggunakan abstraction layer.

Konsep:
AI Service

↓

AIProvider Interface

↓

Implementation

┌──────────────┐
│ OpenAI │
│ Gemini │
│ Future AI │
└──────────────┘

Keuntungan:

- Menghindari vendor lock-in.
- Memudahkan penambahan provider baru.
- Memisahkan business logic dengan external service.

---

# 7. Prompt Architecture

Prompt dipisahkan dari service logic.

Alur:
AI Service

↓

Prompt Renderer

↓

Final Prompt

Tujuan:

- Prompt reusable.
- Prompt mudah diuji.
- Prompt dapat berkembang menjadi sistem management.

---

# 8. Context Architecture

Context dibangun melalui Context Builder.

Alur:
AI Service

↓

Context Builder

↓

AI Context

Context Builder bertanggung jawab menyiapkan informasi yang dibutuhkan AI.

---

# 9. Conversation Architecture

Konsep utama:
Conversation

└── Message

Conversation menjadi container percakapan.

Message menyimpan setiap interaksi pengguna dan AI.

Blueprint ini dipersiapkan untuk:

- Chat workspace.
- History.
- Memory.
- Future AI interaction.

---

# 10. Service Layer Design

AI Service menjadi pusat orkestrasi.

Contoh alur:
Request

↓

AI Service

↓

Build Prompt

↓

Build Context

↓

Load Conversation

↓

Execute Provider

↓

Return Response

AI Service tidak menyimpan logic detail setiap proses.

---

# 11. Folder Blueprint

# 11. Folder Blueprint

Lokasi AI Workspace:

ai/

Project structure:

├── app/
├── components/
├── features/
├── ai/
├── lib/
├── prisma/
├── tests/
└── types/


Struktur AI:

ai/

├── provider/
│ ├── contracts/
│ ├── implementations/
│ ├── dto/
│ └── index.ts
│
├── prompt/
│ ├── templates/
│ ├── renderer/
│ ├── contracts/
│ └── index.ts
│
├── context/
│ ├── builders/
│ ├── contracts/
│ └── index.ts
│
├── conversation/
│ ├── contracts/
│ ├── dto/
│ └── index.ts
│
├── service/
│ ├── contracts/
│ └── index.ts
│
└── storage/
├── contracts/
└── index.ts

---

# 12. Interface Contract

Interface utama:

| Module | Interface |
|---|---|
| Provider | AIProvider |
| Prompt | PromptRenderer |
| Context | ContextBuilder |
| Conversation | ConversationManager |
| Service | AIService |
| Storage | ConversationStorage |

Interface menjadi kontrak komunikasi antar module.

---

# 13. Naming Convention

## Interface

Format:
Contoh:

AIProvider
ContextBuilder
PromptRenderer

---

## Service

Format:
<Name>Service

Contoh:

AIService

---

## Provider

Format:
<Name>Provider


Contoh:


OpenAIProvider


---

## DTO

Format:


<Name>DTO


Contoh:


PromptRequestDTO

---

# 14. Future Extension Rules

Pengembangan AI berikutnya harus mengikuti blueprint ini.

Penambahan fitur seperti:

- RAG.
- Memory.
- Tool Calling.
- Streaming Response.
- Multi Agent.

harus menambahkan module atau extension baru tanpa merusak kontrak yang sudah ada.

---

# 15. Architecture Decision Summary

Keputusan final:

- AI Workspace menjadi domain utama pada `src/ai`.
- Provider menggunakan abstraction layer.
- Prompt, Context, Conversation dipisahkan menjadi module sendiri.
- AI Service menjadi orchestration layer.
- Komunikasi antar module menggunakan interface contract.
- Dokumentasi ini menjadi sumber utama keputusan arsitektur AI Phase 4.

---

# 16. Implementation Validation

Architecture blueprint ini telah divalidasi melalui implementasi Phase 5 — Core AI Features.

Implementasi yang mengikuti blueprint:

- AI Chat
- AI Summarization
- AI Content Generation
- AI Search
- AI Note Assistant
- AI Workspace Actions
- AI Productivity Tools

Seluruh AI Feature mengikuti dependency direction:

Feature Layer
↓
AI Service Layer
↓
AI Core
↓
AI Provider Adapter

Tidak terdapat direct dependency dari AI Feature menuju Provider.