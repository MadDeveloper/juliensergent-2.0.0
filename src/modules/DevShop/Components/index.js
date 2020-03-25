import React from "react"
import { Route, Routes } from "react-router-dom"
import { Buttons } from "./Buttons"
import { Inputs } from "./Inputs"
import { List } from "./List"

export function Components() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="buttons" element={<Buttons />} />
      <Route Path="inputs" element={<Inputs />} />
    </Routes>
  )
}
