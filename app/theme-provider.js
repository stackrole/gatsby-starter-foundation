"use client"
import { ThemeUIProvider } from "theme-ui"
import theme from "../lib/theme"

export default function ThemeProvider({ children }) {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
}
