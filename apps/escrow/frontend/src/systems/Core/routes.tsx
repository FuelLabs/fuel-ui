import { Route } from "react-router-dom";

import EscrowPage from "./pages/Escrow";
import { Pages } from "./types/pages";

export const coreRoutes = (
  <Route path="*" element={<EscrowPage />} />
);
