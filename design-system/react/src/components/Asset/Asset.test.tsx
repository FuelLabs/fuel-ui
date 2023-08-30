import { testA11y, screen, render } from '@fuels/jest';
import { composeStory } from '@storybook/react';

import { SIZES_MAP } from '../Avatar/styles';

import { Asset } from './Asset';
import Meta, * as Stories from './Asset.stories';

const Usage = composeStory(Stories.Usage, Meta);
const Sizes = composeStory(Stories.Sizes, Meta);
const Amounts = composeStory(Stories.AmountExamples, Meta);

describe('Asset', () => {
  it('a11y', async () => {
    await testA11y(<Usage />);
  });

  it('should render story usage properly', () => {
    const { container } = render(<Usage />);
    const img = screen.getByRole('img', { name: /ethereum image/i });
    const asset = Asset.get('eth');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('width', String(SIZES_MAP.sm));
    expect(img).toHaveAttribute('height', String(SIZES_MAP.sm));
    expect(img).toHaveAttribute('src', asset.imageUrl);
    expect(screen.getByText(asset.name)).toBeInTheDocument();
    expect(screen.getByText(asset.symbol)).toBeInTheDocument();
    expect(screen.getByText('1.000')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Asset')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Asset-name')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Asset-icon')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Asset-amount')).toBeInTheDocument();
    expect(container.querySelector('.fuel_Asset-symbol')).toBeInTheDocument();
  });

  it('should render sizes according sizes map', () => {
    render(<Sizes />);
    const img = screen.getAllByRole('img', { name: /ethereum image/i });
    ['sm', 'md', 'lg', 'xl'].forEach((size, index) => {
      expect(img[index]).toBeInTheDocument();
      expect(img[index]).toHaveAttribute('width', String(SIZES_MAP[size]));
      expect(img[index]).toHaveAttribute('height', String(SIZES_MAP[size]));
    });
  });

  it('should render amount in a different precision', () => {
    render(<Amounts />);
    expect(screen.getAllByText('1.000000001')).toHaveLength(2);
  });

  it('should render different icons for amount', () => {
    render(<Amounts />);
    expect(screen.getByLabelText('Icon ArrowUp')).toBeInTheDocument();
    expect(screen.getByLabelText('Icon ArrowDown')).toBeInTheDocument();
  });

  it('should hide icon using prop', () => {
    render(<Amounts hideIcon />);
    expect(() => screen.getByLabelText('Icon ArrowUp')).toThrow();
    expect(() => screen.getByLabelText('Icon ArrowDown')).toThrow();
  });
});
