---
status: pending
priority: p3
issue_id: "005"
tags: [code-review, cleanup, dead-code]
dependencies: []
---

# Remove Unused Icon Components

## Problem Statement

Five icon components are defined but never imported or used anywhere in the codebase.

## Findings

- **File**: `src/components/icons/index.tsx` (lines 185-303)
- **Unused icons**: ArrowRightIcon, BuildingIcon, BrainIcon, ChartIcon, WrenchIcon
- **Impact**: 119 lines of dead code

## Proposed Solutions

### Option A: Delete Unused Icons (Recommended)

Remove the 5 unused icon components from the file.

**Effort:** Small
**Risk:** Low

## Acceptance Criteria

- [ ] Unused icons removed
- [ ] No import errors elsewhere
- [ ] File reduced by ~119 lines

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by simplicity reviewer |
