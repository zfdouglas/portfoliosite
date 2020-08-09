import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import GraphicItem from "./GraphicItem";
import "./Portfolio.css";
const caret = require("../img/caret.svg");

function Portfolio() {
  const [isShown, toggleShown] = useState(false);
  return (
    <div className="PortfolioDesk">
      <div className="PortfolioHeadline">
        <div>Works</div>
      </div>
      <div className="MainDiv">
        <PortfolioItem
          title="Munin Tarot API"
          description="A tarot card reading API built with Node.js and Express.js. I also created a totally responsive UI that demos the capabilities of the API, as well as gives documentation. Currently, the demo is not available as github pages only hosts static webpages."
          technologies="React, Node.js, Express.js, Responsive Layouts, GIF animation, RESTful API"
          url=""
          imgsrc="munin"
          imgalt="PictureOfMuninHomepage"
        />
        <PortfolioItem
          title="Personality Quiz"
          description="A personality quiz React.js app. Completely responsive and incredibly performant. The site also relies on no outside UI libraries or graphics. All UI artifacts were designed or coded by me."
          technologies="React.js, Responsive Layouts, Vector graphics"
          url=""
          imgsrc="disney"
          imgalt="PictureOfDisneyAppHomepage"
        />
        <PortfolioItem
          title="Weather and Beach App"
          description="An App that utilizes API function to take in a location anywhere in the US, find the nearest beaches, and give the weather for the area. Fully responsive."
          technologies="React.js, Responsive Layouts, RESTful API, Vector graphics."
          url=""
          imgsrc="munin"
          imgalt="AvastHomepage"
        />
        <div
          className="Graphic"
          onClick={() => {
            toggleShown(!isShown);
          }}
        >
          <div className="GraphicButton">Vector Graphic Samples</div>
          {isShown ? (
            <img
              src={caret}
              className="JobCaretTurnPortfolio"
              alt="DropDown Caret"
            />
          ) : (
            <img
              src={caret}
              className="JobCaretPortfolio"
              alt="DropDown Caret"
            />
          )}
        </div>
        {isShown ? (
          <div className="GraphicBox">
            <GraphicItem
              url={require("../img/LastChance.png")}
              alt="LastChanceCafeLogo"
              description="Cool"
            />
            <GraphicItem
              url={require("../img/Cracked.png")}
              alt="CrackedLogo"
              description="Cool"
            />
            <GraphicItem
              url={require("../img/CaptnBill.png")}
              alt="CrackedLogo"
              description="Cool"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Portfolio;
