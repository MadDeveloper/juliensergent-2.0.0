import PropTypes from "prop-types"
import React from "react"
import { ReactComponent as CalendarIcon } from "../../../assets/icons/calendar.svg"
import { ReactComponent as LinkIcon } from "../../../assets/icons/link.svg"
import { ReactComponent as PinIcon } from "../../../assets/icons/pin.svg"
import { ExternalLink } from "../../../components/ExternalLink"
import { Typography } from "../../../components/Typography"
import styles from "./ExtraInfos.module.css"

export function ExtraInfos({ date = "", location = "", link = "" }) {
  return (
    <div className={styles.root}>
      {date.length > 0 && (
        <div className={styles.item}>
          <CalendarIcon title={date} className={styles.icon} />
          <Typography.Text secondary>{date}</Typography.Text>
        </div>
      )}
      {location.length > 0 && (
        <div className={styles.item}>
          <PinIcon title={location} className={styles.icon} />
          <Typography.Text secondary>{location}</Typography.Text>
        </div>
      )}
      {link.length > 0 && (
        <div className={styles.item}>
          <ExternalLink to={link} className={styles.companyUrl}>
            <LinkIcon title={link} className={styles.icon} />
            {link}
          </ExternalLink>
        </div>
      )}
    </div>
  )
}

ExtraInfos.propTypes = {
  date: PropTypes.string,
  location: PropTypes.string,
  link: PropTypes.string
}
