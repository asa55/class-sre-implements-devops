import React from "react";
import "./styles.css";
import Paper from "@material-ui/core/Paper";
import Img from "./Img";
import Drawer from "./Drawer";
import img0 from "../img/0-sre-devops-course.png";
import img1 from "../img/1-devs-push-to-ops.png";
import img2 from "../img/2-devops-philosophy.png";
import img3 from "../img/3-sli.png";
import img4 from "../img/4-sli-example.png";
import img5 from "../img/5-slo.png";
import img5a from "../img/5-sla.png";
import img6 from "../img/6-slo-example.png";
import img7 from "../img/7-sla-example.png";
import img8 from "../img/8-sli-slo-sla.png";
import img9 from "../img/9-downstream-reliability-sets-slo.png";
import img10 from "../img/10-error-budgeting.png";
import img11 from "../img/11-error-budgets-drive-monitoring.png";
import img12 from "../img/12-total-error-budget.png";
import img13 from "../img/13-error-budget-per-dependency.png";
import img14 from "../img/14-overhead-is-not-toil.png";
import img15 from "../img/15-this-is-toil.png";
import img16 from "../img/16-toil-example.png";
import img17 from "../img/17-measuring-toil.png";
import img18 from "../img/18-toil-management.png";
import img19 from "../img/19-risk-definition.png";
import img20 from "../img/20-risk-analysis.png";
import img21 from "../img/21-error-budget-example.png";
import img22 from "../img/22-error-budget-example.png";
import img23 from "../img/23-error-budget-example.png";
import img24 from "../img/24-error-budget-example.png";
import img25 from "../img/25-error-budget-example.png";
import img26 from "../img/26-error-budget-example.png";
import img27 from "../img/27-determining-alerts.png";
import img28 from "../img/28-setting-actionable-alerts.png";
import img29 from "../img/29-observability-types.png";
import img30 from "../img/30-request-logs.png";
import img31 from "../img/31-debug-logs.png";
import img32 from "../img/32-metrics.png";
import img33 from "../img/33-traces.png";
import img34 from "../img/34-isolation.png";
import img35 from "../img/35-incident-management.png";
import img36 from "../img/36-incident-command.png";
import img37 from "../img/37-postmortem.png";
import img38 from "../img/38-issue-tracker-tagged-with-postmortem.png";
import img39 from "../img/39-sre-dashboard.png";
import img40 from "../img/40-sre-dashboard.png";
import img41 from "../img/41-thanks-for-sharing.png";

