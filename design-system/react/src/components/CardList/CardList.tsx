import { _unstable_createComponent } from '../../utils';
import { Box } from '../Box';
import { Focus } from '../Focus';

import { CardListItem } from './CardListItem';
import type * as t from './defs';
import { CardListContext } from './defs';
import { styles } from './styles';

import { Components } from '~/defs';
import { useElementProps, useStyles } from '~/hooks';

export const CardList = _unstable_createComponent<t.CardListDef>(
  Components.CardList,
  ({ children, gap = '$2', isClickable, autoFocus, ...props }) => {
    const classes = useStyles(styles, props, ['root']);
    const elementProps = useElementProps(props, classes.root);

    return (
      <CardListContext.Provider value={{ isClickable, autoFocus }}>
        <Box.Stack
          gap={gap}
          {...elementProps}
          className={classes.root.className}
        >
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
  }
);

CardList.Item = CardListItem;
