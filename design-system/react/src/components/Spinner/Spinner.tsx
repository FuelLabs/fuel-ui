import type { ColorKeys, Colors } from "@fuel/css";
import { styled, css, colors, keyframes, cx } from "@fuel/css";
import { useMemo } from "react";

import { createComponent } from "../../utils";

type OmitProps = "as" | "children";
export type SpinnerProps = {
  size?: number;
  color?: Colors | ColorKeys | string;
};

const Root = styled("svg");

export const Spinner = createComponent<SpinnerProps, OmitProps>(
  ({ size = 24, color = "accent", className, ...props }) => {
    const styles = useMemo(() => getStyles(size, color), [size]);
    const classes = cx("fuel_spinner", className, styles());
    return (
      <Root className={classes} viewBox={`0 0 ${size} ${size}`} {...props}>
        <circle cx={size / 2} cy={size / 2} r={size * 0.4} />
      </Root>
    );
  }
);

function getStyles(size: number, color: Colors | ColorKeys | string) {
  const strokeColor = colors[color] || colors[`${color}9`] || color;
  const animation = keyframes({
    "0%": {
      strokeDashoffset: 0.66 * size,
      transform: "rotate(0deg)",
    },
    "50%": {
      strokeDashoffset: 3.14 * size,
      transform: "rotate(720deg)",
    },
    "100%": {
      strokeDashoffset: 0.66 * size,
      transform: "rotate(1080deg)",
    },
  });

  return css({
    x: 0,
    y: 0,
    width: `${size}px`,
    height: `${size}px`,
    viewBox: `0 0 ${size} ${size}`,

    circle: {
      fill: "transparent",
      stroke: strokeColor,
      strokeWidth: size * 0.1,
      strokeLinecap: "round",
      strokeDasharray: 3.14 * size,
      transformOrigin: `calc(0.5px * ${size}) calc(0.5px * ${size}) 0`,
      animation: `${animation} 2.2s linear infinite`,
    },
  });
}
