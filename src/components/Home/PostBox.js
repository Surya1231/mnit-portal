import React, { useState } from "react";
import NewComment from "./NewComment";
import CopyOnClick from "../common/CopyOnClick";

const CommentBox = () => {
  return (
    <div className="commentbox py-2 border-top">
      <div className="row px-1">
        <div className="col-12 px-0 py-0">this is My comment</div>
        <div
          className="col-12 text-muted px-0 py-0 text-small"
          style={{ fontSize: "0.85rem" }}
        >
          10 min ago - Suryaprakash Agarwal
        </div>
      </div>
    </div>
  );
};

const PostBox = ({ post, open = false }) => {
  const url = String(window.location);
  const baseUrl = url.split("/")[0] + "//" + url.split("/")[2];
  const [showComment, changeShowComment] = useState(open);
  return (
    <div className="post mt-3">
      <div className="bg-white rounded py-2 px-3 px-md-4">
        <div className="meta-data font-weight-bold text-lg border-bottom pb-1">
          Anonymous
          <span className="float-right pr-3 font-weight-normal text-muted">
            10min Ago
          </span>
        </div>
        <div className="post-centent mt-2">
          Good market for iPhone and its apps, the rising number of IT companies
          offering iPhone apps development services and lack of thoroughly
          talented developers are the main reasons resulting in increasing
          demand for the fluent iOS developers across the globe. Highest
          salaries one can expect in the IT sector and world of opportunities
          available in this sector makes iPhone development one of the most
          desired or chosen professions of the present times.
          <br />
          <div className="info row">
            <div className="col-6 px-0 py-0 text-primary">
              <span className="pointer">
                <CopyOnClick
                  text="Copy post link"
                  link={`${baseUrl}${process.env.PUBLIC_URL}/post/70`}
                />
              </span>
            </div>
            <div className="col-6 px-0 py-0 text-right text-muted">General</div>
          </div>
        </div>
        <div className="action border-top mt-2">
          <div className="row">
            <div className="py-2 px-0 col-6 hover">
              <div className="text-center text-success border-right pointer">
                Upvote (20)
              </div>
            </div>
            <div className="py-2 px-0 col-6 hover">
              <div
                className="text-center text-danger pointer"
                onClick={() => changeShowComment(!showComment)}
              >
                Comment (30)
              </div>
            </div>
          </div>
        </div>
        {showComment && (
          <div className="comments  mt-2">
            <NewComment />
            <CommentBox />
            <CommentBox />
            <CommentBox />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostBox;
