import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class TopDisplay extends Component
{
    constructor(props){
        super(props);
        this.state ={

        }
    }


    componentDidMount(){

    }


    render() {
        const { setActiveSearchBarType, title, data, setActiveMainPage} = this.props;
        return (

            <div className={`${title}-top-display}`} >
                {data.length ? 
                <div className="topdisplay-wrapper container">
                    <div className="topdisplay">
                        <div className="title-wrapper row">
                            <label className='col-10'>{title}</label>
                            <Link className='col-2' 
                             onClick={(e) => {setActiveSearchBarType(e);
                                setActiveMainPage(e.target.name)    }}   
                             name={`${title}`}
                             to={`/Display`}
                            >More</Link>
                        </div>
                        {/* <div className={`Item-roll row border`}>
                            <div className="item col-sm border">
                            Sample
                            </div>
                            <div className="col-sm border">
                            Sample
                            </div>
                            <div className="col-sm border">
                            Sample
                            </div>
                        </div> */}
                        <div className="card-deck">
                            {data.map((item) => {
                                
                                return(
                               <div className="card">
                               <div className="card-body">
                               <h5 className="card-title"> {item.Title}</h5>
                            <p className="card-text">{item.Description}</p>
                            {item.metaInfo ?<p className="card-text"><small className="text-muted">{item.metaInfo}</small></p> :null}
                               
                               </div>
   
                                </div> )
                            })}


                            {/* <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Card Title {title}</h5>
                            <p className="card-text">Some text</p>
                            <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                            </div>

                            </div> */}

                           

                        </div>
                    </div>
                </div>
                 : null}
            </div>

        )
                    }
}

export default TopDisplay;