// src/routes.js
import Home from "./pages/Home";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,  // Error handling for the Home route
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,  // Error handling for the Directors route
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,  // Error handling for the Actors route
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />,  // Error handling for the Movie route
  }
];

export default routes;
