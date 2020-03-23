import React, { useState } from "react"
import { Button } from "../../../../components/Button"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import styles from "./Buttons.module.css"

export function Buttons() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Button</Name>
      <Description>
        For me, buttons are very important and a part of good design.
      </Description>
      <Live>
        <Button className={styles.button}>Button</Button>
        <Button className={styles.button} compact>
          Compact
        </Button>
        <Button className={styles.button} secondary>
          Secondary
        </Button>
      </Live>
      <Actions onToggleCode={setShowSource} />
      <Source hidden={!showSource} />
    </div>
  )
}
