import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const Main = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/"}>Home</Link>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Main;
