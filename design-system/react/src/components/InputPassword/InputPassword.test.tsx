import { render, screen } from '@fuels/jest';

import { InputPassword } from './InputPassword';

describe('InputPassword', () => {
  it('should toggle between type password and text', async () => {
    const { user } = render(<InputPassword placeholder="Type your password" />);

    let input = screen.getByRole('textbox');
    const button = screen.getByLabelText(/Toggle/);

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input.getAttribute('type')).toBe('password');

    await user.click(button);
    input = await screen.findByRole('textbox');
    expect(input.getAttribute('type')).toBe('text');
  });
});
