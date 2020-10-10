import React from "react";
import WithHOC from "../HOC/withHoc";

const Contact1 = (props) => {
  const { counter, name } = props;
  return (
    <React.Fragment>
      <div>{counter}</div>
      <button
        onClick={props.incrementHandle}
        className="btn btn-sm btn-success"
      >
        Click Me
      </button>
      <h2>{name}</h2>
    </React.Fragment>
  );
};

export default WithHOC(Contact1, 1);
