import React from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { connect } from "react-redux";
import { addNewUpvote } from "../../../store/reducers/home";
import { loginWarn } from "../../common/notification";

class UpvotePost extends React.Component {
  state = {
    inProgress: false,
    upvoted: false,
  };

  onClickHandler = () => {
    if (this.props.user && !this.state.upvoted && !this.state.inProgress) {
      this.setState({ inProgress: true, upvoted: true });
      this.props.addUpvote(this.props.id, this.props.user);
    } else if (!this.props.user) {
      loginWarn();
    }
  };

  componentWillReceiveProps = (newProps) => {
    if (newProps.upvotes.length > 0 && !this.state.upvoted) {
      newProps.upvotes.forEach((item) => {
        if (item.upvotedBy === this.props.user) {
          this.setState({ upvoted: true });
        }
      });
    }
  };

  render() {
    return (
      <div
        className="text-center text-base border-right pointer"
        onClick={this.onClickHandler}
        disabled={!this.props.user || this.state.upvoted}
      >
        <div className="d-inline-block pr-1 icon-top">
          {this.props.user && this.state.upvoted ? (
            <AiTwotoneLike size={20} />
          ) : (
            <AiOutlineLike size={20} />
          )}
        </div>
        Upvotes ({this.props.upvotes.length}){" "}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addUpvote: (id, user) => dispatch(addNewUpvote(id, user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpvotePost);
