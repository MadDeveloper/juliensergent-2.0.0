import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Title.module.css"

export function Title({ heading = false, className = "", children }) {
  return (
    <h1 className={cs(styles.root, className, { [styles.heading]: heading })}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}
