import React from 'react';
import './SearchBar.css'
const SearchBar = (props) => {
return(
    <div className="Search-wrapper container ">
        <div className="input-group center-block">
          <div className="zip col-lg-9" className="search">
            <input type="text" className="form-control" placeholder="Search...."></input>
          </div>
          <div className="col-lg-3">
            <button className='btn-primary' className="search-button">
              Search
            </button>
          </div>
        </div>
      </div>
)
}

export default SearchBar;