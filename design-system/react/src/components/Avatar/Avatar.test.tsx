import { screen, mocks, testA11y, render, waitFor, act } from '@fuels/jest';

import { Avatar } from './Avatar';

describe('Avatar', () => {
  beforeAll(() => {
    mocks.image();
  });

  afterAll(() => {
    mocks.image.restore();
  });

  beforeEach(() => {
    render(
      <Avatar
        name="Colm Tuite"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />,
    );
  });

  it('a11y', async () => {
    await act(async () =>
      testA11y(
        <Avatar
          name="Colm Tuite"
          src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
        />,
      ),
    );
  });

  it('should render the fallback initially with first with letters of name', async () => {
    expect(screen.getByText('CT')).toBeInTheDocument();
  });

  it('should fallback text has just one letter if name is one word', async () => {
    render(
      <Avatar
        name="Colm"
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
      />,
    );
    expect(screen.getByText('C')).toBeInTheDocument();
  });

  it('should not render the image initially', async () => {
    await waitFor(() => {
      expect(screen.queryByRole('img')).not.toBeInTheDocument();
    });
  });

  it('should render the image after it has loaded', async () => {
    await waitFor(() => {
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });
  });

  it('should have alt text on the image', async () => {
    await waitFor(() => {
      const image = screen.getByAltText('Colm Tuite');
      expect(image).toBeInTheDocument();
    });
  });
});
