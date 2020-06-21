import React from 'react'
import InputBar from './InputBar';
import { getCfLeaderboard, getCfRecentContest } from '../../api/codeforces/codeforces';
import Overall from './Overall';
import CfContest from './CfContest';
import { SpinnerLoader } from '../common/Loaings';
import { FullScreenError } from '../common/Errors';

class Leaderboard extends React.Component {

    constructor(props){
        super(props);

        const initialValue = {
            platform: "codeforces",
            year: "overall",
            contest: "overall",
        }

        this.state = {
            loading : false,
            values : initialValue,
            error : false,
            errorInfo : {},
            recentContest : [],
            data : []
        }

        const str = "vishwas345code;manhar;adigupta_;hemantvardani;hope2002;Hepheastus;Kaustav1%20;Abhishek565;hitesh_singh_rana;Kaustav1%20;Kaustav1%20;abhayshivhare;vishwas345code;manhar;adigupta_;Kaustav2;Abhishek566;hitesh_singh_rana;abhayshivhare;vishwas345code;manhar;adigupta_;navjot1234;Kaustav3;Abhishek567;hitesh_singh_rana;vishwas345code";
        console.log(JSON.stringify(str.split(';')));
        
    }

    onSubmit = (values) => {
        this.setState({
            values:values
        });
        if(values.platform === "codeforces")
        this.fetchCfLeaderboard(values)
    }

    componentDidMount(){
        this.fetchCfLeaderboard(this.state.values)
        this.fetchCfRecentContest();
    }

    fetchCfRecentContest = () =>{
        getCfRecentContest()
        .then(res => this.setState({ recentContest : res}))
    }

    fetchCfLeaderboard = (values) =>{
        this.setState({
            loading:true,
            error:false
        })

        getCfLeaderboard(values)
        .then(res => { 
            this.setState({
                data: res,
                loading:false
            })
        })
        .catch(err => {
            this.setState({
                error : true,
                errorInfo : err,
                loading:false
            })
        })
    }

    render(){
        return(
            <div className = "shadow content-box pt-3">
                <InputBar
                    onSubmit = {this.onSubmit}
                    initialValues = {this.state.values}
                    recentContest = {this.state.recentContest}
                />
                <hr/>
                <div>
                    {this.state.loading  && <div className="pt-5"> <SpinnerLoader /> </div>}

                    {this.state.error  &&
                        <FullScreenError 
                            code="Codeforces Unreachable" 
                            description="Please try again after Sometime"
                        />
                    }

                    <div className="leaderboard-container py-2 px-md-4 px-2">
                    { !this.state.loading && !this.state.error && this.state.values.platform==="codeforces" && (
                        this.state.values.contest === "overall"
                            ? <Overall
                                data={this.state.data}
                             />
                            : <CfContest
                                data={this.state.data.rows}
                                contest={this.state.data.contest}
                            />
                        )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default Leaderboard;