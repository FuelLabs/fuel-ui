import { Box } from '../Box';

import { skeletonStyles } from './styles';

import { createComponent } from '~/utils';

export const BlockSkeleton = createComponent(({ css = {}, ...props }) => {
  return <Box css={{ ...skeletonStyles.box, ...css }} {...props}></Box>;
});
