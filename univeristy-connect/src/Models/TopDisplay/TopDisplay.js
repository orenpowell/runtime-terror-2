import React from 'react'

const TopDisplay = (props) =>
{
    return (
        <div className={`${props.title}-top-display}`} >
            <div className="topdisplay-wrapper container">
                <div className="topdisplay">
                    <div className="title-wrapper row">
                         <label className='col-10'>{props.title}</label>
                        <input className='col-2' type='button' value = "View More"></input>
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
                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Card Title {props.title}</h5>
                        <p className="card-text">Some text</p>
                        <p className="card-text"><small className="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopDisplay;