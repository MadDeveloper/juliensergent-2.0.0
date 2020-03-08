import PropTypes from "prop-types"
import React from "react"
import { useHistory } from "react-router-dom"
import { Button } from "../../../Button"
import styles from "./MenuItem.module.css"

export function MenuItem({ to = "", active = false, children }) {
  const history = useHistory()

  function navigate() {
    history.push(to)
  }

  return (
    <Button
      className={styles.root}
      active={active}
      secondary={!active}
      onClick={navigate}
    >
      {children}
    </Button>
  )
}

MenuItem.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  children: PropTypes.any
}
