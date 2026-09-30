import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <p className="font-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--muted-foreground)" }}>
        404
      </p>
      <h1 className="font-serif text-4xl mb-4" style={{ color: "var(--foreground)" }}>
        Página não encontrada
      </h1>
      <p className="text-base mb-8" style={{ color: "var(--muted-foreground)" }}>
        A página que procura não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
        style={{ color: "var(--foreground)" }}
      >
        ← Regressar ao início
      </Link>
    </div>
  );
}
