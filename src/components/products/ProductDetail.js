import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Rating from "../../rating/Rating";
import { addToCart } from "../../redux/ProductSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const ProductDetail = () => {
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState(null);
  const itemState = useLocation();
  const dispatch = useDispatch();
  //const productInCart = dispatch(getProduct(product));
  useEffect(() => {
    setProduct(itemState.state);
  }, []);

  return (
    <div className="container mx-auto">
      {product && (
        <div>
          <div className="flex flex-row gap-3 mt-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-[450px] h-[500px]"
            />

            <div className="border w-full p-8">
              <h2 className="text-blue-800 font-bold text-4xl">
                {product.title}
              </h2>
              <p className="mt-3">{product.description}</p>
              <Rating rating={product.rating} />
              <div className="flex flex-row gap-5 mt-3">
                <p className="line-through font-bold text-xl">
                  {product.oldPrice} €
                </p>
                <p className="text-blue-800 font-bold text-2xl">
                  {product.price} €
                </p>
              </div>
              <div className="flex w-52 items-center mt-5 justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm text-black font-extrabold">Quantity</p>
                <div className="flex items-center gap-4 font-semibold">
                  <button
                    className="border h-5 
                  font-extrabold text-lg text-black flex items-center
                    justify-center px-2 hover:bg-gray-700
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                    onClick={() => setQty((qty) => (qty <= 1 ? 1 : qty - 1))}
                  >
                    -
                  </button>
                  <span>{qty}</span>
                  <button
                    className="border h-5 
                  font-extrabold text-lg text-black flex items-center
                    justify-center px-2 hover:bg-gray-700
                  hover:text-white cursor-pointer duration-300 active:bg-black"
                    onClick={() => setQty((qty) => qty + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <Link to="/" className="border py-2 px-3 text-sm ">
                <i className="ri-arrow-left-line"></i>
                Retour
              </Link>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: product._id,
                      image: product.image,
                      title: product.title,
                      price: product.price,
                      description: product.description,
                      quantity: qty
                    }) &
                      toast.success(
                        `Le produit ${product.title} a été ajouté dans votre carte`
                      )
                  )
                }
                className="bg-transparent mt-20
              hover:bg-neutral-50 border ml-14
                text-sm font-bold py-2 px-4 rounded"
              >
                Ajouter à la carte
              </button>
            </div>
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
      )}
    </div>
  );
};

export default ProductDetail;
