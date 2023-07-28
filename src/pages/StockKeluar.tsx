import { lazy } from "react";

const Component = lazy(() => import("../views/StockKeluar/StockKeluar"));
export default {
  element: <Component />,
};
