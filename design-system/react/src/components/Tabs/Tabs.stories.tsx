import { Text } from ".."
import { Box } from "../Box"
import { Stack } from "../Box/Stack"
import { Button } from "../Button"
import { Card } from "../Card"
import { Form } from "../Form"
import { Icon } from "../Icon"
import { Input } from "../Input"

import type { TabsProps } from "./Tabs"
import { Tabs } from "./Tabs"

export default {
  component: Tabs,
  title: "UI/Tabs",
  argTypes: {},
}

function Account() {
  return (
    <Card>
      <Card.Body>
        <Text css={{ mt: "$0", mb: "$4" }}>
          Make changes to your account here. Click save when you&apos;re done.
        </Text>
        <Stack gap="$4">
          <Form.Control>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Input>
              <Input.ElementLeft element={<Icon icon="User" />} />
              <Input.Field
                type="text"
                name="name"
                id="name"
                placeholder="Type your name"
              />
            </Input>
          </Form.Control>
          <Form.Control>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Input>
              <Input.ElementLeft element={<Icon icon="Mail" />} />
              <Input.Field
                type="email"
                name="email"
                id="email"
                placeholder="Type your email"
              />
            </Input>
          </Form.Control>
        </Stack>
      </Card.Body>
      <Card.Footer direction="row-reverse">
        <Button intent="primary" size="sm">
          Save changes
        </Button>
      </Card.Footer>
    </Card>
  )
}

function Password() {
  return (
    <Card>
      <Card.Body>
        <Text css={{ mt: "$0", mb: "$4" }}>
          Change your password here. After saving, you&apos;ll be logged out.
        </Text>
        <Stack gap="$4">
          <Form.Control>
            <Form.Label htmlFor="currentPassword">Current password</Form.Label>
            <Input>
              <Input.ElementLeft element={<Icon icon="Lock" />} />
              <Input.Field
                type="password"
                name="currentPassword"
                id="currentPassword"
                placeholder="Type your password"
              />
            </Input>
          </Form.Control>
          <Form.Control>
            <Form.Label htmlFor="newPassword">New password</Form.Label>
            <Input>
              <Input.ElementLeft element={<Icon icon="Lock" />} />
              <Input.Field
                type="password"
                name="newPassword"
                id="newPassword"
                placeholder="Type your password"
              />
            </Input>
          </Form.Control>
        </Stack>
      </Card.Body>
      <Card.Footer direction="row-reverse">
        <Button intent="primary" size="sm">
          Save changes
        </Button>
      </Card.Footer>
    </Card>
  )
}

export const Usage = (args: TabsProps) => (
  <Box css={{ maxW: "400px" }}>
    <Tabs {...args} defaultValue="account">
      <Tabs.List aria-label="Manage your account">
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Account />
      </Tabs.Content>
      <Tabs.Content value="password">
        <Password />
      </Tabs.Content>
    </Tabs>
  </Box>
)

export const Subtle = (args: TabsProps) => (
  <Box css={{ maxW: "400px" }}>
    <Tabs {...args} defaultValue="account" variant="subtle">
      <Tabs.List aria-label="Manage your account">
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <Account />
      </Tabs.Content>
      <Tabs.Content value="password">
        <Password />
      </Tabs.Content>
    </Tabs>
  </Box>
)
