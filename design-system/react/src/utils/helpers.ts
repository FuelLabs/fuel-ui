/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-explicit-any */
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

type ObjectWithKeys<T = any> = {
  [key: string]: T;
};

function isObject(obj: any): obj is ObjectWithKeys {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function merge<T extends any[]>(a: T, b: T): T {
  if (Array.isArray(a) && Array.isArray(b)) {
    for (const val of b) {
      a.push(val);
    }
    return a;
  }
  if (isObject(a) && isObject(b)) {
    for (const [key, val] of Object.entries(b)) {
      if (key in a) {
        merge(a[key], val);
      } else {
        a[key] = val;
      }
    }
    return a as T;
  }
  return b ?? a;
}

export function mergeDeep<T>(...values: T[]): T {
  return values.reduce((acc, val) => {
    if (val === undefined) return acc;
    return merge(acc as any, val);
  }, {} as T);
}
