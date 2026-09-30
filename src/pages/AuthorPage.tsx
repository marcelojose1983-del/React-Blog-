import { Link, useParams, Navigate } from "react-router";
import { AUTHORS, POSTS } from "../data";

export function AuthorPage() {
  const { authorId } = useParams<{ authorId: string }>();
  const author = AUTHORS.find((a) => a.id === Number(authorId));

  if (!author) return <Navigate to="/" replace />;

  const posts = POSTS.filter((p) => p.authorId === author.id);

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest mb-10 flex items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: "var(--muted-foreground)" }}
      >
        <span>←</span> Todos os textos
      </Link>

      <div className="mb-12 pb-12" style={{ borderBottom: "1px solid var(--border)" }}>
        <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--muted-foreground)" }}>
          Autor
        </p>
        <h1 className="font-serif text-4xl mb-4" style={{ color: "var(--foreground)" }}>
          {author.name}
        </h1>
        <p className="text-base leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
          {author.bio}
        </p>
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest mb-8" style={{ color: "var(--muted-foreground)" }}>
          {posts.length} {posts.length === 1 ? "texto publicado" : "textos publicados"}
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="pb-8"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {post.tag}
                </span>
                <span style={{ color: "var(--border)" }}>·</span>
                <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                  {post.date}
                </span>
              </div>
              <Link to={`/posts/${post.id}`} className="group block">
                <h2
                  className="font-serif text-2xl mb-2 transition-opacity group-hover:opacity-70"
                  style={{ color: "var(--foreground)" }}
                >
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {post.excerpt}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
