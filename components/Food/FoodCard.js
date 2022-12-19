import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import FoodCardImage from "../../assets/images/artichoke.jpg";
import ArrowIconForward from "../../assets/images/arrow_button.svg";

export default function FoodCard({ name }) {
  return (
    <StyledLink href={`/${name}`}>
      <StyledFoodCardItem>
        <StyledArrowIconForward
          src={ArrowIconForward}
          alt="Arrow Icon Forward"
          width={11}
          height={19}
          priority
        />

        <StyledFoodCardName>{name}</StyledFoodCardName>

        <StyledFoodCardImageWrapper>
          <StyledFoodCardImage
            src={FoodCardImage}
            alt="Food Card Image"
            width={60}
            height={60}
            priority
          />
        </StyledFoodCardImageWrapper>
      </StyledFoodCardItem>
    </StyledLink>
  );
}

const StyledFoodCardItem = styled.li`
  margin: 0.5rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  background: #e8a598;
  border-radius: 6px;
  box-shadow: 0 0 28px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  align-items: center;
`;
const StyledFoodCardName = styled.p`
  align-self: center;
  color: #71554f;
  margin-right: 60px;
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
  margin-right: 40px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
