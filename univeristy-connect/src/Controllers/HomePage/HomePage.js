import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/Sidebar';
import Main from '../Main/Main';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import universityConn from '../../UniversityConnect'

import './HomePage.css'
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            setActiveMainPage: ''
        }
    }

    componentDidMount(){
        console.log("mounted homepage");
        console.log(universityConn.getSideModels(), universityConn.getModels())

    }

    setActiveMainPage(a){
       this.setState({setActiveMainPage: a});
    }

    render(){

        const {activeMainPage} = this.state;
        return(
            <div className="HomePage-Wrapper container" id="HomePage" >
                <div className="Header">
                    <Header></Header>
                </div>
                <div className='MainDisplay row'>
                    <div className="Sidebar col col-lg-2">
                        <SideBar
                            setActiveMainPage={(a) => this.setActiveMainPage(a)}
                            modelLinks={universityConn.getSideModels()}
                        />
                    </div>
                    <div className="Main col col-lg-10">
                    
                        <Main
                            activeMainPage={activeMainPage}
                            getModels={universityConn.getModels()}

                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;