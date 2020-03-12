import React, { useLayoutEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { config } from "./config"
import { useThemeObserver } from "./lib/theme"
import { Blog } from "./modules/Blog"
import { Contact } from "./modules/Contact"
import { Home } from "./modules/Home"
import { Projects } from "./modules/Projects"
import { Resume } from "./modules/Resume"

export function App() {
  const location = useLocation()
  const showHeader = location.pathname !== config.routes.home
  const showFooter = showHeader

  useThemeObserver()

  useLayoutEffect(() => {
    console.log(window.innerWidth, window.innerHeight)
    console.log(document.body.offsetWidth, document.body.offsetHeight)
  }, [])

  return (
    <main className={styles.root}>
      {showHeader && (
        <Layout.Main>
          <Layout.Content>
            <Header />
          </Layout.Content>
        </Layout.Main>
      )}

      <Switch>
        <Route exact path={config.routes.home}>
          <Home />
        </Route>
        <Route path={config.routes.blog}>
          <Blog />
        </Route>
        <Route path={config.routes.projects}>
          <Projects />
        </Route>
        <Route path={config.routes.resume}>
          <Resume />
        </Route>
        <Route path={config.routes.contact}>
          <Contact />
        </Route>
      </Switch>

      {showFooter && (
        <Layout.Main>
          <Layout.Content>
            <Footer />
          </Layout.Content>
        </Layout.Main>
      )}
    </main>
  )
}
