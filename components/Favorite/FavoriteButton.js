import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import ToFavoritesIconFilled from "../../assets/images/to-favorites-filled.svg";
import ToFavoritesIconUnfilled from "../../assets/images/to-favorites-unfilled.svg";

export default function FavoriteButton() {
  const [favorite, setFavorite] = useState(true);

  function toggleFavorite(event) {
    event.preventDefault();
    event.stopPropagation();
    if (!favorite) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }

  return (
    <>
      <StyledButton onClick={toggleFavorite}>
        {!favorite ? (
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
      </StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background: none;
  position: absolute;
  border: none;
  justify-self: end;
`;
const StyledToFavoritesIconFilled = styled(Image)``;
const StyledToFavoritesIconUnfilled = styled(Image)``;
