import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthUser } from "../../store/reducers/auth";
import { getUserName } from "../../utils/username";

const AuthBar = (props) => {
  return (
    <>
      {props.user ? (
        <li className="nav-item dropdown">
          <span
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {getUserName(props.user)}
          </span>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <span className="dropdown-item d-block pointer">Profile</span>
            <span
              className="dropdown-item d-block pointer"
              onClick={props.authUserLogout}
            >
              Logout
            </span>
          </div>
        </li>
      ) : (
        <li className="nav-item">
          <Link
            className={`nav-link ${
              props.pathname === "/login" ? "active" : ""
            }`}
            to="/login"
          >
            Login
          </Link>
        </li>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  authUserLogout: () => dispatch(logoutAuthUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthBar);
