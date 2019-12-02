import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import SearchBar from '../../Models/SearchBar/SearchBar'
import Feed from '../../Models/Feed/Feed'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import auth from '../../Utils/auth'
import req from '../../Utils/request'
import "react-datepicker/dist/react-datepicker.css";
import "./CreateEvent.css"
class CreateHouse extends Component{
    constructor(props){
        super(props);
        this.state = {
                  value:{
                    apartment_offCamps: null,
                    apartment_onCamps: null,
                    condo: null,
                    furnished: null,
                    housdesc: null,
                    min_price: null,
                    pet_friendly: null,
                    smoking:null,
                    townhouse: null
                  },
                  
        }
    }

    componentWillMount(){

    }

    // handleDate = date => {
    //     // this.setState({
    //     //   startDate: date
    //     // }, () => console.log(this.state.startDate));
    //     const { value } = this.state;
    //     var day = date.getDate();
    //     var monthIndex = date.getMonth();
    //     var year = date.getFullYear();
    //     const edate = `${year}-${monthIndex}-${day}`
    //     console.log(edate);
    //     this.setState({value: {...this.state.value, 'groupdate': edate}}, () => console.log(this.state.value));
 
    //   };

    handleChange = ({ target }) =>{
        if(target.type === 'checkbox'){
            console.log('here')
            const name = target.name;
            const { value } = this.state;
            const len = Object.keys(value);
            if(len.length > 0){
            const temp = len.filter((e) => e === name.toString());
            if(temp.length > 0){
                this.setState({
                    value: { ...this.state.value, [target.name]: !value[name]},
                  }, () => console.log(this.state.value));
                
               
            } else {
                 this.setState({
                    value: { ...this.state.value, [target.name]: true },
                  }, () => console.log(this.state.value));
            }
            } else{
                this.setState({
                    value: { ...this.state.value, [target.name]: true },
                  }, () => console.log(this.state.value));
            }
        } else {
            this.setState({
            value: { ...this.state.value, [target.name]: target.value },
            }, () => console.log(this.state.value));
        }
    } 

    handleSubmit(event) {
        event.preventDefault();
        const {value } = this.state;
        const date = new Date()
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
        const edate = `${year}-${monthIndex}-${day}`

        this.setState({value: {...this.state.value, 'MPdate': edate}}, () => console.log(this.state.value));
        console.log(value);
        //const formatValue = universityDB.formConstructor(value);
        const user = auth.getToken('loginUser') ;
        const requestURL = `http://localhost:3001/create/item/${user}`;
        req.post(requestURL, value);
        //this.props.history.push('/');
    }

 

    render(){
      
        return(
            <div className="createEvent-wrapper">
                <form onSubmit={e => this.handleSubmit(e)} >
                        
                {/* <label for="first_name">First Name</label>
                <input type="text" id="first_name" ></input>

                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" ></input> */}
                
            
                <div className="row">
                <div className="input-group mb-3 col">
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Price $</span>
                    </div>
                    <input type="text" className="form-control" onChange={this.handleChange}  name="min_price" placeholder="0" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group col-md-auto mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">House Description</span>
                    </div>
                    <input name ="housedesc" type="text" onChange={this.handleChange}  className="form-control" id="houseDesc"/>
                </div>

            </div>
            <div className="row">
                <div className='col'>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="pet_friendly" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Pet Friendly</span>
                        </div>
                    </div>

                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="smoking" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Smoking</span>
                        </div>
                    </div>

                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="furnished" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Furnished</span>
                        </div>
                    </div>
                </div>
                <form>
                <div className='col'>
                <label> Type of Housing</label>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text radio">
                                <input type="radio" onChange={this.handleChange} name="house" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">On-Campus Aparment</span>
                        </div>
                    </div>

                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text radio">
                                <input type="radio" onChange={this.handleChange} name="house" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Off-Campus Apartment</span>
                        </div>
                    </div>

                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text radio">
                                <input type="radio" onChange={this.handleChange} name="house" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="" >House</span>
                        </div>
                    </div>
                    
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text radio">
                                <input type="radio" onChange={this.handleChange} name="house" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">TownHouse</span>
                        </div>
                    </div>
                    
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text radio">
                                <input type="radio" onChange={this.handleChange} name="house" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Condo</span>
                        </div>
                    </div>


                </div>
                </form>
                
            </div>

            <button type="button" onClick={() => this.Search()} className="btn btn-primary">Search</button>
                </form>
            </div>

           
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Create/House',
    Component: CreateHouse,
    title: 'House',

    type: 'create',
    icon: null
})