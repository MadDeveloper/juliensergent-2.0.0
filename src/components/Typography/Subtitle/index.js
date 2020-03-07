import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Subtitle.module.css"

export function Subtitle({ className = "", style = {}, children }) {
  return (
    <h2 className={cs(styles.root, className)} style={style}>
      {children}
    </h2>
  )
}

Subtitle.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}
