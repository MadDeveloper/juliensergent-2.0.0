import { useCallback, useEffect } from "react"
import { useStore } from "../store"
import { setTheme } from "../store/actions"

export const Theme = {
  Light: "light",
  Dark: "dark",
  Default: "light",
}

export function setHTMLTheme(theme = Theme.Default) {
  document.documentElement.setAttribute("data-theme", theme)
}

export function useTheme() {
  return useStore().state.theme
}

export function useThemeObserver() {
  const { dispatch } = useStore()
  const theme = useTheme()

  useEffect(() => {
    if (!theme) {
      dispatch(setTheme(Theme.Default))
    } else {
      setHTMLTheme(theme)
    }
  }, [dispatch, theme])
}

export function useToggleTheme() {
  const { dispatch } = useStore()
  const theme = useTheme()

  return useCallback(
    () => dispatch(setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)),
    [dispatch, theme]
  )
}
