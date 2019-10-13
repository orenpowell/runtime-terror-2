import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';

class MyEvents extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="MyEvents-Wrapper">
                <p>Welcome to my Events</p>
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Components/MyEvents/MyEvents',
    Component: MyEvents,
    title: 'My Events'
})