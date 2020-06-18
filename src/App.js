import React from 'react';

// Imports for bootstrap
import bootstrap from 'bootstrap';  // eslint-disable-line
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './css/app.scss';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router';
import Home from './components/Home/Home';
import Leaderboard from './components/Leaderboard/Leaderboard';
import About from './components/About/About';



class App extends React.Component{
    constructor(props){
        super(props);
        console.log("App started hai");
    }

    render(){
        return (
            <div className="app">
                <Navbar
                    pathname = {this.props.location.pathname}
                />

                <div className="main-box">
                <Switch>
                    <Route
                        exact
                        path = "/"
                        render = {props => <Home {...props} />}
                    />
                    <Route
                        exact
                        path = "/leaderboard"
                        render = {props => <Leaderboard {...props} />}
                    />
                    <Route
                        exact
                        path = "/about"
                        render = {props => <About {...props} />}
                    />
                    <Route
                        render = {() => <span> App Under Producation</span>}
                    />
                </Switch>
                </div>
            </div>
        )
    }
}

export default App;
