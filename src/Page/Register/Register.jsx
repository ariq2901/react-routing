import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Input, Button } from "../../Property/Form";
import { config } from "../../config";

const Register = (props) => {
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    Post();
  };

  const Post = async () => {
    const url = `${config.api_host}/register`;
    const payload = {
      email: email,
      password: password
    };
    console.log(url);
    console.log(payload);
    try {
      let response = await Axios.post(url, payload);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      props.history.push("/");
    } catch {
      console.log("Gak bisa daftar");
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="font-weight-bold m-0 p-0 float-left">
                  Register
                </h3>
                <Link to="/">
                  <button className="btn">Back</button>
                </Link>
              </div>
              <div className="card-body">
                <form onSubmit={onSubmit} action="">
                  <Input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                    type="email"
                    label="Email Address"
                    className="form-control"
                  />
                  <Input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                    type="password"
                    label="Password"
                    className="form-control"
                  />
                  <p className="font-weight-lighter">
                    Sudah punya akun? Login <Link to="/login">disini</Link>
                  </p>
                  <Button className="btn btn-success" label={"Register"} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
