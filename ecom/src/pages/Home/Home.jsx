import Banner from "../../components/Banner";
import BlogList from "../../components/BlogList";
import FeaturedList from "../../components/FeaturedList";
import LinerSlider from "../../components/LinerSlider";
import NewArrivals from "../../components/NewArrivals";
import Products from "../../components/Products";
import Promotion from "../../components/Promotion";
import Services from "../../components/Services";
import SimpleSlider from "../../components/SimpleSlider";



export default function Home() {
  return (
    <div className="">
        <SimpleSlider/>
        <Banner/>
        <Products/>
        <Promotion/>
        <FeaturedList/>
        <NewArrivals/>
        <LinerSlider/>
        <BlogList/>
        <Services/>
    </div>
  )
}



