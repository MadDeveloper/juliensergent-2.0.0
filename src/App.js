import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import { Header } from "./components/Header"
import { config } from "./config"
import { useThemeObserver } from "./lib/theme"
import { Contact } from "./modules/Contact"
import { Home } from "./modules/Home"
import { Resume } from "./modules/Resume"

export function App() {
  const location = useLocation()
  const showHeader = location.pathname !== config.routes.home

  useThemeObserver()

  return (
    <main className={styles.root}>
      {showHeader && <Header />}
      <Switch>
        <Route exact path={config.routes.home}>
          <Home />
        </Route>
        <Route path={config.routes.resume}>
          <Resume />
        </Route>
        <Route path={config.routes.contact}>
          <Contact />
        </Route>
      </Switch>
    </main>
  )
}
