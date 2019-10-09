import React, { Component } from 'react';
import './Main.css'
class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
          
        }
      }

    componentDidMount(){

    }

    render() {
        return(
            <div className="Main-Wrapper border" id="Main">
                <p>The Main Component</p>
            </div>
        )
    }
}

export default Main;