"use client";

import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/projects";
import { SectionHeader } from "./about";

const statusLabels = ["RUNNING", "DEPLOYED", "ACTIVE"];

export function Projects() {
  return (
    <section id="projects" className="px-6 py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader label="Projects" />

        {/* Process table header */}
        <div className="mb-4 hidden border-b border-primary/10 pb-2 lg:flex">
          <span className="w-12 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            PID
          </span>
          <span className="w-20 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            STATUS
          </span>
          <span className="flex-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            PROCESS
          </span>
          <span className="w-40 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            ACTIONS
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="group rounded-sm border border-primary/10 bg-card/40 transition-all hover:border-primary/20 hover:bg-card/60 backdrop-blur-sm border-glow-hover"
            >
              {/* Desktop: process table row */}
              <div className="hidden items-start gap-4 p-5 lg:flex">
                {/* PID */}
                <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
                  {String(index + 1).padStart(4, "0")}
                </span>

                {/* Status */}
                <div className="flex w-20 shrink-0 items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-status-blink" />
                  <span className="font-mono text-[10px] uppercase text-primary/80">
                    {statusLabels[index]}
                  </span>
                </div>

                {/* Process info */}
                <div className="flex-1">
                  <h3 className="mb-1 font-mono text-sm font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-3 font-mono text-xs leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-sm bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-primary/70 ring-1 ring-primary/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex w-40 shrink-0 flex-col gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-primary transition-all hover:text-glow"
                  >
                    inspect
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3 w-3" />
                    source
                  </a>
                </div>
              </div>

              {/* Mobile: card layout */}
              <div className="p-5 lg:hidden">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-status-blink" />
                  <span className="font-mono text-[10px] uppercase text-primary/80">
                    {statusLabels[index]}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    PID {String(index + 1).padStart(4, "0")}
                  </span>
                </div>

                <h3 className="mb-2 font-mono text-sm font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-3 font-mono text-xs leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="rounded-sm bg-primary/5 px-2 py-0.5 font-mono text-[10px] text-primary/70 ring-1 ring-primary/10"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-primary"
                  >
                    inspect <ArrowUpRight className="h-3 w-3" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground"
                  >
                    <Github className="h-3 w-3" />
                    source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
