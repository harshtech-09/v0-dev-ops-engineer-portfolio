import { Mail, Github, Linkedin } from "lucide-react";
import { SectionHeader } from "./about";

const connections = [
  {
    label: "Email",
    value: "harshad29k@outlook.com",
    href: "mailto:",
    icon: Mail,
    protocol: "smtp://",
  },
  {
    label: "GitHub",
    value: "github.com/harshtech-09",
    href: "https://github.com/harshtech-09",
    icon: Github,
    protocol: "https://",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com",
    icon: Linkedin,
    protocol: "https://",
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="relative z-10 mx-auto max-w-4xl">
        <SectionHeader label="Connect" />

        {/* Connection prompt */}
        <div className="mb-8 rounded-sm border border-primary/10 bg-card/40 px-4 py-3 backdrop-blur-sm border-glow">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">$</span> ssh -i ~/.ssh/id_ed25519
            contact@devops-engineer
          </p>
          <p className="mt-1 font-mono text-xs text-primary/60">
            Connection established. Available channels:
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {connections.map((conn) => (
            <a
              key={conn.label}
              href={conn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-sm border border-primary/10 bg-card/40 p-5 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/60 border-glow-hover"
            >
              <div className="mb-3 flex items-center gap-2">
                <conn.icon className="h-4 w-4 text-primary/50 transition-colors group-hover:text-primary" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-status-blink" />
              </div>
              <p className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-foreground">
                {conn.label}
              </p>
              <p className="font-mono text-[10px] text-muted-foreground">
                <span className="text-accent/60">{conn.protocol}</span>
                {conn.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
