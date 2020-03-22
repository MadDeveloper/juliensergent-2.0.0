import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./PageTitle.module.css"

export function PageTitle({ className = "", children }) {
  return <h1 className={cs(styles.root, className)}>{children}</h1>
}

PageTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
