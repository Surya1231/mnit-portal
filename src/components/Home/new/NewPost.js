import React from "react";
import Editor from "./Editor";
import { createNewPost } from "../../../store/reducers/home";
import { connect } from "react-redux";

class NewPost extends React.Component {
  state = {
    category: "General",
    anonymous: false,
    content: "",
    error: null,
    success: null,
  };

  onChangeHandle = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };

  onDescriptionChange = (html) => {
    this.setState({
      content: html,
    });
  };

  onSubmit = (eve) => {
    eve.preventDefault();
    if (this.state.content.length < 10)
      this.setState({ error: "Insufficient Content" });
    else if (this.props.user === null)
      this.setState({ error: "Login to continue" });
    else {
      console.log(this.state);
      this.setState({ error: null });
      this.props.createPost({
        postedBy: this.props.user,
        createdAt: new Date(),
        category: this.state.category,
        anonymous: this.state.anonymous ? true : false,
        content: this.state.content,
      });
      this.setState({
        category: "General",
        anonymous: false,
        content: "",
        error: null,
        success: "Successfully Posted",
      });
      this.props.toggleNewPost();
    }
  };

  render() {
    return (
      <div className="w-100 bg-white px-2 px-md-4 py-3 mt-3 shadow rounded font-sm">
        <h6 className="text-primary text-center font-weight-semibold ">
          New Post
        </h6>
        {this.state.error && (
          <div className="alert alert-danger mt-2"> {this.state.error}</div>
        )}
        {this.state.success && (
          <div className="alert alert-success mt-2"> {this.state.success}</div>
        )}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-control"
              onChange={this.onChangeHandle}
              defaultValue="General"
            >
              {this.props.categories.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <Editor
              placeHolder="Description"
              onChange={this.onDescriptionChange}
            />
          </div>
          <div className="form-group row mt-3">
            <div className="col-sm-2 px-0"> Posted By : </div>
            <div className="col-sm-10 px-0">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                  name="anonymous"
                  value={true}
                  onChange={this.onChangeHandle}
                />
                <label className="form-check-label">
                  Post this Anonymously
                </label>
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <button
              className="btn btn-outline-danger px-4 mr-3 btn-sm"
              onClick={this.props.toggleNewPost}
            >
              Back
            </button>
            <button className="btn btn-outline-primary btn-sm px-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createNewPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
