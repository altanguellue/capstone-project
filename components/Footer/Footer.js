import styled from "styled-components";
import Image from "next/image";
import HomeImg from "../../assets/images/home.svg";
import FavImg from "../../assets/images/favorite.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import FavIconFilled from "../../assets/images/favorite-filled.svg";
import HomeIconUnfilled from "../../assets/images/home-unfilled.svg";

export default function Footer() {
  const { pathname } = useRouter();
  if (pathname === "/") {
    return (
      <StyledHomeWrapper>
        <Link href="/">
          <StyledHomeIcon
            src={HomeImg}
            alt="Home Icon"
            width={42}
            height={42}
            priority
          />
        </Link>

        <Link href="/favorite">
          <StyledFavIcon
            src={FavImg}
            alt="Favorite Icon"
            width={51}
            height={51}
            priority
          />
        </Link>
      </StyledHomeWrapper>
    );
  }

  if (pathname === "/favorite") {
    return (
      <StyledHomeWrapper>
        <Link href="/">
          <StyledHomeIconUnfilled
            src={HomeIconUnfilled}
            alt="Home Icon"
            width={42}
            height={42}
            priority
          />
        </Link>
        <Link href="/favorite">
          <StyledFavIconFilled
            src={FavIconFilled}
            alt="Favorite Icon Filled"
            width={51}
            height={51}
            priority
          />
        </Link>
      </StyledHomeWrapper>
    );
  }
  if (pathname === "/food") {
    return (
      <StyledHomeWrapper>
        <Link href="/">
          <StyledHomeIcon
            src={HomeImg}
            alt="Home Icon"
            width={42}
            height={42}
            priority
          />
        </Link>

        <Link href="/favorite">
          <StyledFavIcon
            src={FavImg}
            alt="Favorite Icon"
            width={51}
            height={51}
            priority
          />
        </Link>
      </StyledHomeWrapper>
    );
  }
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
const StyledFavIconFilled = styled(Image)``;
const StyledHomeIconUnfilled = styled(Image)``;
