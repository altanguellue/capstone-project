import styled from "styled-components";
import Image from "next/image";
import FoodImage from "../../assets/images/artichoke.jpg";
import ArrowIcon from "../../assets/images/arrow_button.svg";
import Link from "next/link";

export default function FoodCard({ name }) {
  return (
    <StyledItem>
      <Link href="/food">
        <StyledArrowIcon
          src={ArrowIcon}
          alt="Arrow Icon"
          width={11}
          height={19}
          priority
        />
      </Link>

      <StyledName>{name}</StyledName>
      <StyledMeta>
        <StyledFoodImage
          src={FoodImage}
          alt="Food Image"
          width={60}
          height={60}
          priority
        />
      </StyledMeta>
    </StyledItem>
  );
}

const StyledItem = styled.li`
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
const StyledName = styled.p`
  align-self: center;
  color: #71554f;
  margin-right: 60px;
  font-weight: 500;
  font-size: 17px;
  line-height: 20px;
`;

const StyledMeta = styled.div`
  margin: 10px;
  display: flex;
`;

const StyledFoodImage = styled(Image)`
  border-radius: 6px;
`;

const StyledArrowIcon = styled(Image)`
  margin-right: 40px;
`;
