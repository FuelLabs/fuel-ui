import { render, screen, testA11y } from '@fuel-ui/test-utils';

import { Box } from './Box';

describe('Box', () => {
  it('a11y', async () => {
    await testA11y(<Box role="region">Text</Box>);
  });

  it('should render a basic div', () => {
    const { container } = render(<Box role="region">Text</Box>);
    expect(container.querySelector('div')).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should change element with as prop', async () => {
    const { container } = render(
      <Box role="region" as="article">
        Text
      </Box>
    );
    expect(container.querySelector('article')).toBeInTheDocument();
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByText('Text')).toBeInTheDocument();
  });
});
