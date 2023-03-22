import { createComponent } from '../../utils';
import { Box } from '../Box';

import type { FlexProps } from './types';

import { useComponentProps } from '~/hooks';
import { Components } from '~/types';

export const Flex = createComponent<FlexProps>(({ css, ...initProps }) => {
  const props = useComponentProps(Components.Flex, initProps);
  const { direction, align, justify, wrap, basis, grow, shrink, gap } = props;
  return (
    <Box
      {...props}
      css={{
        gap,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        display: 'flex',
        ...css,
      }}
    />
  );
});
