import React from "react";
import PostBox from "./PostBox";

const FullPost = (props) => {
  return (
    <div className="px-2 py-2 mx-auto" style={{ maxWidth: "800px" }}>
      <PostBox post={{}} open={true} />
    </div>
  );
};

export default FullPost;
