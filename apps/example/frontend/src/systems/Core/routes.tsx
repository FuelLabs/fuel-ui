import { Route } from "react-router-dom";

import { Home } from "./pages";

export const coreRoutes = (
  <>
    <Route path="/" element={<Home />} />
  </>
);
