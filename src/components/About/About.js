import React from "react";
import SideMenu from "../common/SideMenu";
import Developer from "./subcomponents/Developer";
import Github from "./subcomponents/Github";
import Info from "./subcomponents/Info";
import StatsBox from "../common/StatsBox";
import { CenterDiv } from "../common/ResponsiveDiv";

class About extends React.Component {
  state = {
    active: 0,
    optionList: ["Developer", "Github", "Info", "Stats"],
  };

  changeActive = (index) => {
    this.setState({
      active: index,
    });
  };

  render() {
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
          <div className=" shadow rounded fixed-side-box">
            {this.state.active === 0 && <Developer />}
            {this.state.active === 1 && <Github />}
            {this.state.active === 2 && <Info />}
            {this.state.active === 3 && (
              <CenterDiv>
                <div className="mx-auto" style={{ maxWidth: "400px" }}>
                  <StatsBox />
                </div>
              </CenterDiv>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
