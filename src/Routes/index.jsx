import {
 createBrowserRouter,
 // importing the createBrowserRouter module
} from "react-router-dom";
import Login from "../Pages/Login";

export const router = createBrowserRouter([
 // routes has been created separately from main file
 {
  path: "/login",
  element: <Login />,
  // making the routes as login fro login page
 },
]);
