export const files = [
  {
    name: "story.js",
    language: "jsx",
    code: `<Input
  type="text"
  name="author"
  label="Author"
  value={author}
  onChange={setAuthor}
/>
<Input
  name="bio"
  label="Bio"
  textarea
  value={bio}
  onChange={setBio}
/>`,
  },
  {
    name: "Input.js",
    language: "jsx",
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
  top: 17px;
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
  color: #6b1fff;
}

.input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: inherit;
  font-family: inherit;
  color: #273238;
  width: 100%;
  min-height: 47px;
  box-sizing: border-box;
  padding: 17px 12px 4px 12px;
  border-radius: 4px;
  border: 2px solid hsl(0, 0%, 90%);
  font-size: inherit;
  background-color: #fff;
  transition: border-color 0.2s;
}

/* Change Autocomplete styles in Webkit */
.input:-webkit-autofill,
.input:-webkit-autofill:hover,
.input:-webkit-autofill:focus {
  -webkit-text-fill-color: #273238;
  background: #fff;
  box-shadow: 0 0 0px 1000px #fff inset;
}

.input.textarea {
  resize: none;
}

.input:focus {
  border-color: #6b1fff;
}
`,
    language: "css",
  },
]
