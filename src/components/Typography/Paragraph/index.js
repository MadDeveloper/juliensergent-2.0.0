import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Paragraph.module.css"

export function Paragraph({ heading = false, className = "", children }) {
  return (
    <p className={cs(styles.root, className, { [styles.heading]: heading })}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any
}
