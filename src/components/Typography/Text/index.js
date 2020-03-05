import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Text.module.css"

export function Text({ children, bold = false }) {
  return <p className={cs(styles.root, { [styles.bold]: bold })}>{children}</p>
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  bold: PropTypes.bool
}
