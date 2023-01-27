import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import * as C from "./styles";

export const Navbar = () => {
  return (
    <C.NavBarContainer>
      <NavLink to={"/"} title="Timer">
        <Timer size={24} />
      </NavLink>
      <NavLink to={"/history"} title="History">
        <Scroll size={24} />
      </NavLink>
    </C.NavBarContainer>
  );
};
