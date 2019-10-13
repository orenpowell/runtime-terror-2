import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';

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
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Components/MyGroups/MyGroups',
    Component: MyGroups,
    title: 'My Groups'
})