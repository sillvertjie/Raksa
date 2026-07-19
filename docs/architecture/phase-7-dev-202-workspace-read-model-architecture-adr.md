# ADR-DEV-202 — Workspace Read Model Architecture Decision

## Status

ACCEPTED

## Phase

Phase 7 — Collaboration

## Epic

Epic 7 — Workspace Read Model & Search Evolution

## DEV

DEV-202

---

# 1. Context

Pada Phase 6, Raksa menggunakan Workspace Aggregation Service untuk menggabungkan data dari beberapa bounded context.

Current pattern:


Workspace Aggregation Service

    |
    +--> Project Repository
    |
    +--> Task Repository
    |
    +--> Knowledge Repository
    |
    +--> File Repository
    |
    +--> Collection Repository

Pattern tersebut sesuai untuk tahap awal, namun menjadi semakin kompleks ketika Raksa memasuki Phase 7 dengan kebutuhan:

- shared workspace;
- permission boundary;
- activity timeline;
- realtime collaboration;
- comments;
- AI collaboration context.

Runtime aggregation memiliki beberapa keterbatasan:

- query complexity meningkat;
- cross-domain dependency bertambah;
- permission filtering sulit dikonsistenkan;
- realtime update sulit dilakukan;
- search evolution membutuhkan sumber data stabil.

Karena itu Workspace Aggregation perlu berevolusi menjadi Event Driven Read Model.

---

# 2. Decision

Raksa menggunakan:

## Event Driven Workspace Read Model

Architecture:


Domain Event

(project.created)
(task.updated)
(comment.created)
(membership.created)

    |
    v

Event Bus

    |
    v

Projection Dispatcher

    |
    v

Workspace Projection

    |
    v

Workspace Read Model

    |
    v

Workspace Query Service

    |
    v

UI


---

# 3. Storage Decision

Decision:

Menggunakan dedicated workspace read storage.

Concept schema:


workspace_read_items

id
workspaceId

entityType
entityId

title
description

metadata JSON

createdAt
updatedAt


---

## Rejected Alternatives

### Multiple Projection Tables

Tidak dipilih:


workspace_projects_read
workspace_tasks_read
workspace_documents_read


Alasan:

- projection maintenance terlalu cepat bertambah;
- Phase 7 belum membutuhkan optimasi entity-specific query;
- kompleksitas meningkat.

---

### Reference Only Model

Tidak dipilih:


workspace_item_reference

workspaceId
entityType
entityId


Alasan:

Akan mengembalikan masalah runtime aggregation karena query tetap harus mengambil data dari banyak repository.

---

# 4. Projection Ownership

Decision:

Workspace Projection menjadi tanggung jawab Workspace Context.

Structure:


features/workspace

├── projections
├── repositories
├── services
├── contracts
└── queries


Shared projection infrastructure tetap berada pada:


features/shared/projections


dan hanya bertanggung jawab terhadap:

- projection dispatcher;
- projection registry;
- projection store contract.

---

# 5. Authorization Boundary

Decision:

Permission filtering dilakukan pada Query Layer.

Flow:


Request

|
v

Workspace Query Service

|
v

PermissionEvaluationService

|
v

Workspace Read Repository

|
v

Response


Projection tidak menyimpan permission snapshot.

Alasan:

Role dan permission dapat berubah tanpa melakukan rebuild seluruh projection.

---

# 6. Pagination Strategy

Decision:

Menggunakan cursor pagination.

Contract:

```ts
{
  items: WorkspaceReadItem[],
  nextCursor?: string
}

Alasan:

Workspace memiliki pertumbuhan data tinggi.

Cursor pagination lebih sesuai dibanding offset pagination untuk:

large dataset;
realtime update;
workspace feed.
7. Search Evolution Boundary

Workspace Projection menjadi sumber data untuk Search Evolution.

Pattern:

Domain Event

      |
      +----------------+
      |                |
      v                v

Workspace Projection   Search Projection

      |
      v

Workspace Read Model

Search tidak membaca repository domain secara langsung.

8. Consequences
Positive
Workspace query lebih scalable.
Domain tetap terisolasi.
Authorization tetap melalui Collaboration Boundary.
Mendukung realtime update.
Menjadi fondasi AI Collaboration Context.
Negative
Data bersifat eventually consistent.
Membutuhkan projection recovery mechanism.
Storage bertambah karena memiliki read model.
9. Out of Scope

Tidak termasuk DEV-202:

distributed projection worker;
message broker production;
event replay system;
caching layer;
database sharding.
10. Implementation Impact

DEV berikutnya:

DEV-203
Workspace Read Model Implementation

akan mengimplementasikan:

Domain Event

      |
      v

Workspace Projection

      |
      v

Workspace Read Repository

      |
      v

Workspace Query Service

      |
      v

API

      |
      v

Custom Hook

      |
      v

UI
Decision Summary
Area	Decision
Pattern	Event Driven Read Model
Storage	Dedicated Workspace Read Storage
Owner	Workspace Context
Authorization	Query-time Permission Evaluation
Pagination	Cursor Pagination
Search	Projection Consumer
Aggregation	Deprecated Gradually