import { MdMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Container from "../components/Container.jsx";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function HeaderTop() {
  return (
    <div className="bg-black w-full h-10 hidden md:block">
      <Container>
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex items-center m-1">
              <MdMailOutline className="text-white text-lg m-1" />
              <p className="text-white text-lg">info@example.com</p>
            </div>
            <div className="flex items-center m-1">
              <FaLocationDot className="text-white text-lg m-1" />
              <p className="text-white text-lg">City, State, ZIP Code</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <select
              className="bg-transparent text-white border-none outline-none cursor-pointer p-1"
              name=""
              id=""
            >
              <option className="text-black bg-white" value="">
                English
              </option>
              <option className="text-black bg-white" value="">
                Russian
              </option>
              <option className="text-black bg-white" value="">
                Azerbaijan
              </option>
            </select>
            <FaFacebookF className="text-white text-lg cursor-pointer" />
            <FaXTwitter className="text-white text-lg cursor-pointer" />
            <FaYoutube className="text-white text-lg cursor-pointer" />
            <FaInstagram className="text-white text-lg cursor-pointer" />
            <FaTiktok className="text-white text-lg cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
}
