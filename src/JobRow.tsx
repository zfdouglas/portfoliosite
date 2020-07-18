import * as React from "react";
import sovos from "./sovos.png";
import eco from "./thumbnail.png";
import lbd from "./lblogolong2.png";
import caret from "./caret.svg";

interface JobRowProps {
  hirer: string;
  jobDesc: string;
  date: string;
  bullets: string[];
}
interface TableState {
  detailsViewable: boolean;
}

class JobRow extends React.Component<JobRowProps, TableState> {
  constructor(props: JobRowProps) {
    super(props);
    this.state = {
      detailsViewable: false,
    };
    this.logoChooser = this.logoChooser.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
  }
  logoChooser(hirer: string) {
    if (hirer === "Sovos Compliance") {
      return sovos;
    } else if (hirer === "EcoSystems") {
      return eco;
    } else if (hirer === "Lindamood Bell Learning Processes") {
      return lbd;
    }
  }
  toggleButton() {
    this.setState({
      detailsViewable: !this.state.detailsViewable,
    });
  }
  render() {
    return (
      <div className="JobRow">
        <tr className="Job" onClick={this.toggleButton}>
          <td className="JobImage">
            <img src={this.logoChooser(this.props.hirer)} alt="Sovos logo" />
          </td>
          <td className="basicData">
            <h3>{this.props.hirer}</h3>
            <h4>{this.props.jobDesc}</h4>
          </td>
          <td
            style={{
              textAlign: "right",
              alignSelf: "center",
              marginRight: "2%",
            }}
          >
            <h4>{this.props.date}</h4>
            <span style={{ marginRight: "20%" }}>
              {this.state.detailsViewable ? (
                <img
                  src={caret}
                  className="JobCaretTurn"
                  alt="DropDown Caret"
                />
              ) : (
                <img src={caret} className="JobCaret" alt="DropDown Caret" />
              )}
            </span>
          </td>
        </tr>
        {this.state.detailsViewable ? (
          <tr style={{ textAlign: "left" }}>
            <ul>
              <li>{this.props.bullets[0]}</li>
              <li>{this.props.bullets[1]}</li>
              <li>{this.props.bullets[2]}</li>
            </ul>
          </tr>
        ) : null}
      </div>
    );
  }
}
export default JobRow;
