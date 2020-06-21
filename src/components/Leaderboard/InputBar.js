import React from "react";

class InputBar extends React.Component {
  state = this.props.initialValues;

  onChangeHandle = (eve) => {
    this.setState({
      [eve.target.name]: eve.target.value,
    });
  };

  onSubmitHandler = (eve) => {
    eve.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="row px-2">
          <div className="form-group col-md-2">
            <label htmlFor="platform">Platform</label>
            <select
              name="platform"
              id="platform"
              className="form-control"
              onChange={this.onChangeHandle}
            >
              <option value="codeforces"> Codeforces </option>
            </select>
          </div>
          <div className="form-group col-md-2 mt-2 mt-md-0">
            <label htmlFor="year">Year</label>
            <select
              name="year"
              id="year"
              defaultValue="overall"
              className="form-control"
              onChange={this.onChangeHandle}
            >
              <option value="overall">Overall</option>
              <option value="2">2nd Year</option>
              <option value="1">1st Year</option>
            </select>
          </div>
          <div className="form-group col-md-4  mt-2 mt-md-0">
            <label htmlFor="contest"> Contest</label>
            <select
              name="contest"
              defaultValue="overall"
              className="form-control"
              onChange={this.onChangeHandle}
            >
              <option value="overall">Overall</option>
              <option value="custom">Custom Contest</option>
              {this.props.recentContest.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-md-2  mt-2 mt-md-0">
            <label htmlFor="contestId"> Contest Id</label>
            <input
              type="text"
              name="customId"
              className="form-control"
              onChange={this.onChangeHandle}
              disabled={this.state.contest !== "custom"}
              required={this.state.contest === "custom"}
            />
          </div>
          <div className="form-group col-md-2 pt-4">
            <button className="btn btn-outline-info btn-block"> Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default InputBar;
