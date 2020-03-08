import PropTypes from "prop-types"
import React from "react"
import { Link } from "react-router-dom"
import styles from "./Menu.module.css"

export function Menu({ to = "", children }) {
  return (
    <Link to={to} className={styles.root}>
      {children}
    </Link>
  )
}

Menu.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any
}
