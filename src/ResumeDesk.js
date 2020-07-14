import React from "react";
import "./ResumeDesk.css";
import seal from "./umassseal.png";
import sovos from "./sovos.png";
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
          <div>SQL</div> <div>Agile</div> <div>User Interface Design</div>
          <div>Quality Assurance</div> <div>Automated Testing</div>
          <div>Express.js</div> <div>Python</div> <div>RESTful Services</div>
        </div>
        <div className="Experience">
          <h2>Experience</h2>
          <table>
            <tbody>
              <tr className="Job">
                <td className="JobImage">
                  <img src={sovos} alt="Sovos logo" />
                </td>
                <td className="basicData">
                  <h3>SOVOS COMPLIANCE</h3>
                  <h4>Software Engineer II</h4>
                </td>
                <td
                  style={{
                    textAlign: "right",
                    alignSelf: "center",
                    marginRight: "2%",
                  }}
                >
                  <h4>2020-Present</h4>
                </td>
              </tr>
              <tr style={{ textAlign: "left" }}>
                <ul>
                  <li>hood rat shit</li>
                  <li>helicopters</li>
                </ul>
              </tr>
            </tbody>
          </table>
          {/* <div className="Job">
            <div className="JobImage">
              <img src={sovos} alt="Sovos logo" />
            </div>
            <div className="basicData">
              <h3>Sovos Compliance</h3>
              <h4>2019-Present</h4>
            </div>
          </div>
          <div className="tasks">
            <ul>
              <li>Fucked Hoes</li>
            </ul>
          </div> */}
        </div>
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
      </div>
    </div>
  );
}
export default ResumeDesk;
