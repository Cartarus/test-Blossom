import { BrowserRouter, Route, Routes } from "react-router";
import { CharatersLayaout } from "../layauts/CharatersLayaout";
import { Home } from "../pages/Home";
import { CharacterPage } from "../pages/CharactherPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<CharatersLayaout />}>
              <Route path="/" element={<Home />} />
              <Route path="/character/:id" element={<CharacterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
