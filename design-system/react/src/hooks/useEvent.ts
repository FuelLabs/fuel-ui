/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react"

import { isBrowser, off, on } from "../utils/misc"

export interface ListenerType1 {
  addEventListener(
    name: string,
    handler: (event?: any) => void,
    ...args: any[]
  ): void

  removeEventListener(
    name: string,
    handler: (event?: any) => void,
    ...args: any[]
  ): void
}

export interface ListenerType2 {
  on(name: string, handler: (event?: any) => void, ...args: any[]): void

  off(name: string, handler: (event?: any) => void, ...args: any[]): void
}

export type UseEventTarget = ListenerType1 | ListenerType2

const defaultTarget = isBrowser ? window : null

const isListenerType1 = (target: any): target is ListenerType1 => {
  return !!target.addEventListener
}
const isListenerType2 = (target: any): target is ListenerType2 => {
  return !!target.on
}

type AddEventListener<T> = T extends ListenerType1
  ? T["addEventListener"]
  : T extends ListenerType2
  ? T["on"]
  : never

export type UseEventOptions<T> = Parameters<AddEventListener<T>>[2]

export const useEvent = <T extends UseEventTarget>(
  name: Parameters<AddEventListener<T>>[0],
  handler?: null | undefined | Parameters<AddEventListener<T>>[1],
  target: null | T | Window = defaultTarget,
  options?: UseEventOptions<T>,
) => {
  useEffect(() => {
    if (!handler) {
      return
    }
    if (!target) {
      return
    }
    if (isListenerType1(target)) {
      on(target as any, name, handler, options)
    } else if (isListenerType2(target)) {
      target.on(name, handler, options)
    }
    return () => {
      if (isListenerType1(target)) {
        off(target as any, name, handler, options)
      } else if (isListenerType2(target)) {
        target.off(name, handler, options)
      }
    }
  }, [name, handler, target, JSON.stringify(options)])
}
