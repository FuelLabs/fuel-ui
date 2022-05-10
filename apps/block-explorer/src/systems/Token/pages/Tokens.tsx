import { Box, BoxCentered, Flex, Heading } from "@fuel/react";
import { Outlet } from "react-router-dom";

import { Layout, Link } from "@/systems/Core";

export function Tokens() {
  return (
    <Layout>
      <BoxCentered gap="$3" direction="column" css={{ flex: 1 }}>
        <Heading>Tokens Page</Heading>
        <Flex gap="$3">
          <Link to="1">Token #1</Link>
          <Link to="2">Token #2</Link>
          <Link to="3">Token #3</Link>
        </Flex>
        <Box css={{ mt: "$5" }}>
          <Outlet />
        </Box>
      </BoxCentered>
    </Layout>
  );
}
