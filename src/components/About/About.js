import React from 'react';
import SideMenu from '../common/SideMenu';

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
            <div className="row pt-3"> 
                <div className="col-md-3 px-md-3 pb-3">
                    <SideMenu
                        optionList = {["Developer" , "Contribution" , "Stats" , "Report Issue"]}
                        active = {this.state.active}
                        onClickHandler = {this.changeActive} 
                    />
                
                
                </div>
                <div className="col-md-9">
                    <div className="content-box"></div>
                </div>
            </div>
        )
    }
}

export default About;