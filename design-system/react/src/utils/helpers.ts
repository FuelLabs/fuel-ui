/* eslint-disable @typescript-eslint/no-explicit-any */
import merge from 'deepmerge-json';

export function omit<T extends Record<any, any>>(list: string[], props: T) {
  return Object.entries(props).reduce((obj, [key, value]) => {
    if (list.some((k) => k === key)) return obj;
    return { ...obj, [key]: value };
  }, {} as unknown as T) as T;
}

export function pick<T extends Record<any, any>>(list: string[], props: T) {
  return Object.entries(props).reduce((obj, [key, value]) => {
    if (list.some((k) => k === key)) return { ...obj, [key]: value };
    return obj;
  }, {} as unknown as T) as T;
}

export function mergeDeep<T>(...values: T[]): T {
  return merge(values[0], values[1]);
}
