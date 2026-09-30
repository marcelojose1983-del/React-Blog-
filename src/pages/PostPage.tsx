import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router";
import { POSTS, AUTHORS, Comment } from "../data";
import { getComments, addComment, subscribe } from "../app/commentsStore";

export function PostPage() {
  const { postId } = useParams<{ postId: string }>();
  const post = POSTS.find((p) => p.id === Number(postId));
  const [comments, setComments] = useState<Comment[]>(() =>
    getComments().filter((c) => c.postId === Number(postId) && c.approved)
  );

  useEffect(() => {
    return subscribe(() => {
      setComments(getComments().filter((c) => c.postId === Number(postId) && c.approved));
    });
  }, [postId]);

  if (!post) return <Navigate to="/" replace />;

  const author = AUTHORS.find((a) => a.id === post.authorId)!;

  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <Link
        to="/"
        className="font-mono text-xs uppercase tracking-widest mb-10 flex items-center gap-2 transition-opacity hover:opacity-70"
        style={{ color: "var(--muted-foreground)" }}
      >
        <span>←</span> Todos os textos
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--muted-foreground)" }}>
            {post.tag}
          </span>
          <span style={{ color: "var(--border)" }}>·</span>
          <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            {post.readTime} de leitura
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6" style={{ color: "var(--foreground)" }}>
          {post.title}
        </h1>
        <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted-foreground)" }}>
          {post.excerpt}
        </p>
        <div
          className="flex items-center gap-4 py-4"
          style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <Link
              to={`/autores/${author.id}`}
              className="font-medium text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--foreground)" }}
            >
              {author.name}
            </Link>
            <p className="font-mono text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
              {post.date}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        {post.body.split("\n\n").map((para, i) => (
          <p key={i} className="text-base leading-8 mb-6" style={{ color: "var(--foreground)" }}>
            {para}
          </p>
        ))}
      </div>

      <div style={{ borderTop: "2px solid var(--foreground)" }} className="pt-10">
        <h2 className="font-serif text-2xl mb-8" style={{ color: "var(--foreground)" }}>
          Comentários{" "}
          <span className="font-mono text-base font-normal" style={{ color: "var(--muted-foreground)" }}>
            ({comments.length})
          </span>
        </h2>

        {comments.length > 0 && (
          <div className="mb-10 space-y-6">
            {comments.map((c) => (
              <div key={c.id} className="pl-4" style={{ borderLeft: "2px solid var(--border)" }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
                    {c.author}
                  </span>
                  <span className="font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
                    {c.date}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        )}

        <CommentForm postId={post.id} />
      </div>
    </div>
  );
}

function CommentForm({ postId }: { postId: number }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !body.trim()) return;
    addComment({ postId, author: name.trim(), email: email.trim(), body: body.trim() });
    setName("");
    setEmail("");
    setBody("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputStyle = {
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
    color: "var(--foreground)",
    borderRadius: "var(--radius)",
    outline: "none",
  };

  return (
    <div>
      <h3 className="font-serif text-xl mb-6" style={{ color: "var(--foreground)" }}>
        Deixar um comentário
      </h3>

      {submitted && (
        <div
          className="mb-6 px-4 py-3 text-sm font-mono"
          style={{ backgroundColor: "var(--muted)", color: "var(--foreground)", border: "1px solid var(--border)" }}
        >
          Comentário publicado. Obrigado pela participação.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted-foreground)" }}>
              Nome
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm"
              style={inputStyle}
              placeholder="O seu nome"
            />
          </div>
          <div>
            <label className="block font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted-foreground)" }}>
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2.5 text-sm"
              style={inputStyle}
              placeholder="email@exemplo.com"
            />
          </div>
        </div>
        <div>
          <label className="block font-mono text-xs uppercase tracking-widest mb-2" style={{ color: "var(--muted-foreground)" }}>
            Comentário
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
            rows={4}
            className="w-full px-3 py-2.5 text-sm resize-none"
            style={inputStyle}
            placeholder="Escreva o seu comentário..."
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
        >
          Publicar comentário
        </button>
      </form>
    </div>
  );
}
