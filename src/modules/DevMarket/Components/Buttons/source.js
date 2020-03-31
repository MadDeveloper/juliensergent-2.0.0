export const files = [
  {
    name: "example.js",
    language: "js",
    code: `<Button>Button</Button>
<Button compact>Compact</Button>
<Button secondary>Secondary</Button>`,
  },
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
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  padding: 9px 18px;
  color: #6b1fff;
  outline: none;
  border: none;
  background-color: rgb(238, 233, 255);
  border-radius: 4px;
  transition-property: border-color, background-color, color, transform;
  transition-duration: 0.2s;
}

.root:hover {
  color: #4d05e8;
}

.root:active {
  transform: scale(0.95);
}

.root.secondary {
  background-color: transparent;
  color: #273238;
}

.root.compact {
  padding: 5px 10px;
}
`,
    language: "css",
  },
]
