import Container from "../components/Container";
import BlogSliderCard from "./BlogSliderCard";

export default function BlogList() {
  return (
    <div className="">
      <Container>
        <div className="">
          <div className="pb-14"><h2 className="text-center font-semibold text-3xl">Latest Blog</h2></div>
          <div className="">
            <BlogSliderCard />
          </div>
        </div>
      </Container>
    </div>
  );
}
