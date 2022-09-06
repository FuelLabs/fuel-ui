/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RefObject } from "react";
import { useEffect, useRef } from "react";

const defaultEvents = ["click", "mousedown", "touchstart"];

export function useClickAway<E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents
) {
  const savedCallback = useRef(onClickAway);

  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  useEffect(() => {
    const handler = (event: any) => {
      const { current: el } = ref;
      if (el && !el.contains(event.target)) {
        savedCallback.current(event);
      }
    };

    if (typeof window !== "undefined") {
      for (const eventName of events) {
        document.addEventListener(eventName, handler);
      }
      return () => {
        for (const eventName of events) {
          document.removeEventListener(eventName, handler);
        }
      };
    }
  }, [events, ref]);
}
