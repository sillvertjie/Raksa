# Phase 6 Domain-Driven Architecture Contract

This directory contains the shared architectural contracts used by all
Phase 6 bounded contexts.

## Principles

- Each feature is an isolated bounded context.
- Business logic must remain inside its own domain.
- Cross-domain communication must use the Event Bus (introduced in DEV-127).
- Command and Query responsibilities will be separated in DEV-128.
- Shared contracts belong only in this directory.

## Planned Bounded Contexts

- Projects
- Tasks
- Knowledge
- Tags
- Collections
- Files
- Search