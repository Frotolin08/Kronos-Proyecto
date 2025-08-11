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
import ProjectPage from "./Pages/ProjectPage.jsx";
import CalendarPage from "./Pages/CalendarPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import ProjectConfigPage from "./Pages/ProjectConfigPage.jsx";
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "*", element: <ErrorPage /> },
  { path: "/home", element: <HomePage /> },
  { path: "/login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: '/projects', element: <ProjectSelectPage/>},
  { path: '/project/:id', element: <ProjectPage/>},
  { path: '/project/:id/calendar', element: <CalendarPage/>},
  { path: '/project/:id/dashboard', element: <DashboardPage/>},
  { path: '/project/:id/config', element: <ProjectConfigPage/>},
  
]);
createRoot(document.getElementById("root")).render(
 
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode> 
);
