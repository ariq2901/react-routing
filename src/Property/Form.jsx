import React, { Fragment } from "react";

export const Input = ({ label, validasi, ...rest }) => {
  return (
    <Fragment>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          {label}
        </label>
        <input {...rest} /* mengambil semua props */ />
        <div id="emailHelp" className="form-text">
          {validasi}
        </div>
      </div>
    </Fragment>
  );
};

export const Button = ({ label, ...rest }) => {
  return (
    <div>
      <button {...rest}>{label}</button>
    </div>
  );
};
