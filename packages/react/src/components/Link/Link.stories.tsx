import { Link, LinkProps } from './Link'

export default {
  component: Link,
  title: 'Typography/Link',
}

export const Usage = (args: LinkProps) => (
  <Link {...args} href="#">
    Click here
  </Link>
)

export const External = (args: LinkProps) => (
  <Link {...args} href="https://fuel.sh/" isExternal>
    Click here
  </Link>
)
