import Slider from "react-slick";
import Container from "../components/Container";

function LinerSlider() {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <Container>
         <div className="bg-[#EBEBEB] rounded-lg  my-20">
      <div className="slider-container">
        <Slider {...settings}>
          <div >
            <h1 className="text-3xl text-center">•Free return shipping</h1>
          </div>
          <div>
            <h1 className="text-3xl text-center">•No restocking fee</h1>
          </div>
          <div>
            <h1 className="text-3xl text-center">•No final sale items</h1>
          </div>
          <div>
            <h1 className="text-3xl text-center">•100% Payment Secure</h1>
          </div>
          <div>
            <h1 className="text-3xl text-center">•Online Support</h1>
          </div>
          <div>
            <h1 className="text-3xl text-center">•Returns accepted for 30 days</h1>
          </div>
        </Slider>
      </div>
    </div>
    </Container>
  );
}

export default LinerSlider;
