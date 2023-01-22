import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
      --gray1: #121214;
      --gray2: #202024;
      --gray3: #323238;
      --gray4: #7C7C8A;
      --gray5: #8D8D99;
      --gray6: #C4C4CC;
      --gray7: #E1E1E6;
      --white: #FFFFFF;

      --green-dark: #015F43;
      --green: #00875F;
      --green-light: #00B37E;
      --red: #F03847;
      --red-dark: #7B1921;
   }

   *{
      margin: 0;  
      padding: 0;
      box-sizing: border-box;
   }

   :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]};
   }

   body {
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
   }

   body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;

   }
`;
