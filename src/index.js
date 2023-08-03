import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import { HomePage } from "./pages/homePage/homePage";
import { ProjectOnePage } from "./pages/projectOne/projectOne";
import { ThemeProvider } from "./processes/contextTheme";
import { LangProvider } from "./processes/contextLanguage";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <RouterProvider router={router} />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
);
