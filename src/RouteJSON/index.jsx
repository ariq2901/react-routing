import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Layout from "./layout";
import Login from "../Page/Login";
import ProtectedRoute from "../Components/ProtectedRoute";
import ProtectedRouter from "../Components/ProtectedRouter";
import Register from "../Page/Register/Register";

const Index = () => {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/admin" component={Layout} />
        <ProtectedRouter path="/login" component={Login} />
        <ProtectedRouter path="/register" component={Register} />
        <Redirect from="/" to="/admin/home" />
      </Switch>
    </Router>
  );
};
export default Index;
