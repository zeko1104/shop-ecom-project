import { FaSearch } from "react-icons/fa";
import { blogData } from "../data/data";
import { useState, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function BlogSidebar() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = blogData.slice(0, 3);
      setBlog(data);
    };

    fetchData();
  }, []);

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + "...";
    }
    return title;
  };

  const tags = [
    "Accessories",
    "Dress",
    "Fashion",
    "Men",
    "Spring",
    "Winter",
    "Women",
  ];

  return (
    <div className="p-5">
      <div className=" border-b pb-5">
        <h2 className="font-semibold text-lg mb-3">Search</h2>
        <div className="flex items-center my-5">
          <input
            className="w-full h-12 border border-gray-300 rounded-l-lg pl-3 outline-none focus:ring-2 focus:ring-blue-600"
            type="search"
            placeholder="Search..."
          />
          <button className="bg-blue-600 h-12 w-14 flex items-center justify-center rounded-r-lg text-white">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className=" border-b pb-5">
        <h2 className="font-semibold text-lg my-5">Recent Posts</h2>
        <div className="space-y-4">
          {blog.map((data) => (
            <div key={data.id} className="flex space-x-4 items-center">
              <img
                className="w-16 h-16 object-cover rounded cursor-pointer"
                src={data.img}
                alt={data.title}
              />
              <div>
                <h3 className="text-md font-bold cursor-pointer hover:text-blue-600">
                  {truncateTitle(data.title, 20)}
                </h3>
                <p className="text-gray-600 text-sm">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" pb-5 border-b">
        <h2 className="font-semibold text-lg my-5">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-primary text-black px-3 py-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
            >
              <h3 className="font-medium text-sm">{tag}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className=" border-b pb-5">
        <h2 className="font-semibold text-lg my-5">Never Miss News</h2>
        <div className="flex gap-3 my-10">
          <div className="w-52 h-10 bg-primary text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaFacebookF className="text-lg" />
          </div>
          <div className="w-52 h-10 bg-primary text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaXTwitter className="text-lg" />
          </div>
          <div className="w-52 h-10 bg-primary text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaYoutube className="text-lg" />
          </div>
          <div className="w-52 h-10 bg-primary text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaInstagram className="text-lg" />
          </div>
          <div className="w-52 h-10 bg-primary text-black flex items-center justify-center rounded-md cursor-pointer hover:bg-blue-600 hover:text-white">
            <FaTiktok className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
