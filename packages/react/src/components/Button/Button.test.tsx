import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render a button element', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
