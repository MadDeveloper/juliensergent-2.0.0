import cs from "classnames"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { ReactComponent as CloseIcon } from "../../../assets/icons/close.svg"
import { ReactComponent as MenuIcon } from "../../../assets/icons/menu.svg"
import styles from "./Menu.module.css"
import { MenuItem } from "./MenuItem"

export function Menu() {
  const location = useLocation()
  const [opened, setOpened] = useState(false)

  function isActive(route = "") {
    return location.pathname.startsWith(route)
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
      <div className={styles.item}>
        <MenuItem to="/blog" active={isActive("/blog")}>
          Blog
        </MenuItem>
      </div>
      <div className={styles.item}>
        <MenuItem to="/devmarket" active={isActive("/devmarket")}>
          Dev. market
        </MenuItem>
      </div>
      <div className={styles.item}>
        <MenuItem to="/about" active={isActive("/about")}>
          About
        </MenuItem>
      </div>
      <div className={styles.item}>
        <MenuItem to="/contact" active={isActive("/contact")}>
          Contact
        </MenuItem>
      </div>
    </nav>
  )
}
