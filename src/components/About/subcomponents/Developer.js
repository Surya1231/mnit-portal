import React from "react";
import { CenterDiv } from "../../common/ResponsiveDiv";

const Developer = () => {
  return (
    <CenterDiv>
      <div className="card custom-card" style={{ width: "30rem" }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/about/suryaprakash.jpg`}
          className="card-img-top circle-image"
          alt="..."
        />
        <div className="card-body">
          <h2 className="text-center text-primary">Suryaprakash Agarwal</h2>
          <p className="card-text text-center"></p>
        </div>
      </div>
    </CenterDiv>
  );
};

export default Developer;
