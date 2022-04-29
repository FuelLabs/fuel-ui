import { Heading, HeadingProps } from './Heading'

export default {
  component: Heading,
  title: 'UI/Heading',
  argTypes: {},
}

export const Usage = (args: HeadingProps) => (
  <>
    <Heading {...args}>Some title</Heading>
  </>
)
