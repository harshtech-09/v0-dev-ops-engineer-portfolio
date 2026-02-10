import { Github, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-4 font-mono text-sm text-primary">
          {"Hello, I'm"}
        </p>
        <h1 className="mb-2 text-balance text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Your Name
        </h1>
        <p className="mb-6 font-mono text-base text-muted-foreground md:text-lg">
          DevOps Engineer | Linux | Cloud | Automation
        </p>
        <p className="mx-auto mb-10 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          I build, automate, and monitor scalable production systems.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
