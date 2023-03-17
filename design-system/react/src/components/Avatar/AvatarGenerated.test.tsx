import type { RenderResult } from '@fuel-ui/test-utils';
import { testA11y, render } from '@fuel-ui/test-utils';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('a11y', async () => {
    const rendered: RenderResult = render(
      <Avatar.Generated hash="0x2cab234f35a4" />
    );
    await testA11y(rendered.container);
  });

  it('should generate a random svg', async () => {
    const { container } = render(<Avatar.Generated hash="0x2cab234f35a4" />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should generate a random svg with random background color', async () => {
    const { container } = render(
      <Avatar.Generated hash="0x2cab234f35a4" background="random" />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should generate a random svg with fuel background color', async () => {
    const { container } = render(
      <Avatar.Generated hash="0x2cab234f35a4" background="fuel" />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('should generate a random svg with fixed background color', async () => {
    const { container } = render(
      <Avatar.Generated hash="0x2cab234f35a4" background="#aaaaaa" />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
