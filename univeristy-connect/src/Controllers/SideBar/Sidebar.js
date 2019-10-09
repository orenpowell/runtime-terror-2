import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SideBar.css'
class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            modelLinks: null
        }
    }

    componentDidMount() {
    }

    onClick(){
        
    }
    

    render(){
        return(
            <div className="Sidebar-Wrapper border">
                <li className="Model-Link" >
                Some link for the side bar
                </li>
                <li className="Model-Link">
                Some link for the side bar
                </li>
            </div>
            
        )
    }
}

export default Sidebar;