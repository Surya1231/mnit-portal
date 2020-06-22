import React from "react";
import { CenterDiv } from "../../common/ResponsiveDiv";

const Github = () => {
  return (
    <CenterDiv>
      <div
        className="card custom-card mx-auto px-2"
        style={{ maxWidth: "30rem" }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/logos/logo.png`}
          className="card-img-top circle-image"
          alt="..."
        />
        <div className="card-body">
          <h2 className="text-center text-primary">
            <a
              href="https://github.com/Surya1231/mnit-portal"
              rel="noopener noreferrer"
              target="_blank"
            >
              Mnit Portal Github
            </a>
          </h2>
          <p className="card-text text-center">
            Please visit the github and repo and read readme.md for contribution
          </p>
        </div>
      </div>
    </CenterDiv>
  );
};

export default Github;
