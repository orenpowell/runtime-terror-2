import React, { Component } from 'react';
import './login.css'
import req from '../../Utils/request'
import auth from '../../Utils/auth'
class Login extends Component {

  constructor(props){
    super(props);
    this.state ={
      value: {}
    }
  }



  handleChange = ({ target }) =>
  this.setState({
    value: { ...this.state.value, [target.name]: target.value },
  }, () => console.log(this.state.value));

  handleSubmit = (e) => {
    e.preventDefault();
    const body = this.state.value;
    const requestURL = 'http://localhost:3001/userValidation';

    req(requestURL, body, (error, response, body) => {
    
    if (error) {
        return console.error('Request failed:', body);
    }
      const result = JSON.parse(body);
      if(result){
        auth.setToken('aam60', 'loginUser' )
        if(result[0].initialLogin === 0){
          this.initialUser();
        }
        else{
          this.redirectUser();
        }
      }
    });
  }

  initialUser = () => {
    this.props.history.push('/setup');
  }

  redirectUser = () => {
    this.props.history.push('/');
  };

  render(){
    const {weekRemainder, confirmLogin} = this.props;
    console.log(confirmLogin);
    return(
      <div id="root">
        <img src="/media/UWFLogo.png" className="login-logo"/>
        <img src="/media/LoginPhoto.jpg" className="login-photo"/>
        <div className="Login-wrapper container">  
        <div className="input-group center-block">
          <div className="zip col-lg-4">
            <input type="text" onChange={this.handleChange} name='user_name' className="form-control" placeholder="Username..."></input>
          </div>
          </div>
          <div className="input-group center-block">
          <div className="zip col-lg-4">
            <input type="password" onChange={this.handleChange} name='password' className="form-control" placeholder="Password...."></input>
          </div>
          </div>
          <div className="input-group center-block">
          <div className="col-lg-4">
            <button className='btn-primary bttnConnect' onClick={this.handleSubmit} > 
              Connect
            </button>
          </div>
        </div>
      </div>
      </div>

    )
  }
}

export default Login;