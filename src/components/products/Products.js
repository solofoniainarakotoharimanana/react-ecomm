import React, { useState, useEffect } from "react";

import { APIProduct } from "../../api/APIProduct";
import ProductItem from "./ProductItem";
import Searchbar from "../Search/Searchbar";
import CategorySearch from "../Search/CategorySearch";

const Products = () => {
  const [products, setProducts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [categories, setCategories] = useState({
    women: false,
    men: false
  });

  async function fetchProducts() {
    const productList = await APIProduct.fetchProducts();
    setProducts(productList);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterByTitle = products.filter((product) => {
    const filterResults = product.title
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

    //Checkbox
    /*const checkedProducts = Object.entries(categories)
      .filter((category) => category[1])
      .map((category) => category[0]);

    let checkWomenProducts = [];
    let checkMenProducts = [];
    if (categories.women) {
      checkWomenProducts = product.category.toLowerCase().includes("women");
    }
    if (categories.men) {
      checkMenProducts = product.category.toLowerCase().includes("men");
      //console.log("atoooo");
    }*/

    /*const filteredProducts = products.filter(({ category }) =>
      checkedProducts.includes(category)
    );*/

    return filterResults;
  });

  //Checkbox
  const handleChange = (e) => {
    const { name } = e.target;
    setCategories({ ...categories, [name]: !categories[name] });
    console.log(categories);
  };

  return (
    <>
      <div className="container mx-auto">
        <Searchbar
          searchText={searchText}
          handleSearchtext={(e) => setSearchText(e.target.value)}
        />
        {/*<CategorySearch
          title="Women"
          name="women"
          checked={categories.women}
          handleChange={handleChange}
        />

        <CategorySearch
          title="Men"
          name="men"
          checked={categories.men}
          handleChange={handleChange}
        />*/}
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-row flex-wrap justify-evenly gap-3">
          {filterByTitle.length !== 0
            ? filterByTitle.map((item) => {
                return <ProductItem item={item} key={item._id} />;
              })
            : products.map((item) => {
                return <ProductItem item={item} key={item._id} />;
              })}
        </div>
      </div>
    </>
  );
};

export default Products;
