import styled from "styled-components";
import { useState } from "react";
import { Fragment } from "react";
import { dataFoods } from "../../lib/data";
import FoodCard from "./FoodCard";
import Image from "next/image";
import SearchIcon from "../../assets/images/search-icon.svg";

export default function FoodList({ onToggleFavorite, foods }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <StyledHomeHeader>Dezember</StyledHomeHeader>
      <StyledSearchInput>
        <StyledSearchIcon
          src={SearchIcon}
          alt="Search Icon"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Suchen"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </StyledSearchInput>

      <StyledFoodListHeader>Obst & Gemüse</StyledFoodListHeader>

      <StyledFoodList>
        {foods
          .filter((food) => {
            return search.toLowerCase() === ""
              ? food
              : food.name.toLowerCase().includes(search);
          })
          .map((foods) => {
            return (
              <Fragment key={foods.id}>
                <FoodCard
                  id={foods.id}
                  name={foods.name}
                  img={foods.img}
                  onToggleFavorite={onToggleFavorite}
                  foods={foods}
                />
              </Fragment>
            );
          })}
      </StyledFoodList>
    </>
  );
}

const StyledHomeHeader = styled.h1`
  margin-left: 0.5rem;
  color: #71554f;
  font-weight: 100;
  font-size: 26px;
  line-height: 39px;
`;
const StyledFoodListHeader = styled.h2`
  margin-left: 0.5rem;
  color: #71554f;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;
const StyledFoodList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 90px;
`;

const StyledSearchInput = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 10px 0;
  justify-content: center;
  outline: none;

  input::placeholder {
    color: #ffe6e1;
  }

  input {
    margin: 0.5rem;
    padding: 5px;
    border-radius: 6px;
    border: none;
    width: 100%;
    background-color: #e8a598;
    color: #ffe6e1;
    padding-left: 25px;
  }
  input:focus {
    outline: none;
  }
  input::-webkit-search-cancel-button {
    appearance: none;
  }
`;
const StyledSearchIcon = styled(Image)`
  position: absolute;
  left: 10px;
  align-self: center;
  justify-self: self-start;
`;
