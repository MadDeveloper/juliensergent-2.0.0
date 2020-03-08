import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import styles from "./MenuItem.module.css"

export function MenuItem({ to = "", active = false, children }) {
  return (
    <Link to={to} className={cs(styles.root, { [styles.active]: active })}>
      {children}
    </Link>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.any
}
