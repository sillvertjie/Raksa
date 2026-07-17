# Phase 7 Permission Architecture Planning

Status: Approved

---

## Scope

This document defines the permission architecture direction introduced during:

- DEV-178 Permission Architecture Planning

This decision establishes the foundation for:

- Workspace Authorization Boundary
- Role and Permission Management
- Permission Evaluation Service
- Future Team Management

---

# Context

Raksa requires an authorization model that allows workspace members to perform actions based on their responsibilities.

The Collaboration Domain already provides:

- Workspace Membership
- Member Role
- Invitation Flow

The Permission system must consume Collaboration Domain data without introducing permission logic into other bounded contexts.

---

# Architecture Boundary

Permission evaluation belongs to the Collaboration Boundary.

Architecture:


Workspace Membership
|
↓
Role Assignment
|
↓
Permission Evaluation Service
|
↓
Domain Access Decision


Existing domains must not implement their own permission checks:

- Projects
- Tasks
- Knowledge Base
- Files

All authorization decisions must use the shared Permission Evaluation Service.

---

# Role Model Decision

## Option 1 — Fixed Role Model

Definition:

A predefined set of workspace roles.

Example:


OWNER
ADMIN
MEMBER
VIEWER


Advantages:

- Simple implementation.
- Predictable authorization behavior.
- Easier testing.
- Lower architectural complexity.
- Suitable for current Raksa development phase.

Disadvantages:

- Limited customization.
- Role changes require code changes.

---

## Option 2 — Custom Role Model

Definition:

Workspace administrators can create custom roles.

Example:


Editor
Reviewer
Auditor
Manager


with dynamic permission assignment.

Advantages:

- Enterprise flexibility.
- Supports complex organizations.
- User-defined access model.

Disadvantages:

- Requires role management system.
- Requires additional persistence model.
- Higher complexity.
- Requires UI and administration flow.

---

# Decision

Raksa will use:


Fixed System Role
+
Permission Mapping Abstraction


Current system roles:


OWNER
ADMIN
MEMBER
VIEWER


The role model remains abstracted so future Custom Role support can be introduced without changing the Authorization Boundary.

---

# Permission Architecture Direction

Future implementation:


Membership Role
|
↓
Role Permission Mapping
|
↓
Permission Evaluation Service
|
↓
Authorization Decision


Permission Evaluation Service becomes the single authorization entry point.

---

# Future Evolution

Custom Workspace Roles may be introduced in a future enterprise phase.

Migration path:


Fixed Role
|
↓
Role Abstraction
|
↓
Custom Role Support


The current architecture must preserve this evolution path.

---

# Result

DEV-178 establishes:

- Permission architecture direction.
- Role model decision.
- Authorization Boundary responsibility.
- Future migration strategy.

Implementation of schema and evaluation logic continues in:

- DEV-179 Workspace Role & Permission Schema
- DEV-180 Permission Evaluation Service