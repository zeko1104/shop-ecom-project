import  { useState, useEffect } from 'react';
import Container from "../components/Container";
import Img from '../assets/images/promotion.png';

export default function Promotion() {
  const calculateTimeLeft = () => {
    const difference = +new Date(`2024-12-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="bg-[#EBEBEB] w-full h-full mt-14">
      <Container>
        <div className="flex flex-col lg:flex-row justify-around items-center lg:items-start">
          <div className="text-center lg:text-left space-y-6 mt-36">
            <div>
              <h1 className="text-5xl font-bold">
                Best Offer - Up to <span className="text-5xl font-bold text-blue-600">50%</span>
              </h1>
            </div>
            <div>
              <p className="text-lg text-gray-700">
                Explore our latest New Arrivals & unlock discounts of up to 50% off!
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-4">
              <div className="bg-white h-16 w-16 rounded-md flex flex-col items-center justify-center shadow-md">
                <span className="text-xl font-semibold">{timeLeft.days || '0'}</span>
                <span className="text-sm">Days</span>
              </div>
              <div className="bg-white h-16 w-16 rounded-md flex flex-col items-center justify-center shadow-md">
                <span className="text-xl font-semibold">{timeLeft.hours || '0'}</span>
                <span className="text-sm">Hrs</span>
              </div>
              <div className="bg-white h-16 w-16 rounded-md flex flex-col items-center justify-center shadow-md">
                <span className="text-xl font-semibold">{timeLeft.minutes || '0'}</span>
                <span className="text-sm">Mins</span>
              </div>
              <div className="bg-white h-16 w-16 rounded-md flex flex-col items-center justify-center shadow-md">
                <span className="text-xl font-semibold">{timeLeft.seconds || '0'}</span>
                <span className="text-sm">Secs</span>
              </div>
            </div>
            <div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <img src={Img} alt="Promotion Image" className="w-full h-auto object-cover" />
          </div>
        </div>
      </Container>
    </div>
  );
}
