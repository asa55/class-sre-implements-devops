import React from "react";
import "./styles.css";
import Bar from "./Bar";
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
  return (
    <div className="App">
      <h1>
        <code>
          {">>"} class <span className="rainbow-text-animated">SRE</span>{" "}
          implements <span className="rainbow-text-animated">DevOps</span>
        </code>
      </h1>
      <h3>
        TL;DR: DevOps is a set of workflows to help devs and IT to work well
        together. <br />
        <br /> Site Reliability Engineering (SRE) is a specific way of doing
        DevOps.
      </h3>
      <Bar />
      <h3>The longer answer? Watch this series of ~5min vids:</h3>
      <a
        href={
          "https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj"
        }
      >
        <img src={img0} width={400}></img>
      </a>
      <br />
      <br />
      <Bar />
      <h3>Topic 1: SRE & DevOps</h3>
      So...
      <Bar />
      <h3>Topic 2: SLIs, SLOs & SRAs</h3>
      <Bar />
      <h3>Topic 3: Risk & Error Budgets</h3>
      <Bar />
      <h3>Topic 4: Toil & Toil Budgets</h3>
      <Bar />
      <h3>Topic 5: CRE</h3>
      <Bar />
      <h3>Topic 6: Managing Risk</h3>
      <Bar />
      <h3>Topic 7: Actionable Alerting</h3>
      <Bar />
      <h3>Topic 8: Observability</h3>
      <Bar />
      <h3>Topic 9: Incident Management</h3>
      <Bar />
      <h3>Topic 10: Postmortems & Retrospectives</h3>
    </div>
  );
}
