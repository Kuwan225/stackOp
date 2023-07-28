import { lazy } from "react";

const Component = lazy(() => import("../views/StockMasuk/StockMasuk"));
export default {
  element: <Component />,
};
