import { cx } from '@fuel-ui/css';
import { mergeRefs } from '@react-aria/utils';
import { useStyles } from '~/hooks';
import { useAsChild } from '~/hooks/useAsChild';
import { _unstable_createComponent } from '~/utils';
import { Components } from '~/utils/components-list';

import { useDialog } from './Dialog';
import type { DialogTriggerDef } from './defs';
import { styles } from './styles';

export const DialogTrigger = _unstable_createComponent<DialogTriggerDef>(
  Components.DialogTrigger,
  (props) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state, triggerRef } = useDialog();
    return useAsChild({
      ...props,
      onPress: state?.toggle,
      ref: mergeRefs(props.ref, triggerRef),
      className: cx(props.className, classes.trigger.className),
    });
  },
);

DialogTrigger.id = 'DialogTrigger';

DialogTrigger.defaultProps = {
  asChild: true,
};
