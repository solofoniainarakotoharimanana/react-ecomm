import {
  Outlet,
  Router,
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter
} from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/Home";

import { APIProduct } from "../src/api/APIProduct";
import ProductDetail from "./components/products/ProductDetail";

import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/cart/Cart";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
        //loader: APIProduct.fetchProducts()
      },
      {
        path: "/product/:id",
        element: <ProductDetail />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  }
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
