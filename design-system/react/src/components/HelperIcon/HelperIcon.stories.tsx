import { HelperIcon } from "./HelperIcon";

export default {
  component: HelperIcon,
  title: "Helpers/HelperIcon",
  parameters: {
    layout: "fullscreen",
  },
};

export const Usage = () => (
  <HelperIcon message="This is a helper message">Some information</HelperIcon>
);

Usage.parameters = {
  layout: "centered",
};
