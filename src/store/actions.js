import { Theme } from "../lib/theme"

export const SET_THEME = "SET_THEME"
export const setTheme = (theme = Theme.Default) => ({ type: SET_THEME, theme })
