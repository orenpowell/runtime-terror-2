import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
//import SearchBar from '../../Models/SearchBar/SearchBar';
import Feed from '../../Models/Feed/Feed'
import req from '../../Utils/request'
class MyGroups extends Component {
    constructor(props){
        super(props);
        this.state = {
            allGroups: [],
            searchGroups: null,
            searchItem: null,
            SearchBar:null
        }
    }

    componentWillMount(){
        const requestURL = 'http://localhost:3001/AllGroups';

         const options = UniversityConn.getOptionsModels().filter((value, index) => {
            
            return value.path === '/Search'

        });
        console.log(options);
        
        req.query(requestURL, (error, response, body) => {
            
            if (error) {
                return console.error('Request failed:', body);
            }
              const result = JSON.parse(body);
              this.setState({allGroups : result, SearchBar: options[0].Component})
            //   console.log(result);
            
            } );
    }
    componentDidMount(){

    }

    render(){
        const { allGroups, SearchBar } = this.state;
        return(
            <div>
            {SearchBar  ?
            <div className="MyEvents-Wrapper">
                <p>Welcome to my Groups</p>
            <SearchBar></SearchBar>
            <Feed dataset = {allGroups}></Feed> 
            </div>: null
            }
           </div> 
        )
    }
}

export default UniversityConn.registerModel({
    path: '/MyGroups',
    Component: MyGroups,
    title: 'My Groups',

    type: 'model'
})