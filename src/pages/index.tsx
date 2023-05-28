import { RouteProps } from "react-router-dom";
import home from "./home";
import Error from "../views/Error";
import Main from "../layouts/Main";
import feeds from "./feeds";
import books from "./books";

export default [
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "",
        element: home.element,
      },
      {
        path: "/feeds",
        element: feeds.element,
      },
      {
        path: "/books",
        element: books.element,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
] as RouteProps;
