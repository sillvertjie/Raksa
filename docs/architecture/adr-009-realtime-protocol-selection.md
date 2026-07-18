# ADR-009 Realtime Protocol Selection

## Status

Accepted

## Date

2026-07-18

---

# Context

Raksa memasuki Phase 7 Epic 4 — Presence & Realtime Communication.

Epic ini membutuhkan kemampuan realtime sebagai fondasi collaborative workspace.

Kebutuhan utama:

- Presence anggota workspace
- Online/offline status
- Session tracking
- Realtime event distribution
- Future collaboration capability untuk Comments dan fitur realtime lainnya

Architecture Preparation belum menentukan realtime protocol.

Pemilihan protocol harus dilakukan sebelum implementasi transport layer.

---

# Decision

Raksa menggunakan:

**WebSocket sebagai realtime transport protocol**

dengan menggunakan:

**Realtime Transport Adapter Boundary**

sehingga implementasi transport dapat diganti tanpa mempengaruhi domain logic.

Architecture flow:


Domain Event
|
v
Event Bus
|
v
Realtime Distributor
|
v
Realtime Transport Adapter
|
v
WebSocket Transport
|
v
Client


---

# Considered Alternatives

## Option 1 — WebSocket

### Advantages

- Full duplex communication
- Mendukung server push dan client communication
- Cocok untuk presence system
- Cocok untuk future collaborative feature
- Banyak digunakan pada aplikasi realtime modern

### Disadvantages

- Membutuhkan connection lifecycle management
- Membutuhkan strategi scaling pada tahap production

---

## Option 2 — Server Sent Events (SSE)

### Advantages

- Implementasi lebih sederhana
- Menggunakan HTTP standard
- Automatic reconnect tersedia pada browser

### Disadvantages

- Komunikasi hanya server → client
- Tidak ideal untuk future collaboration interaction
- Kurang fleksibel untuk typing indicator, cursor sharing, dan interactive collaboration

---

## Option 3 — Hybrid Transport

Menggunakan kombinasi WebSocket dan SSE.

### Advantages

- Dapat mengoptimalkan setiap use case

### Disadvantages

- Menambah kompleksitas infrastructure
- Belum diperlukan pada fase sekarang

---

# Rationale

WebSocket dipilih karena Raksa memiliki visi jangka panjang sebagai AI Workspace kolaboratif.

Presence merupakan fondasi awal menuju:

- realtime collaboration
- comments
- collaborative AI interaction
- workspace activity synchronization

Adapter boundary digunakan agar business logic tidak bergantung terhadap WebSocket secara langsung.

---

# Consequences

## Positive

- Realtime capability siap dikembangkan
- Transport dapat diganti tanpa perubahan domain
- Mendukung future collaboration requirement

## Negative

- Membutuhkan connection management
- Membutuhkan scaling strategy pada infrastructure phase berikutnya

---

# Implementation Boundary

Realtime implementation wajib mengikuti boundary:


Domain
|
X
|
WebSocket


tidak diperbolehkan.

Implementasi yang benar:


Domain
|
Event Bus
|
Realtime Distributor
|
Realtime Adapter
|
Transport


---

# Related DEV

- DEV-185 Realtime Transport Foundation
- DEV-186 Presence Domain
- DEV-187 Realtime Event Distribution
- DEV-188 Presence UI Integration
- DEV-189 Presence Verification