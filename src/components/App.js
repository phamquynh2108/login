import React, { Component } from 'react';
import './App.css';
import LoginScreen from './LoginScreen'
import Navbar from './Navbar';
import RegisterScreen from './RegisterScreen';
import {


  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render(){
    return (
      
      <div className="container-fluid">
        <Router>
            <Navbar />
              <Route path='/login'  component ={LoginScreen}/>
              <Route path='/register'  component ={RegisterScreen}/>
      </Router>
       </div>
    );
  }

}

export default App;
