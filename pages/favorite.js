import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

export default function Favorite() {
  return (
    <>
      <Header />
      <StyledFavoriteHeader>Favoriten</StyledFavoriteHeader>
      <Footer />
    </>
  );
}

const StyledFavoriteHeader = styled.h1`
  margin-left: 0.5rem;
  color: #71554f;
  font-weight: 100;
  font-size: 26px;
  line-height: 39px;
`;
