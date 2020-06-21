import React from "react";

const StatsBox = () => {
  return (
    <div className="sidebox mt-3">
      <ul className="list-group">
        <li className="list-group-item heading text-center"> Stats </li>
        <li className="list-group-item py-3 px-3 text-center">
          <div className="row">
            <div className="col-6">
              <span id="totalValue" className="font-weight-bold text-primary">
                2345
              </span>
              <br />
              <span className="">Total visits </span>
            </div>
            <div className="col-6">
              <span className="font-weight-bold text-success"> 200 </span>
              <br />
              <span className="">Recent visits </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatsBox;
