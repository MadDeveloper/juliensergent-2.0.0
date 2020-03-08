import React, { useState } from "react"
import { Button } from "../../components/Button"
import { Form } from "../../components/Form"

export function ContactForm() {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  function submit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={submit}>
      <Form.Input
        name="email"
        label="Email address"
        value={email}
        onChange={setEmail}
      />
      <Form.Input
        name="message"
        label="Message"
        value={message}
        textarea
        onChange={setMessage}
      />
      <Button onClick={submit}>Send your message</Button>
    </form>
  )
}
