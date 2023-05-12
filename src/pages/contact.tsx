import { lazy } from "react";

const Component = lazy(() => import("../views/Contact/Contact"));
export default {
  element: <Component />,
};
