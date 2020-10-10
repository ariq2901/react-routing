import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import DashboardRoutes from "./routes";

const Layout = () => {
  const Navbar = DashboardRoutes.map((link, key) => {
    const { layout, path, name } = link;
    return (
      <div>
        <NavLink
          activeStyle={{ fontWeight: "bold", color: "red" }}
          to={layout + path}
        >
          {name}
        </NavLink>
      </div>
    );
  });
  const Content = (
    <Switch>
      {DashboardRoutes.map((routes, key) => {
        const { path, Component, layout, props } = routes;
        if (layout == "/admin")
          return (
            <Route path={layout + path} key={key}>
              <Component />
            </Route>
          );
        return null;
      })}
      <Redirect from="/admin" to="/home" />
    </Switch>
  );

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row bg-primary">JSON Config</div>
        <div className="row">
          <div className="col-3 bg-light vh-100">{Navbar}</div>
          <div className="col-9">{Content}</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Layout;
