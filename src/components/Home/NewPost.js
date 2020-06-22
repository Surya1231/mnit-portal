import React from "react";
import Editor from "./Editor";

class NewPost extends React.Component {
  state = {};

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
    console.log(this.state);
  };

  render() {
    return (
      <div className="w-100 bg-white px-2 px-md-4 py-4 mt-3 shadow rounded">
        <h5 className="text-primary text-center font-weight-semibold ">
          New Post
        </h5>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="form-control"
              onChange={this.onChangeHandle}
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
                  onChange={this.onChangeHandle}
                />
                <label className="form-check-label">
                  Post this Anonymously
                </label>
              </div>
            </div>
          </div>
          <div className="form-group mt-3">
            <button className="btn btn-outline-primary px-4">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default NewPost;
