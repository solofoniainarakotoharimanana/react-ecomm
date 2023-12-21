import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Rating from "../../rating/Rating";
import { addToCart, getProduct } from "../../redux/ProductSlice";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

const ProductItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const idString = (id) => {
    return String(id).toLocaleLowerCase().split(" ").join("");
  };
  const idProduct = idString(item.title);
  const handleDetail = () => {
    navigate(`/product/${idProduct}`, {
      state: item
    });
  };

  return (
    <div
      className="max-w-sm bg-white rounded-md border 
              border-gray-300 shadow-md h-[800px]
              dark:bg-gray-800 dark:border-gray-700 p-1"
    >
      <img
        className="w-full h-3/4 rounded-t-lg"
        src={item.image}
        alt={item.title}
      />
      <div className="flex flex-row gap-16 mt-4">
        <h4 className="text-lg font-bold text-red-700 mt-5">{item.title}</h4>
        <div className="flex flex-row gap-2 mt-5 float-right">
          <p className="">
            <span className="line-through text-indigo-950 font-semibold text-sm">
              {item.oldPrice} €
            </span>
          </p>

          <p className="">
            <span className="text-blue-900 text-xl font-extrabold ">
              {item.price} €
            </span>
          </p>
        </div>
      </div>
      <p className="text-sm font-semibold text-black mt-4">
        Categorie : {item.category}
      </p>
      <Rating rating={item.rating} />
      <hr />
      <div className="flex justify-between py-3 gap-4 p-2">
        <button
          className="bg-transparent
        hover:bg-neutral-50 border
          text-sm font-bold py-2 px-4 rounded"
          onClick={() =>
            dispatch(
              addToCart({
                id: item._id,
                image: item.image,
                title: item.title,
                price: item.price,
                description: item.description,
                quantity: 1
              })
            ) &
            toast.success(
              `Le produit ${item.title} a été ajouté dans votre carte`
            )
          }
        >
          Ajouter au cart
        </button>
        <button
          onClick={handleDetail}
          className="bg-transparent
      hover:bg-neutral-50 rounded justify-between border
        text-sm font-bold py-2 px-4"
        >
          Détail
        </button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        //pauseOnFocusLoss
        draggable
        //pauseOnHover
        theme="dark"
        //className="toast-message-success"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
};

export default ProductItem;
