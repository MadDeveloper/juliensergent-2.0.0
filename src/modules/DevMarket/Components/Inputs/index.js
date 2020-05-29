import React, { useState } from "react"
import { Form } from "../../../../components/Form"
import { FormBlock } from "../../../../components/Form/FormBlock"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { MoreComing } from "../shared/MoreComing"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import styles from "./Inputs.module.css"
import { files } from "./source"

export function Inputs() {
  const [showSource, setShowSource] = useState(false)
  const [author, setAuthor] = useState("")
  const [bio, setBio] = useState("")

  return (
    <div>
      <Name>Inputs</Name>
      <Description>
        Inputs are used almost an each website, and their UX and UI are often
        miserable.
      </Description>
      <Live>
        <div className={styles.rootLive}>
          <FormBlock>
            <Form.Input
              type="text"
              name="author"
              label="Author"
              value={author}
              onChange={setAuthor}
            />
          </FormBlock>
          <FormBlock>
            <Form.Input
              name="bio"
              label="Bio"
              textarea
              value={bio}
              // className={styles.input}
              onChange={setBio}
            />
          </FormBlock>
        </div>
      </Live>
      <Actions files={files} onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
      <MoreComing>I will add more input elements with time.</MoreComing>
    </div>
  )
}
