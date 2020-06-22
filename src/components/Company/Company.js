import React from "react";
import CompanyInputBar from "./CompanyInputBar";

class Company extends React.Component {
  state = {
    values: {
      target: "Placements",
      year: "2019-20",
    },
  };

  onSubmit = (values) => {
    console.log(values);
    this.setState({
      values,
    });
  };

  render() {
    return (
      <div className="content-box pt-3">
        <CompanyInputBar
          initialValues={this.state.values}
          onSubmit={this.onSubmit}
        />
        <hr />
        <pre> {JSON.stringify(this.state.values)}</pre>
      </div>
    );
  }
}

export default Company;
