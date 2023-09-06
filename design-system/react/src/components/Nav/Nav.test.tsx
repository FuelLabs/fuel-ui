import { click, render, screen, testA11y, waitFor } from '@fuels/jest';
import { composeStory } from '@storybook/react';

import Meta, * as Stories from './Nav.stories';

const Usage = composeStory(Stories.Usage, Meta);
const NoConnection = composeStory(Stories.NoConnection, Meta);
const Mobile = composeStory(Stories.Mobile, Meta);

function fireResize(width: number) {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
}

describe('Nav', () => {
  it('a11y', async () => {
    await testA11y(<Usage />);
  });

  it('should render a basic html for desktop', async () => {
    await waitFor(() => {
      fireResize(1024);
    });

    const { container } = render(<Usage />);
    expect(container.querySelector('.fuel_Nav-desktop')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Nav-logo')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Nav-menu')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Nav-spacer')).toBeInTheDocument();
    expect(
      container.querySelector('.fuel_Nav-themeToggle'),
    ).toBeInTheDocument();
    expect(container.querySelector('.fuel_Nav-network')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Nav-avatar')).toBeInTheDocument();
    expect(screen.getByText('Developers')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Labs')).toBeInTheDocument();
    expect(screen.getByText('Bridge')).toBeInTheDocument();
    expect(screen.getByText('Explorer')).toBeInTheDocument();
    expect(screen.getByText('Ecosystem')).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle Theme')).toBeInTheDocument();
    expect(screen.getByText('Mainnet')).toBeInTheDocument();
  });

  it('should render a basic html for mobile', async () => {
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
    await waitFor(() => {
      fireResize(768);
    });

    const { container } = render(<Mobile />);
    expect(container.querySelector('.fuel_Nav-mobile')).toBeInTheDocument();
    expect(
      container.querySelector('.fuel_Nav-mobileContent'),
    ).toBeInTheDocument();
    expect(container.querySelector('.fuel_Nav-logo')).toBeInTheDocument();
    expect(
      container.querySelector('.fuel_Nav-themeToggle'),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle Theme')).toBeInTheDocument();
    expect(() => screen.getByText('Mainnet')).toThrow();

    const btn = screen.getByLabelText('Toggle Menu');
    await click(btn);

    expect(screen.getByText('Developers')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
    expect(screen.getByText('Labs')).toBeInTheDocument();
    expect(screen.getByText('Bridge')).toBeInTheDocument();
    expect(screen.getByText('Explorer')).toBeInTheDocument();
    expect(screen.getByText('Ecosystem')).toBeInTheDocument();
    expect(() => screen.getByLabelText('Toggle Theme')).toThrow();
    expect(screen.getByText('Mainnet')).toBeInTheDocument();
  });

  it('should show a connect button when missing props', async () => {
    await waitFor(() => {
      fireResize(1024);
    });

    render(<NoConnection />);
    expect(screen.getByText('Connect')).toBeInTheDocument();
    expect(() => screen.getByText('Mainnet')).toThrow();
  });
});
