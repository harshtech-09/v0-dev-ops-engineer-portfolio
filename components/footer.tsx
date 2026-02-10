export function Footer() {
  return (
    <footer className="relative z-10 border-t border-primary/10 px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-[10px] text-muted-foreground">
          <span className="text-primary/40">{">"}</span> Built with purpose.
          Deployed with confidence.
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          <span className="text-primary/30">PID 1</span>
          {" | "}
          {"2026 Your Name"}
        </p>
      </div>
    </footer>
  );
}
