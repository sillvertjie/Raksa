# Raksa Design System

## Tujuan

Folder ini menjadi sumber tunggal (Single Source of Truth) untuk token Design System yang digunakan di seluruh Project Raksa.

Seluruh token bersifat stateless, immutable, dan dapat digunakan oleh seluruh layer aplikasi tanpa memiliki dependency terhadap UI Component tertentu.

---

# Visual Language

## Philosophy

Raksa menggunakan modern dark workspace visual language.

Tujuan utama:

- High readability
- Minimal distraction
- Clear information hierarchy
- Subtle elevation
- AI-focused interaction


---

# Color System

## Background

Digunakan sebagai canvas utama aplikasi.

Example:

- Application background
- Page container


## Surface

Digunakan untuk:

- Card
- Panel
- Workspace container


## Primary Accent

Digunakan untuk:

- Main action
- AI interaction
- Important highlights


## Typography Colors

Primary:

Untuk informasi utama.

Secondary:

Untuk metadata dan informasi pendukung.


---

# Typography

Typography harus menggunakan semantic token.

Contoh:

```tsx
import {
  typography,
} from "@/lib/design-system";
Gunakan:

Heading
Section title
Body
Caption
Statistic
Spacing System

Spacing menggunakan token agar layout konsisten.

Kategori:

Page spacing
Section spacing
Component spacing
Internal padding
Radius System

Raksa menggunakan rounded interface.

Guideline:

Component	Radius
Card	xl
Button	lg
Input	lg
Avatar	full
Shadow / Elevation

Raksa menggunakan subtle elevation.

Token:

Token	Usage
card	Default card
elevated	Important surface
floating	Drawer / popup
aiGlow	AI related element
Density System

Raksa mendukung tiga mode density:

Compact

Untuk:

Data heavy view
Tables
Advanced workspace
Comfortable

Default mode.

Untuk:

Dashboard
Daily workspace
Spacious

Untuk:

Presentation
Focus experience
Component Treatment
Card

Rules:

Surface background
Subtle border
Rounded corners
Soft shadow
Button

Primary:

Purple accent
White text
Clear hover state

Secondary:

Surface background
Border
Input

Rules:

Surface background
High contrast text
Visible focus state
Struktur
design-system/
├── animation.ts
├── colors.ts
├── density.ts
├── layout.ts
├── radius.ts
├── shadows.ts
├── spacing.ts
├── typography.ts
└── index.ts
Prinsip
Gunakan named export.
Gunakan as const untuk seluruh token.
Jangan menambahkan business logic.
Jangan mengimpor React atau Next.js.
Hindari hardcode class Tailwind di banyak tempat jika sudah tersedia sebagai token.
Penggunaan
import {
  spacing,
  radius,
  typography,
} from "@/lib/design-system";

Contoh:

<div
  className={`${spacing.cardPadding} ${radius.xl}`}
>
  ...
</div>
Catatan

Folder ini hanya berisi Design Tokens.

Integrasi token ke UI Component dilakukan secara bertahap pada DEV berikutnya agar perubahan tetap kecil, mudah direview, dan aman untuk di-rollback.


---

Setelah replace file, jalankan validasi DEV-219:

```powershell
npm run lint

npx tsc --noEmit