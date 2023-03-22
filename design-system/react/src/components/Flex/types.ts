import type { ThemeUtilsCSS } from '@fuel-ui/css';

import type { HTMLProps } from '~/utils';

export type FlexProps = HTMLProps['div'] & {
  /**
   * Shorthand for `alignItems` style prop
   * @type SystemProps["alignItems"]
   */
  align?: ThemeUtilsCSS['alignItems'];
  /**
   * Shorthand for `flexBasis` style prop
   * @type SystemProps["flexBasis"]
   */
  basis?: ThemeUtilsCSS['flexBasis'];
  /**
   * Shorthand for `flexDirection` style prop
   * @type SystemProps["flexDirection"]
   */
  direction?: ThemeUtilsCSS['flexDirection'];
  /**
   * Shorthand for `gap` style prop
   * @type SystemProps["gap"]
   */
  gap?: ThemeUtilsCSS['gap'];
  /**
   * Shorthand for `flexGrow` style prop
   * @type SystemProps["flexGrow"]
   */
  grow?: ThemeUtilsCSS['flexGrow'];
  /**
   * Shorthand for `justifyContent` style prop
   * @type SystemProps["justifyContent"]
   */
  justify?: ThemeUtilsCSS['justifyContent'];
  /**
   * Shorthand for `flexShrink` style prop
   * @type SystemProps["flexShrink"]
   */
  shrink?: ThemeUtilsCSS['flexShrink'];
  /**
   * Shorthand for `flexWrap` style prop
   * @type SystemProps["flexWrap"]
   */
  wrap?: ThemeUtilsCSS['flexWrap'];
};

export type FlexDef = {
  props: FlexProps;
  styles: 'root';
};
