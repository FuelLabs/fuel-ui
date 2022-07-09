---
"@fuel-ui/react": patch
---

Add `<Focus.ArrowNavigator />` component, a component that create a focus scope and add focus navigation using arrows automatically on children.

```jsx
<Focus.ArrowNavigator asChild autoFocus>
  <Stack gap="$3" direction="row">
    <Button>First</Button>
    <Button>Second</Button>
    <Button>Third</Button>
  </Stack>
</Focus.ArrowNavigator>
```
