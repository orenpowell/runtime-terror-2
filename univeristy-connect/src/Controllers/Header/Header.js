import React, { Component } from 'react';
import './Header.css'
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount(){

    }

    render(){
        return(
            <div className="HomePage-wrapper border" id="Header">
                <p>This is the Header Component</p>
            </div>
        )
    }
}

export default Header;