import PropTypes from "prop-types"
import React from "react"
import styles from "./Title.module.css"

export function Title({ children }) {
  return <h1 className={styles.root}>{children}</h1>
}

Title.propTypes = {
  children: PropTypes.string
}
