import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { Typography } from "../../components/Typography"
import { BackToComponents } from "./BackToComponents"
import { Buttons } from "./Components/Buttons"
import { Inputs } from "./Components/Inputs"
import Home from "./Home"

export function DevMarket() {
  const location = useLocation()

  return (
    <Layout.MainContent>
      <Typography.PageTitle>Developer market</Typography.PageTitle>
      {location.pathname !== "/devmarket" && <BackToComponents />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="inputs" element={<Inputs />} />
      </Routes>
    </Layout.MainContent>
  )
}
