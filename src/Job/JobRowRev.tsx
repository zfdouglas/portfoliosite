import * as React from "react";
import sovos from "../img/sovos.png";

function JobRowRev(props) {
  function logoChooser(hirer: string) {
    if (hirer === "Sovos Compliance") {
      return sovos;
    }
  }
  return (
    <div className="JobRowRev">
      <tr className="JobRev">
        <td
          style={{
            textAlign: "left",
            alignSelf: "center",
            marginLeft: "2%",
          }}
        >
          <h4>{props.date}</h4>
        </td>
        <td className="basicDataRev">
          <h3>{props.hirer}</h3>
          <h4>{props.jobDesc}</h4>
        </td>
        <td className="JobImage">
          <img src={logoChooser(props.hirer)} alt="Sovos logo" />
        </td>
      </tr>
      <tr style={{ textAlign: "left" }}>
        <ul>
          <li>{props.bullets[0]}</li>
          <li>{props.bullets[1]}</li>
          <li>{props.bullets[2]}</li>
        </ul>
      </tr>
    </div>
  );
}
export default JobRowRev;
