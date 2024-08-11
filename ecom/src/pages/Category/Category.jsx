import { categoryData } from "../../data/data.js";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../../components/Container.jsx";

export default function Category() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = categoryData;
      setCategory(data);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="bg-primary py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-black">Collections</h1>
          <ul className="flex justify-center mt-4 space-x-2">
            <li>
              <Link to="/" className="font-medium text-lg text-gray-600">
                Home
              </Link>
            </li>
            <FaChevronRight className="text-gray-600 mt-2 text-sm" />
            <li className="font-medium text-lg text-blue-400">Collections</li>
          </ul>
        </div>
      </div>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-20">
          {category.map((data) => (
            <div key={data.id} className="mx-auto">
              <img
                className="rounded-lg w-72 h-72 object-cover"
                src={data.image}
                alt=""
              />
              <div className="w-40 text-center mt-3">
                <h3 className="font-semibold">{data.name}</h3>
                <span className="">(20)</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
