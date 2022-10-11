import { render, screen, waitFor } from '@fuel-ui/test-utils';
import { useRef } from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

import type { DrawerProps } from './Drawer';
import { Drawer } from './Drawer';

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
  const ref = useRef();
  return (
    <Box ref={ref}>
      <Content containerRef={ref} />
    </Box>
  );
};

describe('Drawer', () => {
  it('should be able to trigger drawer', async () => {
    const { user } = render(<Content />);

    expect(() => screen.getByText('Hello world')).toThrow();
    const trigger = screen.getByText('Open');
    await user.click(trigger);
    expect(await screen.findByText('Hello world')).toBeInTheDocument();
  });

  it('should be able to close when click on close', async () => {
    const { user } = render(<Content />);

    expect(() => screen.getByText('Hello world')).toThrow();
    const trigger = screen.getByText('Open');
    await user.click(trigger);
    expect(await screen.findByText('Hello world')).toBeInTheDocument();

    const close = screen.getByLabelText('Close');
    await user.click(close);
    await waitFor(() => {
      expect(() => screen.getByText('Hello world')).toThrow();
    });
  });

  it('should be able to close when click outside overlay', async () => {
    const { user } = render(<Content />);

    const trigger = screen.getByText('Open');
    await user.click(trigger);
    expect(await screen.findByText('Hello world')).toBeInTheDocument();

    const container = document.querySelector('[data-overlay-container="true"]');
    await user.click(container as never);
    await waitFor(() => {
      expect(() => screen.getByText('Hello world')).toThrow();
    });
  });

  it('should be able to close when click on esc', async () => {
    const { user } = render(<Content />);

    const trigger = screen.getByText('Open');
    await user.click(trigger);
    expect(await screen.findByText('Hello world')).toBeInTheDocument();

    await user.press('Esc');
    await waitFor(() => {
      expect(() => screen.getByText('Hello world')).toThrow();
    });
  });

  it('should be able to render inside a custom container', async () => {
    const { user, container, getByText, findByText } = render(<CustomRef />);
    expect(() => getByText('Hello world')).toThrow();
    const trigger = getByText('Open');
    await user.click(trigger);
    expect(await findByText('Hello world')).toBeInTheDocument();

    const overlay = container.querySelector('[data-overlay-container="true"]');
    expect(overlay).toBeTruthy();
  });
});
