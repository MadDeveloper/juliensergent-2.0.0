import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { useThemeObserver } from "./lib/theme"
import { Home } from "./modules/Home"
import { Me } from "./modules/Me"

export function App() {
  const location = useLocation()
  const showHeader = location.pathname === "/me"

  useThemeObserver()

  return (
    <main className={styles.root}>
      {showHeader && <Header />}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/me">
          <Me />
        </Route>
      </Switch>
    </main>
  )
}
