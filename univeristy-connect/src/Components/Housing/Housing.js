import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
import RoommateSearch from '../../Models/SearchTypes/HousingRoom'
class Housing extends Component{
    constructor(props){
        super(props);
        this.state = {
            availableHousing: [],
            houseType: null
        }
    }

    componentWillMount(){

    }

    handleClick(e){
        this.setState({houseType: e});
    }

    onSearch(dataobject) {
        console.log("Do some query with", dataobject )
    }

    render(){
        const { houseType } = this.state;
        console.log(houseType);
        return(
            <div className="Housing-Wrapper">
                <p>Welcome Housing</p>
                {houseType ? null  :
                    // <div className='row choice-group'> 
                    // <button className="btn btn-primary" onClick={(e) => this.handleClick('Roommate')} type="submit">I'm looking for a place...</button>
                    // <button className="btn btn-primary" onClick={(e) => this.handleClick('House')} type="submit">I have a place...</button>
                    <RoommateSearch
                        querySearch={(dataobject) => this.onSearch(dataobject)}
                    ></RoommateSearch>
                // </div>
            }
                
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