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
      <Description>Now used in many ways and almost every website.</Description>
      <Live>
        <Card
          header={<CardsIcon className={styles.icon} />}
          title="Cards"
          tit
          description="Now used in many ways and almost every website."
          style={{
            width: 350,
            backgroundColor: "#eae8e8ee",
            backgroundImage:
              "linear-gradient(-225deg, #f1f1f1 0%, #eae8e8ee 100%)",
          }}
        ></Card>
      </Live>
      <Actions onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
    </div>
  )
}
