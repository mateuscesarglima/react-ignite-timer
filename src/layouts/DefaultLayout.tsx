import { Header } from "@components/ui/organism/Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* Espaço para ser inserido um conteudo */}
    </div>
  );
};
