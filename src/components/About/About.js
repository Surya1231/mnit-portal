import React from 'react';
import SideMenu from '../common/SideMenu';
import QuoteBox from '../common/QuoteBox';
import { MobileHiddenDiv } from '../common/ResponsiveDiv';

class About extends React.Component{

    state = {
        active : 0
    }

    changeActive = (index) => {
        this.setState({
            active:index
        })
    }

    render(){
        return (
            <div className="row"> 
                <div className="col-md-3 px-md-3 pb-3">
                    <SideMenu
                        optionList = {["Developer" , "Contribution" , "Stats" , "Report Issue"]}
                        active = {this.state.active}
                        onClickHandler = {this.changeActive} 
                    />

                    <MobileHiddenDiv>
                    <div className="mt-5">
                        <QuoteBox />
                    </div>
                    </MobileHiddenDiv>
                
                
                </div>
                <div className="col-md-9">
                    <div className="content-box"></div>
                </div>
            </div>
        )
    }
}

export default About;