import React, { Component } from 'react';
import InputRange from 'react-input-range'
import UniversityConn from "../../UniversityConnect"
import './HousingRoom.css'
class HouseSearch extends Component {
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
        const { querySearch } = this.props;
        const { value } = this.state;
        console.log(value);
        querySearch(value);
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

                <div className='col'>
                <label> Type of Housing</label>
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="apartment_onCampus" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">On-Campus Aparment</span>
                        </div>
                    </div>

                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="apartment_offCamps" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Off-Campus Apartment</span>
                        </div>
                    </div>

                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="house" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">House</span>
                        </div>
                    </div>
                    
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="townhouse" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">TownHouse</span>
                        </div>
                    </div>
                    
                    <div className="input-group ">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" onChange={this.handleChange} name="condo" />
                            </div>
                        </div>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="">Condo</span>
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
    path: '/Housing/House',
    Component: HouseSearch,
    title: 'House',

    type: 'option',
    icon: null,
    desc: 'I am looking for a house..'
})