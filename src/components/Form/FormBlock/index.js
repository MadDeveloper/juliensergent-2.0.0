import PropTypes from "prop-types"
import React from "react"
import styles from "./FormBlock.module.css"

export function FormBlock({ children }) {
  return <div className={styles.root}>{children}</div>
}

FormBlock.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ]),
}
