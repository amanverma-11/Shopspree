import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import "./app.scss";

const Layout = () => {
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<span><Home/></span>
      },
      {
        path:'/products/:id',
        element:<span><Products/></span>
      },
      {
        path:'/product/:id',
        element:<span><Product/></span>
      }
    ]
  }
])

  function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
