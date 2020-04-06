import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { Typography as UITypography } from "../../components/Typography"
import { BackToComponents } from "./BackToComponents"
import { Buttons } from "./Components/Buttons"
import { Inputs } from "./Components/Inputs"
import { Typography } from "./Components/Typography"
import Home from "./Home"

export function DevMarket() {
  const location = useLocation()

  return (
    <Layout.MainContent>
      <UITypography.PageTitle>Developer market</UITypography.PageTitle>
      {location.pathname !== "/devmarket" && <BackToComponents />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="inputs" element={<Inputs />} />
        <Route path="typography" element={<Typography />} />
        <Route path="links" element={<div />} />
        <Route path="cards" element={<div />} />
        <Route path="messages" element={<div />} />
      </Routes>
    </Layout.MainContent>
  )
}
