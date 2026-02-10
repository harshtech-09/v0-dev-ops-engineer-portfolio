"use client";

import { useTypingEffect } from "@/hooks/use-typing-effect";
import { useEffect, useState } from "react";

const commandLines = [
  { prompt: "$ whoami", output: "devops-engineer" },
  { prompt: "$ cat /etc/role", output: "Linux | Cloud | Automation" },
  {
    prompt: "$ uptime",
    output: "Focused on building reliable systems since 2021",
  },
];

const asciiArt = `
  ____             ___              
 |  _ \\  _____   _/ _ \\ _ __  ___  
 | | | |/ _ \\ \\ / / | | | '_ \\/ __| 
 | |_| |  __/\\ V /| |_| | |_) \\__ \\ 
 |____/ \\___| \\_/  \\___/| .__/|___/ 
                        |_|         
`;

export function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showOutput, setShowOutput] = useState<boolean[]>([false, false, false]);
  const [showAscii, setShowAscii] = useState(false);

  const line0 = useTypingEffect(
    commandLines[0].prompt,
    50,
    800
  );
  const line1 = useTypingEffect(
    commandLines[1].prompt,
    50,
    2600
  );
  const line2 = useTypingEffect(
    commandLines[2].prompt,
    50,
    4400
  );

  const typedLines = [line0, line1, line2];

  useEffect(() => {
    // Show ASCII art first
    const asciiTimer = setTimeout(() => setShowAscii(true), 200);

    // Show each output after typing completes
    const timers = [
      setTimeout(() => {
        setCurrentLine(0);
        setShowOutput((prev) => {
          const next = [...prev];
          next[0] = true;
          return next;
        });
      }, 2200),
      setTimeout(() => {
        setCurrentLine(1);
        setShowOutput((prev) => {
          const next = [...prev];
          next[1] = true;
          return next;
        });
      }, 4000),
      setTimeout(() => {
        setCurrentLine(2);
        setShowOutput((prev) => {
          const next = [...prev];
          next[2] = true;
          return next;
        });
      }, 5800),
    ];

    return () => {
      clearTimeout(asciiTimer);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Terminal window */}
        <div className="overflow-hidden rounded-sm border border-primary/20 bg-card/80 shadow-[0_0_30px_hsl(120_100%_50%/0.05)] backdrop-blur-sm border-glow">
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 border-b border-primary/10 bg-secondary/50 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/60" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              portfolio@devops:~
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-6 md:p-8">
            {/* ASCII Art */}
            <pre
              className={`mb-6 font-mono text-[10px] leading-tight text-primary/70 transition-opacity duration-500 md:text-xs ${
                showAscii ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden="true"
            >
              {asciiArt}
            </pre>

            {/* System info */}
            <div className="mb-6 border-b border-primary/10 pb-4">
              <p className="font-mono text-xs text-muted-foreground">
                <span className="text-primary/50">System:</span>{" "}
                <span className="text-foreground">Your Name</span>
                <span className="text-muted-foreground"> | </span>
                <span className="text-accent">DevOps Engineer</span>
              </p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">
                <span className="text-primary/50">Mission:</span>{" "}
                I build, automate, and monitor scalable production systems.
              </p>
            </div>

            {/* Command lines */}
            <div className="flex flex-col gap-3">
              {commandLines.map((line, index) => (
                <div key={line.prompt}>
                  {(index === 0 || (index > 0 && currentLine >= index - 1)) && (
                    <div className="animate-fade-in-up">
                      <p className="font-mono text-sm">
                        <span className="text-accent">{">"}</span>{" "}
                        <span className="text-foreground">
                          {typedLines[index].displayedText}
                        </span>
                        {!typedLines[index].isComplete && (
                          <span className="text-primary animate-blink">
                            {"_"}
                          </span>
                        )}
                      </p>
                      {showOutput[index] && (
                        <p className="mt-1 pl-4 font-mono text-sm text-primary text-glow">
                          {line.output}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action buttons styled as commands */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-sm border border-primary/30 bg-primary/5 px-5 py-2.5 font-mono text-xs text-primary transition-all hover:bg-primary/10 hover:shadow-[0_0_12px_hsl(120_100%_50%/0.15)] border-glow-hover"
              >
                <span className="text-accent">$</span> view --projects
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-secondary/50 px-5 py-2.5 font-mono text-xs text-muted-foreground transition-all hover:border-primary/20 hover:text-foreground"
              >
                <span className="text-accent">$</span> open --github
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to about section"
          >
            <span className="animate-blink text-primary">{">"}</span>{" "}
            scroll_down
          </a>
        </div>
      </div>
    </section>
  );
}
