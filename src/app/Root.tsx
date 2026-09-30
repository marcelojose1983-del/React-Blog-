import { Outlet, Link } from "react-router";

export function Root() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <header style={{ borderBottom: "1px solid var(--border)" }} className="sticky top-0 z-50">
        <div
          style={{ backgroundColor: "var(--background)" }}
          className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between"
        >
          <Link
            to="/"
            className="font-serif text-2xl tracking-tight transition-opacity hover:opacity-70"
            style={{ color: "var(--foreground)" }}
          >
            Caderno
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
            Ensaios & Crítica
          </span>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-8 mt-16" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="flex items-center justify-between">
          <span className="font-serif text-lg" style={{ color: "var(--foreground)" }}>
            Caderno
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            Ensaios & Crítica · 2026
          </span>
        </div>
      </footer>
    </div>
  );
}
