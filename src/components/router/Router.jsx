import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SubLayout from "../layout/SubLayout";
import About from "../pages/about/About";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [{ path: "/", element: <Home /> }],
  },

  {
    path: "/",
    element: <SubLayout />,
    errorElement: <Error />,
    children: [
      { path: "/about", element: <About /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

export default router;
