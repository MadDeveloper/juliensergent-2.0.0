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
            <Typography.Title className={styles.name}>
              Julien Sergent
            </Typography.Title>
          </Link>
          <nav className={styles.nav}>
            <Menu to="/blog">Blog</Menu>
            <Menu to="/projects">Projects</Menu>
            <Menu to="/me">Resume</Menu>
            <Menu to="/contact">Contact</Menu>
          </nav>
        </header>
      </Layout.Content>
    </div>
  )
}
