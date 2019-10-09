import React from 'react';
import Header from '../Header/Header';
import SideBar from '../SideBar/Sidebar';
import Main from '../Main/Main';
import './HomePage.css'
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className="HomePage-Wrapper container" id="HomePage" >
                <div className="Header">
                    <Header></Header>
                </div>
                <div className='MainDisplay row'>
                    <div className="Sidebar col col-lg-2">
                        <SideBar></SideBar>
                    </div>
                    <div className="Main col col-lg-10">
                        <Main></Main>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;