import "./App.css";
import Carousel from "./components/Carousel";
import Categories from "./components/Categories";
import Header from "./components/Header";

function App() {
  return (
    <section className="section">
      <div className="containerCustom">
        <Header />
        <Carousel />
        <Categories />
      </div>
    </section>
  );
}

export default App;
