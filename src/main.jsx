import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/MainLayout/Main";
import Home from "./components/pages/Home/Home/Home";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Login from "./components/pages/Home/Home/Login/Login";
import AuthProvider from "./components/provider/AuthProvider";
import Register from "./components/pages/Home/Home/Register/Register";
import AllToys from "./components/pages/AllToys/AllToys";
import MyToys from "./components/pages/MyToys/MyToys";
import AddToys from "./components/pages/AddToys/AddToys";
import Blog from "./components/pages/Blog/Blog";
import  { Toaster } from 'react-hot-toast';
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Details from "./components/pages/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'allToys',
        element:<AllToys></AllToys>
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params})=> fetch(`http://localhost:5000/allToys/${params.id}`)
      },
      {
        path:'myToys',
        element:<MyToys></MyToys>
      },
      {
        path:'addToys',
        element:<AddToys></AddToys>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster></Toaster>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
