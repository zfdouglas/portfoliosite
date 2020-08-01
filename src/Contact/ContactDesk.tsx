import * as React from "react";
import "./ContactDesk.css";
import ContactCard from "./ContactCard";

function ContactDesk() {
  return (
    <div className="ContactDesk">
      <div className="MainDiv">
        <ContactCard
          formOfContact="email"
          iVal="fas fa-at"
          mode="Shoot Me An Email"
          action="email"
        />
        <ContactCard
          formOfContact="LinkedIn"
          iVal="fab fa-linkedin-in"
          mode="Link Up With Me"
          action="https://www.linkedin.com/in/zachary-douglas/"
        />
        <ContactCard
          formOfContact="GitHub"
          iVal="fab fa-github"
          mode="Check Out My Code"
          action="http://github.com/zfdouglas"
        />
      </div>
    </div>
  );
}
export default ContactDesk;
