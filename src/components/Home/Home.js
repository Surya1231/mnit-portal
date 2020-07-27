import React from "react";
import SideMenu from "../common/SideMenu";
import QuoteBox from "../common/QuoteBox";
import { MobileHiddenDiv } from "../common/ResponsiveDiv";
import StatsBox from "../common/StatsBox";
import PostBox from "./PostBox";
import NewPost from "./new/NewPost";
import { connect } from "react-redux";
import { SpinnerLoader } from "../common/Loadings";
import { FullScreenError } from "../common/Errors";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { loginWarn } from "../common/notification";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { increasePostLimit } from "../../store/reducers/home";

class Home extends React.Component {
  state = {
    category: 0,
    newPost: false,
    categoryList: ["All", "General", "Interview", "Competitive"],
    loading: true,
    limitOn: true,
  };

  toggleNewPost = () => {
    if (this.state.newPost || this.props.user)
      this.setState({
        newPost: !this.state.newPost,
      });
    else {
      loginWarn();
      this.props.history.push("/login");
    }
  };

  changeCategory = (index) => {
    this.setState({
      category: index,
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (this.state.loading && nextProps.posts && nextProps.posts.length > 0) {
      this.setState({
        loading: false,
      });
    }
    if (nextProps.posts) {
      if (nextProps.limit > nextProps.posts.length) {
        this.setState({
          limitOn: false,
        });
      } else {
        this.setState({
          limitOn: true,
        });
      }
    }
  };

  render() {
    return (
      <div className="row pt-3">
        <div className="col-md-3 px-md-3 pb-3">
          <SideMenu
            optionList={this.state.categoryList}
            active={this.state.category}
            onClickHandler={this.changeCategory}
          />
          <MobileHiddenDiv>
            <QuoteBox />
          </MobileHiddenDiv>
          <MobileHiddenDiv>
            <StatsBox />
          </MobileHiddenDiv>
        </div>
        <div className="col-lg-7 col-md-9 px-0 py-0">
          <div className="px-3 pb-3">
            <div
              className="new-post-button bg-white text-center font-weight-bold text-base rounded py-3 pointer"
              onClick={this.toggleNewPost}
            >
              {this.state.newPost ? (
                <>
                  <div className="d-inline-block pr-1 icon-top">
                    <IoMdArrowBack size={18} />
                  </div>{" "}
                  Back to Forum
                </>
              ) : (
                <>
                  <div className="d-inline-block pr-1 icon-top">
                    <AiOutlinePlusCircle size={18} />
                  </div>
                  Add New Post
                </>
              )}
            </div>
            {this.state.newPost ? (
              <NewPost
                categories={this.state.categoryList.slice(1)}
                toggleNewPost={this.toggleNewPost}
              />
            ) : (
              <div className="post-container">
                {this.state.loading && (
                  <div className="pt-5">
                    <SpinnerLoader />
                  </div>
                )}
                {this.props.postError && (
                  <FullScreenError {...this.props.postError} />
                )}
                {!this.props.loading &&
                  !this.props.postError &&
                  this.props.posts && (
                    <>
                      {this.props.posts.map((item) => {
                        if (this.state.category === 0)
                          return <PostBox post={item} key={item.id} />;
                        else if (
                          this.state.categoryList[this.state.category] ===
                          item.category
                        )
                          return <PostBox post={item} key={item.id} />;
                        else
                          return (
                            <React.Fragment key={item.id}></React.Fragment>
                          );
                      })}
                      <div className="text-center">
                        {this.state.limitOn && (
                          <button
                            className="btn btn-outline-info px-4 mt-3"
                            onClick={this.props.increaseLimit}
                          >
                            Load Older
                          </button>
                        )}
                      </div>
                    </>
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    posts: state.firestore.ordered ? state.firestore.ordered.posts : [],
    postError: state.home.error,
    limit: state.home.limit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseLimit: (limit) => dispatch(increasePostLimit(limit)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "posts",
        orderBy: ["createdAt", "desc"],
        limit: props.limit ? props.limit : 10,
        storeAs: "posts",
      },
    ];
  })
)(Home);
