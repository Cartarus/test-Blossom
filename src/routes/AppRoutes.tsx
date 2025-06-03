import { BrowserRouter, Route, Routes } from "react-router";
import { CharatersLayaout } from "../layauts/CharatersLayaout";
import { CaractherPage } from "../pages/CaractherPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<CharatersLayaout />}>
            <Route path="/" element={<CaractherPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
