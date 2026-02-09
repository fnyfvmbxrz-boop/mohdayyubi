"use client";

import { LinkedInIcon, MailIcon } from "./icons";

const socialLinks = [
  {
    href: "https://linkedin.com/in/mohdayyubi",
    label: "LinkedIn",
    icon: <LinkedInIcon size={18} />,
  },
  {
    href: "https://mohdayyubi.substack.com",
    label: "Substack",
    icon: <MailIcon size={18} />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand & tagline */}
          <div>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg font-semibold hover:text-muted-foreground transition-colors"
            >
              Mohammad
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Enterprise tech. AI products. History.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammad. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Riyadh, Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
