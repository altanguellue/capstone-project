import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FoodCardImage from "../../assets/images/artichoke.jpg";
import ArrowIconForward from "../../assets/images/arrow-button-forward.svg";
import AddToFavoritesIcon from "../../assets/images/to-favorites-unfilled.svg";
import RemoveFromFavoritesIcon from "../../assets/images/to-favorites-filled.svg";

export default function FoodCard({ name }) {
  return (
    <StyledLink href={`/${name}`}>
      <StyledFoodCardItem>
        <StyledFoodCardImageWrapper>
          <StyledFoodCardImage
            src={FoodCardImage}
            alt="Food Card Image"
            width={60}
            height={60}
          />
        </StyledFoodCardImageWrapper>

        <StyledFoodCardName>{name}</StyledFoodCardName>

        <StyledArrowIconForward
          src={ArrowIconForward}
          alt="Arrow Icon Forward"
          width={11}
          height={19}
        />

        <StyledAddToFavoritesIcon
          src={AddToFavoritesIcon}
          alt="Add To Favorites Icon"
          width={26}
          height={26}
        />
      </StyledFoodCardItem>
    </StyledLink>
  );
}

const StyledFoodCardItem = styled.li`
  margin: 0.5rem;
  display: grid;
  grid-template-columns: 3fr 3.5fr 2.5fr;
  background: #e8a598;
  border-radius: 6px;
  box-shadow: 0 0 28px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
`;
const StyledFoodCardName = styled.p`
  align-self: center;

  color: #71554f;
  /* margin-right: 60px; */
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
`;

const StyledFoodCardImageWrapper = styled.div`
  margin: 10px;
  display: flex;
`;

const StyledFoodCardImage = styled(Image)`
  border-radius: 6px;
`;

const StyledArrowIconForward = styled(Image)`
  align-self: center;
`;

const StyledAddToFavoritesIcon = styled(Image)`
  position: absolute;
  align-self: start;
  justify-self: end;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
