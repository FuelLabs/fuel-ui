import { useStyles } from '~/hooks';
import { useAsChild } from '~/hooks/useAsChild';
import { _unstable_createComponent } from '~/utils';
import { Components } from '~/utils/components-list';

import { useDrawer } from './Drawer';
import type { DrawerTriggerDef } from './defs';
import { styles } from './styles';

export const DrawerTrigger = _unstable_createComponent<DrawerTriggerDef>(
  Components.DrawerTrigger,
  (props) => {
    const classes = useStyles(styles, props, ['trigger']);
    const { state } = useDrawer();
    return useAsChild({
      ...props,
      ...classes.trigger,
      onPress: state?.toggle,
    });
  },
);

DrawerTrigger.defaultProps = {
  asChild: true,
};
