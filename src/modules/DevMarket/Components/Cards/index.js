import React, { useState } from "react"
import { ReactComponent as CardsIcon } from "../../../../assets/icons/cards.svg"
import { Card } from "../../../../components/Card"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import { files } from "./source"

export function Cards() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Cards</Name>
      <Description>Now used in many ways and almost every website.</Description>
      <Live>
        <Card.Layout style={{ width: 350 }}>
          <Card.Content>
            <Card.Icon icon={CardsIcon} />
            <Card.Title>Cards</Card.Title>
            <Card.Description>
              Now used in many ways and almost every website.
            </Card.Description>
          </Card.Content>
        </Card.Layout>
      </Live>
      <Actions onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
    </div>
  )
}