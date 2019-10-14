import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './SideBar.css'
import UniversityConn from '../../UniversityConnect'
class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
            modelLinks: UniversityConn.getModels()
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
                {modelLinks.map((item, i) => {
                    return (

                        <ul onClick={() => setActiveMainPage(item)} key={item.title + i}>
                            
                            <Link 
                                to={item.path}>
                                {item.title}
                            </Link></ul>
                    )
                })}
            </div>
            
        )
    }
}

export default Sidebar;