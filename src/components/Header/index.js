import React from "react"
import { Link } from "react-router-dom"
import { Typography } from "../Typography"
import styles from "./Header.module.css"
import { Menu } from "./Menu"

export function Header() {
  return (
    <header className={styles.root}>
      <Link to="/" className={styles.nameLink}>
        <div className={styles.photo} />
        <Typography.Title className={styles.name}>
          Julien Sergent
        </Typography.Title>
      </Link>
      <Menu />
    </header>
  )
}
