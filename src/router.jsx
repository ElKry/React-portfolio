import React from "react";
import { HomePage } from "./pages/homePage/homePage";
import { ProjectOnePage } from "./pages/projectOne/projectOne";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./processes/themeContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/project-one",
    element: <ProjectOnePage />,
  },
]);

export const Router = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
