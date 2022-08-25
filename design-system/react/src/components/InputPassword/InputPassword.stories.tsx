import type { InputPasswordProps } from "./InputPassword";
import { InputPassword } from "./InputPassword";

export default {
  component: InputPassword,
  title: "Form/InputPassword",
  argTypes: {},
};

export const Usage = (args: InputPasswordProps) => (
  <InputPassword {...args} name="password" placeholder="Type your password" />
);
