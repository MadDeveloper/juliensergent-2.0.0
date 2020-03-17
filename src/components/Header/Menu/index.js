import cs from "classnames"
import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg"
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg"
import { config } from "../../../config"
import styles from "./Menu.module.css"
import { MenuItem } from "./MenuItem"

export function Menu({ itemsHidden = [] }) {
  const location = useLocation()
  const [opened, setOpened] = useState(false)

  function isVisibile(item = "") {
    return !itemsHidden.includes(item) && config.menu.items.includes(item)
  }

  function isActive(route = "") {
    return location.pathname === route
  }

  function open() {
    setOpened(true)
  }

  function close() {
    setOpened(false)
  }

  useEffect(() => {
    close()
  }, [location.pathname])

  return (
    <nav className={cs(styles.root, { [styles.opened]: opened })}>
      {opened ? (
        <CloseIcon className={styles.closeIcon} onClick={close} />
      ) : (
        <MenuIcon className={styles.openIcon} onClick={open} />
      )}
      {isVisibile(config.menu.blog) && (
        <div className={styles.item}>
          <MenuItem
            to={config.routes.blog}
            active={isActive(config.routes.blog)}
          >
            Blog
          </MenuItem>
        </div>
      )}
      {isVisibile(config.menu.projects) && (
        <div className={styles.item}>
          <MenuItem
            to={config.routes.projects}
            active={isActive(config.routes.projects)}
          >
            Projects
          </MenuItem>
        </div>
      )}
      {isVisibile(config.menu.resume) && (
        <div className={styles.item}>
          <MenuItem
            to={config.routes.resume}
            active={isActive(config.routes.resume)}
          >
            Resume
          </MenuItem>
        </div>
      )}
      {isVisibile(config.menu.contact) && (
        <div className={styles.item}>
          <MenuItem
            to={config.routes.contact}
            active={isActive(config.routes.contact)}
          >
            Contact
          </MenuItem>
        </div>
      )}
    </nav>
  )
}

Menu.propTypes = {
  itemsHidden: PropTypes.arrayOf(PropTypes.string)
}
