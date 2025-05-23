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
import GardenTips from "./Components/GardenTips/GardenTips.jsx";
import BrowseTips from "./Components/BrowesTips/BrowseTips.jsx";
import TipDetails from "./Components/TipDetails/TipDetails.jsx";

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
      {
        path: "gardenTips",
        Component: GardenTips,
      },
      {
        path: "browserTips",
        Component: BrowseTips,
      },
      {
        path: "tipDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:4000/tips/${params.id}`).then((res) =>
            res.json()
          ),
        Component: TipDetails,
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
