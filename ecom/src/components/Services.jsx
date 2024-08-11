import Container from "../components/Container";
import { FaTruckFast } from "react-icons/fa6";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

export default function Services() {
  return (
    <Container>
      <div className="flex justify-around my-16">
        <div className="flex border border-gray-300 rounded-md p-5 items-center shadow-md hover:shadow-lg transition-shadow">
          <FaTruckFast className="text-5xl m-5 text-blue-500"/>
          <div className="text-center">
            <h1 className="font-semibold text-lg">Free Shipping</h1>
            <p className="text-gray-500">On orders over $99</p>
          </div>
        </div>
        <div className="flex border border-gray-300 rounded-md p-5 items-center shadow-md hover:shadow-lg transition-shadow">
          <FaMoneyBillAlt className="text-5xl m-5 text-green-500"/>
          <div className="text-center">
            <h1 className="font-semibold text-lg">Money Back</h1>
            <p className="text-gray-500">Money back in 15 days.</p>
          </div>
        </div>
        <div className="flex border border-gray-300 rounded-md p-5 items-center shadow-md hover:shadow-lg transition-shadow">
          <FaRegCreditCard className="text-5xl m-5 text-purple-500"/>
          <div className="text-center">
            <h1 className="font-semibold text-lg">Secure Checkout</h1>
            <p className="text-gray-500">100% Payment Secure.</p>
          </div>
        </div>
        <div className="flex border border-gray-300 rounded-md p-5 items-center shadow-md hover:shadow-lg transition-shadow">
          <BiSupport className="text-5xl m-5 text-yellow-500"/>
          <div className="text-center">
            <h1 className="font-semibold text-lg">Online Support</h1>
            <p className="text-gray-500">Ensure the product quality</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
