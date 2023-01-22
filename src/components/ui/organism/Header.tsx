import * as C from "./styles";
import logo from "@assets/logo.png";
import menuItem1 from "@assets/MenuItem1.png";
import menuItem2 from "@assets/MenuItem2.png";

export const Header = () => {
  return (
    <C.HeaderContainer>
      <C.LogoBox>
        <img src={logo} alt="logo image" />
      </C.LogoBox>
      <C.RightSideHeader>
        <C.MenuItem src={menuItem1}></C.MenuItem>
        <C.MenuItem src={menuItem2}></C.MenuItem>
      </C.RightSideHeader>
    </C.HeaderContainer>
  );
};
