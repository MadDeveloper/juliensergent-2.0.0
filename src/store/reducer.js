import { SET_THEME } from "./actions"

export const initialState = {
  theme: null,
}

export default function reducer(state, action) {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      }

    default:
      return state
  }
}
