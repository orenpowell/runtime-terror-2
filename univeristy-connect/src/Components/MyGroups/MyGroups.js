import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
//import SearchBar from '../../Models/SearchBar/SearchBar';
import Feed from '../../Models/Feed/Feed'
import req from '../../Utils/request'
import auth from '../../Utils/auth'

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
        this.loadData();
      
    }
    loadData(){
        const user = auth.getToken('loginUser');
        const requestURL = `http://localhost:3001/AllGroups/${user}`;

         const options = UniversityConn.getOptionsModels().filter((value, index) => {
            
            return value.path === '/Search'

        });
        console.log(options, requestURL);
        
        req.query(requestURL, (error, response, body) => {
            
            if (error) {
                return console.error('Request failed:', body);
            }
              const result = JSON.parse(body);
              this.setState({allGroups : result, SearchBar: options[0].Component})
            //   console.log(result);
            
            } );
    }

    // unJoinFunction(id) {
    //     const user = auth.getToken('loginUser');
    //     const { activePage } = this.props; 
    //     const page = activePage.spit(" ");
    //     console.log(page);
    

    //     // const requestURL = `http://localhost:3001/Join/${activePage}/${id}/${user}`;

    //     // console.log(requestURL);
        
    //     //   req.query(requestURL, (error, response, body) => {
    
    //     //     if (error) {
    //     //         return console.error('Request failed:', body);
    //     //     }
    //     //     //   const result = JSON.parse(body);
    //     //       //this.setState({dataSet : result})
    //     //     } );


    // }

    render(){
        const { allGroups, SearchBar } = this.state;
        const {activePage, unJoinFunction, joinFunction} = this.props;
        return(
            <div>
            {SearchBar  ?
            <div className="MyEvents-Wrapper">
                <p>Welcome to my Groups</p>
            <SearchBar></SearchBar>
            <Feed activePage ={activePage} joinFunction={(e) => joinFunction(e)} unJoinFunction={(e) => {unJoinFunction(e); this.loadData();}} dataset = {allGroups}></Feed> 
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