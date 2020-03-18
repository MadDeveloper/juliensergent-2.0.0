import React, { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { config } from "./config"
import { isHomeAnimationPlayed, setHomeAnimationAsPlayed } from "./lib/app"
import { useThemeObserver } from "./lib/theme"
import { Blog } from "./modules/Blog"
import { Contact } from "./modules/Contact"
import { Home } from "./modules/Home"
import { NotFound } from "./modules/NotFound"
import { Projects } from "./modules/Projects"
import { Resume } from "./modules/Resume"

export function App() {
  const location = useLocation()

  useThemeObserver()

  useEffect(() => {
    if (location.pathname !== config.routes.home && !isHomeAnimationPlayed()) {
      setHomeAnimationAsPlayed()
    }
  }, [location.pathname])

  return (
    <main className={styles.root}>
      <Layout.Main>
        <Layout.Content>
          <Header />
        </Layout.Content>
      </Layout.Main>

      <Routes>
        <Route path={config.routes.home} element={<Home />} />
        <Route path={config.routes.blog} element={<Blog />} />
        <Route path={config.routes.projects} element={<Projects />} />
        <Route path={config.routes.resume} element={<Resume />} />
        <Route path={config.routes.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Layout.Main>
        <Layout.Content>
          <Footer />
        </Layout.Content>
      </Layout.Main>
    </main>
  )
}
