import React from "react";
import SideMenu from "../common/SideMenu";
import QuoteBox from "../common/QuoteBox";
import { MobileHiddenDiv } from "../common/ResponsiveDiv";
import StatsBox from "../common/StatsBox";
import { animateValue } from "../../utils/animation";
import PostBox from "./PostBox";
import NewPost from "./NewPost";
import { connect } from "react-redux";
import { SpinnerLoader } from "../common/Loadings";
import { FullScreenError } from "../common/Errors";

class Home extends React.Component {
  state = {
    category: 0,
    newPost: false,
    categoryList: ["All", "General", "Interview", "Competitive"],
  };

  toggleNewPost = () => {
    if (this.state.newPost || this.props.user)
      this.setState({
        newPost: !this.state.newPost,
      });
    else {
      this.props.history.push("/login");
    }
  };

  changeCategory = (index) => {
    this.setState({
      category: index,
    });
  };

  componentDidMount = () => {
    animateValue("totalValue", 0, 1000, 10);
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
              {this.state.newPost ? "Back to Forum" : "Add New Post"}
            </div>
            {this.state.newPost ? (
              <NewPost categories={this.state.categoryList.slice(1)} />
            ) : (
              <div className="post-container">
                {this.props.postLoading && <SpinnerLoader />}
                {this.props.postError && <FullScreenError />}
                {this.props.posts &&
                  this.props.posts.map((item) => {
                    if (this.state.category === 0)
                      return <PostBox post={item} key={item.id} />;
                    else if (
                      this.state.categoryList[this.state.category] ===
                      item.category
                    )
                      return <PostBox post={item} key={item.id} />;
                    else return <React.Fragment key={item.id}></React.Fragment>;
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  posts: state.home.posts,
  postLoading: state.home.loading,
  postError: state.home.error,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
