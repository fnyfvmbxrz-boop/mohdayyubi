---
status: pending
priority: p3
issue_id: "008"
tags: [code-review, cleanup, css]
dependencies: []
---

# Remove Unused CSS Classes

## Problem Statement

Some CSS classes are defined but never used in any component.

## Findings

- **File**: `src/app/globals.css`
- **Unused**: `.tab-indicator` class (lines 229-236)
- **Impact**: Dead CSS adding to file size

## Proposed Solutions

### Option A: Remove Unused Classes

Delete the `.tab-indicator` CSS rule.

**Effort:** Small
**Risk:** Low

## Acceptance Criteria

- [ ] `.tab-indicator` removed
- [ ] No visual regressions

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by simplicity reviewer |
