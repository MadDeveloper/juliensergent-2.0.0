import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Subtitle.module.css"

export function Subtitle({ heading = false, className = "", children }) {
  return (
    <h2 className={cs(styles.root, className, { [styles.heading]: heading })}>
      {children}
    </h2>
  )
}

Subtitle.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}
