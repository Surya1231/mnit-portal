import React from "react";

const QuoteBox = ({
  heading = "Quote",
  body = "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
}) => {
  return (
    <div className="sidebox mt-3 font-sm">
      <ul className="list-group">
        <li className="list-group-item heading text-center"> {heading} </li>
        <li className="list-group-item py-3 px-3 text-center">{body}</li>
      </ul>
    </div>
  );
};

export default QuoteBox;
