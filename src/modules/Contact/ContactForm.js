import React, { useState } from "react"
import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormBlock } from "../../components/Form/FormBlock"
import { Message } from "../../components/Message"
import { encoreFormData } from "../../lib/form"
import styles from "./Contact.module.css"

export function ContactForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  function submit(event) {
    event.preventDefault()

    setSuccess(false)
    setError(null)

    if (email.length > 0 && message.length > 0) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoreFormData({ "form-name": "contact", email, message }),
      })
        .then(() => {
          setEmail("")
          setMessage("")
        })
        .catch((error) => alert(error))
        .finally(() => setSuccess(true))
    } else {
      setError("Please provide your email address and a valid message.")
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={submit}>
        <FormBlock>
          <Form.Input
            name="email"
            type="email"
            label="Email address"
            value={email}
            onChange={setEmail}
          />
        </FormBlock>
        <FormBlock>
          <Form.Input
            name="message"
            label="Message"
            value={message}
            textarea
            rows={5}
            onChange={setMessage}
          />
        </FormBlock>
        <Button onClick={submit}>Send your message</Button>
      </form>
      {error && (
        <Message error className={styles.message}>
          {error}
        </Message>
      )}
      {success && (
        <Message success className={styles.message}>
          Message sent, thank you! I will try to give you a response as soon as
          possible.
        </Message>
      )}
    </div>
  )
}
