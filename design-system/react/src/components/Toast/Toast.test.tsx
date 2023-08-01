import { fireEvent, render, screen } from '@fuels/jest';

import { Button } from '../Button';
import { ThemeProvider } from '../ThemeProvider';

import { toast } from './Toast';

describe('Toast', () => {
  it('should be visible after call toast() function', async () => {
    render(
      <ThemeProvider>
        <Button onPress={() => toast('Hello world')}>Show toast</Button>
      </ThemeProvider>,
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
