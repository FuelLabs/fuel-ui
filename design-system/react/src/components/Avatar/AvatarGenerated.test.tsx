import type { RenderResult } from '@fuels/jest';
import { testA11y, render } from '@fuels/jest';

import { Avatar } from './Avatar';

const HASH = '0x760a9e947de58fbf133a1d0ec97ae9aa18adfe71';

describe('Avatar', () => {
  it('a11y', async () => {
    const rendered: RenderResult = render(<Avatar.Generated hash={HASH} />);
    await testA11y(rendered.container);
  });
});
