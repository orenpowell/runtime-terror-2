import React, { Component } from 'react';
import InputRange from 'react-input-range'
import UniversityConn from "../../UniversityConnect"
class RoommateSearch extends Component {
    constructor(props){
        super(props);
        this.state ={
            value: {}
          }
    }


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
    
    Search() {
        const { value } = this.state;
        console.log(value);
        this.props.querySearch(value);
    }
    render(){
        return(
            <div className="SearchForm container"> 
                <div className="row">
                    <div className="input-group mb-3 col">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Min $</span>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange}  name="min_price" placeholder="0" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
    
                    <div className="input-group mb-3 col">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Max $</span>
                        </div>
                        <input type="text" className="form-control" onChange={this.handleChange}  name="max_price" placeholder="0" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
    
                </div>

                <label>Gender</label>
                <div className="row">
                    <div className='col'>
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input type="checkbox" onChange={this.handleChange} name="gender_male" />
                                </div>
                            </div>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Male</span>
                            </div>
                        </div>
    
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input type="checkbox" onChange={this.handleChange} name="gender_female" />
                                </div>
                            </div>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Female</span>
                            </div>
                        </div>
    
                        <div className="input-group ">
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <input type="checkbox" onChange={this.handleChange} name="gender_Other" />
                                </div>
                            </div>
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="">Other</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
                <button type="button" onClick={() => this.Search()} className="btn btn-primary">Search</button>
            </div>
    
        )
        }

}

export default UniversityConn.registerModel({
    path: '/Housing/Roommate',
    Component: RoommateSearch,
    title: 'Roommate',

    type: 'option',
    icon: null,
    desc: 'I am looking for a roommate..'
})