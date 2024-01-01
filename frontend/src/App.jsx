import "./App.css";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FeacturedProducts from "./features/products/FeacturedProducts";

function App() {
  return (
    <section className="section">
      <div className="containerCustom">
        <Header />
        <Carousel />
        <Categories />
        <FeacturedProducts />
        <Footer />
      </div>
    </section>
  );
}

export default App;
