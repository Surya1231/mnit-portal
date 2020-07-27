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
import { authLocalUser } from "./store/reducers/auth";
import { connect } from "react-redux";
import RedirectIfNotAuth from "./components/common/RedirectIfNotAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countapi from "countapi-js";

import "./css/app.scss";
import { namespace, globalAPI } from "./api/countapi";

toast.configure();
class App extends React.Component {
  componentDidMount = () => {
    this.props.authLocalUser();
    countapi.hit(namespace, globalAPI);
  };

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
            <RedirectIfNotAuth
              exact
              path="/company"
              user={this.props.user}
              component={Company}
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

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    authLocalUser: () => dispatch(authLocalUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
