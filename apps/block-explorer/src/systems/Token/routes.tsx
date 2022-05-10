import { Route } from "react-router-dom";

import { Token, Tokens } from "./pages";

export const tokenRoutes = (
  <>
    <Route path="/tokens" element={<Tokens />}>
      <Route path=":id" element={<Token />} />
    </Route>
  </>
);
