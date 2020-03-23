import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import { Editor } from "../../../../../components/Editor"
import styles from "./Source.module.css"

export function Source({ hidden = false }) {
  return (
    <div className={cs(styles.root, { [styles.hidden]: hidden })}>
      <Editor
        files={[
          {
            name: "Button.js",
            language: "js",
            code: `import cs from "classnames"
import PropTypes from "prop-types"
import React from "react"
import styles from "./Button.module.css"

// You may need to define more props handled by a button.
export function Button({
  type = "button",
  className = "",
  secondary = false,
  compact = false,
  onClick,
  children,
}) {
  function handleClick(event) {
    if (typeof onClick === "function") {
      onClick(event)
    }
  }

  return (
    <button
      type={type}
      className={cs(styles.root, className, {
        [styles.secondary]: secondary,
        [styles.compact]: compact,
      })}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  secondary: PropTypes.bool,
  compact: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
}
`,
          },
          {
            name: "Button.module.css",
            code: `.root {
  font-family: "Roboto", sans-serif;
  font-size: var(--text-font-size);
  font-weight: 500;
  padding: var(--standard-padding-vertical) var(--standard-padding-horizontal);
  color: var(--button-color);
  outline: none;
  border: none;
  background-color: var(--button-background-color);
  border-radius: var(--default-border-radius);
  transition-property: border-color, background-color, color, transform;
  transition-duration: 0.2s;
}

.root:hover {
  color: var(--active-primary-color);
}

.root:active {
  transform: scale(0.95);
}

.root.secondary {
  background-color: transparent;
  color: var(--text-color-normal);
}

.root.compact {
  padding: 5px 10px;
}
`,
            language: "css",
          },
        ]}
      />
    </div>
  )
}

Source.propTypes = {
  hidden: PropTypes.bool,
}
