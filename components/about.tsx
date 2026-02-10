import { Server, Terminal, GitBranch, BarChart3 } from "lucide-react";

const highlights = [
  {
    icon: Server,
    title: "Linux Administration",
    description:
      "Deep experience with Linux server management, systemd services, user permissions, and production-grade system hardening.",
  },
  {
    icon: Terminal,
    title: "Automation with Bash & Cron",
    description:
      "Writing maintainable Bash scripts and scheduling automated tasks for monitoring, backups, log rotation, and deployments.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description:
      "Designing and maintaining end-to-end CI/CD workflows using GitHub Actions, Docker, and automated testing frameworks.",
  },
  {
    icon: BarChart3,
    title: "Cloud & Monitoring",
    description:
      "Building observability stacks with Prometheus, Grafana, and cloud-native tooling on AWS for proactive incident response.",
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
            About Me
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          I am a DevOps engineer focused on building reliable, automated
          infrastructure. I enjoy working close to the metal with Linux, writing
          scripts that eliminate manual toil, designing CI/CD pipelines that ship
          code safely, and setting up monitoring that catches problems before
          users do.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/30"
            >
              <item.icon className="mb-4 h-6 w-6 text-primary" />
              <h3 className="mb-2 text-sm font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
