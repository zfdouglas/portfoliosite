import * as React from "react";
import JobRow from "../Job/JobRow";
function JobTable() {
  let se2Deets = ["Getting", "Good", "At Stuff"];
  return (
    <div>
      <table>
        <tbody>
          <JobRow
            jobDesc="Software Engineer II"
            hirer="Sovos Compliance"
            date="Aug 2020-Present"
            bullets={se2Deets}
          />
          <JobRow
            jobDesc="Software Engineer I"
            hirer="Sovos Compliance"
            date="Aug 2019-August 2020"
            bullets={se2Deets}
          />
          <JobRow
            jobDesc="Quality Assurance Engineer I"
            hirer="Sovos Compliance"
            date="June 2018-August 2019"
            bullets={se2Deets}
          />
          <JobRow
            jobDesc="Front End Designer and Media Consultant"
            hirer="EcoSystems"
            date="June 2017-June 2018"
            bullets={se2Deets}
          />
          <JobRow
            jobDesc="Instructor"
            hirer="Lindamood Bell Learning Processes"
            date="June 2016-December 2017"
            bullets={se2Deets}
          />
        </tbody>
      </table>
    </div>
  );
}
export default JobTable;
