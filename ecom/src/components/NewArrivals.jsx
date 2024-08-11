import Container from "../components/Container";
import NewArrivalsCard from "./NewArrivalsCard";

export default function NewArrivals() {
  return (
    <div className="mt-14">
      <Container>
        <div className="">
          <div className="">
            <h2 className="text-center font-semibold text-3xl">
              New Arrivals
            </h2>
          </div>
          <div className="mt-10">
            <NewArrivalsCard />
          </div>
          <div className="text-center mt-10">
            <button className="bg-blue-600 text-white font-semibold rounded-md py-2 px-5 hover:bg-white hover:text-black hover:border hover:border-black transition duration-300">
              View All
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
