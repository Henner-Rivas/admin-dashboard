import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import { DarkModeContextProvider } from "./context/ContextDark";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <RouterProvider router={router} />
    </DarkModeContextProvider>
  </React.StrictMode>
);
