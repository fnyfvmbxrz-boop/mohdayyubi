---
status: pending
priority: p2
issue_id: "002"
tags: [code-review, performance, refactoring]
dependencies: []
---

# Consolidate Duplicate IntersectionObservers

## Problem Statement

Two separate IntersectionObserver instances are created with nearly identical configurations in `page.tsx` and `Navigation.tsx`. This causes duplicate work on every scroll event.

## Findings

- **File 1**: `src/app/page.tsx` (lines 120-154)
- **File 2**: `src/components/Navigation.tsx` (lines 33-57)
- **Issue**: Both use `rootMargin: "-40% 0px -40% 0px"` to track active section
- **Impact**: 2x intersection calculations, redundant state updates

## Proposed Solutions

### Option A: Create Shared Hook (Recommended)
Create `src/hooks/useActiveSection.ts` that both components consume.

**Pros:**
- Single source of truth
- Better performance
- DRY principle

**Cons:**
- Need to lift state or use context

**Effort:** Medium
**Risk:** Low

### Option B: Use Context for Active Section
Store active section in a context, only one observer in page.tsx.

**Pros:**
- Cleaner component code
- No duplicate observers

**Cons:**
- More context overhead

**Effort:** Medium
**Risk:** Low

## Recommended Action

Option A - Create a shared `useActiveSection` hook

## Technical Details

**Affected files:**
- `src/app/page.tsx`
- `src/components/Navigation.tsx`

**New files:**
- `src/hooks/useActiveSection.ts`

## Acceptance Criteria

- [ ] Only one IntersectionObserver instance exists
- [ ] Both page dots and navigation show correct active section
- [ ] Scroll performance unchanged or improved

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by performance-oracle agent |

## Resources

- Performance analysis showing duplicate observers
