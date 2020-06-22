import React, { useState } from "react";
import NewComment from "./NewComment";
import CopyOnClick from "../common/CopyOnClick";
import { getUserName } from "../../utils/username";
import { formatPostDate } from "../../utils/datetime";
import { AiOutlineComment, AiOutlineClockCircle } from "react-icons/ai";
import UpvotePost from "./UpvotePost";

const CommentBox = ({ comment }) => {
  return (
    <div className="commentbox py-2 border-top">
      <div className="row px-1">
        <div className="col-12 px-0 py-0" style={{ fontSize: "0.9rem" }}>
          {comment.comment}
        </div>
        <div
          className="col-12 text-muted px-0 py-0 text-small"
          style={{ fontSize: "0.85rem" }}
        >
          {formatPostDate(comment.createdAt)}
          {"  "}-{"  "}
          {comment.anonymous ? "Anonymous" : getUserName(comment.commentedBy)}
        </div>
      </div>
    </div>
  );
};

const LikeBox = ({ likes }) => {
  return (
    <div className="likebox py-2 border-top">
      <span className="text-base">
        Upvoted By : <span className="text-muted">{likes.join(" , ")}</span>
      </span>
    </div>
  );
};

const PostBox = ({ post, open = false }) => {
  const url = String(window.location);
  const baseUrl = url.split("/")[0] + "//" + url.split("/")[2];
  const [showComment, changeShowComment] = useState(open);
  return (
    <div className="post mt-3" style={{ fontSize: "0.9rem" }}>
      <div className="bg-white rounded py-2 px-3 px-md-4">
        <div className="meta-data font-weight-bold text-lg border-bottom pb-1">
          {post.anonymous ? "Anonymous" : getUserName(post.postedBy)}
          <span className="float-right pr-3 font-weight-normal text-muted">
            {formatPostDate(post.createdAt)}
            <div className="d-inline-block pl-1">
              <AiOutlineClockCircle size={15} />
            </div>
          </span>
        </div>
        <div className="post-centent mt-2">
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          <div className="info row">
            <div className="col-6 px-0 py-0 text-primary">
              <span className="pointer">
                <CopyOnClick
                  text="Copy post link"
                  link={`${baseUrl}${process.env.PUBLIC_URL}/post/${post.id}`}
                />
              </span>
            </div>
            <div className="col-6 px-0 py-0 text-right text-muted">
              {post.category}
            </div>
          </div>
        </div>
        <div className="action border-top mt-2">
          <div className="row">
            <div className="py-2 px-0 col-6 hover">
              <UpvotePost id={post.id} upvotes={post.upvotes} />
            </div>
            <div className="py-2 px-0 col-6 hover">
              <div
                className="text-center text-danger pointer"
                onClick={() => changeShowComment(!showComment)}
              >
                <div className="d-inline-block pr-1 icon-top">
                  <AiOutlineComment size={20} />
                </div>
                Comments ({post.comments.length})
              </div>
            </div>
          </div>
        </div>

        {showComment && (
          <>
            <LikeBox likes={post.upvotes} />
            <div className="comments  mt-2">
              <NewComment id={post.id} />
              {post.comments.map((item) => (
                <CommentBox key={item.id} comment={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostBox;
