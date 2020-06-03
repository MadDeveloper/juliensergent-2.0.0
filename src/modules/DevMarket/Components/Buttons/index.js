import React, { useState } from "react"
import { Button as UIButton } from "../../../../components/Button"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { MoreComing } from "../shared/MoreComing"
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
        I think buttons are really important. A design without really great
        buttons, is not a good design. Let you some time to think to yours
        buttons design.
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
      <Actions files={files} onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
      <MoreComing>I will add more button elements with time.</MoreComing>
    </div>
  )
}
