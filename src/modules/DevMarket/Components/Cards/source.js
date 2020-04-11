export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `<Card
  header={<CardsIcon className={styles.icon} />}
  title="Cards"
  description="Now used in many ways and almost every website."
  style={{
    width: 350,
    backgroundColor: "#eae8e8ee",
    backgroundImage:
      "linear-gradient(-225deg, #f1f1f1 0%, #eae8e8ee 100%)",
  }}
></Card>`,
  },
  {
    name: "Card.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../Typography"
import styles from "./Card.module.css"

export function Card({
  header = null,
  headerClassName = "",
  title = "",
  titleClassName = "",
  description = "",
  descriptionClassName = "",
  className = "",
  ...props
}) {
  return (
    <div className={cs(styles.root, className)} {...props}>
      {header && (
        <div className={cs(styles.header, headerClassName)}>{header}</div>
      )}
      <div>
        {title && title.length > 0 && (
          <h2 className={cs(styles.title, titleClassName)}>
            {title}
          </h2>
        )}
        {description && description.length > 0 && (
          <span className={cs(styles.description, descriptionClassName)}>
            {description}
          </span>
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  header: PropTypes.any,
  headerClassName: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  description: PropTypes.string,
  descriptionClassName: PropTypes.string,
  className: PropTypes.string,
}
`,
  },
  {
    name: "Card.module.css",
    code: `.root {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 240px;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  box-sizing: border-box;
  transition: transform 0.3s cubic-bezier(0.16, 0.58, 0.59, 0.82);
}

.root:hover {
  transform: scale(0.98);
}

.root:active {
  transform: scale(0.96);
}

.header {
  width: 100px;
  height: 100px;
  max-width: 100px;
  max-height: 100px;
  align-self: center;
  margin: auto;
}

.header svg {
  width: 100%;
  height: 100%;
}

.title {
  margin: 0 0 5px 0;
}

.description {
  color: #aaabac;
}
`,
    language: "css",
  },
]
