import { FaChevronRight } from "react-icons/fa6";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import TotalProductsCard from "./TotalProductsCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import { categoryData } from "../data/data.js";

export default function ShopPage() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = categoryData;
      setCategory(data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="">
      <div className="bg-primary py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-black">Products</h1>
          <ul className="flex justify-center mt-4 space-x-2">
            <li>
              <Link to="/" className="font-medium text-lg text-gray-600">
                Home
              </Link>
            </li>
            <FaChevronRight className="text-gray-600 mt-2 text-sm" />
            <li className="font-medium text-lg text-blue-400">Products</li>
          </ul>
        </div>
      </div>
      <Container>
        <div className="flex mt-10">
          <div className="">
            <Sidebar />
          </div>
          <div className="w-full mx-5 border-b">
            <div className="flex justify-between mx-5">
              <div className="">
                <select>
                  <option value="featured">Featured</option>
                  <option value="best-selling">Best Selling</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                  <option value="price-low-to-high">Price, low to high</option>
                  <option value="price-high-to-low">Price, high to low</option>
                  <option value="date-new-to-old">Date, new to old</option>
                  <option value="date-old-to-new">Date, old to new</option>
                </select>
              </div>
              <div className="">
                <h1>
                  Showing <span>1-15</span> of <span>68</span> results
                </h1>
              </div>
            </div>
            <div className="mx-3 my-16 ">
              <TotalProductsCard />
            </div>
          </div>
        </div>
        <div className="flex justify-center m-10">
          <Stack spacing={5}>
            <Pagination count={10} variant="outlined" shape="rounded" />
          </Stack>
        </div>
        <div className="slider-container my-20">
          <Slider {...settings}>
            {category.map((data) => (
              <div key={data.id} className="">
                <img
                  className="rounded-lg w-40 h-40 object-cover"
                  src={data.image}
                  alt=""
                />
                <div className="w-40 text-center mt-3">
                  <h3 className="font-semibold">{data.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
