import React, { Component } from 'react';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email:'',
            password:'',
            errorMessage :''
        }
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event) =>{
        this.setState({
            password : event.target.value
        })
    }
    handleFormSubmit= (event) => {
        event.preventDefault();
         fetch('http://localhost:3001/api/users/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({
                email: this.state.email,
                password: this.state.password
            },
            )
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                
                if(!data.success){
                    this.setState({
                        errorMessage: data.message
                    })
                }else{
                    console.log(data);
                    window.location.href ='/'
                    
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    errorMessage: error.message,
                })
                
            }),
        })
    }
    render() {

        return (
         <div className="row">
             <div className ="col-4 "></div>
             <div className ="col-4 ">
                 <form method="post">
                   <div className="card border-secondary mb-3 mt-5">
                        <div className="card-header text-center">Login</div>
                        <div className="card-body text-secondary">
                        <div className="form-group">
                            <label >Email</label>
                            <input type="text" name ="email" onChange={(event)=>{this.handleEmailChange(event)}} className="form-control"  aria-describedby="helpId" placeholder="Nhập email" />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="text" name="password" onChange={(event)=>{this.handlePasswordChange(event)}} className="form-control" aria-describedby="helpId" placeholder="Nhập password" />
                        </div>
                        {
                            this.state.errorMessage ? (
                            <div className="alert alert-danger" role="alert">{this.state.errorMessage}</div>):null 
                        }
                        <button type="submit" className="btn btn-block btn-info " onSubmit={(event)=>{this.handleFormSubmit(event)}}>Login</button>
                        </div>
                    </div>
                    </form>
                    </div>
                    <div className ="col-4 "></div>
                    </div>
        
        );
    }
}

export default LoginScreen;