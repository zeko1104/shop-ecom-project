import { IoClose } from "react-icons/io5";
import Shirt from "../assets/images/shirt-mini.png";

export default function Cart({ visible, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-[30%] bg-white z-50 rounded-xl transform ${
        visible ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="m-8">
        <div className="flex justify-between border-b pb-4">
          <h1 className="text-2xl font-bold text-gray-900">Cart</h1>
          <IoClose className="text-2xl cursor-pointer" onClick={onClose} />
        </div>
        <div className="flex items-center py-4 border-b">
          <div className="relative">
            <img src={Shirt} alt="Men Formal T-shirt - white" className="w-20 h-20 object-cover" />
            <div className="absolute top-1 right-1 bg-red-500 rounded-[50%]">
              <IoClose className="text-white cursor-pointer" />
            </div>
          </div>
          <div className="ml-10">
            <h1 className="text-lg font-bold text-gray-900">
              Men Formal T-shirt - white
            </h1>
            <p className="text-gray-600">1 x $10.99</p>
          </div>
        </div>
        <div className="flex justify-between py-4 border-b">
          <h1 className="text-lg font-semibold">Subtotal:</h1>
          <span className="text-lg font-semibold">$10.99</span>
        </div>
        <div className="flex justify-around py-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            View Cart
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Checkout
          </button>
        </div>
        <div className="py-4">
          <p className="text-center text-gray-700">
            Free Shipping on All Orders Over $100!
          </p>
        </div>
      </div>
    </div>
  );
}
