# Phase 7 — DEV-195
# Comments Architecture ADR

Status: Accepted

Related Phase:
Phase 7 — Collaboration

Epic:
Epic 6 — Comments

DEV:
DEV-195

Related Documents:

- ROADMAP-RAKSA.md
- ROADMAP-PHASE-7.md
- ADR-006 — Phase 6 Architecture
- ADR-007 — Phase 7 Epic Sequencing & Collaboration Boundary
- Phase 7 — Collaboration Architecture Preparation

---

# 1. Context

Phase 7 memperkenalkan kemampuan Collaboration pada Raksa Workspace.

Salah satu capability resmi yang tercantum pada ROADMAP-RAKSA.md adalah **Comments** sebagai media diskusi kontekstual pada entitas workspace.

Berbeda dengan Collaboration Domain, Permission, Presence, Activity Timeline, maupun AI Collaboration Context, Comments tidak pernah dibahas pada dokumen *Phase 7 — Collaboration Architecture Preparation* sehingga belum memiliki kandidat arsitektur yang tervalidasi.

Sebelum implementasi dimulai diperlukan Architecture Decision Record (ADR) untuk menentukan desain Comments agar konsisten dengan seluruh bounded context yang telah dibangun pada Phase 6 dan Phase 7.

---

# 2. Problem Statement

Comments harus mampu:

- mendukung Project
- mendukung Task
- mendukung Knowledge Document
- mendukung Note
- mudah diperluas untuk aggregate lain di masa depan

Comments juga harus:

- mengikuti Authorization Boundary
- mengikuti Realtime Distribution Boundary
- mengikuti Event Bus
- terintegrasi dengan Activity Timeline

tanpa membuat duplicate architecture maupun melanggar prinsip Domain Driven Design.

---

# 3. Existing Architecture Analysis

Audit terhadap implementasi yang telah tersedia menunjukkan:

## Shared Foundation

Project telah memiliki:

- Base Entity
- Event Bus
- Typed Domain Event
- CQRS Foundation
- Projection Runtime
- Permission Evaluation Service

Seluruh bounded context menggunakan fondasi tersebut.

---

## Attachment Domain

Phase 6 telah memperkenalkan bounded context:

```
features/attachments
```

Attachment menggunakan pola:

```
targetType
targetId
```

untuk menghubungkan file terhadap aggregate lain.

Pola ini merupakan **Polymorphic Target Pattern**.

Namun Attachment tetap merupakan bounded context tersendiri.

Artinya polymorphic relationship bukan pengganti bounded context.

---

## Activity Timeline

Activity Timeline merupakan consumer Domain Event.

Saat ini menerima:

- project.*
- task.*
- knowledge.*
- invitation.*
- membership.*

Comments nantinya akan menambahkan:

- comment.created
- comment.updated
- comment.deleted

tanpa mengubah arsitektur projection.

---

## Permission

Seluruh access control menggunakan:

Permission Evaluation Service

Comments wajib mengikuti pola tersebut.

---

## Realtime

Realtime telah memiliki Distribution Boundary:

```
Domain Event
        ↓
Event Bus
        ↓
Realtime Distributor
```

Comments tidak diperbolehkan melakukan realtime push langsung.

---

# 4. Architecture Options

## Option A

### Polymorphic Attachment Pattern

Comments menggunakan pola Attachment secara langsung.

Contoh:

Comment

- targetType
- targetId

tanpa bounded context tersendiri.

### Advantages

- implementasi sederhana
- sedikit file

### Disadvantages

- lifecycle comment bercampur dengan attachment
- sulit menambahkan thread
- sulit menambahkan reaction
- sulit menambahkan mention
- sulit menambahkan moderation
- melanggar separation of concerns
- tidak konsisten dengan bounded context lain

---

## Option B

### Dedicated Comments Bounded Context

Comments dibangun sebagai bounded context tersendiri.

```
features/comments
```

Namun tetap menggunakan Polymorphic Target Pattern sebagai mekanisme referensi.

Contoh:

Comment

- workspaceId
- targetType
- targetId

### Advantages

- konsisten dengan seluruh bounded context
- scalable
- reusable
- mendukung evolusi feature
- mengikuti prinsip DDD

### Disadvantages

- jumlah file lebih banyak
- implementasi awal sedikit lebih besar

---

# 5. Decision

Diputuskan menggunakan:

## Dedicated Comments Bounded Context

dengan

## Polymorphic Target Pattern

sebagai mekanisme referensi lintas aggregate.

Polymorphic Target Pattern digunakan sebagai model relasi.

Bounded Context tetap menjadi batas arsitektur utama.

---

# 6. Resulting Architecture

```
Project
Task
Knowledge
Note
        │
        ▼
 Comments
(targetType + targetId)
        │
        ├────────► Permission Evaluation Service
        │
        ├────────► Event Bus
        │
        ├────────► Activity Timeline
        │
        └────────► Realtime Distributor
```

---

# 7. Architectural Constraints

Comments tidak boleh:

- membuat permission service sendiri
- membuat realtime transport sendiri
- memanggil websocket secara langsung
- bypass Event Bus
- bypass Permission Evaluation Service
- melakukan direct cross-domain mutation

---

# 8. Domain Events

Comments akan menghasilkan event:

- comment.created
- comment.updated
- comment.deleted

Seluruh event mengikuti konvensi DEV-165:

```
<aggregate>.<action>
```

---

# 9. Integration

Comments mengonsumsi:

- Collaboration Domain
- Membership
- Permission Evaluation Service
- Event Bus
- Realtime Distribution
- Activity Timeline

Comments tidak memiliki dependency langsung terhadap implementation detail domain lain.

---

# 10. Consequences

Dengan keputusan ini:

- seluruh bounded context tetap konsisten
- polymorphic relationship dapat digunakan ulang
- thread discussion dapat ditambahkan
- mention dapat ditambahkan
- reaction dapat ditambahkan
- moderation dapat ditambahkan
- AI Collaboration dapat memanfaatkan comment thread pada Epic 8 tanpa perubahan arsitektur

---

# 11. Future Evolution

Arsitektur ini mendukung:

- Threaded Comments
- Comment Mentions
- Emoji Reactions
- Comment Resolution
- AI Comment Summary
- AI Discussion Analysis
- Notification
- Audit Trail

tanpa perubahan terhadap boundary utama.

---

# 12. Next DEV

DEV-196

Comments Domain Schema & Contracts

Output:

```
features/comments/
```

dengan implementasi foundation sesuai arsitektur resmi Project Raksa.