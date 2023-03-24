import { Stack } from '../Stack';

import { Alert } from './Alert';
import type { AlertProps } from './types';

export default {
  component: Alert,
  title: 'UI/Alert',
  argTypes: {},
};

const STATUSES = ['info', 'warning', 'success', 'error'];

export const Status = (args: AlertProps) => (
  <Stack gap="$4" css={{ maxW: '700px' }}>
    {STATUSES.map((status) => (
      <Alert
        key={status}
        {...args}
        css={{ maxW: '700px' }}
        direction="row"
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        status={status as any}
      >
        <Alert.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Alert.Description>
      </Alert>
    ))}
  </Stack>
);

export const Horizontal = (args: AlertProps) => (
  <Alert {...args} css={{ maxW: '700px' }} direction="row">
    <Alert.Description>
      A new software update is available. See what&apos;s new in the v0.1
    </Alert.Description>
    <Alert.Actions>
      <Alert.Button rightIcon="ArrowRight">Details</Alert.Button>
    </Alert.Actions>
  </Alert>
);

export const Vertical = (args: AlertProps) => (
  <Alert {...args} css={{ maxW: '700px' }} status="warning">
    <Alert.Title>Action needed</Alert.Title>
    <Alert.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
      rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac,
      efficitur a sem.
    </Alert.Description>
  </Alert>
);

export const WithActions = (args: AlertProps) => (
  <Alert {...args} css={{ maxW: '700px' }} status="success">
    <Alert.Title>Order Completed</Alert.Title>
    <Alert.Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate
      rutrum est non sollicitudin. Donec tortor ligula, bibendum ac luctus ac,
      efficitur a sem.
    </Alert.Description>
    <Alert.Actions>
      <Alert.Button>View status</Alert.Button>
      <Alert.Button>Dismiss</Alert.Button>
    </Alert.Actions>
  </Alert>
);
