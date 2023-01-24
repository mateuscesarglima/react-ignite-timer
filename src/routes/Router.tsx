import { Routes, Route } from "react-router-dom";
import { Home } from "@containers/Home/Home";
import { History } from "@containers/History/History";
import { DefaultLayout } from "@layouts/DefaultLayout";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
