import React from 'react';
import './App.css';
import Login from '../Login/login'
import HomePage from '../HomePage/HomePage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import InitialLoginPage from '../../Controllers/InitialLoadPage/InitialLoadPage'
import '../../universityConnect-registry'
import PrivateRoute from '../../Components/PrivateRoute/PrivateRoute';
import uniconn from '../../UniversityConnect'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      initialLogin: true,
      activeMenu: 'Home'}
  }

  componentDidMount() {

  }

  onHandleSetup(event) {
    
    
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
        <PrivateRoute path='/setup' component={InitialLoginPage}></PrivateRoute>
        <PrivateRoute path="/" 
       
        component= {HomePage}/>
      </Switch>
    </Router>
  )
  }
}

export default App;
