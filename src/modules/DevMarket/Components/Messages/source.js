export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `<Message>
  A default message with no style, but stylisable as you want.
</Message>
<Message info>
  An information message, to inform about something.
</Message>
<Message success>
  A success message when something happened successfully.
</Message>
<Message error>An error message when something went wrong.</Message>
<Message error action={<RefreshIcon />}>
  Something went wrong while loading data, please retry.
</Message>
</div>`,
  },
  {
    name: "Message.js",
    language: "jsx",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Message.module.css"

export function Message({
  action,
  className,
  success = false,
  warning = false,
  error = false,
  info = false,
  children,
}) {
  return (
    <div
      className={cs(
        styles.root,
        {
          [styles.success]: success,
          [styles.warning]: warning,
          [styles.error]: error,
          [styles.info]: info,
        },
        className
      )}
    >
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
  success: PropTypes.bool,
  warning: PropTypes.bool,
  error: PropTypes.bool,
  info: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.bool,
  ]),
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

.root.success {
  background-color: #c3fff1;
}

.root.warning {
  background-color: #fff3c8;
}

.root.error {
  background-color: #fbebeb;
}

.root.info {
  background-color: ##edf1ff;
}

.content {
  display: flex;
  align-items: center;
  color: inherit;
}

.root.success .content {
  color: #009e79;
}

.root.warning .content {
  color: #bd9500;
}

.root.error .content {
  color: #f64747;
}

.root.info .content {
  color: #1f78d1;
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
]
