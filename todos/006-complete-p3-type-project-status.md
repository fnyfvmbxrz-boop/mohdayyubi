---
status: pending
priority: p3
issue_id: "006"
tags: [code-review, typescript, type-safety]
dependencies: []
---

# Add Strong Types for Project Status

## Problem Statement

The Project interface uses loose `string` types for `status` and `statusClass`, allowing typos to compile.

## Findings

- **File**: `src/app/page.tsx` (lines 60-66)
- **Current**: `status: string; statusClass: string;`
- **Issue**: No compile-time validation of status values

## Proposed Solutions

### Option A: Use Union Types (Recommended)

```typescript
type ProjectStatus = "Active" | "In Development" | "Planning";

const STATUS_CLASS_MAP = {
  "Active": "status-active",
  "In Development": "status-dev",
  "Planning": "status-soon",
} as const;

interface Project {
  id: string;
  name: string;
  desc: string;
  status: ProjectStatus;
}

// Derive statusClass from status
const getStatusClass = (status: ProjectStatus) => STATUS_CLASS_MAP[status];
```

**Effort:** Small
**Risk:** Low

## Acceptance Criteria

- [ ] Status uses union type
- [ ] statusClass derived from status
- [ ] Typos caught at compile time

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by TypeScript reviewer |
