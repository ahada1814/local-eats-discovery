import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import RestaurantDetalis from "./pages/Restaurant/RestaurantDetalis.jsx";
import Review from "./pages/Restaurant/Review.jsx";
import { Home } from "./pages/Home/Home.jsx";
import AuthProviders from "./providers/AuthProviders/AuthProviders.jsx";
import RestProfile from "./pages/RestOwnerDashboard/RestProfile.jsx";
import AddItems from "./pages/RestOwnerDashboard/AddItems.jsx";
import { EditProfile } from "./pages/RestOwnerDashboard/EditProfile/EditProfile.jsx";
import Message from "./pages/Message/Message.jsx";
import { ResturantRoutes } from "./Routes/ResturantRoutes.jsx";
import { ViewMenu } from "./pages/RestOwnerDashboard/ViewMenu/ViewMenu.jsx";
import UserContextProvider from "./providers/UserContextProvider.jsx";
import { AutocompleteProvider } from "./providers/AutoComplete/AutoComplete.jsx";
import Menue from "./pages/Restaurant/Menue.jsx";
import Permission from "./pages/Restaurant/Permission.jsx";
import { OwnerProfile } from "./pages/RestOwnerDashboard/OwnerProfile/OwnerProfile.jsx";



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
        children: [
          {
            path: "menu",
            element: <Menue /> 
          },
          {
            path: "FoodReview",
            element: <Review />,
          },
        ],
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
        path: "permission",
        element: <Permission />,
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
      <UserContextProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      </UserContextProvider>
    </AuthProviders>
  </AutocompleteProvider>
);
