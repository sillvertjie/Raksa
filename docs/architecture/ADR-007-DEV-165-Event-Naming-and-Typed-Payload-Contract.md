# ADR-007 — DEV-165 Event Naming and Typed Payload Contract

## Status

Accepted

## Date

2026-07-16

## Related Development

DEV-165 — Event Naming Convention & Typed Event Payload Foundation

---

# Context

Phase 6 memperkenalkan fondasi Domain Event dan Internal Event Bus sebagai bagian dari persiapan arsitektur Event-Driven Raksa.

Implementasi awal sudah memungkinkan bounded context menerbitkan dan menerima domain event, namun terdapat beberapa technical debt:

- Event naming belum memiliki standar global.
- Domain event payload masih menggunakan `unknown`.
- Consumer harus melakukan asumsi atau casting manual terhadap payload.
- Kontrak event belum optimal untuk kebutuhan async event processing pada Phase 7.

Karena Phase 7 membutuhkan event yang dapat diproses lintas boundary dengan aman, diperlukan standardisasi domain event contract.

---

# Problem Statement

Bagaimana Raksa memastikan seluruh domain event memiliki:

- nama event yang konsisten,
- payload contract yang type-safe,
- compatibility untuk pengembangan async event processing?

---

# Decision

Raksa menetapkan standardisasi Domain Event Contract.

## 1. Event Naming Convention

Seluruh domain event menggunakan format:


<aggregate>.<action>


Contoh:


task.created
task.updated
task.deleted
file.uploaded


Aturan:

- menggunakan lowercase,
- menggunakan dot separator,
- aggregate merepresentasikan domain entity,
- action merepresentasikan perubahan yang terjadi.

---

## 2. Typed Domain Event Payload

Domain Event contract menggunakan generic payload:

```ts
export interface DomainEvent<TPayload = unknown> {
    readonly type: string;
    readonly occurredAt: Date;
    readonly payload: TPayload;
}

Setiap domain event harus menentukan payload contract masing-masing.

Contoh:

interface TaskCreatedPayload {
    taskId: string;
    title: string;
}

Kemudian:

DomainEvent<TaskCreatedPayload>
Alternatives Considered
Option 1 — Keep payload as unknown

Advantages:

sederhana,
fleksibel.

Disadvantages:

tidak ada compile-time safety,
consumer harus melakukan casting manual,
risiko runtime error meningkat.

Decision:

Rejected.

Option 2 — Runtime Schema Validation untuk Semua Event

Advantages:

validasi payload saat runtime.

Disadvantages:

membutuhkan tambahan dependency,
belum diperlukan pada fase sekarang.

Decision:

Deferred.

Option 3 — Generic Typed Domain Event

Advantages:

memberikan type safety,
tidak membutuhkan dependency baru,
kompatibel dengan TypeScript architecture Raksa.

Disadvantages:

setiap bounded context harus menjaga payload contract.

Decision:

Accepted.

Consequences
Positive
Domain event menjadi lebih predictable.
Consumer mendapatkan type safety.
Event Bus memiliki kontrak yang lebih stabil.
Async Event Processing dapat dikembangkan dengan risiko lebih rendah.
Projection foundation dapat menggunakan event schema yang konsisten.
Negative
Perubahan payload membutuhkan perhatian terhadap compatibility.
Setiap event baru harus memiliki payload contract.
Scope Impact

Affected modules:

features/shared/contracts
features/tasks/events
features/files/contracts

Future bounded context yang harus mengikuti aturan:

features/projects/events
features/knowledge/events
Future Considerations

ADR ini belum mencakup:

event versioning,
event persistence,
retry mechanism,
external message broker.

Hal tersebut akan dibahas pada:

DEV-166 — Async Event Processing Migration.

Implementation Reference

Implemented by:

DEV-165 — Event Naming Convention & Typed Event Payload Foundation

Changes:

Added generic payload typing pada DomainEvent contract.
Standardized domain event naming convention.
Prepared domain events for Phase 7 infrastructure evolution.