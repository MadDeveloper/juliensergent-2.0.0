import React from "react"
import { Experience } from "../../../components/Experience"
import { ExtraInfos } from "../../../components/Experience/ExtraInfos"
import { ExternalLink } from "../../../components/ExternalLink"
import { Typography } from "../../../components/Typography"
import { useAnalytics } from "../../../lib/analytics"

export function Projects() {
  const analytics = useAnalytics()

  function trackGitHubProfileClicked() {
    analytics.event({
      category: "Social",
      action: `Social link clicked`,
      label: "GitHub profile",
    })
  }

  return (
    <section>
      <Typography.Title>Open source projects</Typography.Title>
      <Experience
        title="Trading bot"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/trading-bot" />
        }
        description={
          <Typography.Text>
            Realization of a trading robot for crypto currencies.
            <br />
            He is able to trade on Gdax and Binance. The architecture of the
            robot makes it capable of trading in any market. It has some
            adaptability capabilities in the market, and a large number of
            configurations that can change its behavior completely.
          </Typography.Text>
        }
      />
      <Experience
        title="SnipHub"
        extraInfos={<ExtraInfos link="https://github.com/SnipHub/sniphub" />}
        description={
          <Typography.Text>
            SnipHub is a collaborative platform for sharing snippets (reusable
            pieces of code). Reinventing the wheel often is a burden, searching
            the web to find an answer is often too, SnipHub was created to
            centralize all these recurring snippets in the life of a developer.
            <br />
          </Typography.Text>
        }
      />
      <Experience
        title="Node.js framework"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/easy.js" />
        }
        description={
          <Typography.Text>
            Realization of the framework easy.js, a framework fullstack for the
            environment Node.js, accompanied by a cli. This framework aims to
            provide a scalable and stable architecture for all types of backend
            projects based on Node.js.
          </Typography.Text>
        }
      />
      <Experience
        title="Neural network (deep learning)"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/neural-network" />
        }
        description={
          <Typography.Text>
            Integral creation of a multilayer perceptron neuron network, with an
            architecture and a trainer in order to be able to build a network of
            any size and to train it.
          </Typography.Text>
        }
      />
      <Experience
        title="Others"
        description={
          <Typography.Text>
            Others Others kind of projects are present on my GitHub{" "}
            <ExternalLink
              to="https://github.com/MadDeveloper"
              onClick={trackGitHubProfileClicked}
            />
          </Typography.Text>
        }
      />
    </section>
  )
}
