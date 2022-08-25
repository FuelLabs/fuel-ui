import type { LogoProps } from "./Logo";
import { Logo } from "./Logo";

export default {
  component: Logo,
  title: "UI/Logo",
};

export const Usage = (args: LogoProps) => <Logo {...args} />;
