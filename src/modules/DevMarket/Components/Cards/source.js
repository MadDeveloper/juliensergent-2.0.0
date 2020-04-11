export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `<Card.Layout style={{ width: 350 }}>
  <Card.Content>
    <Card.Icon icon={CardsIcon} />
    <Card.Title>Cards</Card.Title>
    <Card.Description>
      Now used in many ways and almost every website.
    </Card.Description>
  </Card.Content>
</Card.Layout>`,
  },
  {
    name: "Card.js",
    language: "jsx",
    code: `import { Content } from "./Content"
import { Description } from "./Description"
import { Icon } from "./Icon"
import { Layout } from "./Layout"
import { Title } from "./Title"

export const Card = {
  Layout,
  Icon,
  Content,
  Title,
  Description,
}
`,
  },
  {
    name: "Layout.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Layout.module.css"

export function Layout({ className = "",  children, ...props }) {
  return (
    <div className={cs(styles.root, className)} {...props}>
      {children}
    </div>
  )
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
`,
  },
  {
    name: "Layout.module.css",
    code: `.root {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f1f1f1;
  transition: transform 0.3s cubic-bezier(0.16, 0.58, 0.59, 0.82);
}

.root:hover {
  transform: scale(0.98);
}

.root:active {
  transform: scale(0.96);
}
`,
    language: "css",
  },
  {
    name: "Icon.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Icon.module.css"

export function Icon({ icon: Icon, className = "" }) {
  return (
    <div className={styles.root}>
      <Icon className={cs(styles.icon, className)} />
    </div>
  )
}

Icon.propTypes = {
  icon: PropTypes.object,
  className: PropTypes.string,
}
`,
  },
  {
    name: "Icon.module.css",
    code: `.root {
  flex: 1;
  display: flex;
  align-self: center;
  margin: auto;
  padding: 20px 0;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 100px;
  height: 100px;
}
`,
    language: "css",
  },
  {
    name: "Content.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Content.module.css"

export function Content({ className = "", children }) {
  return <div className={cs(styles.root, className)}>{children}</div>
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}
`,
  },
  {
    name: "Content.module.css",
    code: `.root {
  padding: 20px;
}
`,
    language: "css",
  },
  {
    name: "Title.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Typography } from "../../Typography"
import styles from "./Title.module.css"

export function Title({ className = "", children }) {
  return <h2 className={cs(styles.root, className)}>{children}</h2>
}

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}
`,
  },
  {
    name: "Title.module.css",
    code: `.root {
  margin: 0 0 5px 0;
}
`,
    language: "css",
  },
  {
    name: "Description.js",
    language: "jsx",
    code: `import PropTypes from "prop-types"
import React from "react"
import styles from "./Description.module.css"

export function Description({ className = "", children }) {
  return <p className={cs(styles.root, className)}>{children}</p>
}

Description.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}
`,
  },
  {
    name: "Description.module.css",
    code: `.root {
  color: #aaabac;
}
`,
    language: "css",
  },
]
