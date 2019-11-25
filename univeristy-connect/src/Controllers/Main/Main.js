import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './Main.css'
import UniversityConn from '../../UniversityConnect'

class Main extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            activeMenu: null,
            searchBarType: null,
            DataSet: null
          
        }
      }

    componentDidMount(){

    }

    onSearch(dataobject) {
        console.log("Do some query with", dataobject )
    }

    setActiveMenu({target}) {
        // this.setState({
        //     activeMenu: e
        // })
        this.setState({
            activeMenu: target.title,
            searchBarType: target.name
        });
        console.log(target.name, target.title);
    }

    setActiveSearchBarType({target}){
        console.log(target.name);
        this.setState({
            activeMenu: target.name,
            searchBarType: '/Search'
        });
    }
    
    render() {
        const routes = window.Models;
        const current = routes.filter((route, index) => route.path === this.props.activeMainPage);
        const {activeMenu, searchBarType} = this.state;
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
                            setActiveMenu={(e) => this.setActiveMenu(e)}
                            activeMenu={activeMenu}
                            searchBarType={searchBarType}
                            setActiveSearchBarType={(e => this.setActiveSearchBarType(e))}
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