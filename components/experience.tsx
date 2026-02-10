const timeline = [
  {
    period: "2024 - Present",
    title: "Advanced Infrastructure & Monitoring",
    description:
      "Deploying production-grade monitoring stacks with Prometheus and Grafana on AWS. Building custom exporters, designing alert routing, and implementing Infrastructure-as-Code practices.",
    tags: ["Prometheus", "Grafana", "AWS", "Terraform"],
  },
  {
    period: "2023 - 2024",
    title: "CI/CD & Containerization",
    description:
      "Designed and maintained CI/CD pipelines with GitHub Actions and Jenkins. Containerized applications with Docker and managed multi-container environments using Docker Compose.",
    tags: ["Docker", "GitHub Actions", "Jenkins", "Nginx"],
  },
  {
    period: "2022 - 2023",
    title: "Linux Administration & Scripting",
    description:
      "Managed Linux servers for development and staging environments. Wrote Bash automation scripts for log analysis, backup management, and system health monitoring via cron jobs.",
    tags: ["Linux", "Bash", "Cron", "Systemd"],
  },
  {
    period: "2021 - 2022",
    title: "Foundations: Networking & OS Fundamentals",
    description:
      "Built a strong foundation in networking (TCP/IP, DNS, HTTP), operating system internals, and version control with Git. Started learning Linux command-line tools and shell scripting.",
    tags: ["Networking", "Git", "Linux CLI", "SSH"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
            Learning Journey
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          A timeline of hands-on learning through real-world projects and
          continuous skill development.
        </p>

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <div
                key={item.title}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start gap-8`}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 top-1 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2" />

                {/* Content card */}
                <div
                  className={`ml-10 flex-1 md:ml-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <span className="mb-1 inline-block font-mono text-xs text-primary">
                    {item.period}
                  </span>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <div
                    className={`flex flex-wrap gap-1.5 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-secondary px-2 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
