import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        
        background-color: #FAE1DD;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    @media (max-width: 600px) {}  
    
`;

export default GlobalStyles;
