import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
//import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
import req from '../../Utils/request'

class MyEvents extends Component{
    constructor(props){
        super(props);
        this.state = {
            allEvents: [],
            searchEvents: null,
            searchItem: null,
            SearchBar:null
        }
    }

    componentWillMount(){
        const requestURL = 'http://localhost:3001/AllEvents';

         const options = UniversityConn.getOptionsModels().filter((value, index) => {
            
            return value.path === '/Search'

        });
        
        req.query(requestURL, (error, response, body) => {
            
            if (error) {
                return console.error('Request failed:', body);
            }
              const result = JSON.parse(body);
              this.setState({allEvents : result, SearchBar: options[0].Component})
            //   console.log(result);
            
            } );
    }

    componentDidMount() {
    }

    render(){
     
        const { allEvents, SearchBar }  = this.state;
        return(
            <div>
            {SearchBar  ?
            <div className="MyEvents-Wrapper">
                <p>Welcome to my Events</p>
            <SearchBar></SearchBar>
            <Feed dataset = {allEvents}></Feed> 
            </div>: null
            }
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