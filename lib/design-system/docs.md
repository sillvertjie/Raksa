# Raksa Design System

## Tujuan

Folder ini menjadi sumber tunggal (Single Source of Truth) untuk token Design System yang digunakan di seluruh Project Raksa.

Seluruh token bersifat stateless, immutable, dan dapat digunakan oleh seluruh layer aplikasi tanpa memiliki dependency terhadap UI Component tertentu.

---

## Struktur

```
design-system/
├── animation.ts
├── colors.ts
├── layout.ts
├── radius.ts
├── shadows.ts
├── spacing.ts
├── typography.ts
└── index.ts
```

---

## Prinsip

- Gunakan named export.
- Gunakan `as const` untuk seluruh token.
- Jangan menambahkan business logic.
- Jangan mengimpor React atau Next.js.
- Hindari hardcode class Tailwind di banyak tempat jika sudah tersedia sebagai token.

---

## Penggunaan

```ts
import {
  spacing,
  radius,
  typography,
} from "@/lib/design-system";
```

Contoh:

```tsx
<div
  className={`${spacing.cardPadding} ${radius.xl}`}
>
  ...
</div>
```

---

## Catatan

Folder ini hanya berisi **Design Tokens**.

Integrasi token ke UI Component dilakukan secara bertahap pada DEV berikutnya agar perubahan tetap kecil, mudah direview, dan aman untuk di-rollback.