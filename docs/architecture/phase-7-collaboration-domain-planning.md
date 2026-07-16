# Phase 7 Collaboration Domain Planning

Status: Draft  
DEV: DEV-170  
Phase: Phase 7 — Collaboration  
Epic: Epic 2 — Collaboration Domain Foundation  

---

# 1. Purpose

Dokumen ini mendefinisikan rancangan arsitektur awal Collaboration Domain pada Project Raksa.

Collaboration Domain merupakan bounded context baru yang mengubah Raksa Workspace dari single-user workspace menjadi collaborative workspace.

Scope utama:

- Workspace Membership
- Invitation Flow
- Shared Workspace Foundation
- Collaboration Session Foundation

Dokumen ini menjadi dasar implementasi:

- DEV-171 Workspace Membership Schema & Contracts
- DEV-172 Membership Command & Query Services
- DEV-173 Invitation Domain
- DEV-174 Shared Workspace Access Boundary
- DEV-175 Collaboration Session Foundation
- DEV-176 Collaboration Domain Event Publishing
- DEV-177 Collaboration Domain Verification

---

# 2. Architectural Context

Phase 7 Collaboration dibangun di atas foundation Phase 6 dan Epic 1 Phase 7:

- Domain-Driven Design
- Event-Driven Integration
- CQRS Foundation
- Async Event Bus
- Typed Domain Event Contract
- Workspace Ownership Model

Collaboration Domain tidak menggantikan Workspace Domain.

Workspace bertanggung jawab terhadap lifecycle workspace.

Collaboration bertanggung jawab terhadap hubungan user dengan workspace.

---

# 3. Bounded Context Boundary

## Workspace Context

Responsibilities:

- Workspace creation
- Workspace metadata
- Workspace lifecycle
- Workspace configuration

Workspace tidak mengetahui detail Collaboration.

---

## Collaboration Context

Responsibilities:

- Membership management
- Invitation lifecycle
- Collaboration session tracking

Collaboration menjadi sumber kebenaran mengenai hubungan user dengan workspace.

---

Boundary:
Workspace Context

  |
  |
  | WorkspaceCreatedEvent
  |
  v

Collaboration Context


Komunikasi antar context menggunakan Domain Event.

Direct service dependency antar bounded context tidak diperbolehkan.

---

# 4. Domain Responsibility

Collaboration Domain bertanggung jawab terhadap:

## Membership

Mengatur:

- siapa anggota workspace
- role awal anggota
- status membership

---

## Invitation

Mengatur:

- undangan workspace
- expiry
- acceptance flow

---

## Collaboration Session

Mengatur:

- collaboration session foundation
- future realtime presence integration

---

# 5. Aggregate Design Evaluation

Beberapa pendekatan dievaluasi.

---

## Option A — Single Collaboration Aggregate


Collaboration

├── Membership
├── Invitation
└── Session


Kelebihan:

- satu boundary sederhana

Kekurangan:

- aggregate terlalu besar
- lifecycle berbeda menjadi tergabung

Tidak direkomendasikan.

---

## Option B — Membership sebagai extension Workspace


Workspace

└── Membership


Kelebihan:

- implementasi sederhana

Kekurangan:

- coupling kuat
- sulit berkembang menjadi collaborative platform

Tidak direkomendasikan.

---

## Option C — Independent Collaboration Aggregates


Collaboration Context

├── Membership Aggregate

├── Invitation Aggregate

└── Session Aggregate


Kelebihan:

- lifecycle terpisah
- scalable
- sesuai dependency DEV Phase 7

Dipilih sebagai desain resmi.

---

# 6. Recommended Domain Model

## Membership Aggregate

Responsibilities:

- member relationship
- membership status
- workspace-user association


Conceptual model:


Membership

id
workspaceId
userId
role
status
createdAt
updatedAt


---

## Invitation Aggregate

Responsibilities:

- invitation lifecycle
- acceptance workflow


Conceptual model:


Invitation

id
workspaceId
email
role
status
expiresAt
createdAt


---

## Session Aggregate

Responsibilities:

- collaboration session state
- future realtime foundation


Conceptual model:


Session

id
workspaceId
userId
status
createdAt
updatedAt


---

# 7. Domain Event Strategy

Collaboration Domain menggunakan typed domain event contract dari Phase 7 Epic 1.

Event naming mengikuti convention:


<domain>.<entity>.<action>


Candidate events:

## Membership


collaboration.membership.created

collaboration.membership.removed


---

## Invitation


collaboration.invitation.sent

collaboration.invitation.accepted


---

## Session


collaboration.session.started

collaboration.session.ended


Implementasi event dilakukan pada DEV-176.

---

# 8. Workspace Integration Boundary

Workspace ownership dibuat pada DEV-164.

Flow:


Workspace Created

    |
    |
    v

WorkspaceCreatedEvent

    |
    |
    v

Collaboration Event Consumer

    |
    |
    v

Create Owner Membership


Workspace tidak memanggil Collaboration Service secara langsung.

---

# 9. CQRS Consideration

Collaboration mengikuti pola:


Command

Create Membership
Accept Invitation

    |
    v

Domain Service

    |
    v

Repository

    |
    v

Domain Event

Query

Get Workspace Members
Get Invitations

    |
    v

Read Model


CQRS implementation dilakukan bertahap sesuai DEV sequence.

---

# 10. Authorization Boundary

Permission bukan bagian DEV-170.

Permission Evaluation Service akan dibuat pada:


Epic 3
DEV-178 — DEV-183


Collaboration hanya menyediakan membership information sebagai source data.

---

# 11. Future Extension Point

Desain ini memungkinkan:

- Team Management
- Permission System
- Realtime Presence
- Activity Timeline
- AI Collaboration Context

tanpa mengubah Collaboration boundary.

---

# 12. Implementation Guidance

DEV-171:

Implement:

- Membership schema
- DTO contract
- Validation contract

DEV-172:

Implement:

- Membership command
- Membership query service

DEV-173:

Implement:

- Invitation lifecycle

DEV-174:

Implement:

- Workspace access integration

DEV-175:

Implement:

- Collaboration session foundation

DEV-176:

Implement:

- Domain event publishing

DEV-177:

Verification:

- architecture compliance
- event flow validation
- integration validation

---

# Decision Summary

Collaboration Domain resmi menggunakan:


Independent Bounded Context

Membership Aggregate
Invitation Aggregate
Session Aggregate

Event-driven integration
CQRS-compatible architecture
No direct cross-domain service dependency


---

Status:

DEV-170 Architecture Planning Completed