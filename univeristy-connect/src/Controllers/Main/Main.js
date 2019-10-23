import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Main.css'
import UniversityConn from '../../UniversityConnect'

class Main extends Component {
 
    constructor(props){
        super(props);
        this.state = {
          
        }
      }

    componentDidMount(){
        console.log(this.props.getModels);

    }

    render() {
        const routes = this.props.getModels;
        console.log(routes);

        const current = routes.filter((route, index) => route.path === this.props.activeMainPage);
        console.log(current);
        const routeList = routes.map((route, index) => {
            return(
                //<div className="Main-Wrapper border" id="Main">
                <Route
                    exact
                    key={route.title+index}
                    path={route.path}
                    render={(props) =>
                    (
                        <route.Component></route.Component>
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