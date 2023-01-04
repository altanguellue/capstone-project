import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FoodList from "../components/Food/FoodList";

export default function Home({ foods, onToggleFavorite }) {
  return (
    <>
      <Header />
      <FoodList foods={foods} onToggleFavorite={onToggleFavorite} />
      <Footer />
    </>
  );
}
