import { Button } from "@components/ui/atom/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/index";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="danger" />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="success" />
    </ThemeProvider>
  );
}
