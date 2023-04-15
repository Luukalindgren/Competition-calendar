import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Favourites from "./Pages/Favourites";
import Rules from "./Pages/Rules";
import "./index.css";

// FIX BUG WHEN NAVIGATIN TO OTHER PAGES THE MAIN APP PAGE IS RENDERED TOO

// React Router allows to navigate between pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="favourites" element={<Favourites />} />
      <Route path="rules" element={<Rules />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
