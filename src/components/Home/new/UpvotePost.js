import React from "react";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import { connect } from "react-redux";
import { addNewUpvote } from "../../../store/reducers/home";
import { loginWarn } from "../../common/notification";

class UpvotePost extends React.Component {
  state = {
    inProgress: false,
  };

  onClickHandler = () => {
    if (
      this.props.user &&
      this.props.upvotes.indexOf(this.props.user) === -1 &&
      !this.state.inProgress
    ) {
      this.setState({ inProgress: true });
      this.props.addUpvote(this.props.id, this.props.user);
    }
    if (!this.props.user) {
      loginWarn();
    }
  };

  render() {
    return (
      <div
        className="text-center text-base border-right pointer"
        onClick={this.onClickHandler}
      >
        <div className="d-inline-block pr-1 icon-top">
          {this.props.user &&
          this.props.upvotes.indexOf(this.props.user) !== -1 ? (
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
