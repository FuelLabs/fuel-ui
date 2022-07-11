---
"@fuel-ui/react": patch
---

Add new `<Accordion />` component using [Radix Accordion](https://www.radix-ui.com/docs/primitives/components/accordion) as base component

```jsx
<Accordion {...args} type="single" defaultValue="item-1" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Trigger>What&apos; Fuel?</Accordion.Trigger>
    <Accordion.Content>
      The fastest execution modular blokchain
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Trigger>Is really fast?</Accordion.Trigger>
    <Accordion.Content>Yes, blazingly fast!</Accordion.Content>
  </Accordion.Item>
</Accordion>
```
