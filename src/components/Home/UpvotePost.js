import React from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { connect } from "react-redux";

const UpvotePost = ({ id, upvotes, user }) => {
  console.log(user, upvotes, upvotes.indexOf(user));
  return (
    <div className="text-center text-base border-right pointer">
      <div className="d-inline-block pr-1 icon-top">
        {user && upvotes.indexOf(user) !== -1 ? (
          <AiTwotoneLike size={20} />
        ) : (
          <AiOutlineLike size={20} />
        )}
      </div>
      Upvotes ({upvotes.length}){" "}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UpvotePost);
