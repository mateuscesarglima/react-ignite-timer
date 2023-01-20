import styled from "styled-components";
import { defaultTheme } from "../themes/index";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
