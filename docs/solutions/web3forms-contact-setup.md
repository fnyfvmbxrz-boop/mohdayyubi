---
title: "Setting Up Web3Forms for Static Site Contact Form"
category: integration-issues
module: contact-form
tags: [web3forms, forms, nextjs, static-site]
symptoms:
  - Contact form needs backend
  - Static site can't process form submissions
  - Need email notifications from form
date_solved: 2026-02-09
severity: low
---

# Setting Up Web3Forms for Static Site Contact Form

## Problem

Static sites (Next.js with `output: "export"`) have no backend to process contact form submissions. Need a way to receive form data and get email notifications.

## Solution

Use Web3Forms - a free form backend service (250 submissions/month free tier).

### Step 1: Get Access Key

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email
3. Click "Create Access Key"
4. Check email for access key (format: `a959d109-75cb-4ddb-8387-24c0c005552f`)

### Step 2: Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://api.web3forms.com/submit
NEXT_PUBLIC_WEB3FORMS_KEY=your-access-key-here
```

### Step 3: Form Submission Code

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  const response = await fetch(process.env.NEXT_PUBLIC_FORM_ENDPOINT!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
      subject: `Contact Form: ${formData.topic}`,
      from_name: formData.name,
      ...formData,
    }),
  });

  if (response.ok) {
    // Success
  }
};
```

### Key Points

- `access_key` is required in every request
- `subject` customizes email subject line
- `from_name` shows sender name in email
- All other fields are included in email body

## Why Web3Forms Over Formspree?

| Feature | Web3Forms | Formspree |
|---------|-----------|-----------|
| Free tier | 250/month | 50/month |
| Account required | No | Yes |
| Setup complexity | Just access key | Create form in dashboard |

## Prevention

1. **Don't commit access key** - Ensure `.env*` in `.gitignore`
2. **Add input validation** - Use `maxLength` on inputs to prevent abuse
3. **Handle errors gracefully** - Show user-friendly error message if submission fails

## Related

- Web3Forms documentation
- Next.js environment variables
