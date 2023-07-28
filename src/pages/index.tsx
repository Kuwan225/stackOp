import { RouteProps } from "react-router-dom";
import home from "./home";
import Error from "../views/Error";
import Main from "../layouts/Main";
import Login from "../views/Login/Login";
import stockMasuk from "./StockMasuk";
import stockBarang from "./StockBarang";
import stockKeluar from "./StockKeluar";

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
        path: "/stock-masuk",
        element: stockMasuk.element,
      },
      {
        path: "/stock-barang",
        element: stockBarang.element,
      },
      {
        path: "/stock-keluar",
        element: stockKeluar.element,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
 
] as RouteProps;
