import React from "react"
import { Menu } from "../../components/Header/Menu"
import { config } from "../../config"
import styles from "./Home.module.css"
import { Presentation } from "./Presentation"

const menuItemsHidden = [config.menu.resume]

export function Home() {
  return (
    <div className={styles.root}>
      <Presentation />
      <div className={styles.menu}>
        <Menu itemsHidden={menuItemsHidden} />
      </div>
    </div>
  )
}
