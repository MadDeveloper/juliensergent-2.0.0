export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `<Typography.PageTitle>
  Page title
</Typography.PageTitle>
<Typography.Title>Title</Typography.Title>
<Typography.Subtitle>
  Subtitle
</Typography.Subtitle>
<Typography.Paragraph>
  <Typography.Text>Text</Typography.Text>
</Typography.Paragraph>`,
  },
  {
    name: "Typography.js",
    language: "jsx",
    code: `import { PageTitle } from "./PageTitle"
import { Paragraph } from "./Paragraph"
import { Subtitle } from "./Subtitle"
import { Text } from "./Text"
import { Title } from "./Title"

export const Typography = { PageTitle, Title, Subtitle, Paragraph, Text }
`,
  },
  {
    name: "PageTitle.js",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./PageTitle.module.css"

export function PageTitle({ className = "", children }) {
  return <h1 className={cs(styles.root, className)}>{children}</h1>
}

PageTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
`,
    language: "jsx",
  },
  {
    name: "PageTitle.module.css",
    code: `.root {
  font-weight: 900;
  font-size: var(--pagetitle-font-size);
  line-height: 1;
  color: var(--text-color-normal);
  margin: 0 0 40px;
}
`,
    language: "css",
  },
  {
    name: "Title.js",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Title.module.css"

export function Title({ heading = false, className = "", children }) {
  return (
    <h1 className={cs(styles.root, className, { [styles.heading]: heading })}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}
`,
    language: "jsx",
  },
  {
    name: "Title.module.css",
    code: `.root {
  font-weight: 900;
  font-size: var(--title-font-size);
  line-height: 1.125;
  color: var(--text-color-normal);
  margin-top: 40px;
  margin-bottom: 30px;
}

.root.heading {
  margin-top: 0;
}
`,
    language: "css",
  },
  {
    name: "Subtitle.js",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Subtitle.module.css"

export function Subtitle({ heading = false, className = "", children }) {
  return (
    <h2 className={cs(styles.root, className, { [styles.heading]: heading })}>
      {children}
    </h2>
  )
}

Subtitle.propTypes = {
  heading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
}
`,
    language: "jsx",
  },
  {
    name: "Subtitle.module.css",
    code: `.root {
  display: block;
  font-weight: 900;
  font-size: var(--subtitle-font-size);
  line-height: 1.25;
  color: var(--text-color-normal);
  margin-top: 30px;
  margin-bottom: 20px;
}

.root.heading {
  margin-top: 0;
}
`,
    language: "css",
  },
  {
    name: "Text.js",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Text.module.css"

export function Text({
  children,
  bold = false,
  small = false,
  secondary = false,
  className = ""
}) {
  return (
    <span
      className={cs(styles.root, className, {
        [styles.bold]: bold,
        [styles.secondary]: secondary,
        [styles.small]: small,
      })}
    >
      {children}
    </span>
  )
}

Text.propTypes = {
  children: PropTypes.any,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  secondary: PropTypes.bool,
  className: PropTypes.string,
}
`,
    language: "jsx",
  },
  {
    name: "Text.module.css",
    code: `.root {
  font-family: inherit;
  font-weight: normal;
  font-size: var(--text-font-size);
  line-height: 1.5;
  color: var(--text-color-normal);
}

.root.bold {
  font-weight: 700;
}

.root.small {
  font-size: var(--text-font-size-small);
}

.root.secondary {
  color: var(--text-color-secondary);
}
`,
    language: "css",
  },
]
