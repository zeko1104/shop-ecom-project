import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogData } from '../data/data.js';
import { useState, useEffect } from "react";

export default function BlogSliderCard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = blogData;
      setBlogs(data);
    };

    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="slider-container mx-auto max-w-screen-xl">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-hidden">
                <img 
                  src={blog.img} 
                  alt="" 
                  className="cursor-pointer w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">{blog.date}</p>
                <h2 className="text-xl font-semibold mb-4">{blog.title}</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
