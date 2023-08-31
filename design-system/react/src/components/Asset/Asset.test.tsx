import { testA11y, screen, render } from '@fuels/jest';
import { composeStory } from '@storybook/react';

import { SIZES_MAP } from '../Avatar/styles';

import { Asset } from './Asset';
import Meta, * as Stories from './Asset.stories';
import { MOCK_ASSETS } from './__mocks__/assets';

const Usage = composeStory(Stories.Usage, Meta);
const Sizes = composeStory(Stories.Sizes, Meta);
const Amounts = composeStory(Stories.AmountExamples, Meta);
const NoIcon = composeStory(Stories.NoIcon, Meta);
const CustomIcon = composeStory(Stories.CustomIcon, Meta);

describe('Asset', () => {
  it('a11y', async () => {
    await testA11y(<Usage />);
  });

  it('should render story usage properly', () => {
    const { container } = render(<Usage />);
    const img = screen.getByRole('img', { name: /ethereum image/i });
    const asset = MOCK_ASSETS.eth;
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

  it('should render a custom icon', () => {
    render(<CustomIcon />);
    expect(screen.getByLabelText('Icon CurrencyEthereum')).toBeInTheDocument();
    expect(screen.getByLabelText('Ethereum icon')).toBeInTheDocument();
  });

  it('should render asset initial if no image url is passed', () => {
    render(<NoIcon />);
    expect(screen.getByText('ET')).toBeInTheDocument();
    expect(screen.getByLabelText('Ethereum initials')).toBeInTheDocument();
  });

  it('should not be able to render without allowed children', () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
    expect(() =>
      render(
        <Asset asset={MOCK_ASSETS.eth}>
          <div>hi</div>
        </Asset>,
      ),
    ).toThrow();
  });
});
