import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";
import Container from "./../components/Container.jsx";
import { blogData } from "../data/data.js";
import { useState, useEffect } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = blogData;
      setBlogs(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="bg-primary py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-black">Blogs</h1>
          <ul className="flex justify-center mt-4 space-x-2">
            <li>
              <Link to="/" className="font-medium text-lg text-gray-600">
                Home
              </Link>
            </li>
            <FaChevronRight className="text-gray-600 mt-2 text-sm" />
            <li className="font-medium text-lg text-blue-400">Blogs</li>
          </ul>
        </div>
      </div>
      <Container>
        <div className="flex my-20">
          <div className="w-1/4">
            <BlogSidebar />
          </div>
          <div className="w-[900px]">
            <div className="grid grid-cols-2 gap-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="cursor-pointer w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                    <h2 className="cursor-pointer text-xl font-semibold mb-4 hover:text-blue-600">{blog.title}</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
