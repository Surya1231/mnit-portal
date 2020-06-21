import React from 'react'

class Login extends React.Component{

    state = {
        status : 0,
        email: "",
        otp: "",
    }

    onChangeHandler = (eve) => {
        this.setState({
            [eve.target.name] :eve.target.value
        })
    }

    onSubmit = (eve) => {
        eve.preventDefault();
        if(this.state.status === 0){
            this.setState({
                status : 1
            })
        }
        console.log(this.state)

    }

    render(){
        return (
            <div className="w-100 px-2 pt-5">
                <form className="bg-white mx-auto px-4 py-4 border border-dark rounded shadow mt-5" style={{maxWidth:"400px"}} onSubmit={this.onSubmit}>
                    {this.state.status === 0 ?
                        <>
                        <div className="form-group ">
                            <label htmlFor="contestId"> Email Id</label>
                            <input type="email" name="email" value={this.state.email} className="form-control" onChange={this.onChangeHandler} required/>
                            <span className="text-muted text-sm"> Only MNIT emails are allowed</span>
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-outline-info btn-block"> Send OTP on Email</button>
                        </div>
                        </>
                        :
                        <>
                         <div className="form-group ">
                             <h6> Otp has been sent to <span className="text-primary pointer" onClick={() => this.setState({status:0})}>{this.state.email}</span> </h6>
                            <input type="text" name="otp" value={this.state.otp} className="form-control mt-4" onChange={this.onChangeHandler} required placeholder="Enter Otp"/>
                        </div>
                        <div className="form-group mt-4">
                            <button className="btn btn-outline-info btn-block"> Submit </button>
                        </div>
                        </>
                    }
                </form>
            </div>
        )
    }
}

export default Login;