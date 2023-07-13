export function toCSSValue(value?: string | number | undefined) {
  const valueNormalized = String(value).replace(/px/gi, "")
  if (!Number.isNaN(Number(valueNormalized))) {
    return `${value}px`
  }
  return value
}

export function fClass(root: string, ...args: string[]) {
  const nested = args.reduce((acc, curr) => {
    return `${acc}--${curr}`
  }, "")
  return `fuel_${root}${nested}`
}
