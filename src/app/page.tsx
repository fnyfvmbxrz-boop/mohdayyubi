"use client";

import { useState, useEffect, useRef } from "react";
import { ContactForm } from "@/components/ContactForm";
import { MailIcon, MicrophoneIcon } from "@/components/icons";

const SECTION_IDS = {
  hero: 0,
  about: 1,
  services: 2,
  projects: 3,
  content: 4,
  speaking: 5,
  contact: 6,
} as const;

const sections = Object.keys(SECTION_IDS);

interface AboutCard {
  id: string;
  label: string;
  desc: string;
}

const aboutCards: AboutCard[] = [
  { id: "enterprise", label: "Enterprise Transformation", desc: "Strategy to working systems" },
  { id: "ai", label: "AI That Ships", desc: "Real metrics, not demos" },
  { id: "gtm", label: "GTM & Revenue", desc: "Hunting & farming in GCC" },
  { id: "building", label: "Building Things", desc: "Tools I want to exist" },
];

interface Service {
  num: string;
  title: string;
  desc: string;
  for: string;
}

const services: Service[] = [
  {
    num: "01",
    title: "Enterprise Transformation",
    desc: "Needs assessment, platform selection, implementation, cloud migrations, and post-go-live support.",
    for: "CIOs, CTOs at mid-to-large enterprises",
  },
  {
    num: "02",
    title: "AI That Ships",
    desc: "Use-case discovery, feasibility assessment, build vs. buy, deployment planning, and custom AI development.",
    for: "Organizations past the pilot phase",
  },
  {
    num: "03",
    title: "GTM & Revenue",
    desc: "Sales strategy, pipeline development, market entry, positioning, and account expansion.",
    for: "B2B companies growing in GCC",
  },
];

interface Project {
  id: string;
  name: string;
  desc: string;
  status: string;
  statusClass: string;
}

const projects: Project[] = [
  {
    id: "screener",
    name: "Shariah-Compliant Stock Screener",
    desc: "US and Indian markets. Returns and ethics, together.",
    status: "Active",
    statusClass: "status-active",
  },
  {
    id: "crm",
    name: "SMB CRM",
    desc: "Does less on purpose. No bloated features.",
    status: "In Development",
    statusClass: "status-dev",
  },
  {
    id: "marketing",
    name: "AI Marketing Agent",
    desc: "Account research, intelligence, campaign execution.",
    status: "In Development",
    statusClass: "status-dev",
  },
  {
    id: "travel",
    name: "TravelX",
    desc: "Enterprise travel management for mid-market.",
    status: "Planning",
    statusClass: "status-soon",
  },
  {
    id: "security",
    name: "SecureScan GCC",
    desc: "VAPT platform for Saudi enterprises.",
    status: "Planning",
    statusClass: "status-soon",
  },
];

const speakingTopics = [
  "Enterprise Technology — What Actually Works",
  "AI — Beyond the Hype",
  "Go-to-Market in the GCC",
  "Lessons from History",
];

