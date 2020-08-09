import * as React from "react";
import "./ContactDesk.css";

function ContactCard(ContactProps: any) {
  function actionChanger(Action: any) {
    if (Action === "email") {
      return (window.location.href = "mailto:zacharyfdouglas@gmail.com");
    } else {
      return window.open(ContactProps.action, "_blank");
    }
  }
  return (
    <div className="ContactCard">
      <h1>{ContactProps.formOfContact}</h1>
      <i className={`${ContactProps.iVal} fa-3x`}></i>
      <div
        className="Data"
        onClick={() => {
          actionChanger(ContactProps.action);
        }}
      >
        {ContactProps.mode} <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
}
export default ContactCard;
