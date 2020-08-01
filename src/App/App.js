import React from "react";
import logo from "../img/realzfd3.png";
import AboutDesk from "../AboutDesk/AboutDesk.js";
import ResumeDesk from "../Resume/ResumeDesk.js";
import ContactDesk from "../Contact/ContactDesk.tsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "welcome",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="appHeaderWelcome">
          <div
            onClick={() => {
              this.setState({
                view: "welcome",
              });
            }}
            className="logoDiv"
          >
            <img src={logo} className="appLogoWelcome" alt="logo" />
          </div>
          <div className="appNavWelcome">
            <div
              onClick={() => {
                this.setState({
                  view: "about",
                });
              }}
            >
              About
            </div>
            <div
              onClick={() => {
                this.setState({
                  view: "resume",
                });
              }}
            >
              Resume
            </div>
            <div>Portfolio</div>
            <div
              onClick={() => {
                this.setState({
                  view: "contact",
                });
              }}
            >
              Contact
            </div>
          </div>
        </header>
        {this.state.view === "welcome" && (
          <div className="appBodyWelcome">
            <div className="appBannerWelcome">
              <div className="appBannerWelcomeNameP">Zachary Finn Douglas</div>
              <div className="appBannerWelcomeJobP">Software Engineer</div>
              <button
                className="appBannerWelcomeButton"
                onClick={() => {
                  this.setState({
                    view: "contact",
                  });
                }}
              >
                Contact Me
              </button>
            </div>
            <footer className="appFooterWelcome">
              Lovingly Crafted by ZFDouglas
            </footer>
          </div>
        )}
        {this.state.view === "resume" && <ResumeDesk />}
        {this.state.view === "about" && <AboutDesk />}
        {this.state.view === "contact" && <ContactDesk />}
      </div>
    );
  }
}

export default App;
