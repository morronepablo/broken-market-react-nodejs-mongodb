import Header from "./../components/Header";
import Carousel from "./../components/Carousel";
import Categories from "./../components/Categories";
import FeacturedProducts from "./products/FeacturedProducts";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousel />
      <Categories />
      <FeacturedProducts />
      <Footer />
    </div>
  );
}

export default HomePage;
