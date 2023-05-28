import { lazy } from "react";

const Component = lazy(() => import("../views/Books/Books"));
export default {
  element: <Component />,
};
