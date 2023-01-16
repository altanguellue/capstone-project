import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import ArrowIconForward from "../../assets/images/arrow-button-forward.svg";
import FavoriteButton from "../Favorite/FavoriteButton";

export default function FoodCard({
  name,
  onToggleFavorite,
  foods,
  imgOverview,
}) {
  return (
    <StyledLink href={`/${name}`}>
      <StyledFoodCardItem>
        <StyledFoodCardImage
          src={imgOverview}
          alt="Food Card Image"
          width={60}
          height={60}
        />
        <StyledFoodCardName>{name}</StyledFoodCardName>
        <StyledArrowIconForward
          src={ArrowIconForward}
          alt="Arrow Icon Forward"
          width={11}
          height={19}
        />
        <StyledButton
          title="Favorite Button"
          onClick={(event) => onToggleFavorite(event, foods.id)}
        >
          <FavoriteButton isFavorite={foods.isFavorite} />
        </StyledButton>
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
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
`;

const StyledFoodCardImage = styled(Image)`
  border-radius: 6px;
  margin: 10px;
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const StyledArrowIconForward = styled(Image)`
  align-self: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledButton = styled.button`
  background: none;
  position: absolute;
  border: none;
  justify-self: end;
`;
