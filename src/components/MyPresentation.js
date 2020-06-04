import PropTypes from "prop-types"
import React from "react"
import { calculateAge } from "../lib/time"
import { Typography } from "./Typography"

export function MyPresentation({ detailled = false }) {
  return (
    <div>
      <Typography.Paragraph heading>
        {detailled ? (
          <Typography.Text>
            I'm <Typography.Text bold>Julien</Typography.Text>, I'm{" "}
            <Typography.Text>
              {calculateAge(new Date("1995-09-18"))}
            </Typography.Text>{" "}
            and I'm a <Typography.Text bold>software engineer</Typography.Text>,
            based in France.
          </Typography.Text>
        ) : (
          <Typography.Text>
            I'm a <Typography.Text bold>software engineer</Typography.Text>,
            based in France.
          </Typography.Text>
        )}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          I used for the first time a computer when I was 4, and I started to
          code when I was 11. I always had a strong taste for well-written code,
          designing systems, pay attention to details, and make each view an
          incredible experience.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          True passionate, spending my nights coding has been my daily life for
          a long time.
        </Typography.Text>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text>
          Graduated in 2018 of a Master's degree Project Leader in Software
          Engineering, since then I walk through experiences and technologies
          across the professional world of IT.
        </Typography.Text>
      </Typography.Paragraph>
    </div>
  )
}

MyPresentation.propTypes = {
  detailled: PropTypes.bool,
}
