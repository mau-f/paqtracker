import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/webflow-style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Function from "./pages/Function";
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthProvider } from "./auth/AuthProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

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
      <I18nextProvider i18n={i18n}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </I18nextProvider>
    </React.StrictMode>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}
