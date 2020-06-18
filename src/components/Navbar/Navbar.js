import React from 'react';
import {Link} from 'react-router-dom'
import '../../css/navbar.scss'

const Navbar = ({pathname}) =>{
    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-md navbar-dark  px-4">
                <span className="navbar-brand"> MNIT PORTAL </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link className={`nav-link ${pathname==="/" ? 'active' : ''}`} to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${pathname==="/leaderboard" ? 'active' : ''}`} to="/leaderboard" >Leaderboard</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${pathname==="/interview" ? 'active' : ''}`} to="/interview" >Interview</Link>
                    </li>
                    <li className="nav-item">
                    <Link className={`nav-link ${pathname==="/about" ? 'active' : ''}`} to="/about" >About</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" rel="noopener noreferrer" target="_blank" href="https://codeshows.github.io/"> Codeshows </a>
                    </li>            
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;