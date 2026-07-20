# DEV-208 — AI Collaboration Context Architecture

## Phase

Phase 7 — Collaboration

## Epic

Epic 8 — AI Collaboration Context

## Status

Architecture Planning

## Date

2026-07-20


---

# 1. Overview

DEV-208 defines the architectural foundation for integrating collaboration awareness into Raksa AI.

The objective is not to create a new AI execution layer, but to evolve the existing Phase 5 AI Context architecture so that all AI Bridge modules can operate correctly inside a collaborative workspace environment.

The architecture must preserve existing AI boundaries:

```
AI Feature
    |
    v
AI Service Layer
    |
    v
AI Provider
```

AI Provider and AI Service contracts remain unchanged.


---

# 2. Background

Raksa evolved through several phases:

```
Capture
    |
Storage
    |
Processing
    |
Knowledge Management
    |
AI Processing
    |
Collaboration
    |
Collaborative AI Workspace
```

Phase 5 introduced:

- AI Service abstraction
- AI Provider abstraction
- Context Builder
- AI Bridge pattern

Phase 7 introduced:

- Collaboration Domain
- Workspace Membership
- Permission Evaluation Boundary
- Workspace Read Model


The previous AI architecture was designed for a mostly single-user workspace.

Example:

```
Project
   |
   v
Project AI Context
   |
   v
AI Service
```

In a collaborative workspace, the same resource may have different visibility depending on:

- workspace membership
- user role
- permission scope


Therefore AI context generation must become authorization-aware.


---

# 3. Existing AI Architecture Audit

## 3.1 AI Service Layer

Current structure:

```
AI Bridge

    |
    v

AIService Contract

    |
    v

DefaultAIService

    |
    v

AIProvider
```

The AIService contract:

```
execute(request: AIRequest): Promise<AIResponse>
```

Current request model:

```
AIRequest

- message
- conversationId
- options
```

The existing `options` field provides an extension point for future AI capabilities.

No AIService contract change is required.


---

## 3.2 AI Provider Boundary

Current provider contract:

```
AIProvider

generate(
    prompt,
    context
)
```

Provider responsibility:

- execute AI generation
- communicate with external AI model


Provider does not know:

- workspace
- user membership
- permission
- project ownership


This boundary must remain unchanged.


---

# 4. Problem Statement

Before collaboration support:

```
Project Entity

    |
    v

ProjectAIContextMapper

    |
    v

AIService
```

Problem:

The AI context only represents domain data.

It does not represent:

- who is requesting AI
- workspace membership
- permission scope
- allowed collaboration resources


Example:

User A:

```
Project X
Permission:
OWNER
```

User B:

```
Project X
Permission:
READ_ONLY
```

The AI context must not be identical.


---

# 5. Architecture Decision

## Decision

AI Collaboration Context will be implemented by extending the existing AI Context layer.

The architecture will NOT:

- create a new AI execution service
- bypass AIService abstraction
- allow AI Bridge to access repositories directly
- allow AI Feature to access AI Provider directly


The new responsibility flow:

```
AI Bridge

    |
    v

Authorization-aware Context Layer

    |
    v

AI Context Builder

    |
    v

AI Service Layer

    |
    v

AI Provider
```


---

# 6. Authorization Boundary Integration

AI Context generation must pass through the Collaboration Authorization Boundary.

Required flow:

```
User Request

    |
    v

AI Bridge

    |
    v

Collaboration Context Resolver

    |
    v

Permission Evaluation Service

    |
    v

Allowed Workspace Context

    |
    v

AI Context Builder

    |
    v

AI Service

    |
    v

AI Provider
```


AI must never execute:

```
AI Bridge

    |
    v

Repository

    |
    v

Database
```


because this bypasses authorization rules.


---

# 7. Context Builder Evolution

Current Context Builder:

```
Conversation Context

        |
        v

AI Context Builder

        |
        v

AI Service
```

Future Context Builder:

```
Conversation Context

+

Workspace Context

+

Membership Context

+

Permission Context

+

Domain Context

        |
        v

AI Context Builder

        |
        v

AI Service
```


The Context Builder becomes responsible for assembling valid AI context.

It does not own authorization logic.


---

# 8. Responsibility Boundary

## AI Bridge

Responsible for:

- receiving AI requests
- determining AI intent
- providing domain information


Not responsible for:

- permission evaluation
- direct database access


---

## Collaboration Context Resolver

Responsible for:

- resolving workspace identity
- retrieving membership information
- requesting permission evaluation


---

## Permission Evaluation Service

Responsible for:

- deciding allowed access
- enforcing workspace authorization rules


---

## AI Context Builder

Responsible for:

- combining authorized context
- preparing AI-ready context


---

## AI Service

Responsible for:

- AI execution orchestration
- prompt processing
- provider communication


---

# 9. Impact on Existing AI Bridge

Existing bridges:

```
Project AI Bridge

Task AI Bridge

Knowledge Document AI Bridge

Search AI Bridge
```

will remain.

They will evolve from:

```
Domain Context
```

into:

```
Authorized Domain Context
```


Example:

Before:

```
Project
    |
    v
ProjectAIContext
```

After:

```
Project

    |

Authorization Context

    |

ProjectAIContext

    |

AIService
```


---

# 10. Alternatives Considered

## Alternative A — Modify AIService Contract

Example:

```
AIService.execute(
    request,
    workspaceContext
)
```


Rejected.

Reason:

- couples AI execution layer with collaboration domain
- reduces abstraction
- affects all AI consumers


---

## Alternative B — Let AI Bridge Handle Permission

Example:

```
ProjectAI Bridge

    |
    v

Permission Check
```


Rejected.

Reason:

- duplicates authorization logic
- creates inconsistent security behavior


---

## Alternative C — Extend AI Context Layer

Selected.

Reason:

- preserves AIService abstraction
- keeps authorization outside AI execution
- supports future AI capabilities
- aligns with Phase 5 architecture


---

# 11. Future Considerations

This architecture prepares Raksa for:

- shared workspace AI conversation
- AI memory
- AI agents
- multi-user AI workflows


Future AI capabilities must continue using:

```
Authorization Boundary

        |

AI Context Layer

        |

AI Service
```


---

# 12. DEV-208 Outcome

Completed:

- AI architecture audit
- AI boundary verification
- AIService compatibility analysis
- Collaboration context integration design
- Authorization-aware AI flow definition


No runtime implementation is included in DEV-208.

Implementation begins in:

```
DEV-209 — AI Context Mapper Extension
```

---

# End of Document