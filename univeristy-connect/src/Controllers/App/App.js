import React from 'react';
import './App.css';
import Login from '../Login/login'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InitialLoginPage from '../../Controllers/InitialLoadPage/InitialLoadPage'


import '../../universityConnect-registry'



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      initialLogin: true    }
  }

  componentDidMount() {

  }

  onHandleSetup(event) {
    event.preventDefault()
    const data = new FormData(event.target);
    console.log(data.keys());
    this.setState({initialLogin: false});
  }

   onConfirmLogin(){
     console.log("here");
     
    this.setState({loggedIn: true});
  }

  render(){
    const { loggedIn, onConfirmLogin, initialLogin } = this.state;
  return(
    <Router>
      { loggedIn ? (initialLogin ? <InitialLoginPage 
      handleSubmit={(data) => this.onHandleSetup(data)}
      ></InitialLoginPage> : <HomePage></HomePage>) :
      <Login
        confirmLogin={() => this.onConfirmLogin()}
      ></Login>
      }
    </Router>
    
  
  )
  }
}

export default App;
