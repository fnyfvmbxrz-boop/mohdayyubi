---
status: pending
priority: p2
issue_id: "004"
tags: [code-review, css, bug]
dependencies: []
---

# Add Missing .icon-btn CSS Class

## Problem Statement

The Footer component uses `.icon-btn` class but it's not defined in globals.css, causing unstyled social link buttons.

## Findings

- **File**: `src/components/Footer.tsx` (line 53)
- **Usage**: `className="icon-btn"`
- **Issue**: Class not defined in `src/app/globals.css`

## Proposed Solutions

### Option A: Add .icon-btn Class (Recommended)

Add to globals.css:

```css
.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
  background: var(--muted);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.icon-btn:hover {
  background: var(--border);
}
```

**Effort:** Small
**Risk:** Low

## Recommended Action

Add the missing CSS class

## Technical Details

**Affected files:**
- `src/app/globals.css`

## Acceptance Criteria

- [ ] `.icon-btn` class defined in globals.css
- [ ] Footer social icons are properly styled
- [ ] Hover state works

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by architecture review |
