import { Form } from "../Form"

import type { RadioGroupProps } from "./RadioGroup"
import { RadioGroup } from "./RadioGroup"

export default {
  component: RadioGroup,
  title: "Form/RadioGroup",
  argTypes: {},
}

export const Usage = (args: RadioGroupProps) => (
  <Form.Control>
    <RadioGroup {...args} defaultValue="default" aria-label="View density">
      <RadioGroup.Item value="default" id="r1" label="Default" />
      <RadioGroup.Item value="comfortable" id="r2" label="Comfortable" />
      <RadioGroup.Item value="compact" id="r3" label="Compact" />
    </RadioGroup>
  </Form.Control>
)

export const Disabled = (args: RadioGroupProps) => (
  <Form.Control isDisabled>
    <RadioGroup {...args} defaultValue="default" aria-label="View density">
      <RadioGroup.Item value="default" id="r1" label="Default" />
      <RadioGroup.Item value="comfortable" id="r2" label="Comfortable" />
      <RadioGroup.Item value="compact" id="r3" label="Compact" />
    </RadioGroup>
  </Form.Control>
)

export const ReadOnly = (args: RadioGroupProps) => (
  <Form.Control isReadOnly>
    <RadioGroup {...args} defaultValue="default" aria-label="View density">
      <RadioGroup.Item value="default" id="r1" label="Default" />
      <RadioGroup.Item value="comfortable" id="r2" label="Comfortable" />
      <RadioGroup.Item value="compact" id="r3" label="Compact" />
    </RadioGroup>
  </Form.Control>
)
