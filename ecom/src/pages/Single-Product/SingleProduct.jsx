import { useState } from "react";
import Container from "../../components/Container";
import Shirt from "/src/assets/images/shirt.png";
import Grey from "/src/assets/images/shirt-grey.png";
import White from "/src/assets/images/white.png";
import Men from "/src/assets/images/men.png";
import Men2 from "/src/assets/images/men2.png";
import Slider from "react-slick";
import {
  FaEye,
  FaMinus,
  FaPlus,
  FaShoppingCart,
  FaFacebookF,
  FaPinterest,
} from "react-icons/fa";
import { CiHeart, CiMail } from "react-icons/ci";
import { MdCompareArrows } from "react-icons/md";
import { FaChartBar, FaStar } from "react-icons/fa";
import { FaTruckFast, FaXTwitter } from "react-icons/fa6";
import Amazon from "../../assets/images/amazon.jpeg";
import Apple from "../../assets/images/apay.jpeg";
import Bitcoin from "../../assets/images/bitcoin.jpeg";
import Google from "../../assets/images/gpay.jpeg";
import Paypal from "../../assets/images/pay.jpeg";
import Visa from "../../assets/images/visa.jpeg";
import FeaturedCard from "../../components/FeaturedCard";
import NewArrivalsCard from "../../components/NewArrivalsCard";
import Customer from "../../assets/images/customer.jpg";
import Customer2 from "../../assets/images/customer2.jpg";
import Customer3 from "../../assets/images/customer3.jpg";


