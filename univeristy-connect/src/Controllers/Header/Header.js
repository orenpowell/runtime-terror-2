import React, { Component } from 'react';
import './Header.css'
import SearchBar from '../../Models/SearchBar/SearchBar'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UniversityConn from '../../UniversityConnect';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            addons: UniversityConn.getAddons()
        }
    }

    componentWillMount(){

    }

    render(){
        const { addons } = this.state;

        return(
            <div className="HomePage-wrapper border" id="Header">
                <div className="Header-Search-wrapper col-lg-6 float-left">
                    <div className="input-group center-block">
                    <div className="zip col-lg-9 search" >
                        <span className="fa fa-search"></span>
                        <input type="text" /*className="form-control"*/ placeholder="Search...."></input>
                    </div>
                    </div>
                </div> 
                <div className="icon-wrapper">

                    {
                        addons.map((addon, i) => {
                            return (
                                <span key={addon.title}>
                                <Link
                                    to={addon.path}
                                    >
                                    <i className={`fas fa-${addon.icon}`}></i>
                                </Link>
                                
                                </span>
                            )
                        })
                    }
                    {/* <Link>
                        <i className="fas fa-shopping-cart"></i>
                    </Link>
                    <Link>
                        <i className="fas fa-couch"></i>
                    </Link> */}

                </div>
                
                
            </div>
        )
    }
}

export default Header;