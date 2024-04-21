import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import RestaurantDetalis from "./pages/Restaurant/RestaurantDetalis.jsx";
import Review from "./pages/Restaurant/Review.jsx";
import RestProfile from "./pages/RestOwnerDashboard/RestProfile.jsx";
import AddItems from "./pages/RestOwnerDashboard/AddItems.jsx";
import { Home } from "./pages/Home/Home.jsx";
import AuthProviders from "./providers/AuthProviders/AuthProviders.jsx";
import ViewMenu from "./pages/RestOwnerDashboard/ViewMenu/ViewMenu.jsx";
import { EditProfile } from "./pages/RestOwnerDashboard/EditProfile/EditProfile.jsx";
import { OwnerProfile } from "./pages/RestOwnerDashboard/OwnerProfile/OwnerProfile.jsx";
import { AutocompleteProvider } from "./providers/AutoComplete/AutoComplete.jsx";
import { ResturantRoutes } from "./Routes/ResturantRoutes.jsx";
import Message from "./pages/Message/Message.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/Restaurant/:id",
        element: <RestaurantDetalis />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_KEY}all-restaurants/${params.id}`),
      },
      {
        path: "/FoodReview",
        element: <Review />,
      },
      {
        path: "/view-menus",
        element: <ViewMenu />,
      },
    ],
  },
  {
    path: "/rest-profile/:id",
    element: <RestProfile />,
    loader: ({ params }) =>
      fetch(`${import.meta.env.VITE_API_KEY}user/${params.id}`),
    children: [
      {
        path: "AddItems",
        element: (
          <ResturantRoutes>
            <AddItems />
          </ResturantRoutes>
        ),
      },
      {
        path: "edit-profile",
        element: <EditProfile />,
      },
      {
        path: "owner-profile",
        element: <OwnerProfile />,
      },
      {
        path: "message",
        element: <Message />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AutocompleteProvider>
    <AuthProviders>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProviders>
  </AutocompleteProvider>
);
