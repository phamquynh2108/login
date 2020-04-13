import React, { Component } from 'react';

class RegisterScreen extends Component {
    render() {
        return (
            <div className="row">
            <div className ="col-4 "></div>
            <div className ="col-4 ">
                <form method="post">
                  <div className="card border-secondary mb-3 mt-5">
                       <div className="card-header text-center">Register</div>
                       <div className="card-body text-secondary">
                       <div className="form-group">
                           <label >FirstName</label>
                           <input type="text" name ="firstName"  className="form-control"  aria-describedby="helpId" placeholder="Nhập firstname" />
                       </div>
                       <div className="form-group">
                           <label >LastName</label>
                           <input type="text" name ="lastName"  className="form-control"  aria-describedby="helpId" placeholder="Nhập lastname" />
                       </div>
                       <div className="form-group">
                           <label >Email</label>
                           <input type="text" name ="email"  className="form-control"  aria-describedby="helpId" placeholder="Nhập email" />
                       </div>
                       <div className="form-group">
                           <label >Password</label>
                           <input type="text" name="password" className="form-control" aria-describedby="helpId" placeholder="Nhập password" />
                       </div>
                       <button type="submit" className="btn btn-block btn-info " >Register</button>
                       </div>
                   </div>
                   </form>
                   </div>
                   <div className ="col-4 "></div>
                   </div>
        );
    }
}

export default RegisterScreen;