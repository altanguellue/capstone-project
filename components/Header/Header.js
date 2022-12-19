import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import AppLogo from "../../assets/images/app-logo.svg";

export default function Header() {
  return (
    <StyledAppLogoWrapper>
      <Link href="/">
        <StyledAppLogo
          src={AppLogo}
          alt="App Logo"
          width={98}
          height={62}
          priority
        />
      </Link>
    </StyledAppLogoWrapper>
  );
}

const StyledAppLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const StyledAppLogo = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
