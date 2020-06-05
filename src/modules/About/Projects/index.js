import React, { Fragment } from "react"
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
      <Typography.Paragraph heading>
        <Typography.Text>
          A non-exhaustive list of some personal open source projects.
        </Typography.Text>
      </Typography.Paragraph>
      <Experience
        title="My personal website"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/juliensergent-2.0.0" />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Realisation of a new version of my personal website. This new
                website will allow me to share my experiences and philosophy
                through articles. I can also express myself freely about my
                opinions and passions. Last but not least, I can express freely
                my design mania.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                I only used React and my passion to realise it. Netlify is used
                as backend.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                You can find the source of the first version of my personal
                website{" "}
                <ExternalLink to="https://github.com/MadDeveloper/juliensergent">
                  here
                </ExternalLink>
                .
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="Trading bot"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/trading-bot" />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                Realisation of a trading robot for crypto currencies.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The bot is able to trade on GDAX and Binance platforms. The
                architecture of the latter makes it capable of trading in any
                market. It has some adaptability capabilities, and a large
                number of configurations that can change its behavior
                completely.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The bot was deployed on an Amazon ECR container, generating in
                real time a chart combining currency values and robot purchases
                / sales, accessible via a public URL.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The bot was developed in TypeScript, combined with Chart.js to
                generate graphs in real time. All internal algorithms and
                mathematics come from my brain.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="SnipHub"
        extraInfos={<ExtraInfos link="https://github.com/SnipHub/sniphub" />}
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                SnipHub is a collaborative platform for sharing snippets
                (reusable pieces of code).
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                I created this platform because I was exhausted at each project
                to find back all snippets code I had developed in the past and I
                wanted to reuse. Reinventing the wheel often is a burden,
                searching the web to find an answer is often too. SnipHub was
                created to centralize all these recurring snippets in the life
                of a developer.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The platform was developed in JavaScript, with the Angular
                framework. I used Firebase as backend, I didn't want to bother
                with that.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="Node.js framework | easy.js"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/easy.js" />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                It was the period when Symfony was the framework of the moment
                (which I used, of course), but Node.js was starting to make its
                way into the tech world. So I decided to wear the Symfony
                philosophy (yeah I know, it's ambitious!) to the JavaScript
                (Node.js) community. easy.js was born. I worked on it for two
                years, I made two versions. The V2 had a own dedicated CLI in a
                separate package, in order to create new project, generate
                bundle, or new database model.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The project started to grew up, and it was hard to maintain it
                (at this same moment, JavaScript world started to evolve
                fastly). So I decided to stop the development of the framework.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The framework was developed in JavaScript, and should be started
                with Node.js. The Bookshelf library was used as ORM. A custom
                router was developed, as well as all the HTTP logic (request,
                response) and all authentication/authorization logic.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="Neural network (deep learning)"
        extraInfos={
          <ExtraInfos link="https://github.com/MadDeveloper/neural-network" />
        }
        description={
          <Fragment>
            <Typography.Paragraph>
              <Typography.Text>
                As an AI enthusiast, I read and learned a lot on neural
                networks. As mathematics is also a domain that I love, I wanted
                to create my own neural networks, from scratch. I started to
                develop a neuron, then I create an architect in charge of
                connect all neurons together. The last piece of the puzzle was
                the network trainer, responsible for train a neural network for
                a dedicated task. The project is operational and can be used for
                production.
              </Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph>
              <Typography.Text>
                The project was entirely developed in JavaScript.
              </Typography.Text>
            </Typography.Paragraph>
          </Fragment>
        }
      />
      <Experience
        title="Others"
        description={
          <Typography.Text>
            I developed some other open source projects. You can find them on my{" "}
            <ExternalLink
              to="https://github.com/MadDeveloper"
              onClick={trackGitHubProfileClicked}
            >
              GitHub
            </ExternalLink>
            .
          </Typography.Text>
        }
      />
    </section>
  )
}
