import { cx } from '@fuel-ui/css';
import { Children, createContext, useContext, useId } from 'react';

import { createComponent, createStyledElement } from '../../utils';

import * as styles from './styles';

function getRightDescribedBy(ids: string[], id: string, isInvalid?: boolean) {
  if (isInvalid && ids.some((i) => i?.includes('FormErrorMessage'))) {
    return `feedback${id}`;
  }
  if (ids.some((i) => i?.includes('FormHelperText'))) {
    return `helperText${id}`;
  }
  return `label${id}`;
}

export type FormControlProps = {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type Context = FormControlProps & {
  id: string;
  describedBy?: string;
};

const ctx = createContext<Context>({ id: '' });
export function useFormControlProps() {
  return useContext(ctx);
}

export const FormControl = createComponent<FormControlProps>(
  ({
    children,
    className,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...props
  }) => {
    const id = useId();
    const classes = cx('fuel_FormControl', className);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childArr = Children.toArray(children) as any[];
    const childIds = childArr.map((child) => child?.type?.id);
    const describedBy = getRightDescribedBy(childIds, id, isInvalid);

    const inputProps = {
      id,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      describedBy,
    };

    const customProps = {
      ...props,
      role: 'group',
      className: classes,
    };

    return (
      <ctx.Provider value={inputProps}>
        {createStyledElement(
          'div',
          styles.control,
          null,
          customProps,
          children
        )}
      </ctx.Provider>
    );
  }
);
