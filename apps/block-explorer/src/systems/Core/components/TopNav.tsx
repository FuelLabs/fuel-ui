import { Stack } from "@fuel/react";

import { Link } from "./Link";

export function TopNav() {
  return (
    <Stack
      gap="$6"
      direction="row"
      css={{ py: "$10", justifyContent: "center" }}
    >
      <Link to="/">Home</Link>
      <Link to="/tokens">Tokens</Link>
    </Stack>
  );
}
