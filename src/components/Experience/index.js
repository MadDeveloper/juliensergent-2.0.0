import PropTypes from "prop-types"
import React from "react"
import { Button } from "../Button"
import { Typography } from "../Typography"
import styles from "./Experience.module.css"

export function Experience({
  title = "",
  company = "",
  companyLink = "",
  extrasInfo = null,
  description = null,
}) {
  function openCompanyWebsite() {
    if (companyLink.length > 0) {
      window.open(companyLink, "_blank")
    }
  }

  return (
    <article>
      <Typography.Subtitle className={styles.title}>
        {title}
      </Typography.Subtitle>

      {company.length > 0 && (
        <div>
          <Button onClick={openCompanyWebsite} compact>
            {company}
          </Button>
        </div>
      )}

      {extrasInfo}

      {description && (
        <Typography.Paragraph>{description}</Typography.Paragraph>
      )}
    </article>
  )
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  companyLink: PropTypes.string,
  extrasInfo: PropTypes.element,
  description: PropTypes.element,
}
