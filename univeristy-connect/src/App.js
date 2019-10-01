import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from'./Views/Login/login'

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
    <Login></Login>
  
  )
  }
}

export default App;
