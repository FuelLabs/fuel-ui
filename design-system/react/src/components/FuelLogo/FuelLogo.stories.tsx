import type { FuelLogoProps } from "./FuelLogo"
import { FuelLogo } from "./FuelLogo"

export default {
  component: FuelLogo,
  title: "UI/FuelLogo",
}

export const Usage = (args: FuelLogoProps) => <FuelLogo {...args} />
