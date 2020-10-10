import React, { Fragment } from "react";
import Contact1 from "./contact1";
import Contact2 from "./contact2";

const Contact = () => {
  return (
    <Fragment>
      <h2>Contact</h2>
      <div className="row">
        <div className="col-6">
          <Contact1 />
        </div>
        <div className="col-6">
          <Contact2 />
        </div>
      </div>
    </Fragment>
  );
};
export default Contact;
