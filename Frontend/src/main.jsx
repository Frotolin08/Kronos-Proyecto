import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import LandingPage from "./Pages/LandingPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import Login from "./Pages/Login.jsx";
import coconut from '../Public/coconut.jpg'
import Register from "./Pages/Register.jsx";
import ProjectSelectPage from "./Pages/ProjectSelectPage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "*", element: <ErrorPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: '/projects', element: <ProjectSelectPage/>}
]);
createRoot(document.getElementById("root")).render(
  coconut && 
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode> 
);
