import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
import req from '../../Utils/request'

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
        const requestURL = 'http://localhost:3001/AllEvents';
        // const body ={ 
        //     userName: 'tony',
        //     password: 'tony1'
        // }

        req.query(requestURL );
    }

    componentDidMount() {
 
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
    path: '/MyEvents',
    Component: MyEvents,
    title: 'My Events',

    type: 'model',
    icon: 'calendar-day'
})