---
"@fuels-ui/css": patch
"@fuels-ui/react": patch
---

Add a new component `<AspectRatio>` for embedding images with a pre-defined ratio

```jsx
<AspectRatio ratio={16 / 9} {...args}>
  <img
    className={styles.img()}
    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
    alt="Landscape photo by Tobias Tullius"
  />
</AspectRatio>
```
