import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const GoBack = (props) => {
  console.log("goback", props);
  const RedirectHandle = () => {
    props.history.push("/");
  };
  const BackHandle = () => {
    props.history.goBack(); //bisa digunakan jika tidak dibungkus route, harus diluar
  };

  return (
    <Fragment>
      <div>
        <button onClick={RedirectHandle}>Redirect</button>
        <button onClick={BackHandle}>Back</button>
      </div>
    </Fragment>
  );
};
export default withRouter(GoBack);
