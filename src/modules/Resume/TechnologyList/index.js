import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../../components/Typography"
import { TechnologyIcon } from "./TechnologyIcon"
import styles from "./TechnologyList.module.css"

export function TechnologyList({
  list = [],
  inlined = false,
  small = false,
  compact = false,
  className = "",
}) {
  return (
    <div
      className={cs(styles.root, className, {
        [styles.compact]: compact,
        [styles.inlined]: inlined,
      })}
    >
      {list.map((technology) => (
        <div key={technology.name} className={styles.item}>
          <TechnologyIcon
            name={technology.name}
            path={technology.path}
            small={small}
          />
          {!inlined && (
            <div>
              <Typography.Paragraph heading>
                <Typography.Text bold>{technology.name}</Typography.Text>
              </Typography.Paragraph>
              {technology.content && (
                <Typography.Paragraph heading>
                  <Typography.Text secondary>
                    {technology.content}
                  </Typography.Text>
                </Typography.Paragraph>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

TechnologyList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      content: PropTypes.any,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  inlined: PropTypes.bool,
  small: PropTypes.bool,
  compact: PropTypes.bool,
  className: PropTypes.string,
}
