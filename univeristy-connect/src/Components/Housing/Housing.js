import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'

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

    handleClick({ target }){
        this.setState({houseType: target.name});
    }

    onSearch(dataobject) {
        console.log("Do some query with", dataobject )
    }

    render(){
        const { houseType } = this.state;
        console.log(houseType);
       const C = houseType==null ? null :
         (UniversityConn.getAddons().filter((value) => {
            return houseType.toString().toUpperCase() === value.title.toUpperCase();
        }));
        const HouseType = C ? C[0] : null;
        return(
            <div className="Housing-Wrapper">
                <p>Welcome Housing</p>

               
                {houseType==null ? 
                (
                <div>
                <button name="House" onClick={(e) => this.handleClick(e)}>I am looking for a house..</button>
                <button name="Roommate" onClick={(e) => this.handleClick(e)}>I am looking for a roommate..</button>
                </div>)
                : 
               <HouseType.Component></HouseType.Component>
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