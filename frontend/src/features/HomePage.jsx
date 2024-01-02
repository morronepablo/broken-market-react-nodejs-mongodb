import Header from "./../components/Header";
import Carousel from "./../components/Carousel";
import Categories from "./../components/Categories";
import FeacturedProducts from "./products/FeacturedProducts";
import Footer from "../components/Footer";
import { useUser } from "../app/hooks/loadUser";

function HomePage() {
  const { isLoading, user } = useUser();

  if (isLoading) return null;

  return (
    <div>
      <Header user={user} />
      <Carousel />
      <Categories />
      <FeacturedProducts />
      <Footer />
    </div>
  );
}

export default HomePage;