export default function App() {
  const paperHeight = 5;
  return (
    <div className="App">
      <Drawer />
      <p>
        <br aria-label="I know, I know. I'll fix it." />
        <br />
        <br />
        <br />
        <br />
        <Paper className="paper-class" elevation={paperHeight}>
          TL;DR: DevOps is a framework that helps devs and IT (ops) work well
          together. <br />
          <br /> Site Reliability Engineering (SRE) is a specific way of doing
          DevOps.
        </Paper>
      </p>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>
          Want to deeply understand SRE v. DevOps? Watch this series of ~5min
          vids:
        </h3>
        <Img
          imageNumber={0}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj"
          src={img0}
          width={400}
          alt="Click this image to check out Google Cloud's short video series on YouTube"
        />
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 1: SRE & DevOps</h3>
        <p>
          <strong>Dev:</strong> this category writes new code to deliver new
          features on behalf of the product team.
        </p>
        <p>
          <strong>Ops:</strong> this category deploys the code on the IT
          backbone, delivering dev's product with high uptime and availability
          to customer(s).
        </p>
        <p>
          Once upon a time, devs and ops had a contentious relationship. Devs{" "}
          <em>(with limited knowledge of ops-related-challenges)</em> would
          throw new code over the metaphorical wall to ops{" "}
          <em>(with limited knowledge of code quirks)</em>.
        </p>
        <Img
          imageNumber={1}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=0m34s"
          src={img1}
          width={400}
          alt="Dev's goal is to move fast and ship code, ops is to move slow and remain stable"
        />
        <p>
          <strong>DevOps:</strong> this came along to resolve five key issues:
          <ol>
            <li>
              Reducing silos by breaking down barriers across teams improves
              collaboration and throughput
            </li>
            <li>
              Accepting failure as normal recognizes that both humans and
              computers are imperfect. Accepting and quantifying error isn't
              just realistic - we'll see its practical application shortly as a
              key to DevOps success
            </li>
            <li>
              Implementing gradual changes eases code review and rollback (in
              the event of bugs)
            </li>
            <li>
              Leveraging tooling and automation minimizes toil (defined shortly)
              and enables engineering's responsibilities to grow without
              linearly scaling the workload
            </li>
            <li>
              Measuring everything is critical. Outcomes (including items 1 - 4
              above) can't be assessed unless and until they are measured
            </li>
          </ol>
        </p>
        <Img
          imageNumber={2}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img2}
          width={500}
          alt="The five key areas of DevOps"
        />
        <p>
          At <strong>Google</strong>, Site Reliability Engineering (SRE) has
          specific meaning. In a sense, it is one way of carrying out DevOps
          (which is why they coined the term
          <code>
            <br />
            class <span className="rainbow-text-animated">
              SRE
            </span> implements{" "}
            <span className="rainbow-text-animated">DevOps</span>
          </code>
        </p>
        <p>
          Here's how SRE makes DevOps happen:
          <ol>
            <li>
              <strong>To Reduce Organization Silos:</strong> Devs share
              ownership of production and use the same tooling (to encourage a
              shared perspective)
            </li>
            <li>
              <strong>To Accept Failure as Normal:</strong> Acceptable rates for
              going out of spec are encoded in error budgets, and blameless
              postmortems to ensure the same failures in production systems
              don't happen more than once
            </li>
            <li>
              <strong>To Implement Gradual Change:</strong> Canary deployments
              (changes are released to a small percentage of the total user base
              before rolling out to all users)
            </li>
            <li>
              <strong>To Leverage Tooling and Automation:</strong> Manual "toil"
              is reduced or eliminated by spending time automating this year's
              job away
            </li>
            <li>
              <strong>To Measure Everything:</strong> Measuring "toil", system
              reliability, and system health are critical metrics for successful
              SRE
            </li>
          </ol>
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 2: SLIs, SLOs & SRAs</h3>
        <p>
          <strong>Wouldn't it be nice if we could:</strong>
          <ul>
            <li>
              All use consistent definitions for "reliability" and
              "availability"
            </li>
            <li>
              Keep devs from breaking more and more things with frequent code
              pushes
            </li>
            <li>
              Get product teams (and hence devs) to agree reliability is a
              pressing issue
            </li>
          </ul>
          <br />
          This is the classic DevOps problem statement, and is exactly the
          challenge Google set out to solve by refining its SRE program in the
          early 2000's.
          <br />
          The foundation of SRE is simple: define availability, specify an
          acceptable level of availability, and come up with a plan in case of
          failure. We'll dig into the specifics in a moment, but by
          communicating this information across the entire organization (from
          individual contributors all the way up to VPs). This builds a shared
          sense of responsibility and know what to do (and when to do it) if the
          team needs to slow down.
        </p>
        <p>
          Wait, shouldn't we strive for 0% errors and 💯% availability? 🤔
          <br />❌ NO! (
          <a href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=2m17s">
            <strong>click here to see what Google thinks</strong>
          </a>
          )
          <br />
          100% availability isn't a real target. Let's dig into how quantifying
          and leveraging real risk and error rates can meaningfully inform our
          projects.
        </p>
        <p>
          Google loves the phrase{" "}
          <code>"By doing X, I accomplished Y, as measured by Z"</code>
          <br />
          This thematically resonates with the terminology we're about to learn
          for SLI (specific pass/fail metrics over a short amount of time), SLOs
          (SLIs integrated over time), and SLAs (written agreements with a
          customer based on meeting or failing SLO commitments).
        </p>

        <Img
          imageNumber={3}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img3}
          width={400}
          alt="SLI definition"
        />
        <Img
          imageNumber={4}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img4}
          width={400}
          alt="SLI example"
        />
        <Img
          imageNumber={5}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img5}
          width={400}
          alt="SLO definition"
        />
        <Img
          imageNumber={6}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img6}
          width={400}
          alt="SLO example"
        />
        <Img
          imageNumber={7}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img5a}
          width={400}
          alt="SLA definition"
        />
        <Img
          imageNumber={8}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img7}
          width={400}
          alt="SLA example"
        />
        <Img
          imageNumber={9}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=1m38s"
          src={img8}
          width={500}
          alt="Teams most closely connected to SLIs, SLOs, and SLAs"
        />
        <p>
          <strong>Remember:</strong> by defining shared vocabulary across all
          levels of the organization, we're breaking down silos (the first
          pillar of DevOps 🎉). SLIs give technical teams clear objectives, SLOs
          translate them to scales meaningful to product teams (who can provide
          stakeholder feedback), and SLAs translate them to business-level
          objectives (most importantly, ones customers care about).
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 3: Risk & Error Budgets</h3>
        <p>👷‍♀️ Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 4: Toil & Toil Budgets</h3>
        <p>🚧 Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 5: CRE</h3>
        <p>👷‍♂️ Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 6: Managing Risk</h3>
        <p>🧰 Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 7: Actionable Alerting</h3>
        <p>👷‍♀️ Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 8: Observability</h3>
        <p>🚧 Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 9: Incident Management</h3>
        <p>👷‍♂️ Under Construction (Coming soon!)</p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 10: Postmortems & Retrospectives</h3>
        <p>🧰 Under Construction (Coming soon!)</p>
      </Paper>
    </div>
  );
}
