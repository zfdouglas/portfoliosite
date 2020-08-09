import * as React from "react";
import "./Portfolio.css";
const munin = require("../img/munin.PNG");
const disney = require("../img/disney.PNG");

function PortfolioItem(props: any) {
  function imageChooser(portfolioItem: any) {
    if (portfolioItem === "munin") {
      return munin;
    } else if (portfolioItem === "avast") {
      return munin;
    } else if (portfolioItem === "disney") {
      return disney;
    }
  }
  return (
    <div className="PortfolioItem">
      <div className="PortfolioItemImageContainer">
        <img
          src={imageChooser(props.imgsrc)}
          alt={props.imgalt}
          className="PortfolioItemImage"
        />
      </div>
      <div className="PortfolioItemInfo">
        <div className="ItemTitle">Project: {props.title}</div>
        <div className="ItemDescription">
          <div className="Header">Brief Description:</div> {props.description}
        </div>
        <div className="Technologies">
          <div className="Header">Technologies:</div> {props.technologies}
        </div>
        <div className="ItemButton">
          <div>Check It Out</div>
          {props.url}
        </div>
      </div>
    </div>
  );
}
export default PortfolioItem;
