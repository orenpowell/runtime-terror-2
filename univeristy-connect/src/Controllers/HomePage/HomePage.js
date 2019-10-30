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
            setActiveMainPage: '',
            loadingDone: false,
        }
    }

    componentDidMount(){
        setTimeout(() => {
           this.setState({loadingDone: true}); 
        }, 1000)

    }

    setActiveMainPage(a){
       this.setState({setActiveMainPage: a});
    }

    render(){
        const {setActiveMainPage, loadingDone} = this.state;
        return(
            loadingDone ? 
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
                            activeMainPage={setActiveMainPage}
                            getModels={universityConn.getModels()}

                        />
                    </div>
                </div>
            </div> : null
        )
    }
}

export default HomePage;