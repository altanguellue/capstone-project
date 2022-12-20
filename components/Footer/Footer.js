import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import HomeIconFilled from "../../assets/images/home-filled.svg";
import HomeIconUnfilled from "../../assets/images/home-unfilled.svg";
import FavoriteIconFilled from "../../assets/images/favorite-filled.svg";
import FavoriteIconUnfilled from "../../assets/images/favorite-unfilled.svg";

export default function Footer() {
  const { pathname } = useRouter();
  if (pathname === "/") {
    return (
      <StyledFooterWrapper>
        <Link href="/">
          <StyledHomeIconFilled
            src={HomeIconFilled}
            alt="Home Icon Filled"
            width={42}
            height={42}
            priority
          />
        </Link>

        <Link href="/favorite">
          <StyledFavoriteIconUnfilled
            src={FavoriteIconUnfilled}
            alt="Favorite Icon Unfilled"
            width={51}
            height={51}
            priority
          />
        </Link>
      </StyledFooterWrapper>
    );
  }

  if (pathname === "/favorite") {
    return (
      <StyledFooterWrapper>
        <Link href="/">
          <StyledHomeIconUnfilled
            src={HomeIconUnfilled}
            alt="Home Icon Unfilled"
            width={42}
            height={42}
            priority
          />
        </Link>
        <Link href="/favorite">
          <StyledFavoriteIconFilled
            src={FavoriteIconFilled}
            alt="Favorite Icon Filled"
            width={51}
            height={51}
            priority
          />
        </Link>
      </StyledFooterWrapper>
    );
  }

  return (
    <StyledFooterWrapper>
      <Link href="/">
        <StyledHomeIconUnfilled
          src={HomeIconUnfilled}
          alt="Home Icon Unfilled"
          width={42}
          height={42}
          priority
        />
      </Link>

      <Link href="/favorite">
        <StyledFavoriteIconUnfilled
          src={FavoriteIconUnfilled}
          alt="Favorite Icon Unfilled"
          width={51}
          height={51}
          priority
        />
      </Link>
    </StyledFooterWrapper>
  );
}

const StyledFooterWrapper = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 10vh;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fae1dd;
`;

const StyledHomeIconFilled = styled(Image)``;
const StyledFavoriteIconUnfilled = styled(Image)``;
const StyledFavoriteIconFilled = styled(Image)``;
const StyledHomeIconUnfilled = styled(Image)``;
