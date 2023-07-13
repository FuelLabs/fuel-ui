import { css } from "@fuel-ui/css"

import { Box } from "../Box"

import { AspectRatio } from "./AspectRatio"
import type { AspectRatioProps } from "./defs"

export default {
  component: AspectRatio,
  title: "UI/AspectRatio",
  argTypes: {},
}

export const Usage = (args: AspectRatioProps) => (
  <Box css={{ maxW: "$sm", borderRadius: "$xl", overflow: "hidden" }}>
    <AspectRatio ratio={16 / 9} {...args}>
      <img
        className={styles.img()}
        src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
        alt="Landscape by Tobias Tullius"
      />
    </AspectRatio>
  </Box>
)

const styles = {
  img: css({
    objectFit: "cover",
    width: "$full",
    height: "$full",
  }),
}
