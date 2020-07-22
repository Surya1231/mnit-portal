import React from "react";
import { connect } from "react-redux";
import { addNewComment } from "../../../store/reducers/home";

class NewComment extends React.Component {
  state = {
    commenting: false,
    comment: "",
    anonymous: false,
  };

  onChangeHandler = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };

  changeCommenting = (value) => {
    if (value && this.props.user === null) {
      // Notify to login
      return;
    }
    this.setState({
      commenting: value,
    });
    if (!value) {
      this.setState({ comment: "" });
    }
  };

  onSubmit = () => {
    this.props.addComment(this.props.id, {
      id: 10,
      comment: this.state.comment,
      commentedBy: this.props.user,
      anonymous: this.state.anonymous ? true : false,
      createdAt: new Date(),
    });
    this.setState({ comment: "", commenting: false });
  };

  render() {
    return (
      <div
        className="commentbox pt-2 pb-1 border-top"
        onFocus={() => this.changeCommenting(true)}
      >
        <textarea
          className="w-100 px-3 py-1"
          placeholder={
            this.props.user ? "Add new comment" : "Please login to add comment"
          }
          name="comment"
          rows={this.state.commenting ? 4 : 2}
          value={this.state.comment}
          onChange={this.onChangeHandler}
          disabled={!this.props.user}
          required
        />
        {this.state.commenting && (
          <div className="buttons row">
            <div className="form-check col-md-6">
              <input
                className="form-check-input"
                name="anonymous"
                type="checkbox"
                onChange={this.onChangeHandler}
              />
              <label className="form-check-label">Post this Anonymously</label>
            </div>
            <div className="col-md-6 px-0 mt-2 mt-md-0 text-md-right">
              <button
                className="btn btn-outline-danger mr-2 btn-sm px-4"
                onClick={() => this.changeCommenting(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-outline-primary btn-sm px-4"
                onClick={this.onSubmit}
                disabled={!this.props.user}
              >
                Post
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
    addComment: (id, comment) => dispatch(addNewComment(id, comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewComment);
