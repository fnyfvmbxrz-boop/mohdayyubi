"use client";

import { useState, FormEvent } from "react";
import { MailIcon, LinkedInIcon, CheckIcon } from "./icons";

interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

interface ContactFormProps {
  showDirectContact?: boolean;
}

export function ContactForm({ showDirectContact = true }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    if (!FORM_ENDPOINT) {
      console.error("Form endpoint not configured. Set NEXT_PUBLIC_FORM_ENDPOINT environment variable.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `Portfolio Contact: ${formData.topic}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", topic: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card !p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[#22c55e]/10 flex items-center justify-center mx-auto mb-6">
          <CheckIcon size={32} className="text-[#22c55e]" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
        <p className="text-muted-foreground">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-medium mb-2">
          What&apos;s this about?
        </label>
        <select
          id="topic"
          required
          value={formData.topic}
          onChange={handleChange("topic")}
        >
          <option value="">Select a topic</option>
          <option value="enterprise">Enterprise Consulting</option>
          <option value="ai">AI Products</option>
          <option value="speaking">Speaking</option>
          <option value="collaboration">Collaboration</option>
          <option value="other">Something Else</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange("message")}
          placeholder="Tell me what's on your mind..."
          className="resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Try again or email me directly.
        </p>
      )}

      {showDirectContact && (
        <div className="pt-6 border-t border-border flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="mailto:hello@mohdayyubi.com"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <MailIcon size={16} />
            hello@mohdayyubi.com
          </a>
          <a
            href="https://linkedin.com/in/mohdayyubi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </div>
      )}
    </form>
  );
}
