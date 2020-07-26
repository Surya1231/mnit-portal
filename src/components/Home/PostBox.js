import React, { useState } from "react";
import NewComment from "./new/NewComment";
import CopyOnClick from "../common/CopyOnClick";
import { getUserName } from "../../utils/username";
import { formatPostDate } from "../../utils/datetime";
import { AiOutlineComment, AiOutlineClockCircle } from "react-icons/ai";
import UpvotePost from "./new/UpvotePost";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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

// const LikeBox = ({ likes }) => {
//   return (
//     <div className="likebox py-2 border-top">
//       <span className="text-base">
//         Upvoted By : <span className="text-muted">{likes.join(" , ")}</span>
//       </span>
//     </div>
//   );
// };

const PostBox = ({
  post,
  open = false,
  comments = [],
  upvotes = [],
  maxHeight = "700px",
}) => {
  const url = String(window.location);
  const baseUrl = url.split("/")[0] + "//" + url.split("/")[2];
  const [showComment, changeShowComment] = useState(open);
  return (
    <div className="post mt-3" style={{ fontSize: "0.9rem" }}>
      <div className="bg-white rounded py-2 px-3 px-md-4">
        <div className="meta-data font-weight-bold text-lg border-bottom pb-1">
          {post.anonymous ? "Anonymous" : getUserName(post.postedBy)}
          <span className="float-right  font-weight-normal text-muted">
            {formatPostDate(post.createdAt)}
            <div className="d-inline-block pl-1">
              <AiOutlineClockCircle size={15} />
            </div>
          </span>
        </div>
        <div className="post-content mt-2">
          <div style={{ maxHeight: maxHeight, overflowY: "auto" }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
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
              <UpvotePost id={post.id} upvotes={upvotes} />
            </div>
            <div className="py-2 px-0 col-6 hover">
              <div
                className="text-center text-danger pointer"
                onClick={() => changeShowComment(!showComment)}
              >
                <div className="d-inline-block pr-1 icon-top">
                  <AiOutlineComment size={20} />
                </div>
                Comments ({comments.length})
              </div>
            </div>
          </div>
        </div>

        {showComment && (
          <>
            {/* <LikeBox likes={post.upvotes} /> */}
            <div className="comments  mt-2">
              <NewComment id={post.id} />
              {comments.map((item) => (
                <CommentBox key={item.id} comment={item} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    comments: state.firestore.ordered["comments" + ownProps.post.id],
    upvotes: state.firestore.ordered["upvotes" + ownProps.post.id],
  };
};

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "posts",
        doc: props.post.id,
        subcollections: [
          { collection: "comments", orderBy: ["createdAt", "desc"] },
        ],
        storeAs: "comments" + props.post.id,
      },
      {
        collection: "posts",
        doc: props.post.id,
        subcollections: [{ collection: "upvotes" }],
        storeAs: "upvotes" + props.post.id,
      },
    ];
  })
)(PostBox);
