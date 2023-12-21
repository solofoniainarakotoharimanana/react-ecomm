import React from "react";
import Banner from "../components/banner/Banner";
import ProductList from "../components/products/Products";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  //const products = useLoaderData();
  //console.log(products);
  return (
    <div>
      <Banner />
      <ProductList />
    </div>
  );
};

export default Home;
