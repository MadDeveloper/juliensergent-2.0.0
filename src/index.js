import "prismjs"
import "prismjs/components/prism-jsx"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import "./index.css"
import { initializeAnalytics } from "./lib/analytics"
import * as serviceWorker from "./serviceWorker"
import { StoreProvider } from "./store"

initializeAnalytics()

ReactDOM.render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
