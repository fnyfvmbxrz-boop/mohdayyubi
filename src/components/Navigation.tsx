"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { MenuIcon, CloseIcon } from "./icons";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#content", label: "Content" },
  { href: "#speaking", label: "Speaking" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveSection("");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav
          className={`glass-card max-w-3xl mx-auto px-4 py-2.5 transition-all duration-300 ${
            isScrolled ? "shadow-lg" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={scrollToTop}
              className="text-base font-semibold tracking-tight hover:text-muted-foreground transition-colors"
            >
              Mohammad
            </a>

            {/* Desktop Navigation */}
            <div
              ref={navRef}
              className="hidden md:flex items-center gap-0.5"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={activeSection === link.href && pathname === "/" ? "page" : undefined}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
                    activeSection === link.href && pathname === "/"
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <div className="ml-2 pl-2 border-l border-border">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pt-3 pb-1 border-t border-border mt-2.5">
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      activeSection === link.href && pathname === "/"
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
