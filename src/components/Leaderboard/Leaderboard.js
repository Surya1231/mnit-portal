import React from 'react'
import InputBar from './InputBar';

class Leaderboard extends React.Component {
    state = {
        loading : true,
        data: [],
    }

    onSubmit = (values) => {
        console.log(values)
        this.setState({
            data:values
        })
    }
    render(){
        return(
            <div className = "content-box pt-3">
                <InputBar
                    onSubmit = {this.onSubmit}
                />
                <hr/>
                <pre> {JSON.stringify(this.state.data)}</pre>
            </div>
        )
    }
}

export default Leaderboard;