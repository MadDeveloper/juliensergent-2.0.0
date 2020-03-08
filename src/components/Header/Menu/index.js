import PropTypes from "prop-types"
import React from "react"
import { config } from "../../../config"
import styles from "./Menu.module.css"
import { MenuItem } from "./MenuItem"

export function Menu({ itemsHidden = [] }) {
  function isVisibile(item = "") {
    return !itemsHidden.includes(item) && config.menu.items.includes(item)
  }

  return (
    <nav className={styles.root}>
      {isVisibile(config.menu.blog) && (
        <MenuItem to={config.routes.blog}>Blog</MenuItem>
      )}
      {isVisibile(config.menu.projects) && (
        <MenuItem to={config.routes.projects}>Projects</MenuItem>
      )}
      {isVisibile(config.menu.resume) && (
        <MenuItem to={config.routes.resume}>Resume</MenuItem>
      )}
      {isVisibile(config.menu.contact) && (
        <MenuItem to={config.routes.contact}>Contact</MenuItem>
      )}
    </nav>
  )
}

Menu.propTypes = {
  itemsHidden: PropTypes.arrayOf(PropTypes.string)
}
