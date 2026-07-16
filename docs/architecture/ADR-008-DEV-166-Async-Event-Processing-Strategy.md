# ADR-008 — DEV-166 Async Event Processing Strategy

## Status

Accepted

## Date

2026-07-16

## Related Development

DEV-166 — Async Event Processing Migration

---

# Context

Phase 6 Raksa telah membangun fondasi Domain Event dan Internal Event Bus.

Pada Phase 6, event processing masih menggunakan pendekatan synchronous in-memory:


Domain
|
Domain Event
|
InMemory Event Bus
|
Event Handler


Pendekatan tersebut cukup untuk foundation, namun memiliki keterbatasan:

- event processing berjalan dalam lifecycle request yang sama,
- kegagalan handler dapat menyebabkan event hilang,
- tidak tersedia retry mechanism,
- sulit melakukan scaling consumer,
- belum siap untuk kebutuhan Phase 7 seperti Collaboration, Projection, dan Automation.

DEV-165 telah menstandarkan event naming convention dan typed payload contract sehingga event dapat memiliki boundary yang lebih stabil.

Diperlukan keputusan arsitektur untuk menambahkan asynchronous event processing.

---

# Problem Statement

Bagaimana Raksa membangun asynchronous event processing yang:

- scalable,
- tidak mengubah domain layer,
- memiliki reliability,
- dapat berkembang menuju architecture yang lebih besar?

---

# Decision

Raksa menggunakan asynchronous event processing dengan pendekatan:


Domain Event
|
|
Event Bus Interface
|
|
Async Event Dispatcher
|
|
Message Broker Adapter
|
|
Event Consumer


---

# Message Broker Decision

## Selected

Redis Streams

---

# Why Redis Streams

Redis Streams dipilih sebagai implementasi awal karena:

- ringan untuk deployment Raksa saat ini,
- mendukung queue-based event processing,
- mendukung consumer group,
- memiliki mekanisme acknowledgment,
- memiliki kompleksitas operasional lebih rendah dibanding broker enterprise.

Redis Streams memberikan jalur migrasi yang sesuai dari:


InMemoryEventBus


menuju:


AsyncEventBus
+
Broker Adapter


tanpa mengubah domain contract.

---

# Alternatives Considered

## Option 1 — RabbitMQ

Architecture:


Producer
|
Exchange
|
Queue
|
Consumer


Advantages:

- mature messaging platform,
- routing capability kuat,
- cocok untuk business event.

Disadvantages:

- membutuhkan infrastructure tambahan,
- operational complexity lebih tinggi.

Decision:

Deferred.

RabbitMQ dapat dipertimbangkan apabila kebutuhan messaging Raksa meningkat.

---

## Option 2 — Kafka

Architecture:


Producer
|
Topic
|
Consumer Group


Advantages:

- event replay,
- high throughput,
- enterprise scale.

Disadvantages:

- operational overhead tinggi,
- belum sesuai dengan kebutuhan Raksa saat ini,
- membutuhkan infrastructure maturity lebih tinggi.

Decision:

Rejected for current phase.

Kafka dapat dipertimbangkan ketika Raksa membutuhkan distributed event platform.

---

# Delivery Guarantee Decision

Raksa menggunakan:


At-least-once delivery


Flow:


Publish Event
|
|
Store to Stream
|
|
Consumer Process
|
|
Acknowledgement


Alasan:

Kehilangan event lebih berbahaya dibanding kemungkinan duplicate processing.

---

# Consumer Requirement

Karena menggunakan at-least-once delivery:

Setiap event handler harus bersifat:


Idempotent


Handler harus aman ketika menerima event yang sama lebih dari satu kali.

---

# Consequences

## Positive Consequences

- Event processing tidak bergantung pada request lifecycle.
- Consumer dapat dikembangkan secara independen.
- Retry mechanism dapat ditambahkan.
- Architecture siap untuk Projection dan Collaboration.
- Domain layer tetap tidak bergantung pada infrastructure.

---

## Negative Consequences

- Sistem menjadi lebih kompleks.
- Membutuhkan failure handling.
- Consumer harus memperhatikan idempotency.
- Monitoring event processing diperlukan pada fase berikutnya.

---

# Scope

DEV-166 mencakup:

- Async Event Bus abstraction.
- Message broker adapter boundary.
- Event dispatch mechanism.
- Consumer processing foundation.

DEV-166 tidak mencakup:

- Production Redis deployment.
- Event persistence strategy.
- Full distributed microservice architecture.
- Event analytics.

---

# Future Considerations

Kemungkinan pengembangan berikutnya:

- dead letter queue,
- retry policy,
- event versioning,
- monitoring,
- distributed workers.

---

# Implementation Reference

Implemented by:

DEV-166 — Async Event Processing Migration

Based on:

ADR-007 — Event Naming and Typed Payload Contract