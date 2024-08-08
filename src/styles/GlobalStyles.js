import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f0f0f0;
  }

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  h2 {
    font-size: 1.5rem;
    color: #555;
    margin-top: 20px;
  }

  div {
    text-align: center;
  }
`;

export default GlobalStyles;
