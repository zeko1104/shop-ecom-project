import { useState, useEffect } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Photo from "/src/assets/images/popup.jpg";
import { IoMail } from "react-icons/io5";

export default function ModalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    localStorage.setItem("modalShown", "true");
  };

  useEffect(() => {
    const modalShown = localStorage.getItem("modalShown");
    if (!modalShown) {
      setTimeout(() => {
        openModal();
      }, 5000);
    }
  }, []);

  return (
    <div className="">
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative w-[900px] bg-white p-8 rounded-lg shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl text-gray-600"
            >
              <IoIosCloseCircleOutline />
            </button>
            <div className="flex">
              <div className="">
                <img src={Photo} className="object-cover rounded-xl" alt="" />
              </div>
              <div className="mx-5 my-20">
                <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
                <p className="mb-4">
                  Enter your email below to receive special offers, exclusive
                  discounts, and more!
                </p>
                <div className="relative flex items-center w-full">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-16 rounded-lg border pl-4 pr-12 focus:outline-blue-600"
                  />
                  <IoMail className="absolute text-blue-600 right-4 top-1/2 transform -translate-y-1/2 text-2xl" />
                </div>
                <button className="bg-blue-600 mt-10 text-white font-semibold rounded-md py-2 px-5 hover:bg-white hover:text-black hover:border hover:border-black transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
