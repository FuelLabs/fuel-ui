import type { Handler, KeyFilter } from "./useKey"
import { useKeyPress } from "./useKeyPress"
import { useUpdateEffect } from "./useUpdateEffect"

export const useKeyPressEvent = (
  key: string | KeyFilter,
  keydown?: Handler | null | undefined,
  keyup?: Handler | null | undefined,
) => {
  const [pressed, event] = useKeyPress(key)
  useUpdateEffect(() => {
    if (!pressed && keyup) {
      keyup(event!)
    } else if (pressed && keydown) {
      keydown(event!)
    }
  }, [pressed])
}
