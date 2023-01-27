import logo from "@assets/logo.png";
import { Scroll, Timer } from "phosphor-react";
import { Navbar } from "../../molecule/Navbar/Navbar";
import * as C from "./styles";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <img src={logo} alt="logo image" />
      <Navbar />
    </C.HeaderContainer>
  );
};
