import Container from "../components/Container";
import Suit from "../assets/images/suit.png";
import Dress from "../assets/images/dress.png";

export default function Banner() {
  return (
    <Container>
      <div className="flex justify-between items-center gap-8 my-20">
        <div className="relative w-1/2 group overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-start text-black p-8 rounded-lg z-10">
            <h1 className="text-3xl font-bold mb-4">Suits & Formalwear</h1>
            <button className="bg-transparent text-black border font-semibold border-black rounded-md py-2 px-4 hover:bg-white transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="transform transition-transform duration-500 ease-out group-hover:scale-105">
            <img className="rounded-2xl object-cover w-full h-[350px]" src={Suit} alt="Suits & Formalwear" />
          </div>
        </div>
        <div className="relative w-1/2 group overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-center items-start text-black p-8 rounded-lg z-10">
            <h1 className="text-3xl font-bold mb-4">Tops & Gowns</h1>
            <button className="bg-transparent text-black border border-black font-semibold rounded-md py-2 px-4 hover:bg-white transition duration-300">
              Shop Now
            </button>
          </div>
          <div className="transform transition-transform duration-500 ease-out group-hover:scale-105">
            <img className="rounded-2xl object-cover w-full h-[350px]" src={Dress} alt="Tops & Gowns" />
          </div>
        </div>
      </div>
    </Container>
  );
}
