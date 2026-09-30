import { Comment, INITIAL_COMMENTS } from "../data";

// Simple in-memory store shared across the app via module state
let comments: Comment[] = [...INITIAL_COMMENTS];
const listeners: Set<() => void> = new Set();

export function getComments(): Comment[] {
  return comments;
}

export function addComment(comment: Omit<Comment, "id" | "approved" | "date">): Comment {
  const newComment: Comment = {
    ...comment,
    id: Date.now(),
    approved: true,
    date: new Date().toLocaleDateString("pt-PT", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  };
  comments = [...comments, newComment];
  listeners.forEach((fn) => fn());
  return newComment;
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
