import React, { Component } from 'react';
import {

    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  } from "react-router-dom";
class Navbar extends Component {
    render() {
        return (
        
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Techkids-hotgirl <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link  to="/login" className="nav-link" >Login</Link >
                        </li>
                        <li className="nav-item">
                            <Link  to="/register" className="nav-link" >Register</Link>
                        </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>


            

            
        );
    }
}

export default Navbar;