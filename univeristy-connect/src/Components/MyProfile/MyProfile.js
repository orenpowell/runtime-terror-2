import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';

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
                <p>Welcome to my Profile</p>
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Components/MyProfile/MyProfile',
    Component: MyProfile,
    title: 'My Profile'
})