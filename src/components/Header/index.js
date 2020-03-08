import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../Layout"
import { Typography } from "../Typography"
import styles from "./Header.module.css"
import { Menu } from "./Menu"

export function Header() {
  return (
    <div className={styles.root}>
      <Layout.Content>
        <header className={styles.header}>
          <Link to="/" className={styles.nameLink}>
            <div className={styles.photo} />
            <Typography.Title className={styles.name}>
              Julien Sergent
            </Typography.Title>
          </Link>
          <Menu />
        </header>
      </Layout.Content>
    </div>
  )
}
