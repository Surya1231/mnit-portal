import React from 'react'
import SideMenu from '../common/SideMenu';
import QuoteBox from '../common/QuoteBox';
import { MobileHiddenDiv } from '../common/ResponsiveDiv';
import StatsBox from '../common/StatsBox';
import { animateValue } from '../../utils/animation';
import PostBox from './PostBox';
import NewPost from './NewPost';

class Home extends React.Component {

    state = {
        category : 0,
        newPost : false,
        categoryList : ["All" , "General" , "Interview" , "Competitive"],
        post : [
            {
                postedBy: "",
                createdAt: "",
                category: "",
                anonymouse: false,
                content: "",
                upvotes: 10,
                comments : [],
            }
        ]
    }

    toggleNewPost = () =>{
        this.setState({
            newPost : !this.state.newPost
        })
    }

    changeCategory = (index) => {
        this.setState({
            category:index
        })
    }

    componentDidMount = () =>{
        animateValue("totalValue" , 0 , 1000,10);
    }

    render(){
        return (
            <div className="row pt-3"> 
                <div className="col-md-3 px-md-3 pb-3">
                    <SideMenu
                        optionList = {this.state.categoryList}
                        active = {this.state.category}
                        onClickHandler = {this.changeCategory} 
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
                        <div className="new-post-button bg-white text-center font-weight-bold text-primary rounded py-3 pointer" onClick={this.toggleNewPost}>
                            { this.state.newPost ? "Back to Forum" : "Add New Post" }
                        </div>
                        {   this.state.newPost 
                            ? 
                                <NewPost/>
                            : 
                                <div className="post-container">
                                    <PostBox />
                                    <PostBox />
                                    <PostBox />
                                    <PostBox />
                                    <PostBox />
                                    <PostBox />
                                </div>
                        }                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;