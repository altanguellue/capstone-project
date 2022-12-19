import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import { dataFoods } from "../lib/data";
import FoodCard from "../components/Food/FoodCard";
import FoodCardDetail from "../components/Food/FoodCardDetail";

export default function Food() {
  const router = useRouter();
  const { food } = router.query;
  console.log(dataFoods);
  const currentFood = dataFoods.find((dataFood) => dataFood.name === food);
  if (!currentFood) {
    return null;
  }

  console.log(currentFood);
  const { name } = currentFood;
  return (
    <>
      <Header />
      <FoodCardDetail name={name} />
      <Footer />
    </>
  );
}
