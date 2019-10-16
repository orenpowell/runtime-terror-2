import React, { Component } from 'react'
import UniversityConn from '../../UniversityConnect';
class LoadPage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="LoadPage-Wrapper container">
                <form>
                    <div className="form-group">
                        {/* <label for="first_name">First Name</label>
                        <input type="text" id="first_name" ></input>

                        <label for="last_name">Last Name</label>
                        <input type="text" id="last_name" ></input> */}
                        
                        <div class="col-md-4 mb-3">
                        <div className="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">First Name</span>
                            </div>
                            <input type="text" class="form-control" id="first_name"/>
                        </div>
                        </div>
                         
                    </div>
                </form>


            </div>
        )
    }
}


export default UniversityConn.registerModel({

    path: '/Components/Housing/Housing',
    Component: LoadPage,
    title: 'LoadPage',

    type: 'model'
})