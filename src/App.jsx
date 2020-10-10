import "./styles.css";
import React from "react";
import Nav from "./Page/Nav";
import Home from "./Page/Home";
import About from "./Page/About";
import Login from "./Page/Login";
import Contact from "./Page/Contact";
import withHoc from "./Page/HOC/withHoc";
import NotFound from "./Page/NotFound";
import Corona from "./Page/Corona";
import Register from "./Page/Register/Register";
import DetailUser from "./Page/DetailUser";
import ProtectedRoute from "./Components/ProtectedRoute";
import ProtectedRouter from "./Components/ProtectedRouter";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from "react-router-dom";

export default function App() {
  const [locals, setLocalStorage] = React.useState(false);

  React.useMemo(() => {
    if (localStorage.getItem("token")) {
      setLocalStorage(true);
    }
  }, [locals]);

  return (
    <div className="App">
      <Router>
        {/* bisa memakai switch / tidak -> lebih direkomendasikan memakai switch agar lebih optimal */}
        <Switch>
          <ProtectedRoute path="/" exact>
            <Nav>
              <Home />
            </Nav>
          </ProtectedRoute>
          <Route path="/about">
            <Nav>
              <About />
            </Nav>
          </Route>
          <Route path="/contact">
            <Nav>
              <Contact />
            </Nav>
          </Route>
          <Route path="/corona">
            <Nav>
              <Corona />
            </Nav>
          </Route>
          <ProtectedRoute path="/DetailUser/:id">
            <Nav>
              <DetailUser />
            </Nav>
          </ProtectedRoute>
          <ProtectedRouter path="/login">
            <Nav>
              <Login />
            </Nav>
          </ProtectedRouter>
          {/* {locals ? (
            <Route>
              <Redirect to="/" />
            </Route>
          ) : (
            <Route path="/login" component={Login} />
          )}
          {locals ? (
            <Route>
              <Redirect to="/" />
            </Route>
          ) : (
            <Route path="/register" component={Register} />
          )} */}
          <Route>
            <Nav>
              <NotFound />
            </Nav>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
