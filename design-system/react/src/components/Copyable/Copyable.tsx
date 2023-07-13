import { Components } from "~/defs"
import { useStyles } from "~/hooks"

import { _unstable_createComponent } from "../../utils"
import { Flex } from "../Box/Flex"
import { Icon } from "../Icon"
import { IconButton } from "../IconButton"
import { toast } from "../Toast"

import type * as t from "./defs"
import { styles } from "./styles"

export const Copyable = _unstable_createComponent<t.CopyableDef>(
  Components.Copyable,
  ({
    children,
    value,
    tooltipMessage = "Click here to copy to clipboard",
    iconProps,
    ...props
  }) => {
    const classes = useStyles(styles, props)
    const iconClass = classes.icon.className

    async function handleCopy() {
      await navigator.clipboard.writeText(value)
      toast.success("Copied to clipboard")
    }

    return (
      <Flex
        align="center"
        gap="$2"
        {...props}
        className={classes.root.className}
      >
        {children}
        <IconButton
          intent="base"
          tooltip={tooltipMessage}
          onPress={handleCopy}
          variant="link"
          icon={<Icon icon="Copy" size={16} />}
          aria-label="Copy to clipboard"
          className={iconClass}
          {...iconProps}
        />
      </Flex>
    )
  },
)
