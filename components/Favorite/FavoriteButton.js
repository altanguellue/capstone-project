import styled from "styled-components";
import Image from "next/image";
import FavoritesIconFilled from "../../assets/images/to-favorites-filled.svg";
import FavoritesIconUnfilled from "../../assets/images/to-favorites-unfilled.svg";

export default function FavoriteButton({ isFavorite }) {
  return (
    <>
      {isFavorite ? (
        <Image
          src={FavoritesIconFilled}
          alt="Favorites Icon Filled"
          width={26}
          height={26}
        />
      ) : (
        <Image
          src={FavoritesIconUnfilled}
          alt="Favorites Icon Unfilled"
          width={26}
          height={26}
        />
      )}
    </>
  );
}
