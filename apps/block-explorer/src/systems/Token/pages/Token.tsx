import { Box } from "@fuel/react";
import { useParams } from "react-router-dom";

export function Token() {
  const params = useParams();
  return <Box>Token: {params.id}</Box>;
}