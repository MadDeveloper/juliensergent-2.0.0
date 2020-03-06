import PropTypes from "prop-types"
import React, { createContext, useContext, useReducer } from "react"
import reducer, { initialState } from "./reducer"

export const Store = createContext()

export function useStore() {
  return useContext(Store)
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node
}
