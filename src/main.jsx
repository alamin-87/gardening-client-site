import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Layout from "./Layout/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Components/Home/Home.jsx";
import LogIn from "./Components/Login/LogIn.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import Error from "./Components/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "register",
        Component: SignUp,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
