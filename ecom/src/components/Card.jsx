import { productData } from "../data/data.js";
import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = productData;
      setProducts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-72 border rounded-xl h-[400px] shadow-xl relative group"
        >
          <div className="h-2/3 flex justify-center items-center relative overflow-hidden">
            <img
              className="h-full w-full object-cover rounded-xl group-hover:hidden"
              src={product.image}
              alt={product.name}
            />
            <img
              className="h-full w-full object-cover rounded-xl hidden group-hover:block"
              src={product.secondimage}
              alt={product.name}
            />
            {product.discountPrice && (
              <div className="bg-white text-black h-6 w-12 absolute top-2 right-2 flex items-center justify-center rounded-lg">
                <span className="text-sm font-bold">
                  -
                  {Math.round(
                    ((product.price - product.discountPrice) / product.price) *
                      100
                  )}
                  %
                </span>
              </div>
            )}
          </div>
          <div className="absolute inset-0 flex items-center justify-center  opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="space-x-4">
              <Link to='/singleproduct'> 
                <button className="hover:bg-blue-600 hover:text-white  text-black bg-white rounded-lg text-xl p-2">
                  <FaRegEye />
                </button>
              </Link>
              <button className="hover:bg-blue-600 hover:text-white text-black bg-white rounded-lg text-xl p-2">
                <IoCartSharp />
              </button>
              <button className="hover:bg-blue-600 hover:text-white text-black bg-white rounded-lg text-xl p-2">
                <FaRegHeart />
              </button>
              <button className="hover:bg-blue-600 hover:text-white text-black bg-white rounded-lg text-xl p-2">
                <FaArrowRightArrowLeft />
              </button>
            </div>
          </div>
          <div className="p-4 text-center mt-2">
            <h1 className="text-lg font-semibold">{product.name}</h1>
            {product.discountPrice ? (
              <>
                <del className="text-gray-500">${product.price}</del>
                <span className="text-blue-600 font-bold ml-2 text-xl">
                  ${product.discountPrice}
                </span>
              </>
            ) : (
              <span className="text-gray-500 text-xl font-semibold">
                ${product.price}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
