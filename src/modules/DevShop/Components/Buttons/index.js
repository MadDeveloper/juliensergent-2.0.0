import React, { useState } from "react"
import { Button as UIButton } from "../../../../components/Button"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import styles from "./Buttons.module.css"
import { files } from "./source"

export function Buttons() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Buttons</Name>
      <Description>
        For me, buttons are very important and a part of good design.
      </Description>
      <Live>
        <UIButton className={styles.button}>Button</UIButton>
        <UIButton className={styles.button} compact>
          Compact
        </UIButton>
        <UIButton className={styles.button} secondary>
          Secondary
        </UIButton>
      </Live>
      <Actions onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
    </div>
  )
}
