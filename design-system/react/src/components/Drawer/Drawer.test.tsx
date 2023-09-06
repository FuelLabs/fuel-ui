/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  click,
  press,
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@fuels/jest';
import type { ElementRef } from 'react';
import { useRef } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

import { Drawer } from './Drawer';
import type { DrawerProps } from './defs';

const Content = (props: Partial<DrawerProps>) => (
  <Drawer {...(props as DrawerProps)}>
    <Drawer.Trigger>
      <Button>Open</Button>
    </Drawer.Trigger>
    <Drawer.Content>
      <Drawer.CloseButton />
      <Drawer.Body>Hello world</Drawer.Body>
    </Drawer.Content>
  </Drawer>
);

const CustomRef = () => {
  const ref = useRef<ElementRef<'div'>>(null);
  return (
    <Box ref={ref}>
      <Content containerRef={ref} />
    </Box>
  );
};

describe('Drawer', () => {
  it('should be able to trigger drawer', async () => {
    render(<Content />);

    expect(() => screen.getByText('Hello world')).toThrow();
    const trigger = screen.getByText('Open');
    fireEvent.click(trigger);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });

  it('should be able to close when click on close', async () => {
    render(<Content />);

    expect(() => screen.getByText('Hello world')).toThrow();
    await waitFor(async () => {
      const trigger = screen.getByText('Open');
      fireEvent.click(trigger);
      expect(screen.getByText('Hello world')).toBeInTheDocument();
    });

    const close = screen.getByLabelText('Close');
    fireEvent.click(close);
    await waitFor(() => {
      expect(() => screen.getByText('Hello world')).toThrow();
    });
  });

  it('should be able to close when click on esc', async () => {
    render(<Content />);

    const trigger = screen.getByText('Open');
    await act(() => click(trigger));
    await waitFor(() => {
      expect(screen.getByText('Hello world')).toBeInTheDocument();
    });

    await press('Esc');
    await waitFor(() => {
      expect(() => screen.getByText('Hello world')).toThrow();
    });
  });

  it('should be able to render inside a custom container', async () => {
    const { container, getByText, findByText } = render(<CustomRef />);
    expect(() => getByText('Hello world')).toThrow();
    const trigger = getByText('Open');
    await click(trigger);
    expect(await findByText('Hello world')).toBeInTheDocument();

    const overlay = container.querySelector('[data-overlay-container="true"]');
    expect(overlay).toBeTruthy();
  });
});
