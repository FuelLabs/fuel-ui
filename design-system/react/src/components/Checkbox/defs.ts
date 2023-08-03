import type * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { Components } from '~/defs';
import type { CreateComponent } from '~/utils';

type OmitProps = 'children' | 'as';
export type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type ObjProps = {
  id: string;
};

export type CheckboxDef = CreateComponent<{
  type: 'button';
  component: Components.Checkbox;
  props: CheckboxProps & ObjProps;
  element: HTMLButtonElement;
  styles: 'root' | 'indicator';
  omit: OmitProps;
}>;
