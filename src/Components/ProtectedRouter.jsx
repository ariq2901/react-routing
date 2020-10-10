import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRouter = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(false);
  React.useMemo(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    }
  }, [auth]);

  return (
    <div>
      <Route {...rest}>{auth ? <Redirect to="/" /> : children}</Route>
    </div>
  );
};

export default ProtectedRouter;
