import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Loading from "../views/Loading";

const Main = () => {
  return (
    <>
      <Header />
      <Loading>
        <Outlet />
      </Loading>
    </>
  );
};

export default Main;
