import React from "react";

// Imports for bootstrap
import bootstrap from "bootstrap"; // eslint-disable-line
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router";
import Home from "./components/Home/Home";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import About from "./components/About/About";
import Interview from "./components/Interview/Interview";
import Company from "./components/Company/Company";
import { FullScreenError } from "./components/common/Errors";
import Login from "./components/Authentication/Login";
import FullPost from "./components/Home/FullPost";

import "./css/app.scss";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar pathname={this.props.location.pathname} />

        <div className="main-box pb-md-3">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/post/:id"
              render={(props) => <FullPost {...props} />}
            />
            <Route
              exact
              path="/leaderboard"
              render={(props) => <Leaderboard {...props} />}
            />
            <Route
              exact
              path="/interview"
              render={(props) => <Interview {...props} />}
            />
            <Route
              exact
              path="/company"
              render={(props) => <Company {...props} />}
            />
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} />}
            />
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            />
            <Route render={() => <FullScreenError />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
