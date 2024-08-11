import Container from "../components/Container";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Amazon from "../assets/images/amazon.jpeg";
import Apple from "../assets/images/apay.jpeg";
import Bitcoin from "../assets/images/bitcoin.jpeg";
import Google from "../assets/images/gpay.jpeg";
import Paypal from "../assets/images/pay.jpeg";
import Visa from "../assets/images/visa.jpeg";

export default function Footer() {
  return (
    <footer className="bg-[#EBEBEB] py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-black text-lg font-semibold mb-4">About Us</h2>
            <p className="text-gray-700">
              <span className="font-bold text-xl text-blue-600">Shop</span>{" "}
              E-Commerce is a dynamic and innovative online retail platform that
              offers a wide range of products to customers worldwide.
            </p>
            <div className="flex gap-5 mt-4">
              <FaFacebookF className="text-lg text-gray-700 hover:text-blue-600 cursor-pointer" />
              <FaXTwitter className="text-lg text-gray-700 hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="text-lg text-gray-700 hover:text-red-600 cursor-pointer" />
              <FaInstagram className="text-lg text-gray-700 hover:text-pink-600 cursor-pointer" />
              <FaTiktok className="text-lg text-gray-700 hover:text-black cursor-pointer" />
            </div>
            <div className="mt-8">
              <h2 className="text-black text-lg font-semibold mb-4">
                Guaranteed safe checkout
              </h2>
              <div className="flex gap-3">
                <img src={Amazon} alt="Amazon" className="w-12 h-auto" />
                <img src={Apple} alt="Apple" className="w-12 h-auto" />
                <img src={Bitcoin} alt="Bitcoin" className="w-12 h-auto" />
                <img src={Google} alt="Google" className="w-12 h-auto" />
                <img src={Paypal} alt="Paypal" className="w-12 h-auto" />
                <img src={Visa} alt="Visa" className="w-12 h-auto" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 flex justify-between text-center">
            <div className="w-1/3">
              <h2 className="text-black text-lg font-semibold mb-4">
                Quick Links
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a href="#" className="hover:text-black">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    My Cart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Gift Card
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Need Help?
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="text-black text-lg font-semibold mb-4">
                Information
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a href="#" className="hover:text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Size Chart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="text-black text-lg font-semibold mb-4">
                Policies
              </h2>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Contact Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="mt-8 text-center text-gray-700">
        <h2>
          © 2024 <span className="font-bold text-blue-600">Shop.</span> All
          rights reserved.
        </h2>
      </div>
    </footer>
  );
}
