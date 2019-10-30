import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
class Housing extends Component{
    constructor(props){
        super(props);
        this.state = {
            availableHousing: [],
            houseType: []
        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="Housing-Wrapper">
                <p>Welcome Housing</p>
                <div className='row'> 
                    <div class="btn mr-2" aria-label="First group">
                        <button type="button" class="btn btn-secondary">1</button>
                    </div>
                </div>
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