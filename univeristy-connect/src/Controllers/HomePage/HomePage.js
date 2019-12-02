import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/Sidebar';
import Main from '../Main/Main';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import universityConn from '../../UniversityConnect'
import req from '../../Utils/request'
import auth from '../../Utils/auth'


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

    joinFunction(id) {
        const user = auth.getToken('loginUser');
        const { setActiveMainPage } = this.state; 
    

        const requestURL = `http://localhost:3001/Join/${setActiveMainPage}/${id}/${user}`;

        console.log(requestURL);
        
          req.query(requestURL, (error, response, body) => {
    
            if (error) {
                return console.error('Request failed:', body);
            }
            //   const result = JSON.parse(body);
              //this.setState({dataSet : result})
            } );


    }

    unJoinFunction(id) {
        const user = auth.getToken('loginUser');
        const { setActiveMainPage } = this.state; 
        const page = setActiveMainPage.split(" ");
       
    

        const requestURL = `http://localhost:3001/UnJoin/${page[1]}/${id}/${user}`;

        console.log(requestURL);
        
          req.query(requestURL, (error, response, body) => {
    
            if (error) {
                return console.error('Request failed:', body);
            }
            //   const result = JSON.parse(body);
              //this.setState({dataSet : result})
            } );


    }


    setActiveMainPage(a){
       this.setState({setActiveMainPage: a});
    }

    render(){
        const {setActiveMainPage, loadingDone} = this.state;
        console.log(this.state.setActiveMainPage);
        return(
            loadingDone ? 
            <div className="HomePage-Wrapper container" id="HomePage" >
                <div className="Header">
                    <Header  setActiveMainPage={(a) => this.setActiveMainPage(a)}></Header>
                </div>
                <div className='MainDisplay row'>
                    <div className="Sidebar col col-lg-2">
                        <SideBar
                            setActiveMainPage={(a) => this.setActiveMainPage(a)}
                            activePage ={setActiveMainPage}
                            modelLinks={universityConn.getSideModels()}
                        />
                    </div>
                    <div className="Main col col-lg-10">
                    
                        <Main
                            setActiveMainPage={(a) => this.setActiveMainPage(a)}
                            activePage ={setActiveMainPage}
                            getModels={universityConn.getModels()
                            }
                            joinFunction={(a) => this.joinFunction(a)}
                            unJoinFunction = {(a) => this.unJoinFunction(a)}

                        />
                    </div>
                </div>
            </div> : null
        )
    }
}

export default HomePage;