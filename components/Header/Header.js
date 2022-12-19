import styled from "styled-components";
import Image from "next/image";
import LogoImg from "../../assets/images/logo.svg";
import Link from "next/link";

export default function Header() {
  return (
    <StyledLogoWrapper>
      <Link href="/">
        <StyledImage
          src={LogoImg}
          alt="App Logo"
          width={98}
          height={62}
          priority
        />
      </Link>
    </StyledLogoWrapper>
  );
}

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const StyledImage = styled(Image)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;
