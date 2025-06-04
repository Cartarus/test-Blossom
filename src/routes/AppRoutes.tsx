import { BrowserRouter, Route, Routes } from "react-router";
import { CharatersLayaout } from "../layauts/CharatersLayaout";
import { CaractherPage } from "../pages/CaractherPage";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<CharatersLayaout />}>
              <Route path="/" element={<Home />} />
              <Route path="/character/:id" element={<CaractherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
