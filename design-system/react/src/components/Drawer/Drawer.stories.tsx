import { useRef } from 'react';

import { Button } from '../Button';
import { Card } from '../Card';
import { Stack } from '../Stack';

import type { DrawerProps } from './Drawer';
import { Drawer } from './Drawer';

export default {
  component: Drawer,
  title: 'Overlay/Drawer',
  parameters: {
    layout: 'fullscreen',
  },
};

const content = (
  <Drawer.Content>
    <Drawer.CloseButton />
    <Drawer.Body css={{ padding: '$4' }}>Hello world</Drawer.Body>
  </Drawer.Content>
);

export const Usage = (args: DrawerProps) => {
  return (
    <Drawer {...args}>
      <Drawer.Trigger>
        <Button>Open</Button>
      </Drawer.Trigger>
      {content}
    </Drawer>
  );
};

Usage.parameters = {
  layout: 'centered',
};

export const Sides = (args: DrawerProps) => {
  return (
    <Stack direction="row">
      <Drawer {...args} side="left">
        <Drawer.Trigger>
          <Button>Open Left</Button>
        </Drawer.Trigger>
        {content}
      </Drawer>
      <Drawer {...args} side="right">
        <Drawer.Trigger>
          <Button>Open Right</Button>
        </Drawer.Trigger>
        {content}
      </Drawer>
    </Stack>
  );
};

Sides.parameters = {
  layout: 'centered',
};

const SIZES = ['sm', 'md', 'lg', '325px'];

export const CustomSize = (args: DrawerProps) => {
  return (
    <Stack direction="row">
      {SIZES.map((size) => (
        <Drawer {...args} size={size} key={size}>
          <Drawer.Trigger>
            <Button>Open {size}</Button>
          </Drawer.Trigger>
          {content}
        </Drawer>
      ))}
    </Stack>
  );
};

CustomSize.parameters = {
  layout: 'centered',
};

export const CustomContainer = (args: DrawerProps) => {
  const ref = useRef<HTMLDivElement>();
  return (
    <Card
      ref={ref}
      css={{
        overflow: 'hidden',
        position: 'relative',
        width: '500px',
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Drawer {...args} side="right" containerRef={ref} size={300}>
        <Drawer.Trigger>
          <Button>Open</Button>
        </Drawer.Trigger>
        {content}
      </Drawer>
    </Card>
  );
};

CustomContainer.parameters = {
  layout: 'centered',
};
