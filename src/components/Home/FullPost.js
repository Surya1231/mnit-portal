import React from "react";
import PostBox from "./PostBox";

const FullPost = ({ post }) => {
  return (
    <div className="px-2 py-2 mx-auto" style={{ maxWidth: "800px" }}>
      <PostBox post={post} open={true} />
    </div>
  );
};

export default FullPost;
