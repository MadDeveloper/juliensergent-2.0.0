import React, { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { useTrackNavigationAnalytics } from "./lib/analytics"
import { isHomeAnimationPlayed, setHomeAnimationAsPlayed } from "./lib/app"
import { useThemeObserver } from "./lib/theme"
import { About } from "./modules/About"
import { Blog } from "./modules/Blog"
import { Contact } from "./modules/Contact"
import { DevMarket } from "./modules/DevMarket"
import { Home } from "./modules/Home"
import { NotFound } from "./modules/NotFound"
import { Resume } from "./modules/Resume"

export function App() {
  const location = useLocation()

  useThemeObserver()
  useTrackNavigationAnalytics()

  useEffect(() => {
    if (location.pathname !== "/home" && !isHomeAnimationPlayed()) {
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
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/devmarket/*" element={<DevMarket />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
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
