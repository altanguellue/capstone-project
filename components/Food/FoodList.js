import styled from "styled-components";
import { useState } from "react";
import { Fragment } from "react";
import { dataFoods } from "../../lib/data";
import FoodCard from "./FoodCard";

export default function FoodList() {
  const [search, setSearch] = useState("");
  return (
    <>
      <StyledSearchInput>
        <input
          type="text"
          placeholder="Suchen"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </StyledSearchInput>

      <StyledFoodListHeader>Obst & Gemüse</StyledFoodListHeader>

      <StyledFoodList>
        {dataFoods
          .filter((dataFood) => {
            return search.toLowerCase() === ""
              ? dataFood
              : dataFood.name.toLowerCase().includes(search);
          })
          .map((dataFood) => {
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

const StyledSearchInput = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
`;
