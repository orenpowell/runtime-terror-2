import React from 'react'

const TopDisplay = (props) =>
{
    return (
        <div className={`${props.title}-top-display}`} >
            <div className="topdisplay-wrapper container">
                <div className="topdisplay">
                    <div className="title-wrapper row">
                         <label className='col-10'>{props.title}</label>
                        <label className='col-2'><small>View More</small></label>
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
                        <div class="card-body">
                        <h5 class="card-title">Card Title {props.title}</h5>
                        <p class="card-text">Some text</p>
                        <p class="card-text"><small class="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div class="card-body">
                        <h5 class="card-title">Card Title {props.title}</h5>
                        <p class="card-text">Some text</p>
                        <p class="card-text"><small class="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                        <div className="card">
                        <div class="card-body">
                        <h5 class="card-title">Card Title {props.title}</h5>
                        <p class="card-text">Some text</p>
                        <p class="card-text"><small class="text-muted">Maybe some extra stuff?</small></p>
                        </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopDisplay;