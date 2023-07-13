import { useRef } from "react"

import { useSafeLayoutEffect } from "./useSafeLayoutEffect"

interface ResultBox<T> {
  v: T
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useConstant<T>(fn: () => T, deps: any[] = []): T {
  const ref = useRef<ResultBox<T>>()

  if (!ref.current) {
    ref.current = { v: fn() }
  }

  useSafeLayoutEffect(() => {
    ref.current = { v: fn() }
  }, deps)

  return ref.current.v as T
}
