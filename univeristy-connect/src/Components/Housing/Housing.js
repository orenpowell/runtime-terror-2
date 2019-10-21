import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
class Housing extends Component{
    constructor(props){
        super(props);
        this.state = {
            availableHousing: []
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="Housing-Wrapper">
                <p>Welcome Housing</p>
            <SearchBar></SearchBar>
            <Feed></Feed>

            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Housing',
    Component: Housing,
    title: 'Housing',

    type: 'addon',
    icon: 'home'
})