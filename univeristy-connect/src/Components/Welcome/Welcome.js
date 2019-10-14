import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import TopDisplay from '../../Models/TopDisplay/TopDisplay'
class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            catalog: {
                titles: ['Suggested Connections', 'Events', 'Groups', 'MarketPlace'],
                data: null
            }

        }
    }

    componentWillMount(){
       
    }

    render(){
        const { catalog } = this.state;
        return(
            <div className="Welcome-Wrapper">
                <p>Welcome</p>
                {catalog.titles.map((title, e) => {
                    return(
                    <TopDisplay 
                        title={title}
                    ></TopDisplay>
                    )
                })}
                
              

            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/',
    Component: WelcomePage,
    title: 'Home'
})