import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Main.css'
import UniversityConn from '../../UniversityConnect'

class Main extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            activeMenu: null
          
        }
      }

    componentDidMount(){

    }

    onSearch(dataobject) {
        console.log("Do some query with", dataobject )
    }

    
    render() {
        const routes = window.Models;
        const current = routes.filter((route, index) => route.path === this.props.activeMainPage);
       
        const routeList = routes.map((route, index) => {
           
            return(
                //<div className="Main-Wrapper border" id="Main">
                <Route
                    exact
                    key={route.title+index}
                    path={route.path}
                    render={(props) =>
                    (
                        <route.Component 
                            querySearch={this.onSearch} 
                        ></route.Component>
                    )               
                    }
                
                    >
                    
                   
                </Route> 
                //</div>
            )
        });
        return (
            <div className="Main-Wrapper border" id="Main">
                
                 <Switch>{routeList}</Switch>
            </div>
           
        )
    }
}

export default Main;