import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../../redux/ProductSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const productList = useSelector((store) => store.PRODUCTS.productCard);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setProducts(productList);
    let tot = 0;
    productList.forEach((p) => {
      tot += p.price * p.quantity;
    });
    setTotal(tot);
  }, [productList]);

  return (
    <div>
      {products && (
        <div className="mt-5 container mx-auto">
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-row gap-8 mt-4 bg-zinc-100 p-3"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[70px] rounded"
                />
                <h2 className="text-center text-blue-700 text-2xl font-semibold w-[350px] mt-7">
                  {item.title}
                </h2>
                <p className="text-xl text-neutral-950 font-semibold w-[150px] mt-7">
                  {item.price} €
                </p>
                <p className="text-xl text-neutral-950 font-semibold w-[50px] mt-7">
                  {item.quantity}
                </p>
                <p className="text-xl text-neutral-950 font-semibold w-[150px] mt-7">
                  {item.quantity * item.price} €
                </p>
                <button className="text-blue-600 font-bold text-2xl">
                  <i className="ri-edit-box-fill"></i>
                </button>
                <button
                  onClick={() => dispatch(deleteFromCart(item))}
                  className="text-red-600 font-bold text-2xl w-[150px]"
                >
                  <i className="ri-delete-bin-line"></i>
                </button>
              </div>
            );
          })}
          {total > 0 ? (
            <div>
              <hr className="mt-2" />
              <div className="float-right flex flex-row gap-4 mr-6 text-center mt-8">
                <p className="text-slate-500 font-bold text-xl">Total : </p>
                <span className="text-xl text-black font-bold">
                  {Math.round(total * 100) / 100} €
                </span>
              </div>
            </div>
          ) : (
            <h1 className="text-center text-orange-700 text-2xl font-extrabold">
              Pas de produits dans votre carte, veuillez ajouter des produits
            </h1>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
