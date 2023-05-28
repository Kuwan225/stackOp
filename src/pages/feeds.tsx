import { lazy } from "react";

const Component = lazy(() => import("../views/Feeds/Feeds"));
export default {
  element: <Component />,
};
