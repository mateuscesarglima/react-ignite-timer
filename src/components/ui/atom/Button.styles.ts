import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const teste = {
  test: "teste",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  border: none;
  margin-left: 10px;
  border-radius: 5px;
  /* 
  ${({ variant }) => {
    return css`
      background-color: ${buttonVariants[variant]};
    `;
  }} */
`;
