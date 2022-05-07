import * as mixins from '../mixins'

export type Mixins = keyof typeof mixins

export const is = (list: Mixins[]) =>
  list.reduce((obj, key) => {
    return {
      ...obj,
      ...mixins[key],
    }
  })