const speakingFormats = ["Keynotes", "Panels", "Fireside Chats", "Podcasts", "Workshops"];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: containerRef.current,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add active class for reveal animations
          entry.target.querySelectorAll(".reveal").forEach((el) => {
            el.classList.add("active");
          });
          entry.target.querySelectorAll(".stagger-children").forEach((el) => {
            el.classList.add("active");
          });

          // Update active section for dots
          const index = sectionRefs.current.indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            setActiveSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Section indicator dots */}
      <nav className="section-dots" aria-label="Section navigation">
        {sections.map((section, i) => (
          <button
            key={section}
            onClick={() => scrollToSection(i)}
            className={`section-dot ${activeSection === i ? "active" : ""}`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </nav>

      <div ref={containerRef} className="snap-container">
        {/* Hero Section */}
        <section
          ref={(el) => { sectionRefs.current[SECTION_IDS.hero] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="reveal">
              <p className="section-number mb-6">Based in Riyadh</p>
              <h1 className="display-text mb-8">Mohammad</h1>
              <p className="subheadline max-w-2xl mb-12">
                I sell enterprise tech, build AI products, and dig into history
                for lessons that still apply today.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection(SECTION_IDS.about)}
                  className="btn btn-primary"
                >
                  Explore
                </button>
                <button
                  onClick={() => scrollToSection(SECTION_IDS.contact)}
                  className="btn btn-secondary"
                >
                  Get in touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={(el) => { sectionRefs.current[SECTION_IDS.about] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <p className="section-number mb-4">01 / About</p>
                <h2 className="headline mb-8">
                  Bridging buying and using enterprise tech
                </h2>
                <div className="divider" />
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    There&apos;s a gap between enterprise software getting sold
                    and getting used. That&apos;s where I operate. I work with
                    organizations across Saudi Arabia and the GCC to close that
                    gap.
                  </p>
                  <p>
                    On the side, I build AI products and study history for
                    patterns that make me better at everything else.
                  </p>
                </div>
              </div>

              <div className="stagger-children grid grid-cols-2 gap-4">
                {aboutCards.map((item) => (
                  <div key={item.id} className="card">
                    <h3 className="font-semibold mb-2">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          ref={(el) => { sectionRefs.current[SECTION_IDS.services] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="reveal mb-16">
              <p className="section-number mb-4">02 / Services</p>
              <h2 className="headline">Three things. All connected.</h2>
            </div>

            <div className="stagger-children grid md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.num} className="card">
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {service.num}
                  </span>
                  <h3 className="text-xl font-semibold mt-4 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Best for
                    </span>
                    <p className="text-sm font-medium mt-1">{service.for}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={(el) => { sectionRefs.current[SECTION_IDS.projects] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="reveal mb-12">
              <p className="section-number mb-4">03 / Projects</p>
              <h2 className="headline mb-4">Things I&apos;m building</h2>
              <p className="subheadline max-w-xl">
                Tools I wanted to exist, so I made them.
              </p>
            </div>

            <div className="stagger-children space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card flex flex-col sm:flex-row sm:items-center justify-between gap-4 !p-6"
                >
                  <div>
                    <h3 className="font-semibold mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.desc}
                    </p>
                  </div>
                  <span className={`status ${project.statusClass} shrink-0`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section
          id="content"
          ref={(el) => { sectionRefs.current[SECTION_IDS.content] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="reveal mb-16 text-center">
              <p className="section-number mb-4">04 / Content</p>
              <h2 className="headline">Where the thinking happens out loud</h2>
            </div>

            <div className="stagger-children grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Newsletter */}
              <div className="card text-center">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                  <MailIcon size={28} className="text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Chips for Thought</h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Enterprise technology through a sharper lens. Lessons from
                  history that still apply today.
                </p>
                <a
                  href="https://mohdayyubi.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Subscribe
                </a>
              </div>

              {/* Podcast */}
              <div className="card text-center">
                <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6">
                  <MicrophoneIcon size={28} className="text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">The Hittin Files</h3>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Lessons from history that still apply today. Leadership,
                  strategy, negotiation.
                </p>
                <div className="flex gap-3 justify-center">
                  <a href="#spotify" className="btn btn-secondary">
                    Spotify
                  </a>
                  <a href="#apple" className="btn btn-secondary">
                    Apple
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Speaking Section */}
        <section
          id="speaking"
          ref={(el) => { sectionRefs.current[SECTION_IDS.speaking] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <p className="section-number mb-4">05 / Speaking</p>
                <h2 className="headline mb-6">Real experience, no slides</h2>
                <div className="divider" />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I talk about the things I work on. No rehearsed keynotes.
                  Just experience turned into something useful for your
                  audience.
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {speakingFormats.map((format) => (
                    <span
                      key={format}
                      className="px-4 py-2 text-sm bg-muted rounded-full border border-border"
                    >
                      {format}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => scrollToSection(SECTION_IDS.contact)}
                  className="btn btn-primary"
                >
                  Book me
                </button>
              </div>

              <div className="stagger-children space-y-4">
                {speakingTopics.map((topic, i) => (
                  <div
                    key={topic}
                    className="flex items-center gap-4 p-5 bg-muted rounded-2xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center font-semibold">
                      {i + 1}
                    </div>
                    <span className="font-medium">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={(el) => { sectionRefs.current[SECTION_IDS.contact] = el; }}
          className="snap-section"
        >
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="reveal text-center mb-12">
              <p className="section-number mb-4">06 / Contact</p>
              <h2 className="headline mb-4">Let&apos;s talk</h2>
              <p className="subheadline max-w-xl mx-auto">
                Whether it&apos;s a project, a speaking opportunity, or just a
                good conversation — I&apos;m easy to reach.
              </p>
            </div>

            <div className="reveal reveal-delay-2 max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
