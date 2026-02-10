const skillCategories = [
  {
    category: "OS & Scripting",
    skills: ["Linux", "Bash", "Python", "Cron"],
  },
  {
    category: "DevOps Tools",
    skills: ["Git", "Docker", "GitHub Actions", "Jenkins"],
  },
  {
    category: "Cloud & Infra",
    skills: ["AWS", "EC2", "IAM", "S3"],
  },
  {
    category: "Monitoring & Logs",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Alertmanager"],
  },
  {
    category: "Security",
    skills: ["SSH", "Permissions", "Least Privilege", "Firewalls"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
            Tech Stack
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          Tools and technologies I use to build and maintain production
          infrastructure.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h3 className="mb-4 font-mono text-xs uppercase tracking-wider text-primary">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
