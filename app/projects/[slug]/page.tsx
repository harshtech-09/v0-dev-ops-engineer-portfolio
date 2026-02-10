import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Wrench,
  AlertTriangle,
  Layers,
  Server,
} from "lucide-react";
import { projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | DevOps Portfolio`,
    description: project.problem,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="scanlines min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-primary/10">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            cd ../projects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Title area */}
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-status-blink" />
            <span className="font-mono text-[10px] uppercase text-primary/60">
              RUNNING
            </span>
          </div>

          <p className="mb-3 font-mono text-xs text-accent">
            {"~/projects/" + project.slug}
          </p>
          <h1 className="mb-4 text-balance font-mono text-2xl font-bold tracking-tight text-foreground text-glow md:text-3xl">
            {project.title}
          </h1>
          <p className="max-w-2xl font-mono text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs text-primary transition-all hover:bg-primary/10 border-glow-hover"
            >
              <Github className="h-3.5 w-3.5" />
              view --source
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/50 px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:border-primary/20 hover:text-foreground"
              >
                open --demo
              </a>
            )}
          </div>
        </div>

        {/* Tools */}
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Wrench className="h-3.5 w-3.5 text-primary/60" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Dependencies
            </h2>
            <div className="h-px flex-1 bg-primary/10" />
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-sm bg-primary/5 px-3 py-1 font-mono text-xs text-primary/70 ring-1 ring-primary/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* What was automated */}
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Server className="h-3.5 w-3.5 text-primary/60" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Automation Scope
            </h2>
            <div className="h-px flex-1 bg-primary/10" />
          </div>
          <div className="rounded-sm border border-primary/10 bg-card/40 p-5 backdrop-blur-sm border-glow">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] text-accent">$</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                cat automation.log
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-foreground/80">
              {project.automated}
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <Layers className="h-3.5 w-3.5 text-primary/60" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Architecture
            </h2>
            <div className="h-px flex-1 bg-primary/10" />
          </div>
          <div className="rounded-sm border border-primary/10 bg-card/40 p-5 backdrop-blur-sm border-glow">
            <div className="mb-2 flex items-center gap-2">
              <span className="font-mono text-[10px] text-accent">$</span>
              <span className="font-mono text-[10px] text-muted-foreground">
                describe --architecture
              </span>
            </div>
            <p className="font-mono text-sm leading-relaxed text-foreground/80">
              {project.architecture}
            </p>
          </div>

          {/* Diagram placeholder */}
          <div className="mt-4 flex items-center justify-center rounded-sm border border-dashed border-primary/10 bg-card/20 py-14">
            <div className="text-center">
              <pre className="mb-3 font-mono text-[10px] text-primary/20 leading-tight">
{`   ┌──────┐     ┌──────┐     ┌──────┐
   │ SRC  │────>│ BUILD│────>│ PROD │
   └──────┘     └──────┘     └──────┘`}
              </pre>
              <p className="font-mono text-[10px] text-muted-foreground/40">
                Replace with your architecture diagram
              </p>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <AlertTriangle className="h-3.5 w-3.5 text-primary/60" />
            <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Challenges Resolved
            </h2>
            <div className="h-px flex-1 bg-primary/10" />
          </div>
          <div className="flex flex-col gap-2">
            {project.challenges.map((challenge, i) => (
              <div
                key={challenge}
                className="flex gap-3 rounded-sm border border-primary/10 bg-card/40 p-4 backdrop-blur-sm transition-all hover:border-primary/20 border-glow-hover"
              >
                <span className="mt-0.5 font-mono text-[10px] text-accent/60 shrink-0">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <p className="font-mono text-xs leading-relaxed text-foreground/80">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back nav */}
        <div className="border-t border-primary/10 pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            cd ../projects
          </Link>
        </div>
      </main>
    </div>
  );
}
