import GlobalStyles from "../components/GlobalStyles/GlobalStyles.js";
import { useState } from "react";
import { dataFoods } from "../lib/data.js";
import useLocalStorageState from "use-local-storage-state";

function MyApp({ Component, pageProps }) {
  const [foods, setFoods] = useState(dataFoods);

  function handleToggleFavorite(event, id) {
    event.preventDefault();
    event.stopPropagation();

    setFoods(
      foods.map((food) =>
        food.id === id ? { ...food, isFavorite: !food.isFavorite } : food
      )
    );
  }

  return (
    <>
      <GlobalStyles />
      <Component
        {...pageProps}
        foods={foods}
        onToggleFavorite={handleToggleFavorite}
      />
    </>
  );
}

export default MyApp;
