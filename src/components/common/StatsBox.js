import React from "react";
import countapi from "countapi-js";
import { namespace, globalAPI, localCount } from "../../api/countapi";
import { animateValue } from "../../utils/animation";

class StatsBox extends React.Component {
  componentDidMount = () => {
    countapi
      .get(namespace, globalAPI)
      .then((res) =>
        animateValue(
          "totalValue",
          0,
          res.value,
          Math.min(3000, res.value * 100)
        )
      );
    countapi
      .get(namespace, localCount)
      .then((res) =>
        animateValue("logins", 0, res.value, Math.min(3000, res.value * 100))
      );
  };

  render() {
    return (
      <div className="sidebox mt-3">
        <ul className="list-group">
          <li className="list-group-item heading text-center"> Stats </li>
          <li className="list-group-item py-3 px-3 text-center">
            <div className="row">
              <div className="col-6">
                <span id="totalValue" className="font-weight-bold text-primary">
                  0
                </span>
                <br />
                <span className="">Total visits </span>
              </div>
              <div className="col-6">
                <span id="logins" className="font-weight-bold text-success">
                  0
                </span>
                <br />
                <span className=""> Logins </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default StatsBox;
