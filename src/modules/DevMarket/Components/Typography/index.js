import React, { useState } from "react"
import { Typography as UITypography } from "../../../../components/Typography"
import { Actions } from "../shared/Actions"
import { Description } from "../shared/Description"
import { Live } from "../shared/Live"
import { MoreComing } from "../shared/MoreComing"
import { Name } from "../shared/Name"
import { Source } from "../shared/Source"
import { files } from "./source"
import styles from "./Typography.module.css"

export function Typography() {
  const [showSource, setShowSource] = useState(false)

  return (
    <div>
      <Name>Typography</Name>
      <Description>
        Typography is the foundation of everything. Created a long time ago,
        typography has an important role. The selection of your typographies for
        you app is really important.
      </Description>
      <Live>
        <div className={styles.rootLive}>
          <UITypography.PageTitle>Page title</UITypography.PageTitle>
          <UITypography.Title>Title</UITypography.Title>
          <UITypography.Subtitle>Subtitle</UITypography.Subtitle>
          <UITypography.Paragraph>
            <UITypography.Text>Text</UITypography.Text>
          </UITypography.Paragraph>
        </div>
      </Live>
      <Actions files={files} onToggleCode={setShowSource} />
      <Source files={files} hidden={!showSource} />
      <MoreComing>I will add more button elements with time.</MoreComing>
    </div>
  )
}
