import React from 'react';
import './App.css';
import Login from'../../Views/Login/login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  componentDidMount() {

  }

  render(){
  return(
    <Router>
      <Login></Login>
    </Router>
    
  
  )
  }
}

export default App;
