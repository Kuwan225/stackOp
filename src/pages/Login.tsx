import { lazy } from "react";

const Component = lazy(() => import("../views/Login/Login"));
export default {
  element: <Component />,
};
