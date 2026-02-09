---
status: pending
priority: p2
issue_id: "003"
tags: [code-review, performance, cleanup]
dependencies: []
---

# Remove Unused Inter Font

## Problem Statement

The Inter font is imported and configured in `layout.tsx` but never used anywhere in the styling. This adds unnecessary payload to page load.

## Findings

- **File**: `src/app/layout.tsx` (lines 8-12)
- **Issue**: Inter font loaded but CSS uses Plus Jakarta Sans
- **Impact**: ~20-40KB unnecessary font files downloaded

## Proposed Solutions

### Option A: Remove Inter Import (Recommended)

```typescript
// Remove these lines
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

**Effort:** Small
**Risk:** Low

## Recommended Action

Remove the Inter font import entirely

## Technical Details

**Affected files:**
- `src/app/layout.tsx`

## Acceptance Criteria

- [ ] Inter font import removed
- [ ] `--font-inter` CSS variable references removed (if any)
- [ ] Site still renders correctly with Plus Jakarta Sans

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by simplicity reviewer |
