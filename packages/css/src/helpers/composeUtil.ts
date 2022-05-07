export function composeUtil(props: string[]) {
  return (value: string) => {
    return props.reduce((obj, prop) => {
      return { ...obj, [prop]: value }
    })
  }
}
