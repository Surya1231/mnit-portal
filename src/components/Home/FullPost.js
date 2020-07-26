import React from "react";
import PostBox from "./PostBox";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { SpinnerLoader } from "../common/Loadings";

const FullPost = (props) => {
  return (
    <div className="px-2 py-2 mx-auto" style={{ maxWidth: "800px" }}>
      {props.post ? (
        <PostBox
          post={{ ...props.post, id: props.match.params.id }}
          open={true}
          maxHeight="auto"
        />
      ) : (
        <div className="pt-5">
          <SpinnerLoader />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  post:
    state.firestore.data &&
    state.firestore.data.posts &&
    state.firestore.data.posts[ownProps.match.params.id],
});

export default compose(
  connect(mapStateToProps, null),
  firestoreConnect([
    {
      collection: "posts",
      orderBy: ["createdAt", "desc"],
      limit: 20,
    },
  ])
)(FullPost);
