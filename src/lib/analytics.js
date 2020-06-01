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

export function useTrackNavigationAnalytics() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.ga("send", "pageview", location.pathname)
  }, [location.pathname])
}
