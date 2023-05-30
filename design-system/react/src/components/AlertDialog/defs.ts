import type * as RAL from '@radix-ui/react-alert-dialog';

import type { AlertDialogAction } from './AlertDialogAction';
import type { AlertDialogCancel } from './AlertDialogCancel';
import type { AlertDialogContent } from './AlertDialogContent';
import type { AlertDialogDescription } from './AlertDialogDescription';
import type { AlertDialogFooter } from './AlertDialogFooter';
import type { AlertDialogHeading } from './AlertDialogHeading';
import type { AlertDialogTrigger } from './AlertDialogTrigger';

import type { Components } from '~/defs';
import type { CreateComponent, HTMLProps } from '~/utils';

export type AlertDialogNS = {
  id: string;
  Action: typeof AlertDialogAction;
  Cancel: typeof AlertDialogCancel;
  Content: typeof AlertDialogContent;
  Description: typeof AlertDialogDescription;
  Footer: typeof AlertDialogFooter;
  Heading: typeof AlertDialogHeading;
  Trigger: typeof AlertDialogTrigger;
};

export type AlertDialogProps = RAL.AlertDialogProps;

export type AlertDialogActionProps = RAL.AlertDialogActionProps;

export type AlertDialogCancelProps = RAL.AlertDialogCancelProps;

export type AlertDialogContentProps = RAL.AlertDialogContentProps & {
  overlayClassName?: string;
};

export type AlertDialogDescriptionProps = RAL.AlertDialogDescriptionProps;

export type AlertDialogFooterProps = HTMLProps['footer'] & {
  align?: 'start' | 'end';
};

export type AlertDialogHeadingProps = RAL.AlertDialogTitleProps;

export type AlertDialogTriggerProps = RAL.AlertDialogTriggerProps;

export type AlertDialogDef = CreateComponent<{
  type: 'div';
  component: Components.AlertDialog;
  element: HTMLDivElement;
  props: AlertDialogProps;
  namespace: AlertDialogNS;
  styles:
    | 'root'
    | 'description'
    | 'content'
    | 'footer'
    | 'heading'
    | 'trigger'
    | 'overlay'
    | 'cancel'
    | 'action';
  omit: 'as';
}>;

export type AlertDialogActionDef = CreateComponent<{
  type: 'button';
  component: Components.AlertDialogAction;
  element: HTMLButtonElement;
  props: AlertDialogActionProps;
}>;

export type AlertDialogCancelDef = CreateComponent<{
  type: 'button';
  component: Components.AlertDialogCancel;
  element: HTMLButtonElement;
  props: AlertDialogCancelProps;
}>;

export type AlertDialogContentDef = CreateComponent<{
  type: 'div';
  component: Components.AlertDialogContent;
  element: HTMLDivElement;
  props: AlertDialogContentProps;
  styles: 'content';
  omit: 'as';
}>;

export type AlertDialogDescriptionDef = CreateComponent<{
  type: 'div';
  component: Components.AlertDialogDescription;
  element: HTMLDivElement;
  props: AlertDialogDescriptionProps;
  styles: 'description';
}>;

export type AlertDialogFooterDef = CreateComponent<{
  type: 'footer';
  component: Components.AlertDialogFooter;
  element: HTMLDivElement;
  props: AlertDialogFooterProps;
}>;

export type AlertDialogHeadingDef = CreateComponent<{
  type: 'div';
  component: Components.AlertDialogHeading;
  element: HTMLDivElement;
  props: AlertDialogHeadingProps;
}>;

export type AlertDialogTriggerDef = CreateComponent<{
  type: 'button';
  component: Components.AlertDialogTrigger;
  element: HTMLButtonElement;
  props: AlertDialogTriggerProps;
}>;
