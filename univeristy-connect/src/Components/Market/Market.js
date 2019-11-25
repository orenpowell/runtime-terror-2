import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed';
import req from '../../Utils/request';

class Market extends Component{
    constructor(props){
        super(props);
        this.state = {
            allItems: [],
            searchItem: null,
            SearchBar:null
        }
    }

    componentWillMount(){

    }

    componentWillMount(){
        const requestURL = 'http://localhost:3001/AllMarketPlace';

         const options = UniversityConn.getOptionsModels().filter((value, index) => {
            
            return value.path === '/Search'

        });
        console.log(options);
        
        req.query(requestURL, (error, response, body) => {
            
            if (error) {
                return console.error('Request failed:', body);
            }
              const result = JSON.parse(body);
              this.setState({allItems : result, SearchBar: options[0].Component})
            //   console.log(result);
            
            } );
    }

    render(){
        const { allItems , SearchBar } = this.state;
        return(
            <div >
            {SearchBar  ?
            <div className="Housing-Wrapper">
            <SearchBar></SearchBar>
            <Feed dataset = {allItems}></Feed> 
            </div>: null
            }
        
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Market',
    Component: Market,
    title: 'Market',

    type: 'addon',
    icon: 'shopping-cart'
})