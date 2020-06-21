import React from "react";

class CompanyInputBar extends React.Component {
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
          <div className="form-group col-sm-5">
            <label htmlFor="target">Target</label>
            <select
              name="target"
              id="target"
              className="form-control"
              onChange={this.onChangeHandle}
            >
              <option value="Placements"> Placements </option>
              <option value="Internship"> Internship </option>
            </select>
          </div>
          <div className="form-group col-sm-5">
            <label htmlFor="year">Year</label>
            <select
              name="year"
              id="year"
              defaultValue="2019-20"
              className="form-control"
              onChange={this.onChangeHandle}
            >
              <option value="2019-20">2019-20</option>
              <option value="2018-19">2018-19</option>
              <option value="2017-18">2017-18</option>
            </select>
          </div>
          <div className="form-group col-sm-2  pt-4">
            <button className="btn btn-outline-info btn-block"> Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default CompanyInputBar;
