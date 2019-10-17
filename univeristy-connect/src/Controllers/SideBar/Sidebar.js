import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SideBar.css'
import UniversityConn from '../../UniversityConnect'
class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            modelLinks: UniversityConn.getSideModels()
        }
        
    }

    componentDidMount() {
        const { modelLinks } = this.state;
        console.log(modelLinks);
    }

    onClick(){
        
    }
    

    render(){
        const{ setActiveMainPage } = this.props;
        const { modelLinks } = this.state;
        return(
            <div className="Sidebar-Wrapper border">
                <img src="/media/unknown.jpg" class="profile-photo" />
                {modelLinks.map((item, i) => {
                    return (

                        <ul onClick={() => setActiveMainPage(item)} key={item.title + i}>
                            
                            <Link 
                                to={item.path}>
                                {item.title}
                            </Link></ul>
                    )
                })}
                <br></br>
                <img src="/media/UWFLogo.png" class="university-logo" />
            </div>

        )
    }
}

export default Sidebar;