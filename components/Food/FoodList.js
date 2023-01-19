import styled from "styled-components";
import { useState } from "react";
import { Fragment } from "react";
import FoodCard from "./FoodCard";
import Image from "next/image";
import SearchIcon from "../../assets/images/search-icon.svg";

export default function FoodList({ onToggleFavorite, foods }) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMonth, setSelectedMonth] = useState(null);

  let filteredItems = [...foods];
  let monthText = "Gesamtes Jahr";
  let foodText = "Obst & Gemüse";

  filteredItems.sort((foodA, foodB) => {
    if (foodA.name > foodB.name) return 1;
    if (foodA.name < foodB.name) return -1;
    return 0;
  });

  if (selectedCategory !== "All") {
    filteredItems = foods.filter((food) => food.category === selectedCategory);
    foodText = `${selectedCategory}`;
  }

  if (selectedMonth) {
    filteredItems = filteredItems.filter((food) =>
      food.availability.includes(selectedMonth)
    );
    monthText = `${selectedMonth}`;
  }

  return (
    <>
      <StyledHomeHeader>{monthText}</StyledHomeHeader>
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
      <StyledButtonContainer>
        <StyledCategoryButtonContainer>
          <StyledCategoryButton
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => setSelectedCategory("All")}
          >
            Alle
          </StyledCategoryButton>
          <StyledCategoryButton
            className={selectedCategory === "Gemüse" ? "active" : ""}
            onClick={() => setSelectedCategory("Gemüse")}
          >
            Gemüse
          </StyledCategoryButton>
          <StyledCategoryButton
            className={selectedCategory === "Obst" ? "active" : ""}
            onClick={() => setSelectedCategory("Obst")}
          >
            Obst
          </StyledCategoryButton>
        </StyledCategoryButtonContainer>

        <StyledMonthButtonContainer>
          <StyledMonthButton
            className={selectedMonth === "Januar" ? "active" : ""}
            onClick={() => setSelectedMonth("Januar")}
          >
            Jan
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "Februar" ? "active" : ""}
            onClick={() => setSelectedMonth("Februar")}
          >
            Feb
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "März" ? "active" : ""}
            onClick={() => setSelectedMonth("März")}
          >
            Mär
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "April" ? "active" : ""}
            onClick={() => setSelectedMonth("April")}
          >
            Apr
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "Mai" ? "active" : ""}
            onClick={() => setSelectedMonth("Mai")}
          >
            Mai
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "Juni" ? "active" : ""}
            onClick={() => setSelectedMonth("Juni")}
          >
            Jun
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "Juli" ? "active" : ""}
            onClick={() => setSelectedMonth("Juli")}
          >
            Jul
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "August" ? "active" : ""}
            onClick={() => setSelectedMonth("August")}
          >
            Aug
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "September" ? "active" : ""}
            onClick={() => setSelectedMonth("September")}
          >
            Sep
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "Oktober" ? "active" : ""}
            onClick={() => setSelectedMonth("Oktober")}
          >
            Okt
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "November" ? "active" : ""}
            onClick={() => setSelectedMonth("November")}
          >
            Nov
          </StyledMonthButton>
          <StyledMonthButton
            className={selectedMonth === "Dezember" ? "active" : ""}
            onClick={() => setSelectedMonth("Dezember")}
          >
            Dez
          </StyledMonthButton>
        </StyledMonthButtonContainer>
      </StyledButtonContainer>
      <StyledFoodListHeader>{foodText}</StyledFoodListHeader>

      <StyledFoodList>
        {filteredItems
          .filter((food) => {
            return search.toLowerCase() === ""
              ? food
              : food.name.toLowerCase().startsWith(search);
          })
          .map((foods) => {
            return (
              <Fragment key={foods.id}>
                <FoodCard
                  id={foods.id}
                  name={foods.name}
                  imgOverview={foods.imgOverview}
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
  font-size: 20px;
  line-height: 22px;
  padding-top: 15px;
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

const StyledButtonContainer = styled.div`
  margin: 0.5rem;
  background-color: #e8a598;
  border-radius: 6px;
`;

const StyledCategoryButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 6px;
`;

const StyledMonthButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const StyledCategoryButton = styled.button`
  background-color: transparent;
  border: none;
  color: #71554f;
  padding: 0.4rem;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  margin: 0.2rem;
  background-color: #fec5bb;
  border-radius: 6px;
  &.active {
    background-color: #f9dcd7;
  }
`;

const StyledMonthButton = styled.button`
  background-color: transparent;
  border: none;
  color: #71554f;
  padding: 0.4rem;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  margin: 0.2rem;
  &.active {
    background-color: #f9dcd7;
    border-radius: 6px;
  }
`;
