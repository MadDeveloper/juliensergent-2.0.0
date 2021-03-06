import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import { files } from "./source"

export function Links() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Links</Name>
      <Description>
        Basis of the navigation, a good UI/UX is vital. How nice to have nice
        links, I hover it, then click on it, just for watching animations!
      </Description>
      <Live>
        <Link to="#">Some link</Link>
      </Live>
      <Actions files={files} onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
    </div>
  )
}
