import React from "react"
import { Route, Switch } from "react-router-dom"
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
  useThemeObserver()

  return (
    <main className={styles.root}>
      <Layout.Main>
        <Layout.Content>
          <Header />
        </Layout.Content>
      </Layout.Main>

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

      <Layout.Main>
        <Layout.Content>
          <Footer />
        </Layout.Content>
      </Layout.Main>
    </main>
  )
}
