import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portal from "./pages/Portal.jsx";
import "./index.css";

// 1. IMPORTAR AMPLIFY
import { Amplify } from "aws-amplify";

Amplify.configure({
  Auth: {
    Cognito: {
      // Tu User Pool ID (sacado de tu código anterior)
      userPoolId: "us-east-1_NF32lCXLT",
      // Tu Client ID (sacado de tu código anterior)
      userPoolClientId: "4ea8pbdulns64o0qtgslhgti4i",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "nosotros",
        element: <About />,
      },
      { path: "portal", element: <Portal /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Quitamos la config vieja de aquí, ya no es necesaria */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
