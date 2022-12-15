import styled from "styled-components";
import Image from "next/image";
import FoodImage from "../../assets/images/artichoke.jpg";

export default function FoodCard({ name }) {
  return (
    <StyledItem>
      <StyledSvg
        width="11"
        height="19"
        viewBox="0 0 11 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.813569 16.4915C0.36211 16.9504 0.362109 17.6866 0.813568 18.1455C1.2756 18.6151 2.03281 18.6151 2.49484 18.1455L9.62017 10.9026C10.3859 10.1243 10.3859 8.87572 9.62017 8.09741L2.49484 0.854508C2.03281 0.384855 1.2756 0.384855 0.813568 0.854508C0.362109 1.31342 0.362109 2.04958 0.813568 2.50849L6.31176 8.0974C7.07744 8.87572 7.07744 10.1243 6.31176 10.9026L0.813569 16.4915Z"
          fill="#71554F"
          fill-opacity="0.8"
        />
      </StyledSvg>
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
  box-shadow: 0 0 28px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transition: 0.4s;
  }
  background: #e8a598;
  border-radius: 6px;
`;
const StyledName = styled.h3`
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

const StyledSvg = styled.svg`
  align-self: center;
  margin-right: 40px;
`;
