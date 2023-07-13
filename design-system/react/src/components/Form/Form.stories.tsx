import { Stack } from "../Box/Stack"
import { Icon } from "../Icon"
import { Input } from "../Input"

import { Form } from "./Form"
import type { FormControlProps } from "./FormControl"

export default {
  component: Form.Control,
  title: "Form/FormControl",
  argTypes: {},
}

const EMAIL_ICON = <Icon icon="Mail" label="Mail" />

export const Usage = (args: FormControlProps) => (
  <Stack css={{ maxW: "400px" }}>
    <Form.Control {...args} isRequired>
      <Form.Label htmlFor="email">Email</Form.Label>
      <Input isFullWidth>
        <Input.ElementLeft element={EMAIL_ICON} />
        <Input.Field
          type="email"
          id="email"
          name="email"
          placeholder="Type you email"
        />
      </Input>
      <Form.HelperText>We will never share your email</Form.HelperText>
    </Form.Control>
  </Stack>
)

export const Invalid = (args: FormControlProps) => (
  <Stack css={{ maxW: "400px" }}>
    <Form.Control {...args} isRequired isInvalid>
      <Form.Label htmlFor="email">Email</Form.Label>
      <Input isFullWidth>
        <Input.ElementLeft element={EMAIL_ICON} />
        <Input.Field
          type="email"
          id="email"
          name="email"
          placeholder="Type you email"
          defaultValue="test@em"
        />
      </Input>
      <Form.HelperText>We will never share your email</Form.HelperText>
      <Form.ErrorMessage>Wrong email format</Form.ErrorMessage>
    </Form.Control>
  </Stack>
)
