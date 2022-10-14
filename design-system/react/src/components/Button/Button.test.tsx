import { render, testA11y, screen, press } from '@fuel-ui/test-utils';

import { Button } from './Button';

describe('Button', () => {
  it('a11y', async () => {
    await testA11y(<Button>Click</Button>);
  });

  it('should focus when tab', async () => {
    const { user } = render(<Button>Click</Button>);
    expect(screen.getByText('Click')).not.toHaveFocus();
    await user.tab();
    expect(screen.getByText('Click')).toHaveFocus();
  });

  it('should click when space', async () => {
    const handler = jest.fn();
    const { user } = render(<Button onPress={handler}>Click</Button>);
    await user.tab();
    expect(screen.getByText('Click')).toHaveFocus();
    await press.Space();
    expect(handler).toBeCalledTimes(1);
  });

  it('should render a button element', () => {
    render(<Button>Click</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have right disabled attributes', () => {
    render(<Button isDisabled>Click</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('aria-disabled');
  });

  it('should render with an icon on left', () => {
    render(
      <Button leftIcon="Calendar" leftIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('calendar')).toBeInTheDocument();
  });

  it('should render with an icon on right', () => {
    render(
      <Button rightIcon="Calendar" rightIconAriaLabel="calendar">
        Click
      </Button>
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('calendar')).toBeInTheDocument();
  });
});
