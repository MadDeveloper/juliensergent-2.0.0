import React from "react"
import { ReactComponent as GitHubIcon } from "../../../../assets/icons/github.svg"
import { ReactComponent as AWSIcon } from "../../../../assets/icons/technologies/aws.svg"
import { ReactComponent as CircleCIIcon } from "../../../../assets/icons/technologies/circleci.svg"
import { ReactComponent as EslintIcon } from "../../../../assets/icons/technologies/eslint.svg"
import { ReactComponent as GitIcon } from "../../../../assets/icons/technologies/git.svg"
import { ReactComponent as GitLabIcon } from "../../../../assets/icons/technologies/gitlab.svg"
import { ReactComponent as HerokuIcon } from "../../../../assets/icons/technologies/heroku.svg"
import { ReactComponent as NPMIcon } from "../../../../assets/icons/technologies/npm.svg"
import { ReactComponent as PrettierIcon } from "../../../../assets/icons/technologies/prettier.svg"
import { ReactComponent as TravisIcon } from "../../../../assets/icons/technologies/travis.svg"
import { ReactComponent as VSCodeIcon } from "../../../../assets/icons/technologies/vscode.svg"
import { ReactComponent as WebPackIcon } from "../../../../assets/icons/technologies/webpack.svg"
import { Typography } from "../../../../components/Typography"
import styles from "./Tools.module.css"

export function Tools() {
  return (
    <article>
      <Typography.Subtitle>Tools</Typography.Subtitle>
      <div className={styles.list}>
        <div className={styles.item}>
          <VSCodeIcon title="Visual Studio Code" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Visual Studio Code</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Highly skilled, daily usage.
                <br />
                Preferred language.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <NPMIcon title="npm" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>npm</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Who can't love Node.js?
                <br />
                Favorite revolution.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <PrettierIcon title="Prettier" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Prettier</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                I can not do without it.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <EslintIcon title="Eslint" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Eslint</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Some experiences with
                <br />I loved the philosophy behind reactive programming.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <GitIcon title="Git" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Git</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                The best UI library.
                <br /> I love it, really.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <GitHubIcon title="GitHub" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>GitHub</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Was my first front framework.
                <br />
                Enjoyed it's environment and philosophy, but forgetting it for
                React.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <GitLabIcon title="GitLab" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>GitLab</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                React best friend, mine too.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <AWSIcon title="Amazon Web Services" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Amazon Web Services</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Daily usage.
                <br />
                Match perfectly with JavaScript, and my opinion.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <HerokuIcon title="Heroku" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Heroku</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                When I discovered it, I just stopped developing REST API.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <TravisIcon title="Travis" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Travis</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Regular usage.
                <br />I really like the concept and simplicity.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <CircleCIIcon title="CircleCI" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>CircleCI</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Regular usage.
                <br />I really like the concept and simplicity.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <WebPackIcon title="WebPack" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>WebPack</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                Regular usage.
                <br />I really like the concept and simplicity.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
      </div>
    </article>
  )
}
