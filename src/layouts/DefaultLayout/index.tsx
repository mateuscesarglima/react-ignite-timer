import { Header } from "@components/ui/organism/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* Espaço para ser inserido um conteudo */}
    </LayoutContainer>
  );
};
