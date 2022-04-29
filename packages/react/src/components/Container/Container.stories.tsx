import { Container, ContainerProps } from './Container'

export default {
  component: Container,
  title: 'Layout/Container',
}

export const Usage = (args: ContainerProps) => (
  <Container {...args}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo ullam
    labore libero necessitatibus harum aliquam voluptas at expedita, modi
    laborum dignissimos facere ipsum sed autem pariatur! Repellat, placeat
    illum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero nemo
    ullam labore libero necessitatibus harum aliquam voluptas at expedita, modi
    laborum dignissimos facere ipsum sed autem pariatur! Repellat, placeat
    illum.
  </Container>
)
