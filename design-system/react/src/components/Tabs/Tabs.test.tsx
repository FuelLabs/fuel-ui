import { testA11y } from "@fuel-ui/test-utils";

import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("a11y", async () => {
    await testA11y(
      <Tabs defaultValue="account">
        <Tabs.List aria-label="Manage your account">
          <Tabs.Trigger value="tab1">Account</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Password</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="account">
          <div>Account</div>
        </Tabs.Content>
        <Tabs.Content value="password">
          <div>Password</div>
        </Tabs.Content>
      </Tabs>
    );
  });
});
