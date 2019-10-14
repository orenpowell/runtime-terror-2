import React from 'react';
import './login.css'
const Login = (props) => {
    const {weekRemainder, confirmLogin} = props;
    console.log(confirmLogin);
    return(
        <div className="Login-wrapper container">
        <div className="input-group center-block">
          <div className="zip col-lg-4">
            <input type="text" className="form-control" placeholder="Username..."></input>
          </div>
          
          <div className="zip col-lg-4">
            <input type="text" className="form-control" placeholder="Password...."></input>
          </div>
          <div className="col-lg-4">
            <button className='btn-primary' onClick={confirmLogin} >
              Login
            </button>
          </div>
        </div>
      </div>

    )
}

export default Login;