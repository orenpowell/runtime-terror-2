import React, {Component} from 'react';
import './SearchBar.css'
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state ={
      searchSet: null
    }
  }

 componentDidMount(){

 }

 handleChange = ({ target }) =>{
  const filters = target.value;
  this.setState({searchSet: filters});
  console.log(filters);
}
 
 render(){
  return(
    <div className="Search-wrapper container ">
        <div className="input-group center-block">
          <div className="zip col-lg-9" className="search">
            <input type="text" className="form-control" placeholder="Search...." onChange={this.handleChange} name="wordFilters"></input>
          </div>
          <div className="col-lg-3">
            <button className='btn-primary search-button'  >
              Search
            </button>
          </div>
        </div>
      </div>
  )
  }
}

export default SearchBar;