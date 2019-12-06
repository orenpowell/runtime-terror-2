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
class CreateItem extends Component{
    constructor(props){
        super(props);
        this.state = {
                  value:{},
                  startDate: new Date()
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
         const user = auth.getToken('loginUser') ;
        const requestURL = `http://localhost:3001/create/item/${user}`;
        
        this.setState({value: {...this.state.value, 'MPdate': edate}}, () => req.post(requestURL, this.state.value));
        console.log(value);
        //const formatValue = universityDB.formConstructor(value);
       
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
                
            
                <div className="input-group col-md-auto mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Item Price</span>
                    </div>
                    <input name ="itemprice" type="text" onChange={this.handleChange}  className="form-control" id="eventTitle"/>
                </div>

                <div className="input-group col-md-auto mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Item Description</span>
                    </div>
                    <input name ="itemdescription" type="text" onChange={this.handleChange}  className="form-control" id="eventDescription"/>
                </div>
                <div>
                </div>
                <button type="submit"  styclassName="btn btn-primary">Submit</button>
                </form>
            </div>

           
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Create/Item',
    Component: CreateItem,
    title: 'Item',

    type: 'create',
    icon: null
})