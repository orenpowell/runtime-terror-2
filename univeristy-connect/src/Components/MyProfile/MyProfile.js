import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar';

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="MyProfile-Wrapper">
                
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/MyProfile',
    Component: MyProfile,
    title: 'My Profile',

    type: 'model'
})