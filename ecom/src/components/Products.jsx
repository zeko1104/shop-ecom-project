import Container from "../components/Container";
import Card from "./Card";

export default function Products() {
  return (
    <Container>
      <div className="">
        <div className="flex justify-between mb-12">
          <h1 className="text-4xl font-semibold">Best Selling</h1>
          <div className="flex gap-7">
            <button className="font-medium">Men</button>
            <button className="font-medium">Women</button>
            <button className="font-medium">Baby</button>
          </div>
        </div>
        <div className="">
          <Card />
          <div className="text-center mt-10">
            <button className="bg-blue-600 text-white font-semibold rounded-md py-2 px-5 hover:bg-white hover:text-black hover:border hover:border-black transition duration-300">View All</button>
          </div>
        </div>
      </div>
    </Container>
  );
}
