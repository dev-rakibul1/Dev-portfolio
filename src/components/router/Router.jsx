import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import SubLayout from "../layout/SubLayout";
import About from "../pages/about/About";
import ContactUs from "../pages/contactUs/ContactUs";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import ProjectDetails from "../pages/projects/projectDetails/ProjectDetails";
import Projects from "../pages/projects/Projects";

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
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <ContactUs /> },
      {
        path: "/projectDetails/:id",
        element: <ProjectDetails />,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/projects/${params.id}`),
      },
    ],
  },
]);

export default router;
