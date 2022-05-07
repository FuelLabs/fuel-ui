import { Box } from "../Box";

import { Spinner } from "./Spinner";

export default {
  component: Spinner,
  title: "UI/Spinner",
};

export const Usage = () => (
  <Box css={{ display: "flex", alignItems: "center", gap: "$2" }}>
    <Spinner />
    <Spinner size={30} color="indigo" />
    <Spinner size={50} color="gray" />
  </Box>
);
