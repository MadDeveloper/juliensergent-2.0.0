import React, { Suspense, lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Layout } from "./components/Layout"
import { useTrackNavigationAnalytics } from "./lib/analytics"
import { isHomeAnimationPlayed, setHomeAnimationAsPlayed } from "./lib/app"
import { useThemeObserver } from "./lib/theme"

const About = lazy(() => import("./modules/About"))
const Blog = lazy(() => import("./modules/Blog"))
const Contact = lazy(() => import("./modules/Contact"))
const DevMarket = lazy(() => import("./modules/DevMarket"))
const Home = lazy(() => import("./modules/Home"))
const NotFound = lazy(() => import("./modules/NotFound"))
const Resume = lazy(() => import("./modules/Resume"))

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
        <Route
          path="/"
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <Suspense>
              <Blog />
            </Suspense>
          }
        />
        <Route
          path="/devmarket/*"
          element={
            <Suspense>
              <DevMarket />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>

      <Layout.Main>
        <Layout.Content>
          <Footer />
        </Layout.Content>
      </Layout.Main>
    </main>
  )
}
