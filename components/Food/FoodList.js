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

  console.log(selectedMonth);

  let filteredItems = [...foods];
  let monthText = "Alle";
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

      <div>
        <button onClick={() => setSelectedCategory("All")}>Alle</button>
        <button onClick={() => setSelectedCategory("Gemüse")}>Gemüse</button>
        <button onClick={() => setSelectedCategory("Obst")}>Obst</button>
      </div>

      <div>
        <button onClick={() => setSelectedMonth("Januar")}>Januar</button>
        <button onClick={() => setSelectedMonth("Februar")}>Februar</button>
        <button onClick={() => setSelectedMonth("März")}>März</button>
        <button onClick={() => setSelectedMonth("April")}>April</button>
        <button onClick={() => setSelectedMonth("Mai")}>Mai</button>
        <button onClick={() => setSelectedMonth("Juni")}>Juni</button>
        <button onClick={() => setSelectedMonth("Juli")}>Juli</button>
        <button onClick={() => setSelectedMonth("August")}>August</button>
        <button onClick={() => setSelectedMonth("September")}>September</button>
        <button onClick={() => setSelectedMonth("Oktober")}>Oktober</button>
        <button onClick={() => setSelectedMonth("November")}>November</button>
        <button onClick={() => setSelectedMonth("Dezember")}>Dezember</button>
      </div>

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

        {/* <label>Filter Lebensmittel:</label>
        <div>
          <button
            className={selectedCategory=== null ? "active" : ""}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {availabilities.map((availability) => (
            <button
              key={availability}
              className={selectedType === availability ? "active" : ""}
              onClick={() => setSelectedType(availability)}
            >
              {availability}
            </button>
          ))}
        </div>
        <div>
          {filteredItems.map((food) => (
            <div key={food.id}>
              <p>{food.name}</p>
              <p>{food.month}</p>
              <p>{food.type}</p>
            </div>
          ))}
        </div> */}
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
