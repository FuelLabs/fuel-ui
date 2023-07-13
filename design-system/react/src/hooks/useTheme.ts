import type { CSSFnParams } from "@fuel-ui/css"
import { _createTheme, darkColors, lightColors } from "@fuel-ui/css"
import { createContext, useContext } from "react"

import type { StoreDefs } from "../defs"

type DefKeys = keyof StoreDefs
type ComponentProps<K extends DefKeys> = {
  defaultProps?: Partial<StoreDefs[K]["props"]>
  styles?: Partial<
    StoreDefs[K]["styles"] extends string
      ? Record<StoreDefs[K]["styles"], CSSFnParams>
      : never
  >
}

export type ThemeOverride = {
  tokens: Partial<{
    colors: Record<string, string>
    space: Record<string, string>
    sizes: Record<string, string>
    fonts: Record<string, string>
    fontSizes: Record<string, string>
    fontWeights: Record<string, string>
    lineHeights: Record<string, string>
    letterSpacings: Record<string, string>
    radii: Record<string, string>
    shadows: Record<string, string>
    zIndices: Record<string, string>
    transitions: Record<string, string>
    borderWidths: Record<string, string>
    borderStyles: Record<string, string>
  }>
  components?: Partial<{
    [K in DefKeys]?: ComponentProps<K>
  }>
}

export function createTheme(name: string, override: ThemeOverride) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const theme = _createTheme(name, override.tokens as any)
  return { theme, components: override.components }
}

export const THEME_STORAGE_KEY = "fuel-ui-theme"
export function getInitialTheme() {
  if (typeof window === "undefined") return "dark"
  const theme = localStorage.getItem(THEME_STORAGE_KEY)
  if (theme) return theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
  return prefersDark ? "dark" : "light"
}

export const lightTheme = createTheme("fuel_light-theme", {
  tokens: {
    colors: lightColors,
  },
})

export const darkTheme = createTheme("fuel_dark-theme", {
  tokens: {
    colors: darkColors,
  },
})

export const DEFAULT_THEMES = {
  dark: darkTheme,
  light: lightTheme,
}

export type FuelTheme = ReturnType<typeof createTheme>
export type ThemesObj = Record<string, FuelTheme>

type Context = {
  setTheme: (theme: string) => void
  themes: ThemesObj
  current: string
}

export const themeContext = createContext<Context>({
  setTheme: () => null,
  themes: DEFAULT_THEMES,
  current: getInitialTheme(),
} as Context)

export function useFuelTheme() {
  return useContext(themeContext)
}
