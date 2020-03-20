import React from "react"
import { ReactComponent as AngularIcon } from "../../../../assets/icons/technologies/angular.svg"
import { ReactComponent as DockerIcon } from "../../../../assets/icons/technologies/docker.svg"
import { ReactComponent as GraphQLIcon } from "../../../../assets/icons/technologies/graphql.svg"
import { ReactComponent as JavaScriptIcon } from "../../../../assets/icons/technologies/javascript.svg"
import { ReactComponent as MongoDBIcon } from "../../../../assets/icons/technologies/mongodb.svg"
import { ReactComponent as NodeJSIcon } from "../../../../assets/icons/technologies/node.svg"
import { ReactComponent as ReactIcon } from "../../../../assets/icons/technologies/react.svg"
import { ReactComponent as RxJSIcon } from "../../../../assets/icons/technologies/rxjs.svg"
import { ReactComponent as TypeScriptIcon } from "../../../../assets/icons/technologies/typescript.svg"
import { Typography } from "../../../../components/Typography"
import styles from "./Skills.module.css"

export function Skills() {
  return (
    <article>
      <Typography.Subtitle>Skills</Typography.Subtitle>
      <div className={styles.list}>
        <div className={styles.item}>
          <JavaScriptIcon title="JavaScript" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>JavaScript</Typography.Text>
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
          <NodeJSIcon title="Node.js" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Node.js</Typography.Text>
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
          <ReactIcon alt="React" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>React</Typography.Text>
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
          <ReactIcon alt="React Native" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>React Native</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                React best friend, mine too.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <TypeScriptIcon alt="TypeScript" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>TypeScript</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                I can not do without it.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <RxJSIcon alt="RxJS" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>RxJS</Typography.Text>
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
          <AngularIcon alt="Angular" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Angular</Typography.Text>
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
          <MongoDBIcon alt="MongoDB" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>MongoDB</Typography.Text>
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
          <GraphQLIcon alt="GraphQL" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>GraphQL</Typography.Text>
            </Typography.Paragraph>
            <Typography.Paragraph heading>
              <Typography.Text secondary className={styles.description}>
                When I discovered it, I just stopped developing REST API.
              </Typography.Text>
            </Typography.Paragraph>
          </div>
        </div>
        <div className={styles.item}>
          <DockerIcon alt="Docker" className={styles.icon} />
          <div>
            <Typography.Paragraph heading>
              <Typography.Text bold>Docker</Typography.Text>
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
