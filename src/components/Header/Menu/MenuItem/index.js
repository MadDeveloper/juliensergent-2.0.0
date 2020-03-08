import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import styles from "./MenuItem.module.css"

export function MenuItem({ to = "", children }) {
  return (
    <Link to={to} className={styles.root}>
      {children}
    </Link>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any
}
