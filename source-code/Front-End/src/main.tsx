import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./assets/css/fonts.css";
import "./assets/css/global.css";
import "./assets/css/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
