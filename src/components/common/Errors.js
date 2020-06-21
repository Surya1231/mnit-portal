import React from "react";

export const FullScreenError = ({
  code = "OOPS !!",
  description = "Something has been Broken.",
}) => {
  return (
    <div className="pt-5">
      <div className="error text-center py-5">
        <h2> {code} </h2>
        {description}
      </div>
    </div>
  );
};
