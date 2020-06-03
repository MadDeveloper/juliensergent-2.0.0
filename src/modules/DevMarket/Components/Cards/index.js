import React, { useState } from "react"
import { ReactComponent as CardsIcon } from "../../../../assets/icons/cards.svg"
import { Card } from "../../../../components/Card"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import styles from "./Cards.module.css"
import { files } from "./source"

export function Cards() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Cards</Name>
      <Description>
        Now used in many ways and on almost every website. With buttons and
        inputs, cards are the first thing I look before choosing a UI framework.
        That's amazing how a well designed card can leads to a different feeling
        of the data showed.
      </Description>
      <Live>
        <div className={styles.liveRootContext}>
          <Card.Layout style={{ width: 350 }}>
            <Card.Content>
              <Card.Icon icon={CardsIcon} />
              <Card.Title>Cards</Card.Title>
              <Card.Description>
                Now used in many ways and almost every website.
              </Card.Description>
            </Card.Content>
          </Card.Layout>
        </div>
      </Live>
      <Actions files={files} onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
    </div>
  )
}
