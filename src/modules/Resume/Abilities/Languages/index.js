import React from "react"
import { ReactComponent as FranceFlagIcon } from "../../../../assets/icons/flags/france.svg"
import { ReactComponent as UnitedKingdomFlagIcon } from "../../../../assets/icons/flags/united-kingdom.svg"
import { Typography } from "../../../../components/Typography"
import styles from "./Languages.module.css"

export function Languages() {
  return (
    <article>
      <Typography.Subtitle>Languages</Typography.Subtitle>
      <div className={styles.languages}>
        <div className={styles.lang}>
          <FranceFlagIcon className={styles.flag} />
          <div>
            <div>
              <Typography.Text bold>French</Typography.Text>
            </div>
            <div>
              <Typography.Text secondary>Native language.</Typography.Text>
            </div>
          </div>
        </div>
        <div className={styles.lang}>
          <UnitedKingdomFlagIcon className={styles.flag} />
          <div>
            <div>
              <Typography.Text bold>English</Typography.Text>
            </div>
            <div>
              <Typography.Text secondary>
                Daily usage, professional experiences.
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
