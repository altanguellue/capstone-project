import styled from "styled-components";
import { useRouter } from "next/router";
import ArrowIconBackward from "../../assets/images/previous-page-arrow-button.svg";
import InfoIcon from "../../assets/images/info-icon.svg";
import Image from "next/image";

export default function FoodCardDetail({ name, imgDetail, info }) {
  const router = useRouter();
  return (
    <StyledContainer>
      <StyledArrowIconBackward
        src={ArrowIconBackward}
        alt="Arrow Icon Backward"
        width={20}
        height={28}
        onClick={() => router.back()}
      />
      <StyledFoodCardDetailItemHeader>{name}</StyledFoodCardDetailItemHeader>

      <StyledFoodDetailImage
        src={imgDetail}
        alt="Image Detail"
        width={360}
        height={163}
      />
      <StyledFoodCardDetailHeader>Tipps & Hinweise</StyledFoodCardDetailHeader>
      <StyledFoodCardDetailItem>
        <StyledFoodCardDetailText>{info}</StyledFoodCardDetailText>
      </StyledFoodCardDetailItem>
    </StyledContainer>
  );
}

const StyledContainer = styled.article`
  display: flex;
  flex-direction: column;
`;

const StyledFoodDetailImage = styled(Image)`
  align-self: center;
  margin: 30px;
`;

const StyledFoodCardDetailItemHeader = styled.h2`
  color: #71554f;
  margin-left: 3rem;
  font-weight: 600;
  font-size: 26px;
  line-height: 29px;
`;

const StyledArrowIconBackward = styled(Image)`
  position: absolute;
  left: 15px;
`;

const StyledFoodCardDetailItem = styled.article`
  margin: 0.5rem;
  display: flex;
  flex-direction: row-reverse;
  background: #e8a598;
  border-radius: 6px;
  box-shadow: 0 0 28px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
`;

const StyledFoodCardDetailText = styled.p`
  text-align: left;
  line-height: 1.2rem;
  font-size: 12px;
  padding: 12px;
`;

const StyledFoodCardDetailHeader = styled.h2`
  margin-left: 0.5rem;
  color: #71554f;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
`;
