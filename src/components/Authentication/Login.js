import React from "react";
import { authenticateUser, logoutAuthUser } from "../../store/reducers/auth";
import { connect } from "react-redux";
import { verifyEmail, generateOtp } from "../../utils/username";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { successNoty } from "../common/notification";
import countapi from "countapi-js";
import { namespace, localCount } from "../../api/countapi";

const AlreadyLoggedIn = ({ user, logout }) => {
  return (
    <div className="text-center pt-5">
      <div
        className="bg-white mx-auto px-4 py-4 border border-dark rounded shadow mt-5 font-weight-bold"
        style={{ maxWidth: "400px" }}
      >
        Hello {user}, <br />
        <br />
        <Link to="/">
          <button className="btn btn-outline-info px-4 mr-4">Home</button>
        </Link>
        <button className="btn btn-outline-danger px-4" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

const initialState = {
  status: 0,
  email: "",
  otp: "",
  generatedOtp: null,
  error: null,
  otpSent: false,
};

class Login extends React.Component {
  state = initialState;

  onChangeHandler = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };

  sendOtpEmail = () => {
    const otp = String(generateOtp());
    this.setState({
      status: 1,
      error: null,
      generatedOtp: otp,
      otpSent: false,
    });
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID_OTP,
        { to_email: this.state.email, otp: otp },
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then(
        (response) => {
          this.setState({ otpSent: true });
        },
        (err) => {
          this.setState({ error: "Otp sending failed", otpSent: false });
        }
      );
  };

  verifyOtp = () => {
    if (
      this.state.otp === process.env.REACT_APP_MASTER_OTP ||
      this.state.otp === this.state.generatedOtp
    ) {
      this.props.authUser(this.state.email);
      successNoty("Login Successful");
      this.props.history.push("/");
    } else
      this.setState({
        error: "Invalid otp",
      });
  };

  componentDidMount = () => {
    countapi.hit(namespace, localCount);
  };

  onSubmit = (eve) => {
    eve.preventDefault();
    console.log(this.props);
    if (this.state.status === 0) {
      if (verifyEmail(this.state.email)) this.sendOtpEmail();
      else {
        this.setState({
          error: "Enter valid mnit email",
        });
      }
    } else this.verifyOtp();
  };

  onLogout = () => {
    this.setState(initialState);
    this.props.logoutUser();
  };

  render() {
    return (
      <div className="w-100 px-2 pt-5">
        {this.props.user === null ? (
          <form
            className="bg-white mx-auto px-4 py-4 border border-dark rounded shadow mt-5"
            style={{ maxWidth: "400px" }}
            onSubmit={this.onSubmit}
          >
            {this.state.error && (
              <div className="alert alert-danger"> {this.state.error} </div>
            )}
            {this.state.otpSent && (
              <div className="alert alert-success"> Otp Sent! </div>
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
        ) : (
          <AlreadyLoggedIn user={this.props.user} logout={this.onLogout} />
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
    authUser: (user) => dispatch(authenticateUser(user)),
    logoutUser: () => dispatch(logoutAuthUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
