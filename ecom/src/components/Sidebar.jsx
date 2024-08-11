import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Sidebar() {
  const [openSection, setOpenSection] = useState(null);

  const toggleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      title: "Categories",
      content: (
        <ul className="overflow-y-scroll max-h-40">
          {[
            "Accessories (22)",
            "Baby (10)",
            "Baby (T Shirt) (3)",
            "Best Selling (68)",
            "Best-Selling (Jewelry) (7)",
            "Bracelets (1)",
            "Brooches and Pins (2)",
            "Cap (2)",
            "Diamond (6)",
            "Earphone (2)",
            "Earrings (1)",
            "Featured (Electronics) (7)",
            "Featured (Fashion) (12)",
            "Featured (Jewelry) (13)",
            "Featured (T Shirt) (9)",
            "Featured Product (68)",
            "Footwear (16)",
            "Gold (8)",
            "Headphone (1)",
            "Kid (T Shirt) (3)",
            "Kids (9)",
            "Men (14)",
            "Men (T Shirt) (3)",
            "Necklaces (3)",
            "New (Fashion) (17)",
            "New Arrivals (68)",
            "New Arrivals (6)",
            "On-Selling (Jewelry) (4)",
            "Rings (5)",
            "Sale (37)",
            "Silver (9)",
            "Smartphone (1)",
            "Smartwatch (5)",
            "Summer Styles (30)",
            "Top Rated (19)",
            "Top Rated (Jewelry) (7)",
            "Trending (6)",
            "Winter Fashion (6)",
            "Women (20)",
            "Women (T Shirt) (3)",
          ].map((item, index) => (
            <li key={index} className="py-1">
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Availability",
      content: (
        <ul>
          <li className="flex items-center py-1">
            <input type="checkbox" className="mr-2" /> In Stock <span>(64)</span>
          </li>
          <li className="flex items-center py-1">
            <input type="checkbox" className="mr-2" /> Out of Stock <span>(8)</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Color",
      content: (
        <ul>
          {[
            "black (12)",
            "blue (21)",
            "gold (9)",
            "gray (19)",
            "green (21)",
            "magneta (14)",
            "blue (21)",
            "maroon (14)",
            "navy (14)",
            "orange (6)",
            "pink (12)",
            "purple (12)",
            "red (21)",
            "violet (12)",
          ].map((color, index) => (
            <li key={index} className="flex items-center py-1">
              <input type="checkbox" className="mr-2" /> {color}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Size",
      content: (
        <ul>
          {["s (25)", "m (33)", "l (33)", "xl (29)", "xxl (14)"].map((size, index) => (
            <li key={index} className="flex items-center py-1">
              <input type="checkbox" className="mr-2" /> {size}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Material",
      content: (
        <ul>
          {["fiber (6)", "leather (6)", "metal (6)", "resin (6)", "slag (6)"].map(
            (material, index) => (
              <li key={index} className="flex items-center py-1">
                <input type="checkbox" className="mr-2" /> {material}
              </li>
            )
          )}
        </ul>
      ),
    },
    {
      title: "Product Type",
      content: (
        <ul>
          {["Type A (6)", "Type B (6)", "Type C (6)", "Type D (6)", "Type E (6)"].map(
            (type, index) => (
              <li key={index} className="flex items-center py-1">
                <input type="checkbox" className="mr-2" /> {type}
              </li>
            )
          )}
        </ul>
      ),
    },
    {
      title: "Brand",
      content: (
        <ul>
          {["Brand A (6)", "Brand B (6)", "Brand C (6)", "Brand D (6)", "Brand E (6)"].map(
            (brand, index) => (
              <li key={index} className="flex items-center py-1">
                <input type="checkbox" className="mr-2" /> {brand}
              </li>
            )
          )}
        </ul>
      ),
    },
  ];

  return (
    <div className="space-y-4 w-64">
      {sections.map((section, index) => (
        <div key={index} className="border-b">
          <button
            className="flex justify-between items-center w-full p-4 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium text-gray-900">{section.title}</span>
            <span className="text-gray-500">
              {openSection === index ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
          {openSection === index && (
            <div className="p-4 bg-white">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
