import React from 'react';
import './App.css';
import Login from '../Login/login'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import InitialLoginPage from '../../Controllers/InitialLoadPage/InitialLoadPage'
import '../../universityConnect-registry'
import privateRoute from '../../Components/PrivateRoute/PrivateRoute'
import PrivateRoute from '../../Components/PrivateRoute/PrivateRoute';


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
    
   
    
    this.setState({initialLogin: false});
  }

   onConfirmLogin(){
     console.log("here");
     
    this.setState({loggedIn: true});
  }

  render(){
    const { loggedIn, onConfirmLogin, initialLogin } = this.state;
  return(
    // <Router>
    //   { loggedIn ? (initialLogin ? <InitialLoginPage 
    //   handleSubmit={(data) => this.onHandleSetup(data)}
    //   ></InitialLoginPage> : <HomePage></HomePage>) :
    //   <Login
    //     confirmLogin={() => this.onConfirmLogin()}
    //   ></Login>
    //   }
    // </Router>
    
    <Router>
      <Switch>
        
        <Route path="/auth/login" component={Login}></Route>
        <PrivateRoute path="/" component= {HomePage}/>
      </Switch>
    </Router>
  )
  }
}

export default App;
