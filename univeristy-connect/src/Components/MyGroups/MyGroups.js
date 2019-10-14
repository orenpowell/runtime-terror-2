import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar';
import Feed from '../../Models/Feed/Feed'
class MyGroups extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="MyGroups-Wrapper">
                <p>Welcome to my Groups</p>
                <SearchBar></SearchBar>
                <Feed></Feed>
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Components/MyGroups/MyGroups',
    Component: MyGroups,
    title: 'My Groups'
})