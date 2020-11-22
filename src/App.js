import React from "react";
import "./styles.css";
import Paper from "@material-ui/core/Paper";
import Img from "./Img";
import Drawer from "./Drawer";
import AlertDialog from "./Dialog";
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
import img42 from "../img/42-agile-plus-devops.png";

export default function App() {
  const paperHeight = 5;

  return (
    <div className="App">
      <Drawer />
      <div style={{ position: "relative", marginBottom: 96 }} />
      <Paper className="paper-class" elevation={paperHeight}>
        <h1 style={{ fontSize: 14, fontWeight: "normal" }}>
          <strong>TL;DR:</strong> DevOps is a cooperative framework that helps
          devs and IT (ops) work well together.
        </h1>
        <p>
          Site Reliability Engineering (SRE) is a specific way of doing DevOps.
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h2>Where does DevOps fit in?</h2>
        <Img
          imageNumber={0}
          href="https://www.youtube.com/watch?v=ZcZtU_TiFEM&t=4m3s"
          src={img42}
          width={500}
          alt="DevOps works hand-in-hand with Agile in the product lifecycle. (This image is from a seminar at Google, unlike the remainder of the content on this page)"
        />
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>
          Want to deeply understand SRE v. DevOps? Watch this series of ~5min
          vids:
        </h3>
        <Img
          imageNumber={1}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj"
          src={img0}
          width={400}
          alt="Click this image to check out Google Cloud's short video series on YouTube"
        />
        <p>
          <strong>***How to use this site***:</strong> Links to all videos in
          Google's SRE playlist can be found in the drawer on the left. Images
          below are sourced from the videos - clicking any image will link you
          to the right timestamp in the video it came from (on YouTube).
        </p>
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
          imageNumber={2}
          href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&t=0m34s"
          src={img1}
          width={400}
          alt="Dev's goal is to move fast and ship code, ops is to move slow and remain stable"
        />
        <p>
          <strong>DevOps:</strong> this is a cooperative framework for devs and
          ops teams, built with the following five considerations at
          front-of-mind:
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
          imageNumber={3}
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
          Wait, shouldn't we strive for 0% errors and{" "}
          <span role="img" aria-label="100">
            💯
          </span>
          % availability?{" "}
          <span role="img" aria-label="wondering face">
            🤔
          </span>
          <br />
          <span role="img" aria-label="red X">
            ❌
          </span>{" "}
          NO! (
          <AlertDialog
            content="click here to see what Google thinks"
            href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=2m17s"
          />
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
          imageNumber={4}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=3m25s"
          src={img3}
          width={400}
          alt="SLI definition"
        />
        <Img
          imageNumber={5}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=6m49s"
          src={img4}
          width={400}
          alt="SLI example"
        />
        <Img
          imageNumber={6}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=4m24s"
          src={img5}
          width={400}
          alt="SLO definition"
        />
        <Img
          imageNumber={7}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=6m56s"
          src={img6}
          width={400}
          alt="SLO example"
        />
        <Img
          imageNumber={8}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=5m36s"
          src={img5a}
          width={400}
          alt="SLA definition"
        />
        <Img
          imageNumber={9}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=7m3s"
          src={img7}
          width={400}
          alt="SLA example"
        />
        <Img
          imageNumber={10}
          href="https://www.youtube.com/watch?v=tEylFyxbDLE&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=2&t=6m15s"
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
        <p>
          Want to break Site Reliability Engineering? Well let's pose the
          following question: "
          <em>
            What's stopping teams from breaking their SLO commitments (breaking
            uptime requirements, or, more likely, making SREs work overtime to
            fix others' mistakes)?
          </em>
          "
        </p>
        <p>
          There exists an answer to this problem, encapsulated in the concept of{" "}
          <strong>error budgets</strong>. But before we get into that, it's
          important to justify why, in most cases, a greater-than-zero error
          tolerance is acceptable in the first place.
        </p>
        <p>
          Non-zero error allowance is worth considering when the costs outweigh
          the benefits (of zero-error) for the following key considerations:
          <ol>
            <li>Implementing zero-error systems is costly</li>
            <li>Implementing zero-error systems is technically complex</li>
            <li>
              The benefits of zero-error systems may not even be experienced by
              customers, in cases when downstream reliability is greater than
              zero
            </li>
          </ol>
        </p>
        <Img
          imageNumber={11}
          href="https://www.youtube.com/watch?v=y2ILKr8kCJU&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=3&t=1m24s"
          src={img9}
          width={500}
          alt="An example where downstream reliability of a (cell) network our system depends on is most likely to fail before our own. Users are unlikely to experience the benefit of less-than 0.1% improvement if we implemented a zero-error system"
        />
        <p>
          It's natural to want to reduce system failures, but it's critical to
          recognize that delivering products and features in a timely manner
          must be balanced against risk. What constitutes "tolerable risk" is,
          in the end, a product decision. So it's important to pull the
          product's management team into these discussions to understand the
          explicit goals of the availability target of our systems. The business
          case to be made will, at minimum, need to look at the cost-benefit of
          adding additional fault tolerance, additional testing time, increased
          code reviews, or reduced frequency of pushes. It's a game of numbers.
        </p>
        <Img
          imageNumber={12}
          href="https://www.youtube.com/watch?v=y2ILKr8kCJU&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=3&t=2m22s"
          src={img10}
          width={500}
          alt="Acceptable risk dictates SLO, which defines our error budget. When we go over-budget (e.g. when frequently adding new features causes too many failures), this might mean halting deployments and re-focus development efforts on stability over innovation"
        />
        <p>
          The tradeoffs for the product team become immediately clear: if
          stability is more important, apply a strict SLO. If new features need
          to be added rapidly, this translates to loosening the SLO.
        </p>
        <p>
          <strong>The main benefit of an error budget</strong> is that it's a
          quantitative measurement shared by product teams and SREs, letting us
          balance innovation and stability to an appropriate level.
        </p>
        <Img
          imageNumber={13}
          href="https://www.youtube.com/watch?v=y2ILKr8kCJU&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=3&t=2m22s"
          src={img11}
          width={500}
          alt="To predict or flag an SLO breach, we implement a neutral third-party (such as a monitoring system) for our SLIs."
        />
        <p>
          Are you worried product teams can break error budgets without recourse
          (i.e. make SREs work overtime)? This is a valid concern, which is why
          teams need executive buy-in for error budgets. If SREs can't enforce
          the error budget, the system breaks down. But in some cases, the
          product team might <em>really</em> want a certain critical feature to
          roll out ASAP, which is why some organizations give executives a
          certain number of "gold bullets" per year for one-time-exceptions. In
          these special cases, the product team needs to get executive buy-in to
          push new features if and when the error budget is maxed out.
        </p>
        <Img
          imageNumber={14}
          href="https://www.youtube.com/watch?v=y2ILKr8kCJU&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=3&t=4m46s"
          src={img12}
          width={500}
          alt="Consider when failures aren't the dev/product team's fault (e.g. a network failure eats through the error budget). How do we account for that?"
        />
        <Img
          imageNumber={15}
          href="https://www.youtube.com/watch?v=y2ILKr8kCJU&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=3&t=4m53s"
          src={img13}
          width={500}
          alt="Allocating error budget across the entire technical stack is important so devs know how much of the budget they can burn through. No one aspect (including product development) should expect to spend the entire error budget"
        />
        <p>
          The error budget approach implements the second DevOps pillar. By
          quantifying and allocating risk across the entire technical stack of a
          product, we can enforce gradual change at an appropriate rate for the
          needs of the project.
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 4: Toil & Toil Budgets</h3>
        <p>
          There's a little more to "<strong>toil</strong>" than "
          <em>work we don't want to do</em>".
        </p>
        <Img
          imageNumber={16}
          href="https://www.youtube.com/watch?v=IvQ-15-yE_c&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=4&t=39s"
          src={img14}
          width={400}
          alt="It's important to separate the concept of `overhead` from `toil`, since we'll separately track both"
        />
        <Img
          imageNumber={17}
          href="https://www.youtube.com/watch?v=IvQ-15-yE_c&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=4&t=1m4s"
          src={img15}
          width={400}
          alt="The key characteristic of toil is `work that's tied directly to a running production service`. (Think manual data backups or manual system restarts - even if you write a script to automate these, manually executing that script counts as toil)"
        />
        <p>
          If a task is something that you only have to do once or twice (that
          won't take many hours of your day), it might not be worth automating.
          Otherwise, it's time to start automating.
        </p>
        <Img
          imageNumber={18}
          href="https://www.youtube.com/watch?v=IvQ-15-yE_c&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=4&t=2m23s"
          src={img16}
          width={500}
          alt="Another key characteristic of toil is `lack of enduring value`. In the image above, an example is given where an engineer gets paged in the middle of the night that a system is down and needs attention. A phone-home/pager system almost always entails toil. If the engineer spends time (even 6 or 7 hours) the following work day to automate this failure mode away, this has enduring value. So the work done in the latter portion of the day isn't `toil` but rather just project time."
        />
        <Img
          imageNumber={19}
          href="https://www.youtube.com/watch?v=IvQ-15-yE_c&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=4&t=3m48s"
          src={img17}
          width={400}
          alt="Tracking toil separately from project time can get messy, so Google's SREs make an effort not to blend on-call hours with project hours. Clean time-separation of responsibility makes the reported time allocations more reliable."
        />
        <Img
          imageNumber={20}
          href="https://www.youtube.com/watch?v=IvQ-15-yE_c&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=4&t=4m53s"
          src={img18}
          width={500}
          alt="Not everything is worth automating. Google recommends keeping toil between 30-50% of engineering time. Remaining time spent on the project will inevitably increase automation, reducing toil over time, enabling engineers to accept more responsibility for more services (or increase the size of existing services) all while keeping their true workload approximately constant"
        />
        <p>
          Toil isn't always a bad thing. In some cases, it's good to have some
          work that <em>could</em> be automated for new team members to cut
          their teeth on. It can also be good for an employee's morale to get
          the immediate satisfaction of task completion. Aside from these
          limited cases, toil should be reduced.
        </p>
        <p>
          Toil and toil budgets don't directly advance the DevOps pillars
          discussed previously, but they resonate with the notions of measuring
          everything and reducing organizational silos. Most importantly, they
          offer an objective approach to balancing time spent on system
          administration versus system improvements.
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 5: CRE</h3>
        <p>
          Now that we've defined SLIs and SLOs, calculated our error budgets,
          and our teams are working together (instead of fighting), we're done
          with DevOps! Right...?
        </p>
        <p>
          Not quite. In the case where we're providing customers an API or
          consumable service, it's a good idea to bring them in the loop on the
          concepts discussed up to this point. Customer involvement in SRE is
          known as <strong>Customer Reliability Engineering (CRE)</strong>.
        </p>
        <p>
          This isn't necessarily a trivial task, but it is much better than
          missing customer expectations. By sharing a common language and
          ensuring customers know exactly what your team is committing to with
          uptime and reliability. CRE pays long-term dividends by reducing
          friction between our services and our users.{" "}
          <AlertDialog
            content="Click here for a brief anecdote"
            href="https://www.youtube.com/watch?v=GQPzaq-owYM&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=5&t=2m26s"
          />
        </p>
        <p>
          At Google, CRE is itself a job title. Their CREs are just regular
          SREs, but while most Google SREs develop Google products, CREs break
          down organizational barriers between Google and their customers. They
          focus heavily on measurements, so the provided service and the
          customer's product can monitor each other's health in normal operation
          and during service outages. CREs facilitate sharing provider and
          consumer SLOs and error budgets, which helps prevent anyone from
          falling into a panic any time there is a little bit of downtime.
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 6: Managing Risk</h3>
        <p>
          So let's say you recently decided on an error budget for your new
          project. You probably don't want to wait months to know whether or not
          you'll meet your SLO commitments (which might take months of data
          collection). The solution to this problem starts with a{" "}
          <strong>risk analysis</strong>.
        </p>
        <Img
          imageNumber={21}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=33s"
          src={img19}
          width={400}
          alt="A risk analysis is an enumeration of all the things you know have impacted your system in the past, and all the things you think could happen in the future. Nobody can tell the future, but sitting and thinking about it a while is a good start"
        />
        <Img
          imageNumber={22}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=49s"
          src={img20}
          width={500}
          alt="By enumerating your risks and writing down their likelihood and impact (say, on a 0 to 1 scale), one way to compare which failures are `better` or `worse` would be to multiply the severity by the likelihood"
        />
        <Img
          imageNumber={23}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=1m35s"
          src={img22}
          width={500}
          alt="An example would be where, with 100% certainty, every month a primary database backup takes the system offline for a full 2 hours each month (impacting all users during a planned outage). The `severity` of this particular risk translates to 1,440 minutes of expected downtime"
        />
        <Img
          imageNumber={24}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=1m44s"
          src={img21}
          width={500}
          alt="Continuing with the example, suppose we agreed on an SLO of 99.5% uptime. This translates to 2,628 allowable minutes of outages per year (which is greater than the amount of time needed for monthly database migrations). Next, let's keep adding risks to help build the confidence that we won't go over budget"
        />
        <Img
          imageNumber={25}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=2m31s"
          src={img23}
          width={500}
          alt="Continuing with the example, suppose every couple weeks about half of users report sluggish system response. It turns out our devs are all trying to build and test their code before they head out the door for the weekend. Customers complain via support tickets, which take about a half hour to come through. It takes another half hour or so for IT to provision more computing capacity, and by number-crunching these assumptions we compute an expected 780 minutes additional `bad minutes` per year."
        />
        <Img
          imageNumber={26}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=2m54s"
          src={img24}
          width={500}
          alt="Continuing with this approach, we can enumerate all of our expected risks and their impact on system downtime"
        />
        <Img
          imageNumber={27}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=2m54s"
          src={img25}
          width={500}
          alt="The information we've assembled can be plotted to reveal relative contributions to system downtime"
        />
        <Img
          imageNumber={28}
          href="https://www.youtube.com/watch?v=4kGu1_M7Igg&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=6&t=3m35s"
          src={img26}
          width={500}
          alt="We can then stack all of our risks to see if we expect to remain within our error budget. In this example, we're don't expect to meet our SLO commitments, so we'll need to think about what risks we can mitigate to pull our expected downtime within spec"
        />
        <p>
          Risk analysis can help identify potential areas for improvement, and
          gives us a good gage on when to start seriously investigating
          mitigation strategies. But even in the worst case (when we don't
          expect we'll meet the current error budget and we're out of mitigation
          options), we now have solid numerical evidence to approach key
          stakeholders and discuss the possibility of modifying the SLOs for a
          larger error budget.
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 7: Actionable Alerting</h3>
        <p>
          Alerting (phone-home/pager systems) is an important element of many
          systems.
        </p>
        <p>
          We want:
          <ul>
            <li>Alarms to tell us when things are actually broken</li>
            <li>
              Broken things that call us in off-hours to correspond to real
              (user-experienced) pains
            </li>
          </ul>
        </p>
        <p>
          The solution to "noisy alerting" is that, often, alerts are built
          around expected correlates to user pain points. Instead of having
          alerts based on metrics that users may never experience, instead we
          should alert on SLI and SLO metrics. Things that burn through our
          error budget verifiably impact users in real ways.
        </p>
        <Img
          imageNumber={29}
          href="https://www.youtube.com/watch?v=CGldVD5wR-g&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=7&t=2m53s"
          src={img27}
          width={500}
          alt="Remember how we split our error budget out for different types of risks? We can reduce these down to an expected maximum per week, per day, per hour, per second (etc.)"
        />
        <Img
          imageNumber={30}
          href="https://www.youtube.com/watch?v=CGldVD5wR-g&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=7&t=4m3s"
          src={img28}
          width={400}
          alt="Some failure modes may entail rapid depletion of the error budget (an obvious trigger to come into the office on-call), while others (say, fractional packet losses) might not reveal themselves on the same timescale. It's good to have fast-burn and slow-burn metrics. Instead of alerting on a slow-burn, we might instead opt to open lower priority tickets (for engineers to resolve during business hours, once we're sufficiently confident there is an issue)"
        />
        <p>
          We want to make sure our engineers are responding to real issues
          affecting real users. To ensure our technical team is quick to respond
          to real issues, it's important to have an alarm strategy that isn't
          overly sensitive to noise (problems that don't exist, or self-remedy
          by the time the engineers on call investigate). If they're routinely
          called in for non-issues, they'll eventually become numb to the alarm
          system that cried wolf.
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 8: Observability</h3>
        <p>
          How can we justify turning off our noisy alarms in favor of the
          SLI/SLO driven ones discussed above? This may sound terrifying - not
          to mention we may have spent a lot of time building these alarms in
          response to issues that have arisen in the past (or went to great
          lengths to designing alarms that might prevent outages in the future).
        </p>
        <p>
          This is a fair line of reasoning, but we need better ways of finding
          problems in our systems that don't necessarily rely on making
          assumptions about what's broken before. If we only monitor and alarm
          on things that have broken in the past, we'll fall into the trap of
          needing to layer on technical debt in response to every outage.
        </p>
        <Img
          imageNumber={31}
          href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=1m1s"
          src={img29}
          width={500}
          alt="Making our systems `observable` gives us rich, failure-mode-agnostic ways of understanding emergent (or existing) problems. `Observability` in this context breaks down into three key areas: 1. Structured Logs, 2. Metrics, and 3. Traces"
        />
        <Img
          imageNumber={32}
          href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=1m5s"
          src={img30}
          width={400}
          alt="`Structured logs` are emitted by each process. Above is a sample structured log recording an individual user query."
        />
        <Img
          imageNumber={33}
          href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=1m13s"
          src={img31}
          width={400}
          alt="Another example of a structured log might include debugging information generically associated with our service"
        />
        <Img
          imageNumber={34}
          href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=1m16s"
          src={img32}
          width={500}
          alt="`Metrics` reflect aggregate-type data about the performance of our services. For instance, we might want to gage the real-time value of our CPU load (center), count the number of queries (left), or visualize packet latencies (right)"
        />
        <Img
          imageNumber={35}
          href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=1m27s"
          src={img33}
          width={500}
          alt="`Traces` show the timing and dependencies of individual execution flows"
        />
        <p>
          Now let's thread the needle on how all of this relates to actionable
          insights when attempting to better understand and diagnose real
          problems in a system.
        </p>
        <p>
          Our metrics are part of our service level indicators, which we use
          directly to monitor outages (things spending our error budget faster
          than we can tolerate).
        </p>
        <Img
          imageNumber={36}
          href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=1m49s"
          src={img34}
          width={500}
          alt="In the example of a distributed system outage, we'll only get called into the office for a `real problem` for high level problems flagging that our system is truly burning through our error budget. All of the low-level observability baked into our system has been chugging along the whole time - provides the granular information we need to drill down from the top to isolate the error-budget offender(s). Aggregate metrics help isolate the affected area. Once we're in close, logs and traces help us dig deep into the nature of the fault"
        />
        <p>
          It's unnecessary to alert on every metric - just the error budget -
          but having all the logging, monitoring and tracing built in will prove
          invaluable during the debugging process.
        </p>
        <p>
          Lastly (for this lesson), what about existing projects coming from a
          more traditional monitoring solution (i.e. not already using these
          types of observability tools)? (One of the presenters in
          <AlertDialog
            content="this video"
            href="https://www.youtube.com/watch?v=SoZZzB-yTOk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=8&t=3m59s"
          />
          even jokes that he manually <code>grep</code>'s through log files!
          (That's a long-lived Unix command that's basically a fancy text
          search). The short answer is that incremental adoption is definitely
          possible. The even shorter answer they provide in the video is a plug
          for Google's pre-canned solution StackDriver (that was its name in
          2018 - now it's known as "Operations" -
          <AlertDialog
            content="Click here to check it out"
            href="https://cloud.google.com/products/operations"
          />
          ).
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 9: Incident Management</h3>
        <p>Let's talk about handling issues.</p>
        <p>
          We want to:
          <ul>
            <li>Maximize productive communication between the right people</li>
            <li>
              Minimize unproductive input from the wrong people
              (well-intentioned people might
              <em> want</em> to help, but don't meaningfully contribute).
            </li>
          </ul>
        </p>
        <p>
          Defining clear roles and responsibilities for each of our humans lets
          them know exactly what they can do without getting in the way.
        </p>
        <Img
          imageNumber={37}
          href="https://www.youtube.com/watch?v=n4y9dwinPBQ&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=9&t=53s"
          src={img35}
          width={400}
          alt="Incident management starts with a means of incident reporting, tracking, and points of contact. We'll need to determine thresholds for when an incident may be formally declared, and who is allowed to declare one."
        />
        <Img
          imageNumber={38}
          href="https://www.youtube.com/watch?v=n4y9dwinPBQ&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=9&t=1m34s"
          src={img36}
          width={500}
          alt="Having an incident commander (IC) as the initial point of contact is key to incident response. The IC makes strategic decisions and delegates roles to other responders (which vary, but can grow and change with the incident). The Operations Lead is the only person allowed to touch the system (and if they need additional hands, Operations Lead coordinates them) - they're responsible for diving in, running commands, collecting log files etc. The IC handles planning and communicates status with stakeholders, but if frequency of communication becomes unwieldy, the IC might opt to assign a Communications Lead. The IC, responsible for making final decisions, may also opt for a Planning Lead to handle the written aspects (documenting the plan, keeping running notes on status, and starting to draft the postmortem). In some cases, an IC may even assign a Logistics Lead to secure rooms, food, water, or other supplies"
        />
        <p>
          The most senior person in the area when an incident is declared
          doesn't automatically become IC. The person who declared an incident
          becomes the IC, unless and until they designate a successor. An IC can
          delegate any other roles they find necessary, with the exception of
          overall decision-making responsibility (that's always the ICs job).
        </p>
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <h3>Topic 10: Postmortems & Retrospectives</h3>
        <p>
          Here's the last and possibly most important point: once we've resolved
          an issue, how do we help ensure we won't get bitten twice by the same
          problem?
        </p>
        <p>
          This is where Google recommends writing up Retrospectives (a.k.a.
          <em> Blameless</em> Postmortems, or PMs)
        </p>
        <Img
          imageNumber={39}
          href="https://www.youtube.com/watch?v=UBe7U2b3tsA&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=10&t=38s"
          src={img37}
          width={400}
          alt="Blameless PMs document the problem and path to resolution, and any configuration changes that might need to be cleaned up after the work's done"
        />
        <p>
          Documenting the problem and resolution is of course the base
          expectation. But one critical element of the process is to ensure that
          people don't feel like they'll be fired or ridiculed for the mistakes
          they may have made. If we want PMs to be a learning process for
          everyone involved, we need to keep in mind that pointing the finger of
          blame will make participants less likely to openly contribute their
          experiences. Google considers the possibility of well intentioned
          humans causing system failures as a bug in the system (not a bug in
          the human).
        </p>
        <p>The way questions are asked really matters in this process.</p>
        <p>
          Good questions to ask:
          <ul>
            <li>"What did you know about the system at the time?"</li>
            <li>"How did the system behave?"</li>
          </ul>
          In general, stay away from <em>loaded questions</em>, including "Why
          did you ...?" or "Didn't you know ...?"
        </p>
        <Img
          imageNumber={40}
          href="https://www.youtube.com/watch?v=UBe7U2b3tsA&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=10&t=3m38s"
          src={img38}
          width={500}
          alt="In large or distributed systems, most failures don't happen as the result of a single root-cause, but as the result of cascading failures (an intersection of some kind). To capture this, it's best to write down everything that may have contributed (as opposed to searching for a single `root cause`). In your issue tracker of choice, prioritize (and tag the issue `postmortem`) so that the lessons learned are readily accessible in the future. For future work efforts, checking off the boxes from highest priority to lowest can help your team assess risk."
        />
        <p>
          It's helpful to make notes of what went well (worked as designed),
          what went poorly, and even what the team just got lucky on.
        </p>
        <Img
          imageNumber={41}
          href="https://www.youtube.com/watch?v=UBe7U2b3tsA&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=10&t=4m23s"
          src={img39}
          width={500}
          alt="One last key thing to keep track of, once you understand the issue in its entirety, is to write down machine readable metadata so you can track your overall incident response management process over time. In the above dashboard, such metadata is used to find trends that might help decrease the total time spent resolving incidents"
        />
        <Img
          imageNumber={42}
          href="https://www.youtube.com/watch?v=UBe7U2b3tsA&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj&index=10&t=4m29s"
          src={img40}
          width={500}
          alt="Other dashboard-relevant metadata might help assess whether a release was involved, a cascading failure, a configuration change (etc.). This helps identify meta patterns in outages (which might help identify improvement projects). For example, Google has been recording this type of metadata for a while and realized that 70% of its outages are the direct result of binary configuration changes."
        />
      </Paper>
      <Paper className="paper-class" elevation={paperHeight}>
        <p>
          <strong>That's all I've got for you today!</strong> Thanks so much for
          reading{" "}
          <span role="img" aria-label="woman on laptop">
            👩‍💻
          </span>{" "}
          and be sure to check out the awesome resources linked on this page{" "}
          <span role="img" aria-label="happy face">
            😄
          </span>
        </p>
        <Img
          imageNumber={43}
          href="https://cloud.google.com/"
          src={img41}
          width={300}
          alt="Thank you, Google Cloud, for sharing this information with the world! (Click the logo to visit their home page)"
        />
      </Paper>
    </div>
  );
}
