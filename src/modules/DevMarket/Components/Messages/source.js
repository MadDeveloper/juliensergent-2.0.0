export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `import {ReactComponent as RefreshIcon} from "assets/icons/refresh.svg"

<Message>
  A default message with no style, but stylisable as you want.
</Message>
<InfoMessage>
  A success message when something happened successfully.
</InfoMessage>
<SuccessMessage>
A success message when something happened successfully
</SuccessMessage>
<ErrorMessage>
  An error message when something went wrong.
</ErrorMessage>
<ErrorMessage action={<RefreshIcon />}>
  Something went wrong while loading data, please retry.
</ErrorMessage>`,
  },
  {
    name: "Message.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Message.module.css"

export function Message({ action, className, children }) {
  return (
    <div className={cs(styles.root, className)}>
      <div className={styles.content}>{children}</div>
      {React.isValidElement(action) && (
        <div className={styles.actionIconContainer}>{action}</div>
      )}
    </div>
  )
}

Message.propTypes = {
  action: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ]),
  onTriggerAction: PropTypes.func,
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

.actionIconContainer {
  width: 20px;
  height: 20px;
  margin-left: 18px;
}

.actionIconContainer svg {
  width: 100%;
  height: 100%;
  fill: #aaabac;
  transition: fill 0.3s;
}

.actionIconContainer:hover {
  cursor: pointer;
}

.actionIconContainer:hover svg {
  fill: #273238;
}
`,
  },
  {
    name: "SuccessMessage.js",
    language: "jsx",
    code: `import cs from "classnames"
import React from "react"
import { Message } from ".."
import { Typography } from "../../Typography"
import styles from "./SuccessMessage.module.css"

export function SuccessMessage({ className, children, ...props }) {
  return (
    <Message className={cs(styles.root, className)} {...props}>
      <Typography.Text className={styles.label}>{children}</Typography.Text>
    </Message>
  )
}

SuccessMessage.propTypes = Message.propTypes
`,
  },
  {
    name: "SuccessMessage.module.css",
    language: "css",
    code: `.root {
  background-color: #aaffeb;
}

.label {
  color: #009e79;
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

export function InfoMessage({ className, children, ...props }) {
  return (
    <Message className={cs(styles.root, className)} {...props}>
      <span className={styles.label}>{children}</span>
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

    export function ErrorMessage({ className, children, ...props }) {
      return (
        <Message className={cs(styles.root, className)} {...props}>
          <span className={styles.label}>{children}</span>
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
