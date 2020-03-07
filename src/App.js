import React from "react"
import styles from "./App.module.css"
import { useThemeObserver } from "./lib/theme"
import { Home } from "./modules/Home"

export function App() {
  useThemeObserver()

  return (
    <main className={styles.root}>
      <Home />
    </main>
  )
}
