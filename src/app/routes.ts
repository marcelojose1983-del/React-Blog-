import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "../pages/HomePage";
import { PostPage } from "../pages/PostPage";
import { AuthorPage } from "../pages/AuthorPage";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "posts/:postId", Component: PostPage },
      { path: "autores/:authorId", Component: AuthorPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
