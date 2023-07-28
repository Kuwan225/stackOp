import { lazy } from "react";

const Component = lazy(() => import("../views/StockBarang/StockBarang"));
export default {
  element: <Component />,
};
