import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          Real-world projects focused on automation, monitoring, and
          infrastructure reliability.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col rounded-lg border border-border bg-card transition-colors hover:border-primary/30"
            >
              {/* Terminal-style header bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  ~/{project.slug}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>

                <div className="mb-6 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 5).map((tool) => (
                    <span
                      key={tool}
                      className="rounded bg-secondary px-2 py-1 font-mono text-xs text-primary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    View Details
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
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
