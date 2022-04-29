import { Text, TextProps } from './Text'

export default {
  component: Text,
  title: 'UI/Text',
  argTypes: {},
}

export const Usage = (args: TextProps) => (
  <>
    <Text {...args}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur unde
      esse, vel ab aperiam est quam iure iusto? Totam eligendi laudantium
      repellat quasi in deserunt laboriosam amet atque? Consectetur, blanditiis?
    </Text>
  </>
)
