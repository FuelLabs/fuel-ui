import { Route } from "react-router-dom";

import EscrowPage from "./pages/Escrow";
import { Pages } from "./types/pages";

export const coreRoutes = (
  <Route path={Pages.escrow} element={<EscrowPage />} />
  <>
    <Route
      path="*"
      element={
        <RequireWallet>
          <Navigate to={Pages.escrow} />
        </RequireWallet>
      }
    />
    <Route path={Pages.createWallet} element={<CreateWallet />} />
    <Route
      path={Pages.escrow}
      element={
        <RequireWallet>
          <EscrowPage />
        </RequireWallet>
      }
    />
  </>
);
