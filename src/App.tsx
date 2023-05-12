import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pages from "./pages";
import "./App.css";
import { useState } from "react";
import Login from "./views/Login/Login";
import "./App.css";

const router = createBrowserRouter(pages as any);

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return <>{isLogin ? <RouterProvider router={router} /> : <Login />}</>;
}

export default App;
