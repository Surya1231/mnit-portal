import React from "react";
import { authenticateUser, logoutAuthUser } from "../../store/reducers/auth";
import { connect } from "react-redux";
import { verifyEmail } from "../../utils/username";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    status: 0,
    email: "",
    otp: "",
    error: null,
  };

  onChangeHandler = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };

  onSubmit = (eve) => {
    eve.preventDefault();
    if (this.state.status === 0) {
      if (verifyEmail(this.state.email))
        this.setState({
          status: 1,
          error: null,
        });
      else {
        this.setState({
          error: "Enter valid mnit email",
        });
      }
    } else {
      this.props.authUser(this.state.email, this.state.otp);
    }
  };

  onLogout = () => {
    this.setState({
      status: 0,
      email: "",
      otp: "",
      error: null,
    });
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="w-100 px-2 pt-5">
        {this.props.user === null && (
          <form
            className="bg-white mx-auto px-4 py-4 border border-dark rounded shadow mt-5"
            style={{ maxWidth: "400px" }}
            onSubmit={this.onSubmit}
          >
            {this.state.error && (
              <div className="alert alert-danger"> {this.state.error} </div>
            )}
            {this.state.status === 0 ? (
              <>
                <div className="form-group ">
                  <label htmlFor="contestId"> Email Id</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="form-control"
                    onChange={this.onChangeHandler}
                    required
                  />
                  <span className="text-muted text-sm">
                    Only MNIT emails are allowed
                  </span>
                </div>
                <div className="form-group mt-4">
                  <button className="btn btn-outline-info btn-block">
                    Send OTP on Email
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="form-group ">
                  <h6>
                    Otp has been sent to{" "}
                    <span
                      className="text-primary pointer"
                      onClick={() => this.setState({ status: 0 })}
                    >
                      {this.state.email}
                    </span>
                  </h6>
                  <input
                    type="text"
                    name="otp"
                    value={this.state.otp}
                    className="form-control mt-4"
                    onChange={this.onChangeHandler}
                    required
                    placeholder="Enter Otp"
                  />
                </div>
                <div className="form-group mt-4">
                  <button className="btn btn-outline-info btn-block">
                    Submit
                  </button>
                </div>
              </>
            )}
          </form>
        )}

        {this.props.user !== null && (
          <div className="text-center pt-5">
            <div
              className="bg-white mx-auto px-4 py-4 border border-dark rounded shadow mt-5 font-weight-bold"
              style={{ maxWidth: "400px" }}
            >
              Hello {this.props.user}, <br />
              <br />
              <Link to="/">
                <button
                  className="btn btn-outline-info px-4 mr-4"
                  onClick={this.onLogout}
                >
                  Home
                </button>
              </Link>
              <button
                className="btn btn-outline-danger px-4"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (user, otp) => dispatch(authenticateUser(user, otp)),
    logoutUser: () => dispatch(logoutAuthUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
