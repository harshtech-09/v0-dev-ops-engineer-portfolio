import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="h-4 w-4" />
          <span className="font-mono text-xs">
            Designed & built with purpose.
          </span>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          {"© 2026 Your Name. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
