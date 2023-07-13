import { Components } from '~/defs';
import { useStyles } from '~/hooks';

import { _unstable_createComponent } from '../../utils';
import { Box } from '../Box';
import { Focus } from '../Focus';

import { CardListItem } from './CardListItem';
import type * as t from './defs';
import { CardListContext } from './defs';
import { styles } from './styles';

export const CardList = _unstable_createComponent<t.CardListDef>(
  Components.CardList,
  ({ children, gap = '$2', isClickable, autoFocus, ...props }) => {
    const classes = useStyles(styles, props, ['root']);

    return (
      <CardListContext.Provider value={{ isClickable, autoFocus }}>
        <Box.Stack gap={gap} {...props} className={classes.root.className}>
          {isClickable ? (
            <Focus.ArrowNavigator autoFocus={autoFocus}>
              {children}
            </Focus.ArrowNavigator>
          ) : (
            children
          )}
        </Box.Stack>
      </CardListContext.Provider>
    );
  },
);

CardList.Item = CardListItem;
