import type { RenderResult } from '@fuel-ui/test-utils';
import { testA11y, render } from '@fuel-ui/test-utils';

import { Avatar } from './Avatar';

const RANDOM_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path fill="#e5e3b2" d="M13 13L13 6L16.5 6ZM20 6L27 6L27 9.5ZM27 27L27 34L23.5 34ZM20 34L13 34L13 30.5ZM6 20L6 13L9.5 13ZM27 13L34 13L34 16.5ZM34 20L34 27L30.5 27ZM13 27L6 27L6 23.5Z"></path><path fill="#ccc866" d="M13 13L6 13L6 6ZM27 13L27 6L34 6ZM27 27L34 27L34 34ZM13 27L13 34L6 34ZM20 13L20 18L17 13ZM27 20L22 20L27 17ZM20 27L20 22L23 27ZM13 20L18 20L13 23Z"></path></svg>';
const SVG_RANDOM_BACKGROUND =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="100%" height="100%" fill="#a29374" opacity="1.00"></rect><path fill="#e5e3b2" d="M13 13L13 6L16.5 6ZM20 6L27 6L27 9.5ZM27 27L27 34L23.5 34ZM20 34L13 34L13 30.5ZM6 20L6 13L9.5 13ZM27 13L34 13L34 16.5ZM34 20L34 27L30.5 27ZM13 27L6 27L6 23.5Z"></path><path fill="#ccc866" d="M13 13L6 13L6 6ZM27 13L27 6L34 6ZM27 27L34 27L34 34ZM13 27L13 34L6 34ZM20 13L20 18L17 13ZM27 20L22 20L27 17ZM20 27L20 22L23 27ZM13 20L18 20L13 23Z"></path></svg>';
const SVG_FIXED_BACKGROUND =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="100%" height="100%" fill="#aaaaaa" opacity="1.00"></rect><path fill="#e5e3b2" d="M13 13L13 6L16.5 6ZM20 6L27 6L27 9.5ZM27 27L27 34L23.5 34ZM20 34L13 34L13 30.5ZM6 20L6 13L9.5 13ZM27 13L34 13L34 16.5ZM34 20L34 27L30.5 27ZM13 27L6 27L6 23.5Z"></path><path fill="#ccc866" d="M13 13L6 13L6 6ZM27 13L27 6L34 6ZM27 27L34 27L34 34ZM13 27L13 34L6 34ZM20 13L20 18L17 13ZM27 20L22 20L27 17ZM20 27L20 22L23 27ZM13 20L18 20L13 23Z"></path></svg>';
const SVG_FUEL_BACKGROUND =
  '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><rect width="100%" height="100%" fill="#58c09b" opacity="1.00"></rect><path fill="#e5e3b2" d="M13 13L13 6L16.5 6ZM20 6L27 6L27 9.5ZM27 27L27 34L23.5 34ZM20 34L13 34L13 30.5ZM6 20L6 13L9.5 13ZM27 13L34 13L34 16.5ZM34 20L34 27L30.5 27ZM13 27L6 27L6 23.5Z"></path><path fill="#ccc866" d="M13 13L6 13L6 6ZM27 13L27 6L34 6ZM27 27L34 27L34 34ZM13 27L13 34L6 34ZM20 13L20 18L17 13ZM27 20L22 20L27 17ZM20 27L20 22L23 27ZM13 20L18 20L13 23Z"></path></svg>';

describe('Avatar', () => {
  it('a11y', async () => {
    const rendered: RenderResult = await render(
      <Avatar.Generated hash="0x2cab234f35a4" />
    );
    await testA11y(rendered.container);
  });

  it('should generate a random svg', async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" />
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.outerHTML).toEqual(RANDOM_SVG);
  });

  it('should generate a random svg with random background color', async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" background="random" />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.outerHTML).toEqual(SVG_RANDOM_BACKGROUND);
  });

  it('should generate a random svg with fuel background color', async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" background="fuel" />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.outerHTML).toEqual(SVG_FUEL_BACKGROUND);
  });

  it('should generate a random svg with fixed background color', async () => {
    const { container } = await render(
      <Avatar.Generated hash="0x2cab234f35a4" background="#aaaaaa" />
    );

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    expect(svg?.outerHTML).toEqual(SVG_FIXED_BACKGROUND);
  });
});
