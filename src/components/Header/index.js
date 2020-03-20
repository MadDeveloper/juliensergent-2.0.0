import React from "react"
import { Link, useLocation } from "react-router-dom"
import { config } from "../../config"
import { Typography } from "../Typography"
import styles from "./Header.module.css"
import { Menu } from "./Menu"

export function Header() {
  const location = useLocation()

  return (
    <header className={styles.root}>
      <Link to="/" className={styles.nameLink}>
        {location.pathname !== config.routes.resume && (
          <div className={styles.photo} />
        )}
        <Typography.Title className={styles.name}>
          Julien Sergent
        </Typography.Title>
      </Link>
      <Menu />
    </header>
  )
}
