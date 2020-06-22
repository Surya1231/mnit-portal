import React from "react";

export const MobileHiddenDiv = ({ children }) => {
  return <div className="d-none d-md-block">{children}</div>;
};

export const CenterDiv = ({ children }) => {
  return (
    <div className="center-box-container overflow-y-auto">
      <div className="center-box w-100 px-2">{children}</div>
    </div>
  );
};
