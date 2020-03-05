import PropTypes from "prop-types"
import React from "react"
import styles from "./Paragraph.module.css"

export function Paragraph({ children }) {
  return <p className={styles.root}>{children}</p>
}

Paragraph.propTypes = {
  children: PropTypes.any
}
