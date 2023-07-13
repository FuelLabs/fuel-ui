import { useMemo } from "react"

import { PasswordDictionary } from "../constants"
import { passwordChecker, passwordStrengthCalculator } from "../utils"

type PasswordStrengthOptions = {
  password: string
  minLength: number
}

export function usePasswordStrength({
  minLength,
  password,
}: PasswordStrengthOptions) {
  const checker = useMemo(
    () => passwordChecker(password, minLength),
    [password, minLength],
  )

  const strength = useMemo(
    () => passwordStrengthCalculator(password, minLength),
    [password, minLength],
  )

  return {
    checker,
    strength,
    label: PasswordDictionary[strength],
  }
}
