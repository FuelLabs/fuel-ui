import { act, fireEvent, render, screen } from '@fuel-ui/test-utils';

import { InputPassword } from './InputPassword';

describe('InputPassword', () => {
  it('should toggle between type password and text', async () => {
    render(<InputPassword placeholder="Type your password" />);

    let input = screen.getByRole('textbox');
    const button = screen.getByLabelText(/Toggle/);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('password');

    await act(() => fireEvent.click(button));
    input = screen.getByRole('textbox');
    expect(input.getAttribute('type')).toBe('text');
  });
});
