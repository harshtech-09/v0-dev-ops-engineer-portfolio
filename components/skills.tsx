"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./about";

const skillCategories = [
  {
    category: "OS & Scripting",
    cmd: "dpkg --list",
    skills: [
      { name: "Linux", level: 90 },
      { name: "Bash", level: 85 },
      { name: "Python", level: 70 },
      { name: "Cron", level: 80 },
    ],
  },
  {
    category: "DevOps Tools",
    cmd: "docker ps",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "GitHub Actions", level: 80 },
      { name: "Jenkins", level: 65 },
    ],
  },
  {
    category: "Cloud & Infra",
    cmd: "aws sts get-caller-identity",
    skills: [
      { name: "AWS", level: 75 },
      { name: "EC2", level: 80 },
      { name: "IAM", level: 70 },
      { name: "S3", level: 75 },
    ],
  },
  {
    category: "Monitoring",
    cmd: "systemctl status prometheus",
    skills: [
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 85 },
      { name: "ELK Stack", level: 60 },
      { name: "Alertmanager", level: 70 },
    ],
  },
  {
    category: "Security",
    cmd: "ssh-keygen -t ed25519",
    skills: [
      { name: "SSH", level: 85 },
      { name: "Permissions", level: 80 },
      { name: "Least Privilege", level: 75 },
      { name: "Firewalls", level: 70 },
    ],
  },
];

function SkillBar({ name, level, animate }: { name: string; level: number; animate: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 shrink-0 font-mono text-xs text-foreground/80">
        {name}
      </span>
      <div className="flex-1 overflow-hidden rounded-sm bg-secondary/80">
        <div
          className="h-1.5 rounded-sm bg-primary/60 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-mono text-[10px] text-primary/60">
        {level}%
      </span>
    </div>
  );
}

export function Skills() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="px-6 py-28">
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader label="Tech Stack" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="group rounded-sm border border-primary/10 bg-card/40 backdrop-blur-sm transition-all hover:border-primary/20 border-glow-hover"
            >
              {/* Mini terminal header */}
              <div className="flex items-center gap-2 border-b border-primary/5 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/40 animate-status-blink" />
                <span className="font-mono text-[10px] text-muted-foreground truncate">
                  {cat.cmd}
                </span>
              </div>

              <div className="p-4">
                <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-primary/80">
                  {cat.category}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {cat.skills.map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      animate={animate}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
