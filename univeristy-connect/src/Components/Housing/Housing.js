import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Housing extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeMenuType: null        
        }
    }

    componentWillMount(){

    }

    // setActiveMenuType (e){
        
    //     const { setActiveMenu } = this.props;
    //     this.setState({activeMenuType: e});
    //     setActiveMenu(e);
    // }

    // handleClick({ target }){
    //     this.setState({houseType: target.name});
        
    // }

    // onSearch(dataobject) {
    //     console.log("Do some query with", dataobject )
    // }

    render(){
        const { setActiveMenu, setActiveMainPage } = this.props;
        //console.log(houseType);
        const options = UniversityConn.getOptionsModels();
       
        // const C = houseType==null ? null :
        //  (UniversityConn.getAddons().filter((value) => {
        //     return houseType.toString().toUpperCase() === value.title.toUpperCase();
        // }));
        // const HouseType = C ? C[0] : null;
        return(
            <div className="Housing-Wrapper">
                <p>Welcome Housing</p>

               <div>
                {/* {houseType==null ?  */}
                {
                
                    
                options.map((option, i)=> {
                
                    return (
                    <ul  key={option.title + i} >
                    <Link
                        name={`/Housing/${option.title}`}
                        to='/Display'
                        onClick={(e) => {setActiveMenu(e);} }
                        title={option.title}
                    
                    >
                        {option.desc}
                    </Link>
                   </ul> )
                })    
                
               
                // <Link 
                // name="House" 
                // onClick={(e) => this.handleClick(e)}>
                //     I am looking for a house..
                //     </Link>
                // <Link 
                // name="Roommate"    
                // onClick={(e) => this.handleClick(e)}>
                //      I am looking for a roommate..
                //  </Link>
                // )
            //     : 
            //    <HouseType.Component
            //    querySearch={(e)=> this.onSearch(e)}

            //    ></HouseType.Component>
              }
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