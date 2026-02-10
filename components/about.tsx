"use client";

import { useEffect, useRef, useState } from "react";
import { Server, Terminal, GitBranch, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Linux Administration",
    stat: "99.9%",
    statLabel: "uptime",
    description:
      "Deep experience with Linux server management, systemd services, user permissions, and production-grade system hardening.",
  },
  {
    icon: Terminal,
    title: "Automation",
    stat: "500+",
    statLabel: "scripts",
    description:
      "Writing maintainable Bash scripts and scheduling automated tasks for monitoring, backups, log rotation, and deployments.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    stat: "<5min",
    statLabel: "deploys",
    description:
      "Designing end-to-end CI/CD workflows using GitHub Actions, Docker, and automated testing frameworks.",
  },
  {
    icon: BarChart3,
    title: "Cloud Monitoring",
    stat: "24/7",
    statLabel: "observability",
    description:
      "Building observability stacks with Prometheus, Grafana, and cloud-native tooling for proactive incident response.",
  },
];

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <span className="font-mono text-xs text-accent">{"#"}</span>
      <h2 className="font-mono text-sm font-bold uppercase tracking-widest text-primary text-glow">
        {label}
      </h2>
      <div className="h-px flex-1 bg-primary/10" />
      <span className="font-mono text-xs text-muted-foreground">
        {"// section"}
      </span>
    </div>
  );
}

export { SectionHeader };

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="px-6 py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader label="About Me" />

        {/* Terminal-style about box */}
        <div className="mb-16 rounded-sm border border-primary/10 bg-card/60 p-6 backdrop-blur-sm md:p-8 border-glow">
          <div className="mb-3 flex items-center gap-2">
            <span className="font-mono text-xs text-accent">$</span>
            <span className="font-mono text-xs text-muted-foreground">
              cat ~/about.md
            </span>
          </div>
          <p className="max-w-3xl font-mono text-sm leading-relaxed text-foreground/80">
            I am a DevOps engineer focused on building reliable, automated
            infrastructure. I work close to the metal with Linux, write scripts
            that eliminate manual toil, design CI/CD pipelines that ship code
            safely, and set up monitoring that catches problems before users do.
          </p>
        </div>

        {/* Stats grid */}
        <div
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-sm border border-primary/10 bg-card/40 p-5 transition-all hover:border-primary/30 hover:bg-card/60 border-glow-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Top row: icon + stat */}
              <div className="mb-4 flex items-start justify-between">
                <item.icon className="h-5 w-5 text-primary/60 transition-colors group-hover:text-primary" />
                <div className="text-right">
                  <span className="font-mono text-lg font-bold text-primary text-glow">
                    {item.stat}
                  </span>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {item.statLabel}
                  </p>
                </div>
              </div>

              <h3 className="mb-2 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {item.title}
              </h3>
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
