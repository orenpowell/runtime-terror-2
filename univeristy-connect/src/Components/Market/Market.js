import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'

class Market extends Component{
    constructor(props){
        super(props);
        this.state = {
            catalog: [],
            search: ''
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="Housing-Wrapper">
                <p>Welcome market</p>
                <SearchBar></SearchBar>
                <Feed></Feed>

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