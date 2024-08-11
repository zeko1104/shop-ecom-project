import { FaChevronDown } from "react-icons/fa6";
import img from "../assets/images/a.png";
import img2 from "../assets/images/b.png";
import img3 from "../assets/images/c.png";
import img4 from "../assets/images/d.png";
import img5 from "../assets/images/e.png";
import img6 from "../assets/images/f.png";
import img7 from "../assets/images/g.png";
import img8 from "../assets/images/h.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="mx-auto z-10">
      <ul className="flex justify-between items-center gap-5">
        <li className="relative group">
          <Link to='/'>
            <div className="hover:text-blue-600 flex items-center cursor-pointer text-base font-bold font-sans text-gray-500">
              Home
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          </Link>
          <div className="absolute left-0 hidden group-hover:flex flex-col rounded-lg bg-white shadow-lg mt-2 p-4 w-[500px] transition-all duration-1000 ease-in-out">
            <div className="flex">
              <div className="w-56">
                <h1 className="font-bold text-lg mb-2">Niches Demos</h1>
                <ul className="space-y-2">
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Fashion 1
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Fashion 2
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Fashion 3
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Beauty & Cosmetic
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Jewelry
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    T-Shirt
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Electronics
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Single Product
                  </li>
                </ul>
              </div>
              <div className="w-56 mx-10">
                <h1 className="font-bold text-lg mb-2">Global Demos</h1>
                <ul className="space-y-2">
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Animation
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Dark
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    RTL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group">
          <Link to="/shop">
            <div className="hover:text-blue-600 flex items-center cursor-pointer text-base font-bold font-sans text-gray-500">
              Shop
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          </Link>
          <div className="absolute left-0 hidden group-hover:flex flex-col rounded-lg bg-white shadow-lg mt-2 p-4 w-[900px] transition-all duration-1000 ease-in-out">
            <div className="flex justify-around">
              <div className="mr-4">
                <h1 className="font-bold text-lg mb-2">Women Fashion</h1>
                <ul className="space-y-2">
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Dresses
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Tops & Blouses
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Sweaters & Cardigans
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Jackets & Coats
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Pants & Jeans
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Skirts
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Activewear
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Lingerie & Sleepwear
                  </li>
                </ul>
              </div>
              <div className="mr-4">
                <h1 className="font-bold text-lg mb-2">Men Fashion</h1>
                <ul className="space-y-2">
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Shirts
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    T-Shirts & Polos
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Sweaters & Hoodies
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Jackets & Blazers
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Pants & Chinos
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Jeans
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Suits & Formalwear
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Activewear
                  </li>
                </ul>
              </div>
              <div className="mr-4">
                <h1 className="font-bold text-lg mb-2">Accessories</h1>
                <ul className="space-y-2">
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Bags & Purses
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Hats & Caps
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Scarves & Shawls
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Beauty & Cosmetic
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Belts & Suspenders
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Sunglasses
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Jewelry
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Watches
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Footwear</h1>
                <ul className="space-y-2">
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Flats & Loafers
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Heels & Pumps
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Sneakers & Athletic
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Dress Shoes
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Casual Shoes
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Boots & Chukkas
                  </li>
                  <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                    Sandals & Slides
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="relative group">
          <Link to="/collections">
            <div className="hover:text-blue-600 flex items-center cursor-pointer text-base font-bold font-sans text-gray-500">
              Categories
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          </Link>
          <div className="absolute left-0 hidden group-hover:flex flex-col rounded-lg bg-white shadow-lg mt-2 p-4 transition-all duration-300 ease-in-out">
            <div className="grid grid-cols-2 gap-5 w-[800px]">
              <div>
                <h1 className="font-bold text-lg mb-2">Featured Product</h1>
                <img
                  src={img}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">New Arrivals</h1>
                <img
                  src={img2}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Summer Fashion</h1>
                <img
                  src={img3}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Winter Fashion</h1>
                <img
                  src={img4}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Accessories</h1>
                <img
                  src={img5}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Footwear</h1>
                <img
                  src={img6}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Men</h1>
                <img
                  src={img7}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-2">Women</h1>
                <img
                  src={img8}
                  alt=""
                  className="w-72 h-72 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </li>
        <li className="relative group">
          <div className="hover:text-blue-600 flex items-center cursor-pointer text-base font-bold font-sans text-gray-500">
            Products
            <FaChevronDown className="ml-1 text-xs" />
          </div>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white rounded-lg shadow-lg mt-2 p-4 transition-all duration-1000 ease-in-out">
            <ul className="space-y-2">
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Images
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Unit Price
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Pre-order Product
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Countdown
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Complementary
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Video
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                AR / 3D Model
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Gift Card
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group">
          <Link to="/blogs">
            <div className="hover:text-blue-600 flex items-center cursor-pointer text-base font-bold font-sans text-gray-500">
              Blog
              <FaChevronDown className="ml-1 text-xs" />
            </div>
          </Link>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white rounded-lg shadow-lg mt-2 p-4 transition-all duration-300 ease-in-out">
            <ul className="space-y-2">
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Blogs
              </li>
            </ul>
          </div>
        </li>
        <li className="relative group">
          <div className="hover:text-blue-600 flex items-center cursor-pointer text-base font-bold font-sans text-gray-500">
            Pages
            <FaChevronDown className="ml-1 text-xs" />
          </div>
          <div className="absolute left-0 hidden group-hover:flex flex-col bg-white rounded-lg shadow-lg mt-2 p-4 transition-all duration-1000 ease-in-out">
            <ul className="space-y-2">
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Contact
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                About us
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Service
              </li>
              <li className="hover:text-gray-600 cursor-pointer transition-colors duration-200">
                Faq
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
}