export default function SingleProduct() {
  const [activeTab, setActiveTab] = useState("description");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
  };

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="p-4">
            <p className="text-gray-700">
              Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
              mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum
              nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras
              id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam...
              Praesent congue erat at massa. Sed cursus turpis vitae tortor.
              Donec posuere vulputate arcu. Phasellus accumsan cursus velit.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue,
              elit erat euismod orci, ac placerat dolor lectus quis orci.
              Phasellus consectetuer vestibulum elit. Aenean tellus metus,
              bibendum sed, posuere ac, mattis non, nunc. Vestibulum fringilla
              pede sit amet augue. In turpis. Pellentesque posuere.
            </p>
          </div>
        );
      case "reviews":
        return (
          <>
            <div className="p-4">
              <div className="flex">
                <img
                  src={Customer}
                  className="w-20 h-20 object-cover rounded-[50%]"
                  alt=""
                />
                <div className="m-3">
                  <h1 className="text-xl text-center">Lorem</h1>
                  <span className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="">
                  {" "}
                  ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  nulla porro nesciunt commodi adipisci beatae id soluta
                  temporibus quo! Nulla libero debitis quaerat hic! Quasi
                  temporibus nam sunt eveniet nostrum.
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex">
                <img
                  src={Customer2}
                  className="w-20 h-20 object-cover rounded-[50%]"
                  alt=""
                />
                <div className="m-3">
                  <h1 className="text-xl text-center">Doler</h1>
                  <span className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="">
                  {" "}
                  ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  nulla porro nesciunt commodi adipisci beatae id soluta
                  temporibus quo! Nulla libero debitis quaerat hic! Quasi
                  temporibus nam sunt eveniet nostrum.
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex">
                <img
                  src={Customer3}
                  className="w-20 h-20 object-cover rounded-[50%]"
                  alt=""
                />
                <div className="m-3">
                  <h1 className="text-xl text-center">Pedro</h1>
                  <span className="flex text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <p className="">
                  {" "}
                  ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                  nulla porro nesciunt commodi adipisci beatae id soluta
                  temporibus quo! Nulla libero debitis quaerat hic! Quasi
                  temporibus nam sunt eveniet nostrum.
                </p>
              </div>
            </div>
          </>
        );
      case "shipping":
        return (
          <div className="p-4">
            <p className="text-gray-700">
              Shipping policies and details can be provided in this section,
              explaining delivery times and conditions.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <Container>
        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Image and Slider Section */}
          <div className="w-full lg:w-1/2 mt-5 lg:pr-5">
            <img src={Shirt} className="rounded-xl w-full" alt="Main Product" />
            <Container>
              <div className="slider-container mt-5">
                <Slider {...settings}>
                  {[Shirt, Grey, White, Men, Men2].map((image, index) => (
                    <div key={index} className="p-3">
                      <img
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="rounded-xl cursor-pointer w-full"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Container>
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2 lg:pl-5">
            <div className="border-b pb-4">
              <h2 className="text-3xl font-bold">Men Formal T-shirt</h2>
              <p className="mt-2 text-lg">
                <span className="line-through text-gray-500 mr-2">$37</span>
                <span className="text-green-600 font-bold mr-2">$33</span>
                <span className="text-red-500">-11% Off</span>
              </p>
            </div>
            <div className="my-4">
              <p className="text-gray-700">
                Integer ante arcu, accumsan a, consectetuer eget, posuere ut,
                mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum
                nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.
                Cras id dui. Aenean ut eros et nisl sagittis vestibulum.
                Nullam...
              </p>
            </div>
            <div className="flex items-center border-t py-4">
              <FaEye className="mr-2 text-blue-500" />
              <p className="text-gray-700">
                <span className="font-semibold">20</span> people are viewing
                this right now.
              </p>
            </div>
            <div className="border-t py-4">
              <div className="flex items-center my-2">
                <h1 className="w-1/3 text-gray-500">SKU:</h1>
                <span className="w-2/3 text-gray-700">1510</span>
              </div>
              <div className="flex items-center my-2">
                <h1 className="w-1/3 text-gray-500">Vendor:</h1>
                <span className="w-2/3 text-gray-700">Vendor J</span>
              </div>
              <div className="flex items-center my-2">
                <h1 className="w-1/3 text-gray-500">Type:</h1>
                <span className="w-2/3 text-gray-700">Type J</span>
              </div>
            </div>
            <div className="flex items-center border-t py-4">
              <h1 className="w-1/3 text-gray-500">Color:</h1>
              <div className="flex gap-3 w-2/3">
                {[Shirt, Grey, White, Men, Men2].map((color, index) => (
                  <img
                    key={index}
                    src={color}
                    className="w-14 h-14 object-cover rounded-lg cursor-pointer"
                    alt={`Color ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center border-t py-4">
              <div className="flex items-center mr-6">
                <button className="flex items-center justify-center w-8 h-8 border rounded-full mr-2">
                  <FaMinus />
                </button>
                <span className="mx-2">1</span>
                <button className="flex items-center justify-center w-8 h-8 border rounded-full ml-2">
                  <FaPlus />
                </button>
              </div>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center bg-blue-600 text-white font-semibold rounded-md py-2 px-4 hover:bg-white hover:text-blue-600 hover:border-blue-600 border transition duration-300">
                  <FaShoppingCart className="mr-2" /> Add to cart
                </button>
                <button className="flex items-center justify-center bg-black text-white font-semibold rounded-md py-2 px-4 hover:bg-blue-600 transition duration-300">
                  Buy it now
                </button>
              </div>
            </div>
            <div className="flex items-center border-b py-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <CiHeart className="mr-2 text-red-500" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Add to wishlist
                  </h2>
                </div>
                <div className="flex items-center">
                  <MdCompareArrows className="mr-2 text-blue-500" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Compare
                  </h2>
                </div>
                <div className="flex items-center">
                  <CiMail className="mr-2 text-green-500" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Ask a Question
                  </h2>
                </div>
                <div className="flex items-center">
                  <FaChartBar className="mr-2 text-purple-500" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Size Chart
                  </h2>
                </div>
              </div>
            </div>
            <div className="border-b py-4">
              <div className="flex items-center mb-4">
                <FaTruckFast className="mr-2 text-yellow-500" />
                <p className="text-gray-700">
                  Estimated Delivery Date:{" "}
                  <span className="font-semibold">12-13 August, 2024.</span>
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Return rules summary
                </h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Returns accepted for 30 days</li>
                  <li>Free return shipping</li>
                  <li>No restocking fee</li>
                  <li>No final sale items</li>
                </ul>
              </div>
            </div>
            <div className="border-b py-4">
              <div className="mt-8">
                <h2 className="text-lg font-semibold mb-4">
                  Guaranteed safe checkout
                </h2>
                <div className="flex space-x-3">
                  {[Amazon, Apple, Bitcoin, Google, Paypal, Visa].map(
                    (payment, index) => (
                      <img
                        key={index}
                        src={payment}
                        alt={`Payment ${index + 1}`}
                        className="w-12 h-auto"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center py-4">
              <h2 className="text-gray-800 font-semibold mr-4">Share:</h2>
              <div className="flex space-x-3">
                <div className="flex items-center">
                  <FaFacebookF className="mr-2 text-blue-700" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Facebook
                  </h2>
                </div>
                <div className="flex items-center">
                  <FaXTwitter className="mr-2 text-sky-500" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Twitter
                  </h2>
                </div>
                <div className="flex items-center">
                  <FaPinterest className="mr-2 text-red-600" />
                  <h2 className="text-gray-700 cursor-pointer hover:text-blue-600">
                    Pinterest
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Product Reviews Section */}
      <div className="mt-8">
        <Container>
          <div className=" border-gray-300">
            <div className="flex gap-3 p-4 border-b">
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "description"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "reviews"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
              <button
                className={`px-4 py-2 rounded ${
                  activeTab === "shipping"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setActiveTab("shipping")}
              >
                Shipping Policy
              </button>
            </div>
            <div className="p-4">{renderContent()}</div>
          </div>
        </Container>
      </div>
      {/* Related Products */}
      <div className="">
        <Container>
          <div className="">
            <h2 className="text-center font-semibold text-3xl">
              Related Products
            </h2>
            <div className="my-10">
              <FeaturedCard />
            </div>
          </div>
        </Container>
      </div>
      {/* Related Products */}
      <div className="">
        <Container>
          <div className="">
            <h2 className="text-center font-semibold text-3xl">
              Recently Viewed
            </h2>
            <div className="my-10">
              <NewArrivalsCard />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
