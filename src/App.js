import React from "react";
import "./styles.css";
import Bar from "./Bar";

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
      <a href="https://www.youtube.com/watch?v=uTEL8Ff1Zvk&list=PLIivdWyY5sqJrKl7D2u-gmis8h9K66qoj">
        <img src="../img/sre-devops-course.png" alt="sre devops course" />
      </a>
      <br />
      <br />
      <Bar />
      <h3>Topic 1: SRE & DevOps</h3>

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
