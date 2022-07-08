---
"@fuel-ui/react": patch
---

Add new `toast()` function that shows a toast using [react-hot-toast](https://react-hot-toast.com/) behind the scenes. It also include a `<ToastProvider />` that is already included in our `<ThemeProvider />` by default.

```jsx
import { Button, toast } from "@fuel-ui/react";

function App() {
  return <Button onPress={() => toast("Hello world!")}>Show toast</Button>;
}
```
