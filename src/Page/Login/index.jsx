import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "../../Property/Form";

const Login = () => {
  return (
    <Fragment>
      <div className="row">
        <div className="col-8"></div>
        <div className="col-4 p-4">
          <h4>login user</h4>
          <form>
            <Input label={"email address"} className="form-control" />
            <Input label={"password"} className="form-control" />
            <Button className="form-control btn btn-success" label={"login"} />
          </form>
          <Link to="/register">register</Link>
          <Link to="/about">about</Link>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;
