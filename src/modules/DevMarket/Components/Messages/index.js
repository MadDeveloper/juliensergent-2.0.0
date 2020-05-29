import React, { useState } from "react"
import { ReactComponent as RefreshIcon } from "../../../../assets//icons/refresh.svg"
import { Message } from "../../../../components/Message"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { MoreComing } from "../shared/MoreComing"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import styles from "./Messages.module.css"
import { files } from "./source"

export function Messages() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Messages</Name>
      <Description>
        Having a feedback message after an action leads to a good UX.
      </Description>
      <Live>
        <div className={styles.rootLive}>
          <div className={styles.message}>
            <Message>
              A default message with no style, but stylisable as you want.
            </Message>
          </div>
          <div className={styles.message}>
            <Message info>
              An information message, to inform about something.
            </Message>
          </div>
          <div className={styles.message}>
            <Message success>
              A success message when something happened successfully.
            </Message>
          </div>
          <div className={styles.message}>
            <Message warning>
              A warning message to draw attention and warn.
            </Message>
          </div>
          <div className={styles.message}>
            <Message error>An error message when something went wrong.</Message>
          </div>
          <div className={styles.message}>
            <Message error action={<RefreshIcon />}>
              Something went wrong while loading data, please retry.
            </Message>
          </div>
        </div>
      </Live>
      <Actions files={files} onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
      <MoreComing>I will add more button elements with time.</MoreComing>
    </div>
  )
}
