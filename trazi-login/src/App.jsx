import React from "react";
import './App.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";

export const App = () => {
 return (
  <>
  <RouterProvider  router={router}/>
  </>
 )
};
