import PropTypes from "prop-types"
import React from "react"
import styles from "./Main.module.css"

export function Main({ children }) {
  return <div className={styles.root}>{children}</div>
}

Main.propTypes = {
  children: PropTypes.any
}
