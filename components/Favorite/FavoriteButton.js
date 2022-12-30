import styled from "styled-components";
import Image from "next/image";
import ToFavoritesIconFilled from "../../assets/images/to-favorites-filled.svg";
import ToFavoritesIconUnfilled from "../../assets/images/to-favorites-unfilled.svg";

export default function FavoriteButton({ isFavorite }) {
  return (
    <>
      {isFavorite ? (
        <StyledToFavoritesIconFilled
          src={ToFavoritesIconFilled}
          alt="To Favorites Icon Filled"
          width={26}
          height={26}
        />
      ) : (
        <StyledToFavoritesIconUnfilled
          src={ToFavoritesIconUnfilled}
          alt="To Favorites Icon Unfilled"
          width={26}
          height={26}
        />
      )}
    </>
  );
}

const StyledToFavoritesIconFilled = styled(Image)``;
const StyledToFavoritesIconUnfilled = styled(Image)``;
