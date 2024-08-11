import "./App.css";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Topbar from "./pages/Topbar/Topbar";
import Shop from "./pages/Shop/Shop";
import Category from "./pages/Category/Category";
import Blog from "./pages/Blog/Blog";
import ModalPopup from "./components/ModalPopup";
import SingleProduct from "./pages/Single-Product/SingleProduct";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";




function App() {
  return (
    <div className="">
      <Topbar/>
      <ModalPopup/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/collections" element={<Category/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/singleproduct" element={<SingleProduct/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
