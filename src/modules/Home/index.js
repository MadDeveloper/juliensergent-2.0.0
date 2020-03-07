import React from "react"
import styles from "./Home.module.css"
import { Menu } from "./Menu"
import { Presentation } from "./Presentation"

export function Home() {
  return (
    <div className={styles.root}>
      <Presentation />
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  )
}
