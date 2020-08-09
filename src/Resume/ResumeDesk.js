import React from "react";
import "./ResumeDesk.css";
import seal from "../img/umassseal.png";
import JobTable from "../Job/JobTable.tsx";

function ResumeDesk() {
  return (
    <div className="ResumeDeskHolder">
      <div className="NameHolder">
        <h1 className="Name">Zachary Finn Douglas</h1>
      </div>
      <div
        style={{
          width: "80vw",
          backgroundColor: "rgba(235, 235, 235, 0.644)",
          marginTop: "2%",
        }}
      >
        <div className="Highlights">
          <h2>In Summary</h2>
          Fullstack Software Engineer II with 4 years experience tackling
          everything from ultra-modern webstacks to monolithic legacy
          applications. From whiteboards, to planning, to the screen, I am
          comfortable advocating, collaborating, and producing high-quality code
          in multiple languages and frameworks. With an eye for design and user
          experience, I don't just make it work and work well- I make it look
          and feel good too.
        </div>
        <div className="SkillPanel">
          <h2>Skills</h2>
          <div>Java</div> <div>Javascript</div> <div>React.js</div>
          <div>SQL</div> <div>TypeScript</div> <div>Modern UI Frameworks</div>
          <div>Agile</div> <div>User Interface Design</div>
          <div>Quality Assurance</div> <div>Automated Testing</div>
          <div>Express.js</div> <div>Python</div> <div>RESTful Services</div>
          <div>Responsive Design</div>
        </div>
        <div className="Experience">
          <h2>Experience</h2>
          <JobTable />
        </div>
        <div className="MiscInfo">
          <div className="Education">
            <h2>Education</h2>
            <div className="UmassImage">
              <img
                src={seal}
                alt="Seal for University of Massachusetts Amherst"
              />
            </div>
            <div className="UmassInfo">
              <p>
                <h4>University of Massachusetts Amherst</h4>
              </p>
              <p>Bachelors of Science, Cum Laude</p>
              <p>2012-2016</p>
            </div>
          </div>
          <div className="Education">
            <h2>Research</h2>
            <div className="UmassImage">
              <img
                src={seal}
                alt="Seal for University of Massachusetts Amherst"
              />
            </div>
            <div className="UmassInfo">
              <p>
                <h4>Research Assistant</h4>
              </p>
              <p>Human Relations Lab</p>
              <p>2015-2016</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResumeDesk;
