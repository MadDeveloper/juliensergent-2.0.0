import cs from "classnames"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styles from "./Input.module.css"

export function Input({
  name = "",
  label = "",
  type = "text",
  value = "",
  textarea = false,
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
          rows="5"
          cols="10"
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
  onChange: PropTypes.func.isRequired,
}
