import React from "react";

export const Info = () => {
  return (
    <div className="px-4 py-4">
      <h2>
        <span style={{ color: "rgb(0, 71, 178)" }}>Welcome to MNIT Portal</span>
      </h2>
      <p>
        <span style={{ color: "rgb(0, 97, 0)" }}>
          This portal is developed for students with key features:
        </span>
      </p>
      <ul>
        <li>
          <span style={{ color: "rgb(255, 153, 0)" }}>
            Post and discuss your doubts anonymously
          </span>
        </li>
        <li>
          <span style={{ color: "rgb(161, 0, 0)" }}>
            Get realtime leaderboard
          </span>
        </li>
        <li>
          <span style={{ color: "rgb(107, 36, 178)" }}>
            Any kind of information regarding interviews
          </span>
        </li>
        <li>
          <span style={{ color: "rgb(240, 102, 102)" }}>
            Many more features coming soon<span className="ql-cursor">﻿</span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Info;
