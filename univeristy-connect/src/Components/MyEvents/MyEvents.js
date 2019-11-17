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

        req.query(requestURL, (error, response, body) => {
    
            if (error) {
                return console.error('Request failed:', body);
            }
              const result = JSON.parse(body);
              this.setState({allEvents : result})
              console.log(result);
            
            } );
    }

    componentDidMount() {
 
    }

    render(){
        const { allEvents }  = this.state;
        return(
            <div className="MyEvents-Wrapper">
                <p>Welcome to my Events</p>
            <SearchBar></SearchBar>
            <Feed dataset = {allEvents}></Feed>

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