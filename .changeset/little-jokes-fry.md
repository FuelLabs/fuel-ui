---
"@fuel-ui/react": minor
---

Feat: add new `<CardList>` component, basically a list of cards that can be clickable and have right elements as actions.

```jsx
<CardList {...args} css={{ maxW: "$md" }}>
  <CardList.Item isActive>
    <Avatar
      {...args}
      size="sm"
      name="Colm Tuite"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    />
    <Heading as="h6" css={{ margin: 0 }}>
      Colm Tuite
    </Heading>
  </CardList.Item>
</CardList>
```
