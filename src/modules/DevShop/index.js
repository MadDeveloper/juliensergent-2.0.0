import React from "react"
import { Layout } from "../../components/Layout"
import { InfoMessage } from "../../components/Message/InfoMessage"
import { Typography } from "../../components/Typography"
import { Button } from "./Components/Button"
import { Input } from "./Components/Input"
import styles from "./DevShop.module.css"

export function DevShop() {
  return (
    <Layout.MainContent>
      <Typography.PageTitle>Developers shop</Typography.PageTitle>
      <InfoMessage>Section in construction.</InfoMessage>
      <Typography.Paragraph>
        <Typography.Text>
          You will be able to found a list of open source components I will
          share with you, and unlicensed.
        </Typography.Text>
      </Typography.Paragraph>
      <div className={styles.component}>
        <Button />
      </div>
      <div className={styles.component}>
        <Input />
      </div>
    </Layout.MainContent>
  )
}
