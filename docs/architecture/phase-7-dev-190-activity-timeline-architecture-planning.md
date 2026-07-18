# Phase 7 DEV-190 — Activity Timeline Architecture Planning

**Status:** Planned

**Phase:** Phase 7 — Collaboration

**Epic:** Epic 5 — Activity Timeline

**DEV:** DEV-190

---

# 1. Overview

Phase 7 Epic 5 memperkenalkan Activity Timeline sebagai read model lintas domain yang dibangun menggunakan Domain Event Projection.

Berbeda dengan Search Projection pada Phase 6 yang berorientasi pada indexing, Activity Timeline merupakan projection pertama yang menghasilkan chronological read model berbasis Domain Event.

Activity Timeline tidak menjadi Source of Truth.

Seluruh data tetap berasal dari aggregate masing-masing domain.

Activity Timeline hanya menyajikan representasi histori aktivitas workspace.

---

# 2. Objectives

Epic ini bertujuan untuk:

- menyediakan histori aktivitas workspace lintas domain
- mengkonsolidasikan Domain Event menjadi timeline
- menyediakan read model yang siap digunakan UI
- memanfaatkan CQRS Projection Infrastructure
- menjaga separation antara Write Model dan Read Model

---

# 3. Scope

Activity Timeline hanya mencakup:

- Project Activity
- Task Activity
- Knowledge Base Activity
- Collaboration Activity

Tidak mencakup:

- Notification
- Audit Log
- Analytics
- AI Context
- Search

Komponen tersebut akan dibangun pada phase berikutnya.

---

# 4. Architecture Position

Activity Timeline berada pada sisi Read Model CQRS.

```
                Domain Layer

Projects
Tasks
Knowledge Base
Collaboration

        │
        ▼

     Domain Events

        │
        ▼

 Activity Projection

        │
        ▼

 Activity Read Model

        │
        ▼

 Query Service

        │
        ▼

 Timeline UI
```

Activity Timeline tidak pernah mengubah aggregate.

---

# 5. Domain Event Sources

Activity Projection menjadi consumer terhadap seluruh Domain Event utama.

## Projects

- project.created
- project.updated
- project.archived
- project.deleted

## Tasks

- task.created
- task.updated
- task.completed
- task.deleted

## Knowledge Base

- knowledge.created
- knowledge.updated
- knowledge.deleted

## Collaboration

- member.invited
- member.joined
- member.removed
- permission.changed

Daftar event dapat berkembang tanpa mengubah arsitektur projection.

---

# 6. Activity Projection Flow

```
Domain Event

↓

Projection

↓

Activity Projection Service

↓

Activity Repository

↓

Activity Read Model
```

Projection hanya bertanggung jawab menerima Domain Event.

Transformasi dilakukan oleh Projection Service.

Repository menyimpan hasil projection.

---

# 7. Activity Entry Read Model

Activity Timeline menggunakan model generik.

Contoh atribut:

- id
- workspaceId
- actorId
- entityType
- entityId
- eventName
- summary
- occurredAt
- metadata

Model ini dirancang agar dapat menerima Domain Event dari domain baru tanpa perubahan struktur.

---

# 8. Projection Lifecycle

Projection mengikuti prinsip:

- append-only
- asynchronous-ready
- event-driven

Setiap Domain Event menghasilkan Activity Entry baru.

Projection tidak melakukan update terhadap aggregate.

---

# 9. Authorization Boundary

Authorization bukan bagian dari projection.

Projection menyimpan seluruh aktivitas yang valid untuk workspace.

Filtering dilakukan pada Query Layer.

```
Timeline Query

↓

Authorization Boundary

↓

Activity Repository
```

Dengan pendekatan ini projection tetap sederhana dan reusable.

---

# 10. CQRS Integration

Activity Timeline merupakan implementasi Read Model CQRS.

Write Model:

Projects
Tasks
Knowledge Base
Collaboration

↓

Domain Event

↓

Activity Projection

↓

Read Model

↓

Query

Tidak terdapat command untuk membuat Activity.

---

# 11. Projection Infrastructure Integration

Activity Timeline menggunakan Projection Infrastructure yang telah dibangun pada Epic 1.

Meliputi:

- Projection Registry
- Projection Dispatcher
- Projection Store

Epic ini tidak memperkenalkan infrastructure projection baru.

---

# 12. Event Mapping Strategy

Setiap Domain Event dipetakan menjadi Activity Entry.

Contoh:

project.created

↓

Activity Entry

task.completed

↓

Activity Entry

member.joined

↓

Activity Entry

UI hanya mengenal Activity Entry.

UI tidak mengetahui asal Domain Event.

---

# 13. Dependency Matrix

Epic ini bergantung pada:

- Shared Contracts
- Base Entity
- Event Bus
- CQRS Foundation
- Projection Infrastructure
- Workspace Permission
- Collaboration Domain

---

# 14. Implementation Contract

## DEV-191

Activity Projection Service

Deliverables:

- Activity Projection
- Activity Projection Service
- Activity Repository
- Activity Entry

---

## DEV-192

Activity Timeline Query & Read Model

Deliverables:

- Query Service
- Read Repository
- Authorization Integration
- Timeline API

---

## DEV-193

Activity Timeline UI

Deliverables:

- API Client
- Custom Hook
- Timeline Component

---

## DEV-194

Verification

Deliverables:

- Architecture Verification
- Browser Verification
- Lint
- Type Check
- Git Validation

---

# 15. Out of Scope

Epic ini tidak mencakup:

- Notification System
- Audit Log
- AI Timeline Summary
- Workspace Analytics
- Event Replay
- Search Index

Fitur tersebut merupakan bagian roadmap berikutnya.

---

# 16. Verification Checklist

Architecture Planning dianggap selesai apabila:

- Activity didefinisikan sebagai Projection
- Activity Read Model terdokumentasi
- Dependency terdokumentasi
- Event Source terdokumentasi
- Authorization Boundary terdokumentasi
- Projection Flow terdokumentasi
- Kontrak DEV-191 hingga DEV-194 terdokumentasi

---

# Conclusion

Activity Timeline merupakan implementasi pertama chronological read model berbasis Domain Event pada Project Raksa.

Epic ini memperluas pemanfaatan Event Bus dan CQRS Foundation dengan membangun projection lintas domain yang menjadi dasar bagi Workspace Read Model pada Epic 6 dan AI Collaboration Context pada Epic 7.

Activity Timeline tidak menjadi Source of Truth, melainkan representasi histori aktivitas workspace yang dibangun secara event-driven melalui Projection Infrastructure.