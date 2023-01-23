import { Scroll, Timer } from "phosphor-react";
import * as C from "./styles";

export const Navbar = () => {
  return (
    <C.NavBarContainer>
      <Timer size={24} />
      <Scroll size={24} />
    </C.NavBarContainer>
  );
};
