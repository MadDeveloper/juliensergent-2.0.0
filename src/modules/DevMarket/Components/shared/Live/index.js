import PropTypes from "prop-types"
import React from "react"
import styles from "./Live.module.css"

export function Live({ children }) {
  return <div className={styles.root}>{children}</div>
}

Live.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
}
