export const files = [
  {
    name: "Input.js",
    language: "js",
    code: `import cs from "classnames"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./Input.module.css"

export function Input({
  name = "",
  label = "",
  type = "text",
  value = "",
  textarea = false,
  rows = 5,
  cols = 10,
  onChange,
  currentValue,
  ...props
}) {
  const [focused, setFocused] = useState(false)

  function handleChange(event) {
    onChange(event.target.value)
  }

  function handleFocus(event) {
    event.target.select()
    setFocused(true)
  }

  function handleBlur() {
    setFocused(false)
  }

  const active = (value || "").length > 0 || Number.isFinite(value) || focused

  return (
    <div className={styles.root}>
      <label
        className={cs(styles.label, {
          [styles.active]: active,
          [styles.focus]: focused,
        })}
        htmlFor={name}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          rows={rows}
          cols={cols}
          className={cs(styles.input, styles.textarea)}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          className={styles.input}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      )}
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textarea: PropTypes.bool,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}
`,
  },
  {
    name: "Input.module.css",
    code: `.root {
  display: inline-block;
  position: relative;
  width: 100%;
  font-size: 0.85rem;
  box-sizing: border-box;
}

.label {
  user-select: none;
  position: absolute;
  top: 15px;
  left: 14px;
  font-size: inherit;
  color: hsl(0, 0%, 45%);
  background: #fff;
  transition-property: top, font-size;
  transition-duration: 0.2s;
  cursor: text;
}

.label.active {
  top: 7px;
  font-size: 11px;
}

.label.focus {
  color: var(--primary-color);
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  font-family: inherit;
  color: var(--text-color-normal);
  width: 100%;
  box-sizing: border-box;
  padding: 17px 12px 4px 12px;
  border-radius: var(--default-border-radius);
  border: 2px solid hsl(0, 0%, 90%);
  font-size: inherit;
  background-color: #fff;
  transition: border-color 0.2s;
}

/* Change Autocomplete styles in Webkit */
.input:-webkit-autofill,
.input:-webkit-autofill:hover,
.input:-webkit-autofill:focus {
  -webkit-text-fill-color: var(--text-color-normal);
  background: #fff;
  box-shadow: 0 0 0px 1000px #fff inset;
}

.input.textarea {
  resize: none;
}

.input:focus {
  border-color: var(--primary-color);
}
`,
    language: "css",
  },
]
