import { BrowserRouter, Routes } from "react-router-dom";

import { coreRoutes } from "./systems/Core";
import { tokenRoutes } from "./systems/Token";

export const routes = (
  <BrowserRouter>
    <Routes>
      {coreRoutes}
      {tokenRoutes}
    </Routes>
  </BrowserRouter>
);
