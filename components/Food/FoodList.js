import { dataFoods } from "../../lib/data";
import styled from "styled-components";
import { Fragment } from "react";
import FoodCard from "./FoodCard";

export default function FoodList() {
  return (
    <>
      <StyledListHeader>Obst & Gemüse</StyledListHeader>
      <StyledList>
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
      </StyledList>
    </>
  );
}

const StyledListHeader = styled.h2`
  text-align: center;
  color: #71554f;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  list-style: none; */
`;
