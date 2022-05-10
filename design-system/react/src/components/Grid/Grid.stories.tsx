import type { GridProps } from "./Grid";
import { Grid } from "./Grid";

export default {
  component: Grid,
  title: "Base/Layout/Grid",
  argTypes: {},
};

export const Usage = (args: GridProps) => (
  <Grid {...args} gap="$4" css={{ gridTemplateColumns: "1fr 1fr" }}>
    <Grid.Item area="header" css={{ background: "$gray7" }}>
      &nbsp;
    </Grid.Item>
    <Grid.Item area="sidebar" css={{ background: "$gray7" }}>
      &nbsp;
    </Grid.Item>
  </Grid>
);
