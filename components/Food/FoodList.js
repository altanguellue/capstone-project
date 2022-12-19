import styled from "styled-components";
import { Fragment } from "react";
import { dataFoods } from "../../lib/data";
import FoodCard from "./FoodCard";

export default function FoodList() {
  return (
    <>
      <StyledFoodListHeader>Obst & Gemüse</StyledFoodListHeader>
      <StyledFoodList>
        {dataFoods.map((dataFood) => {
          return (
            <Fragment key={dataFood.id}>
              <FoodCard
                id={dataFood.id}
                name={dataFood.name}
                img={dataFood.img}
              />
            </Fragment>
          );
        })}
      </StyledFoodList>
    </>
  );
}

const StyledFoodListHeader = styled.h2`
  text-align: left;
  color: #71554f;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  padding-left: 12px;
`;
const StyledFoodList = styled.ul`
  display: flex;
  flex-direction: column;
`;
