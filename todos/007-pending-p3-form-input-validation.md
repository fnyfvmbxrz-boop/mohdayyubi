---
status: pending
priority: p3
issue_id: "007"
tags: [code-review, security, forms]
dependencies: []
---

# Add Form Input Length Limits

## Problem Statement

Contact form inputs have no `maxLength` attributes, potentially allowing very large payloads.

## Findings

- **File**: `src/components/ContactForm.tsx`
- **Issue**: No maxLength on name, email, message fields
- **Impact**: Could allow abuse through oversized submissions

## Proposed Solutions

### Option A: Add maxLength Attributes (Recommended)

```tsx
<input
  type="text"
  id="name"
  required
  maxLength={100}
  ...
/>

<textarea
  id="message"
  required
  rows={4}
  maxLength={5000}
  ...
/>
```

**Effort:** Small
**Risk:** Low

## Acceptance Criteria

- [ ] Name field has maxLength={100}
- [ ] Email field has maxLength={254}
- [ ] Message field has maxLength={5000}

## Work Log

| Date | Action | Learnings |
|------|--------|-----------|
| 2026-02-09 | Created todo from code review | Found by security sentinel |
