import { Routes, Route } from "react-router-dom";
import { Home } from "@containers/Home/Home";
import { History } from "@containers/History/History";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
};
