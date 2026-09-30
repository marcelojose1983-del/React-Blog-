import { Link } from "react-router";
import { POSTS, AUTHORS } from "../data";

export function HomePage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  const getAuthor = (id: number) => AUTHORS.find((a) => a.id === id)!;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Featured post */}
      <article className="mb-16 pb-16" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="flex items-center gap-3 mb-6">
          <span
            className="font-mono text-xs uppercase tracking-widest px-2 py-0.5"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            Destaque
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            {featured.tag}
          </span>
        </div>
        <Link to={`/posts/${featured.id}`} className="group block">
          <h2
            className="font-serif text-4xl md:text-5xl leading-tight mb-4 transition-opacity group-hover:opacity-75"
            style={{ color: "var(--foreground)" }}
          >
            {featured.title}
          </h2>
          <p className="text-lg leading-relaxed mb-6 max-w-2xl" style={{ color: "var(--muted-foreground)" }}>
            {featured.excerpt}
          </p>
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            to={`/autores/${featured.authorId}`}
            className="font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--foreground)" }}
          >
            {getAuthor(featured.authorId).name}
          </Link>
          <span style={{ color: "var(--border)" }}>·</span>
          <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            {featured.date}
          </span>
          <span style={{ color: "var(--border)" }}>·</span>
          <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            {featured.readTime} de leitura
          </span>
        </div>
      </article>

      {/* Post grid */}
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
        {rest.map((post) => {
          const author = getAuthor(post.authorId);
          return (
            <article key={post.id}>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
                  {post.tag}
                </span>
              </div>
              <Link to={`/posts/${post.id}`} className="group block">
                <h3
                  className="font-serif text-2xl leading-snug mb-3 transition-opacity group-hover:opacity-75"
                  style={{ color: "var(--foreground)" }}
                >
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted-foreground)" }}>
                  {post.excerpt}
                </p>
              </Link>
              <div className="flex items-center gap-3 text-xs">
                <Link
                  to={`/autores/${post.authorId}`}
                  className="font-medium transition-opacity hover:opacity-70"
                  style={{ color: "var(--foreground)" }}
                >
                  {author.name}
                </Link>
                <span style={{ color: "var(--border)" }}>·</span>
                <span className="font-mono" style={{ color: "var(--muted-foreground)" }}>
                  {post.date}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
