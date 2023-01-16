import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";
import { Fragment } from "react";
import FoodCard from "../components/Food/FoodCard";

export default function Favorite({ foods, onToggleFavorite }) {
  const favoriteFoods = foods.filter((food) => food.isFavorite === true);
  const favoriteFoodsList = favoriteFoods.map((favoriteFood) => (
    <Fragment key={favoriteFood.id}>
      <FoodCard
        id={favoriteFood.id}
        name={favoriteFood.name}
        imgOverview={favoriteFood.imgOverview}
        onToggleFavorite={onToggleFavorite}
        foods={favoriteFood}
      />
    </Fragment>
  ));
  return (
    <>
      <Header />
      <StyledFavoriteHeader>Favoriten</StyledFavoriteHeader>
      {favoriteFoodsList}
      <Footer />
    </>
  );
}

const StyledFavoriteHeader = styled.h1`
  margin-left: 0.5rem;
  color: #71554f;
  font-weight: 100;
  font-size: 26px;
  line-height: 39px;
`;
