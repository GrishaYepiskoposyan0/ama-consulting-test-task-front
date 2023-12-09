import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home.jsx";
import { InvalidFiles } from "../pages/InvalidFiles/InvalidFiles.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/invalid-reports",
    element: <InvalidFiles />,
  },
]);
