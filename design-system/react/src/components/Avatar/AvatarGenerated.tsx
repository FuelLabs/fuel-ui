import { cx } from "@fuel-ui/css";
import { toSvg } from "jdenticon";

import { createComponent } from "../../utils";
import type { BoxProps } from "../Box";
import { Box } from "../Box";

const SIZES = {
  sm: 30,
  md: 40,
  lg: 50,
};

type OmitProps = "children";
export type AvatarGeneratedProps = BoxProps & {
  hash: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
};

export const AvatarGenerated = createComponent<
  AvatarGeneratedProps,
  unknown,
  OmitProps
>(({ hash, size = "md", className, css, as, ...props }) => {
  const totalSize = SIZES[size];
  const svgString = toSvg(hash, totalSize);
  const classes = cx(className, "fuel_avatar-generated");
  return (
    <Box
      {...props}
      className={classes}
      as={as}
      css={{
        ...css,
        width: totalSize,
        height: totalSize,
      }}
      dangerouslySetInnerHTML={{
        __html: svgString,
      }}
    />
  );
});
