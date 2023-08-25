import { render, screen, testA11y } from '@fuels/jest';
import { composeStory } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';
import Meta, { Usage as UsageStory } from './Breadcrumb.stories';

const Usage = composeStory(UsageStory, Meta);

describe('Breadcrumb', () => {
  it('a11y', async () => {
    await testA11y(<Usage />);
  });

  it('should render a basic html', () => {
    const { container } = render(<Usage />);
    expect(container.querySelector('.fuel_Breadcrumb')).toBeInTheDocument();
    expect(
      container.querySelector('.fuel_Breadcrumb-item'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.fuel_Breadcrumb-divider'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('.fuel_Breadcrumb-link'),
    ).toBeInTheDocument();
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should not render other component as children', () => {
    jest.spyOn(console, 'error').mockImplementation(() => null);
    expect(() =>
      render(
        <Breadcrumb>
          <li>text</li>
          <li>text2</li>
        </Breadcrumb>,
      ),
    ).toThrowError(
      'Breadcrumb only accepts Breadcrumb.Item or Breadcrumb.Link as children',
    );
  });
});
