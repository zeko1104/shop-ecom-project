import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../components/Container";
import Slide1 from "../assets/images/slide1.png";
import Slide2 from "../assets/images/slide2.png";
import Slide3 from "../assets/images/slide3.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <div className="bg-[#EBEBEB] rounded-3xl py-8">
        <Slider {...settings}>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="m-5">
                <h1 className="text-6xl font-semibold mb-2">Men Collection</h1>
                <p className="mb-4">Discover the latest mens collection</p>
                <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
                  Shop Now
                </button>
              </div>
              <div>
                <img src={Slide1} alt="Men Collection" className="" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="m-5">
                <h1 className="text-6xl font-semibold mb-2">
                  Women Collection
                </h1>
                <p className="mb-4">Discover the latest women collection</p>
                <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
                  Shop Now
                </button>
              </div>
              <div>
                <img src={Slide2} alt="Women Collection" className="" />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center">
              <div className="m-5">
                <h1 className="text-6xl font-semibold mb-2">Baby Collection</h1>
                <p className="mb-4">Discover the latest baby collection</p>
                <button className="bg-blue-600 text-white rounded-md py-2 px-4 hover:bg-blue-700 transition duration-300">
                  Shop Now
                </button>
              </div>
              <div>
                <img src={Slide3} alt="Baby Collection" className="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
}
