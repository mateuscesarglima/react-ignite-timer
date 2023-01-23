import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 1.8rem;

  svg {
    &:hover {
      display: block;
      border-bottom: 2px solid ${(props) => props.theme["green-500"]};
    }
  }
`;
