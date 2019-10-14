import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
class MyEvents extends Component{
    constructor(props){
        super(props);
        this.state = {
            allEvents: [],
            searchEvents: null,
            searchItem: null
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="MyEvents-Wrapper">
                <p>Welcome to my Events</p>
            <SearchBar></SearchBar>
            <Feed></Feed>

            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Components/MyEvents/MyEvents',
    Component: MyEvents,
    title: 'My Events'
})