# DEV-164 — Workspace Collaboration Foundation

Status: Accepted

Phase: Phase 7 — Collaboration

Document Type: Architecture Decision

Depends On:

- DEV-163 — Phase 6 Completion Sign-off

---

# Purpose

Phase 7 memperkenalkan kemampuan Collaboration pada Raksa.

Untuk menjaga konsistensi arsitektur, diperlukan fondasi yang menetapkan bagaimana Workspace menjadi pusat seluruh fitur Collaboration tanpa mengubah prinsip Domain-Driven Design, Clean Architecture, CQRS Foundation, dan Event-Driven Integration yang telah dibangun pada Phase 6.

Dokumen ini menjadi acuan implementasi seluruh DEV pada Phase 7.

---

# Architecture Decisions

## 1. Workspace Ownership

Workspace ditetapkan sebagai Aggregate Root untuk seluruh fitur Collaboration.

Workspace memiliki:

- satu Owner
- banyak Members
- banyak Teams
- seluruh Workspace Resources

Owner merupakan Membership pertama dan memiliki hak administratif tertinggi.

---

## 2. Workspace Identity

Seluruh bounded context menggunakan `workspaceId` sebagai identitas utama.

`userId` hanya digunakan pada Authentication.

Seluruh resource berada di dalam satu Workspace.

---

## 3. Workspace Context

Setiap request harus membawa Workspace Context.

Workspace Context minimal terdiri dari:

- workspaceId
- memberId
- role

Workspace Context menjadi dasar evaluasi Permission.

---

## 4. Authorization Boundary

Seluruh akses menuju domain mengikuti alur berikut.

Authentication

↓

Workspace Context

↓

Permission Evaluation

↓

Domain Service

↓

Repository

Domain Service tidak melakukan pemeriksaan permission secara langsung.

---

# Architecture Rules

## Workspace Lifecycle

Workspace mengikuti lifecycle berikut.

Workspace Created

↓

Owner Assigned

↓

Invitation Enabled

↓

Members Joined

↓

Workspace Shared

---

## Workspace Invariants

Seluruh implementasi Collaboration wajib mengikuti aturan berikut.

- Workspace memiliki tepat satu Owner.
- Owner merupakan Member.
- Member selalu berada dalam satu Workspace.
- Permission dievaluasi melalui Membership.
- Team selalu berada di dalam Workspace.
- Resource dimiliki oleh Workspace.
- Invitation selalu mengarah ke Workspace.

---

# Impact

Keputusan pada DEV-164 menjadi fondasi bagi:

- Epic 2 — Collaboration Domain
- Epic 3 — Permission
- Epic 4 — Presence & Realtime
- Epic 5 — Activity Timeline
- Epic 6 — Comments
- Epic 7 — Workspace Read Model
- Epic 8 — AI Collaboration Context

---

# Out of Scope

DEV-164 tidak mencakup:

- implementasi Membership
- implementasi Permission
- implementasi Realtime
- implementasi Comments
- implementasi Activity Timeline
- pemilihan teknologi Realtime
- perubahan arsitektur Phase 6
- perubahan AI Architecture

Seluruh implementasi dilakukan pada DEV berikutnya sesuai roadmap.

---

# Conclusion

Workspace menjadi pusat Collaboration Architecture pada Phase 7.

Seluruh bounded context Collaboration dibangun menggunakan Workspace sebagai Aggregate Root dengan Workspace Context dan Authorization Boundary sebagai fondasi akses, sehingga seluruh fitur Collaboration dapat dikembangkan secara konsisten, scalable, dan tetap mempertahankan prinsip arsitektur Raksa.