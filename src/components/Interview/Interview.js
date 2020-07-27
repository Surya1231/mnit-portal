import React from "react";
import SideMenu from "../common/SideMenu";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Interview extends React.Component {
  state = {
    active: 0,
    optionList: [
      "Interview Topics",
      "Resources",
      "Interview Questions",
      "Resume",
      "Past Experience",
      "Mnit Policies",
    ],
    valueList: [
      "interview",
      "resources",
      "interview_questions",
      "resume",
      "experience",
      "mnit",
    ],
  };

  changeActive = (index) => {
    this.setState({
      active: index,
    });
  };

  render() {
    const content =
      this.props.interview &&
      this.props.interview[this.state.valueList[this.state.active]] &&
      this.props.interview[this.state.valueList[this.state.active]].content;
    console.log("content", content);
    return (
      <div className="row pt-3">
        <div className="col-md-3 px-md-3 pb-3">
          <div className="shadow">
            <SideMenu
              optionList={this.state.optionList}
              active={this.state.active}
              onClickHandler={this.changeActive}
            />
          </div>
        </div>
        <div className="col-md-9">
          <div className="interview-box px-4 pt-3 pb-2 overflow-y-auto mb-3 shadow">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  interview: state.firestore.data.interview,
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "interview",
      },
    ];
  })
)(Interview);
