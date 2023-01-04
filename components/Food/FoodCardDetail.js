import styled from "styled-components";

export default function FoodCardDetail({ name }) {
  return (
    <StyledFoodCardDetailItemHeader>{name}</StyledFoodCardDetailItemHeader>
  );
}

const StyledFoodCardDetailItemHeader = styled.h2`
  color: #71554f;
  padding-top: 10px;
  margin-left: 0.5rem;
  font-weight: 600;
  font-size: 26px;
  line-height: 29px;
`;
