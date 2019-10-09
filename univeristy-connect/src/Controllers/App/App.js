import React from 'react';
import './App.css';
import Login from '../Login/login'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount() {

  }

   onConfirmLogin(){
     console.log("here");
    this.setState({loggedIn: true});
  }

  render(){
    const { loggedIn, onConfirmLogin } = this.state;
  return(
    <Router>
      { loggedIn ? <HomePage></HomePage> :
      <Login
        confirmLogin={() => this.onConfirmLogin()}
      ></Login>
      }
    </Router>
    
  
  )
  }
}

export default App;
