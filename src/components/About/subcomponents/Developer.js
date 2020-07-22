import React from "react";
import { CenterDiv } from "../../common/ResponsiveDiv";

const Developer = () => {
  return (
    <CenterDiv>
      <div
        className="card custom-card mx-auto px-2"
        style={{ maxWidth: "30rem" }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/about/suryaprakash.jpg`}
          className="card-img-top circle-image"
          alt="..."
        />
        <div className="card-body">
          <h2 className="text-center text-primary pointer">
            <a
              href="https://surya1231.github.io"
              rel="noopener noreferrer"
              target="_blank"
            >
              Suryaprakash Agarwal
            </a>
          </h2>
          <p className="card-text text-center"></p>
        </div>
      </div>
    </CenterDiv>
  );
};

export default Developer;
