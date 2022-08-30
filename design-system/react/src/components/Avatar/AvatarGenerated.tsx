import { cx } from "@fuel-ui/css";
import { toSvg } from "jdenticon";

import { createComponent } from "../../utils";
import type { BoxProps } from "../Box";
import { Box } from "../Box";

import { getBackgroundColor } from "./utils";

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
  background?: "fuel" | "random" | string;
};

export const AvatarGenerated = createComponent<
  AvatarGeneratedProps,
  unknown,
  OmitProps
>(({ hash, size = "md", className, css, as, background, ...props }) => {
  const totalSize = SIZES[size];
  const backColor = getBackgroundColor(background, hash);
  const svgString = toSvg(hash, totalSize, {
    backColor,
    padding: 0.15,
  });
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
        borderRadius: "100%",
        overflow: "hidden",
      }}
      dangerouslySetInnerHTML={{
        __html: svgString,
      }}
    />
  );
});
