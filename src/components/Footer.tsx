"use client";

import { LinkedInIcon, MailIcon, MicrophoneIcon } from "./icons";

const socialLinks = [
  {
    href: "https://linkedin.com/in/mohdayyubi",
    label: "LinkedIn",
    icon: <LinkedInIcon size={20} />,
  },
  {
    href: "https://mohdayyubi.substack.com",
    label: "Substack",
    icon: <MailIcon size={20} />,
  },
  {
    href: "#podcast",
    label: "Podcast",
    icon: <MicrophoneIcon size={20} />,
  },
];

const navItems = ["About", "Services", "Projects", "Content", "Speaking", "Contact"];

const handleNavClick = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function Footer() {
  return (
    <footer className="relative mt-16 md:mt-32">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-2xl font-bold mb-4"
          >
            Mohammad
          </a>
          <p className="text-muted-foreground max-w-md">
            Enterprise tech. AI products. Lessons from history.
            <br />
            Based in Riyadh, Saudi Arabia.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 md:mb-12">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(`#${item.toLowerCase()}`);
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-10 md:mb-12">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted/50 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/50 transition-all"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mohammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
