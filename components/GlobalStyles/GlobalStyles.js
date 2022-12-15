import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        
        background-color: #FAE1DD;
        font-family: Montserrat_Regular;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 600px) {}  
    
    @font-face {
        font-family: Montserrat_Regular ;
        src: url("/fonts/Montserrat/static/Montserrat-Regular.ttf") format("truetype");
    }
`;

export default GlobalStyles;
