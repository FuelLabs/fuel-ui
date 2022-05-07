import { Button } from "../Button";
import { Tooltip, TooltipProps } from "./Tooltip";

export default {
  component: Tooltip,
  title: "Overlay/Tooltip",
  parameters: {
    layout: "fullscreen",
  },
};

export const Usage = (args: TooltipProps) => (
  <Tooltip {...args} content={<>Hello world</>}>
    <Button>Hover me</Button>
  </Tooltip>
);

Usage.parameters = {
  layout: "centered",
};
