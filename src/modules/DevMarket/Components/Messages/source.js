export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `<Message>
  A default message with no style, but stylisable as you want.
</Message>
<InfoMessage>
  A success message when something happened successfully.
</InfoMessage>
<ErrorMessage>
  An error message when something went wrong.
</ErrorMessage>`,
  },
  {
    name: "Message.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Message.module.css"

export function Message({
  className,
  children,
}) {
  return (
    <div className={cs(styles.root, className)}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

Message.propTypes = {
  icon: PropTypes.string,
  actionIcon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ])
}
`,
  },
  {
    name: "Message.module.css",
    language: "css",
    code: `.root {
  display: flex;
  width: 100%;
  min-height: 42px;
  align-items: center;
  justify-content: space-between;
  padding: 9px 18px;
  font-size: 16px;
  color: #273238;
  background-color: #f4f4f4;
  border-radius: 4px;
  box-sizing: border-box;
}

.content {
  display: flex;
  align-items: center;
}

.content .icon {
  margin-right: 10px;
}

.action {
  margin-right: -7px;
}
`,
  },
  {
    name: "InfoMessage.js",
    language: "jsx",
    code: `import cs from "classnames"
import React from "react"
import { Message } from ".."
import { Typography } from "../../Typography"
import styles from "./InfoMessage.module.css"

export function InfoMessage({ className, ...props }) {
  return (
    <Message
      {...props}
      className={cs(styles.root, className)}
    >
      <span className={styles.label}>
        {props.children}
      </span>
    </Message>
  )
}

InfoMessage.propTypes = Message.propTypes
`,
  },
  {
    name: "InfoMessage.module.css",
    language: "css",
    code: `.root {
  background-color: #edf1ff;
}

.label {
  color: #1f78d1;
}
`,
  },
  {
    name: "ErrorMessage.js",
    language: "jsx",
    code: `import cs from "classnames"
    import React from "react"
    import { Message } from ".."
    import { Typography } from "../../Typography"
    import styles from "./ErrorMessage.module.css"

    export function ErrorMessage({ className, ...props }) {
      return (
        <Message
          {...props}
          className={cs(styles.root, className)}
        >
          <span className={styles.label}>
            {props.children}
          </span>
        </Message>
      )
    }

    ErrorMessage.propTypes = Message.propTypes
`,
  },
  {
    name: "ErrorMessage.module.css",
    language: "css",
    code: `.root {
  background-color: #fbebeb;
}

.label {
  color: #f64747;
}
`,
  },
]
