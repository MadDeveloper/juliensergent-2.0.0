import { useEffect } from "react"
import ReactGA from "react-ga"
import { useLocation } from "react-router"
import { config } from "../config"
import { isDevEnv } from "./app"

export function initializeAnalytics() {
  ReactGA.initialize(config.ga.trackingID, {
    testMode: isDevEnv(),
    debug: config.ga.debug,
  })
}

export function useAnalytics() {
  return ReactGA
}

export function useTrackNavigationAnalytics() {
  const location = useLocation()
  const analytics = useAnalytics()

  useEffect(() => {
    analytics.ga("send", "pageview", location.pathname)
  }, [analytics, location.pathname])
}
