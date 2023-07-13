import { createComponent } from "~/utils"

import { Box } from "../Box"

import { styles } from "./styles"
import type { PasswordStrength } from "./types"

export type StrengthIndicatorIndicatorProps = {
  strength: PasswordStrength
}

export const StrengthIndicator =
  createComponent<StrengthIndicatorIndicatorProps>(({ strength, ...props }) => (
    <Box css={styles.strengthIndicatorContainer} {...props}>
      <Box data-strength={strength} css={styles.strengthIndicator} />
      <Box
        data-strength={
          strength !== "average" && strength !== "strong" ? 0 : strength
        }
        css={styles.strengthIndicator}
      />
      <Box
        data-strength={strength === "strong" ? strength : ""}
        css={styles.strengthIndicator}
      />
    </Box>
  ))
