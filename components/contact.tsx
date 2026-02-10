import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm uppercase tracking-widest text-primary">
            Contact
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
          Interested in working together or have a question? Reach out through
          any of the channels below.
        </p>

        <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-lg border border-border bg-card p-6 text-center transition-colors hover:border-primary/30"
            >
              <link.icon className="mb-3 h-5 w-5 text-primary" />
              <span className="mb-1 text-sm font-medium text-foreground">
                {link.label}
              </span>
              <span className="text-xs text-muted-foreground">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
