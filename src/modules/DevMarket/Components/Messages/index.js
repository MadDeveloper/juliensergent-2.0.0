import React, { useState } from "react"
import { Message } from "../../../../components/Message"
import { ErrorMessage } from "../../../../components/Message/ErrorMessage"
import { InfoMessage } from "../../../../components/Message/InfoMessage"
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
            <InfoMessage>
              An information message, to inform about something.
            </InfoMessage>
          </div>
          <div className={styles.message}>
            <ErrorMessage>
              An error message when something went wrong.
            </ErrorMessage>
          </div>
        </div>
      </Live>
      <Actions onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
      <MoreComing>I will add more button elements with time.</MoreComing>
    </div>
  )
}
