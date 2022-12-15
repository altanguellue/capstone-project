import styled from "styled-components";
import Image from "next/image";
import HomeImg from "../../assets/images/home.svg";
import FavImg from "../../assets/images/favorite.svg";

export default function Footer() {
  return (
    <StyledHomeWrapper>
      <StyledHomeIcon
        src={HomeImg}
        alt="Home Icon"
        width={42}
        height={42}
        priority
      />
      <StyledFavIcon
        src={FavImg}
        alt="Favorite Icon"
        width={51}
        height={51}
        priority
      />
    </StyledHomeWrapper>
  );
}

const StyledHomeWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 10vh;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  background-color: #fae1dd;
`;

const StyledHomeIcon = styled(Image)``;
const StyledFavIcon = styled(Image)``;
