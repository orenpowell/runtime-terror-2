import React from 'react';

const Login = (props) => {
    const {weekRemainder} = props;
    return(
        <div className="container">
        <div className="input-group center-block">
          <div className="zip col-lg-4">
            <input type="text" className="form-control" placeholder="Username..."></input>
          </div>
          
          <div className="zip col-lg-4">
            <input type="text" className="form-control" placeholder="Password...."></input>
          </div>
          <div className="col-lg-4">
            <button className='btn-primary'>
              Login
            </button>
          </div>
        </div>
      </div>

    )
}

export default Login;