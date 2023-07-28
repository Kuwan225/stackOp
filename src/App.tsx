import { createBrowserRouter, RouterProvider } from "react-router-dom";
import pages from "./pages";
import "./App.css";
import { useState } from "react";
import "./App.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const router = createBrowserRouter(pages as any);

function App() {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  return <>{<RouterProvider router={router} />}</>;
}

export default App;
