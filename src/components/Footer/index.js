import React from "react"
import { Socials } from "../Socials"
import styles from "./Footer.module.css"

export function Footer() {
  return (
    <footer className={styles.root}>
      <Socials />
    </footer>
  )
}
