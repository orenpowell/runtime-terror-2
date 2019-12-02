import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar';

class MyProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            event: null,
            model: []
        }
    }

    componentWillMount(){

    }

    createModel(e) {
        const options = UniversityConn.getCreateModels();
        const model = options.filter((value) => {
            return value.title === e;
        });
        this.setState({model})
    }

    render(){
        
        const {model} = this.state;
        const com = model[0];
        return(
            <div className="MyProfile-Wrapper">
               
               
                    
                    {/* <label for="first_name">First Name</label>
                    <input type="text" id="first_name" ></input>

                    <label for="last_name">Last Name</label>
                    <input type="text" id="last_name" ></input> */}
                    
                  
                    <div className="input-group col-md-auto mb-3">
                        <button onClick={() => this.createModel("Event")}>
                            Create new Event
                        </button>
                        <button  onClick={() => this.createModel("Group")}>
                            Create new Group
                        </button>
                        <button  onClick={() =>  this.createModel("Item")}>
                            Sell an Item
                        </button>
                        <button  onClick={() =>  this.createModel("House")}>
                            Advertise a House
                        </button>
                    </div> 
                   {model.length ? <com.Component></com.Component> : null}
        
                
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