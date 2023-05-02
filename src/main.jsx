import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import Favourites from "./Pages/Favourites";
import Rules from "./Pages/Rules";
import Home from "./Pages/Home";
import "./index.css";


// React Router allows to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Competition-calendar" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/Competition-calendar/favourites" element={<Favourites />} />
      <Route path="/Competition-calendar/rules" element={<Rules />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
