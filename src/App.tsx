import { Button } from "@components/ui/atom/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/index";
import { GlobalStyle } from "@styles/global";
import { Router } from "@routes/Router";
import { BrowserRouter } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
