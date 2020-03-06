import React from "react"
import { Typography } from "./components/Typography"
import { useThemeObserver } from "./lib/theme"

export function App() {
  useThemeObserver()

  return (
    <main
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <section style={{ width: 400, maxWidth: "100%", margin: "auto" }}>
        <Typography.Title>Julien Sergent</Typography.Title>
        <Typography.Paragraph>
          <Typography.Text>
            Hi, I am Julien Sergent, also known as maddeveloper.
            <br />
            I am a JavaScript developer, for 10 years now. Since I started to
            develop, I have always been interested by the code design, purity,
            well-written code, and new ways to solve abstract problems.
            <br />I will try to transmit you this, and let you enter in my
            world, my vision behind lines code.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>
            Actually, this site is in construction, please come later in order
            to see it finished.
          </Typography.Text>
        </Typography.Paragraph>
        <Typography.Paragraph>
          <Typography.Text>Thank you.</Typography.Text>
        </Typography.Paragraph>
      </section>
    </main>
  )
}
