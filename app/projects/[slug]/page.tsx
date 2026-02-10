import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Server,
  Wrench,
  AlertTriangle,
  Layers,
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
    <div className="min-h-screen bg-background">
      {/* Top navigation bar */}
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        {/* Title area */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-sm text-primary">
            {"~/projects/" + project.slug}
          </p>
          <h1 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {project.title}
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Github className="h-4 w-4" />
              View Repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Tools & Technologies */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Wrench className="h-4 w-4 text-primary" />
            <h2 className="font-mono text-sm uppercase tracking-wider text-primary">
              Tools & Technologies
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-secondary px-3 py-1.5 font-mono text-sm text-secondary-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* What was automated */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Server className="h-4 w-4 text-primary" />
            <h2 className="font-mono text-sm uppercase tracking-wider text-primary">
              What Was Automated
            </h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.automated}
            </p>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <h2 className="font-mono text-sm uppercase tracking-wider text-primary">
              Architecture Overview
            </h2>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {project.architecture}
            </p>
          </div>

          {/* Architecture diagram placeholder */}
          <div className="mt-4 flex items-center justify-center rounded-lg border border-dashed border-border bg-card/50 py-16">
            <div className="text-center">
              <Layers className="mx-auto mb-3 h-8 w-8 text-muted-foreground/40" />
              <p className="font-mono text-xs text-muted-foreground/60">
                Architecture diagram placeholder
              </p>
              <p className="mt-1 text-xs text-muted-foreground/40">
                Replace with your project screenshot or diagram
              </p>
            </div>
          </div>
        </section>

        {/* Key Challenges Solved */}
        <section className="mb-12">
          <div className="mb-4 flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-primary" />
            <h2 className="font-mono text-sm uppercase tracking-wider text-primary">
              Key Challenges Solved
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {project.challenges.map((challenge) => (
              <li
                key={challenge}
                className="flex gap-3 rounded-lg border border-border bg-card p-4"
              >
                <span className="mt-0.5 block h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {challenge}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom navigation */}
        <div className="border-t border-border pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </div>
      </main>
    </div>
  );
}
