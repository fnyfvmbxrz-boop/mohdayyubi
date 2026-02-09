"use client";

import { useState, useEffect, FormEvent } from "react";
import { MailIcon, LinkedInIcon, CheckIcon } from "./icons";

// Email obfuscation to prevent spam bots from scraping
function useObfuscatedEmail() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    // Construct email client-side only
    const user = "mail";
    const domain = "mohdayyubi";
    const tld = "com";
    setEmail(`${user}@${domain}.${tld}`);
  }, []);

  return email;
}

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
  const obfuscatedEmail = useObfuscatedEmail();
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

    // Web3Forms configuration (access key is public by design - tied to recipient email)
    const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
    const WEB3FORMS_KEY = "a959d109-75cb-4ddb-8387-24c0c005552f";

    setStatus("loading");

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
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
            maxLength={100}
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
            maxLength={254}
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
          maxLength={5000}
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
          {obfuscatedEmail ? (
            <a
              href={`mailto:${obfuscatedEmail}`}
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <MailIcon size={16} />
              {obfuscatedEmail}
            </a>
          ) : (
            <span className="text-muted-foreground flex items-center gap-2">
              <MailIcon size={16} />
              Loading...
            </span>
          )}
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
