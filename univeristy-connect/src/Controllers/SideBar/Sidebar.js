import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SideBar.css'
import UniversityConn from '../../UniversityConnect'
class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }

    componentDidMount() {

    }

    onClick(){
        
    }
    

    render(){
        const{ setActiveMainPage } = this.props;
        const { modelLinks } = this.props;
       
        return(
            <div className="Sidebar-Wrapper border">
                <img src="/media/unknown.jpg" className="profile-photo" />
                {modelLinks.map((item, i) => {
                    return (
                        
                        <ul onClick={() => this.props.setActiveMainPage(item)} key={item.title + i}>
                            
                            <Link 
                                to={item.path}>
                                {item.title}
                            </Link></ul>
                    )
                })}
                <br></br>
                <img src="/media/UWFLogo.png" className="university-logo" />
            </div>

        )
    }
}

export default Sidebar;