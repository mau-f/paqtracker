import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/webflow-style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Function from "./pages/Function";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/Function",
        element: <Function />,
      },
    ],
  },
]);

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}
