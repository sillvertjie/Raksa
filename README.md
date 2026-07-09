# Raksa Workspace

Raksa is an AI Workspace platform built gradually with a clean architecture approach.

The goal of Raksa is to provide a scalable workspace foundation that can evolve into an AI-powered productivity environment.

---

## Tech Stack

* Next.js
* React
* TypeScript
* Prisma ORM
* PostgreSQL
* NextAuth
* Tailwind CSS
* Vitest

---

## Project Structure

Raksa uses a feature-based clean architecture.

```
app
 └── api
     └── route handlers

features
 ├── capture
 ├── notes
 ├── search
 └── summary

components
 ├── ui
 └── sections

lib
 ├── api
 ├── auth
 ├── config
 ├── errors
 ├── prisma
 └── design-system
```

Architecture flow:

```
DTO
 ↓
Validator
 ↓
Repository
 ↓
Service
 ↓
API Route
 ↓
API Client
 ↓
Custom Hook
 ↓
UI Component
```

---

## Development Setup

Install dependencies:

```bash
npm install
```

Create environment file:

```bash
.env
```

Example:

```env
DATABASE_URL=
AUTH_SECRET=
```

---

## Database Setup

Generate Prisma client:

```bash
npx prisma generate
```

Run database migration:

```bash
npx prisma migrate dev
```

---

## Development Commands

Start development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

Run TypeScript validation:

```bash
npm run typecheck
```

Run tests:

```bash
npm run test
```

Run complete validation:

```bash
npm run check
```

---

## Testing

Raksa uses Vitest as the testing foundation.

Test files:

```
*.test.ts
*.test.tsx
```

Run:

```bash
npm run test
```

---

## Environment Configuration

Environment variables are managed through:

```
lib/config
```

Sensitive configuration should remain inside `.env` files and never be committed.

---

## Roadmap

Current development phase:

```
Phase 3 — Infrastructure Enhancement
```

Completed:

* Foundation Setup
* Workspace MVP
* Database Foundation
* Authentication Foundation
* Testing Foundation
* Error Handling
* Configuration Management
* Performance Review
* Developer Experience

Future:

* AI Workspace Foundation
* AI Features
* Workspace Expansion
* Collaboration
* Production Deployment

---

## Development Principle

Raksa prioritizes:

* Maintainability
* Scalability
* Readability
* Clean Architecture
* Consistent Engineering Practices

```
```
