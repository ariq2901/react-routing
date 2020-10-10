import React, { Fragment } from "react";
import GoBack from "../HOC/GoBack";
import { Switch, Route, NavLink, useRouteMatch } from "react-router-dom";

const Corona = () => {
  let match = useRouteMatch();
  console.log("match", match);

  return (
    <Fragment>
      <h2>Belajar Nested Route</h2>
      <h2>Corona</h2>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to={`${match.url}/positif`}
      >
        Data positif
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to={`${match.url}/sembuh`}
      >
        Data sembuh
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to={`${match.url}/meninggal`}
      >
        Data meninggal
      </NavLink>
      <Switch>
        <Route path="/corona/positif">
          <h2>data positif</h2>
        </Route>
        <Route path="/corona/sembuh">
          <h2>data sembuh</h2>
        </Route>
        <Route path="/corona/meninggal">
          <h2>data meninggal</h2>
        </Route>
      </Switch>
      <GoBack />
    </Fragment>
  );
};
export default Corona;
