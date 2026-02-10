"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./about";

const commits = [
  {
    hash: "a3f8d1e",
    date: "2024-present",
    branch: "main",
    message: "feat: Advanced Infrastructure & Monitoring",
    body: "Deploying production-grade monitoring stacks with Prometheus and Grafana on AWS. Building custom exporters, designing alert routing, and implementing Infrastructure-as-Code practices.",
    tags: ["Prometheus", "Grafana", "AWS", "Terraform"],
  },
  {
    hash: "7c2b9f4",
    date: "2023-2024",
    branch: "main",
    message: "feat: CI/CD & Containerization",
    body: "Designed and maintained CI/CD pipelines with GitHub Actions and Jenkins. Containerized applications with Docker and managed multi-container environments using Docker Compose.",
    tags: ["Docker", "GitHub Actions", "Jenkins", "Nginx"],
  },
  {
    hash: "e5d1a8b",
    date: "2022-2023",
    branch: "develop",
    message: "feat: Linux Administration & Scripting",
    body: "Managed Linux servers for development and staging environments. Wrote Bash automation scripts for log analysis, backup management, and system health monitoring via cron jobs.",
    tags: ["Linux", "Bash", "Cron", "Systemd"],
  },
  {
    hash: "1b4f6c2",
    date: "2021-2022",
    branch: "develop",
    message: "init: Foundations - Networking & OS",
    body: "Built a strong foundation in networking (TCP/IP, DNS, HTTP), operating system internals, and version control with Git. Started learning Linux command-line tools and shell scripting.",
    tags: ["Networking", "Git", "Linux CLI", "SSH"],
  },
];

export function Experience() {
  const [visibleCommits, setVisibleCommits] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index
            );
            setVisibleCommits((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = ref.current?.querySelectorAll("[data-index]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="px-6 py-28">
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeader label="Git Log" />

        {/* Git log header */}
        <div className="mb-6 rounded-sm border border-primary/10 bg-card/40 px-4 py-2 backdrop-blur-sm border-glow">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">$</span>{" "}
            git log --oneline --graph --all
          </p>
        </div>

        {/* Git log entries */}
        <div className="relative">
          {/* Vertical git branch line */}
          <div className="absolute top-0 bottom-0 left-[11px] w-px bg-primary/15 md:left-[13px]" />

          <div className="flex flex-col gap-6">
            {commits.map((commit, index) => (
              <div
                key={commit.hash}
                data-index={index}
                className={`relative pl-8 transition-all duration-500 md:pl-10 ${
                  visibleCommits.has(index)
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Git commit dot */}
                <div className="absolute left-1.5 top-2 h-3 w-3 rounded-full border-2 border-primary/60 bg-background md:left-2 md:h-3.5 md:w-3.5">
                  <div className="absolute inset-0.5 rounded-full bg-primary/30 animate-status-blink" />
                </div>

                {/* Commit card */}
                <div className="rounded-sm border border-primary/10 bg-card/40 backdrop-blur-sm transition-all hover:border-primary/20 border-glow-hover">
                  {/* Commit header */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-primary/5 px-4 py-2">
                    <span className="font-mono text-xs font-bold text-accent">
                      {commit.hash}
                    </span>
                    <span className="rounded-sm bg-primary/10 px-1.5 py-0.5 font-mono text-[10px] text-primary/70">
                      {commit.branch}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {commit.date}
                    </span>
                  </div>

                  {/* Commit body */}
                  <div className="p-4">
                    <p className="mb-2 font-mono text-sm font-semibold text-foreground">
                      {commit.message}
                    </p>
                    <p className="mb-3 font-mono text-xs leading-relaxed text-muted-foreground">
                      {commit.body}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {commit.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-sm bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-primary/60 ring-1 ring-primary/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
