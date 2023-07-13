import { Flex } from "../Box/Flex"
import { Form } from "../Form"

import type { SwitchProps } from "./Switch"
import { Switch } from "./Switch"

export default {
  component: Switch,
  title: "Form/Switch",
  argTypes: {},
}

export const Usage = (args: SwitchProps) => (
  <Flex css={{ alignItems: "center" }}>
    <Form.Label htmlFor="s1" css={{ paddingRight: 15 }}>
      Label
    </Form.Label>
    <Switch defaultChecked id="s1" {...args} />
  </Flex>
)

export const Sizes = (args: SwitchProps) => (
  <Flex css={{ alignItems: "center", gap: "$2" }}>
    <Switch defaultChecked id="s1" size="sm" {...args} />
    <Switch defaultChecked id="s1" {...args} />
  </Flex>
)
