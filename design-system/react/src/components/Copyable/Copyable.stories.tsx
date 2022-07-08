import { Copyable } from "./Copyable";

export default {
  component: Copyable,
  title: "Helpers/Copyable",
  parameters: {
    layout: "fullscreen",
  },
};

export const Usage = () => <Copyable>Some value</Copyable>;

Usage.parameters = {
  layout: "centered",
};
