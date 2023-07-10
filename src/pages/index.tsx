import { RouteProps } from "react-router-dom";
import home from "./home";
import Error from "../views/Error";
import Main from "../layouts/Main";

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
        path: "*",
        element: <Error />,
      },
    ],
  },
] as RouteProps;
