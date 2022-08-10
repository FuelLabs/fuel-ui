---
"@fuel-ui/react": minor
---

Feat: add new `<Input.Number>` component that uses `react-number-format` under the hood to create a full numeric type input (all `react-number-format` props are allowed on this component)

```jsx
<Input>
  <Input.Number name="amount" placeholder="0.0" inputMode="decimal" />
</Input>
```
