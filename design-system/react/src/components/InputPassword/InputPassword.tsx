import { cx } from "@fuel-ui/css"
import { useState } from "react"

import { createComponent } from "../../utils"
import { Icon } from "../Icon"
import { IconButton } from "../IconButton"
import type { InputProps } from "../Input/Input"
import { Input } from "../Input/Input"
import type { InputFieldProps } from "../Input/InputField"

export type InputPasswordProps = InputProps & InputFieldProps

export const InputPassword = createComponent<InputPasswordProps>(
  ({
    className,
    size,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isFullWidth,
    describedBy,
    ...props
  }) => {
    const classes = cx("fuel_InputPassword", className)
    const [showing, setShowing] = useState(() => false)
    const inputProps = {
      size,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      isFullWidth,
      describedBy,
    }

    function handleToggle() {
      setShowing((s) => !s)
    }

    return (
      <Input {...inputProps}>
        <Input.ElementLeft element={<Icon icon="Lock" />} />
        <Input.Field
          {...props}
          type={!showing ? "password" : "text"}
          className={classes}
        />
        <Input.ElementRight
          element={
            <IconButton
              intent="base"
              variant="link"
              icon={
                showing ? (
                  <Icon icon="Eye" color="brand" />
                ) : (
                  <Icon icon="EyeClosed" color="gray8" />
                )
              }
              aria-label="Toggle Password"
              css={{ px: "0" }}
              onPress={handleToggle}
            />
          }
        />
      </Input>
    )
  },
)
