import React from 'react'
import './Feed.css'
const Feed = (props) => {
    const {dataset } = props;

    return (
        <div className="Feed-Wrapper">
            <div className="card-columns">
                {dataset ?
                dataset.map((event, index) => {
                    return(
                    <div className="card"  key={event.eventTitle + index}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{event.eventTitle}</h5>
                        <p className="card-text">{event.eventDescription}</p>
                    </div>
                    </div>
                    )

                }) :
                <React.Fragment>
                 <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Title of the card</h5>
                    <p className="card-text">info of the item</p>
                </div>
                </div>

                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Title of the card</h5>
                    <p className="card-text">info of the item</p>
                </div>
                </div>

                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Title of the card</h5>
                    <p className="card-text">info of the item</p>
                </div>
                </div>

                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Title of the card</h5>
                    <p className="card-text">info of the item</p>
                </div>
                </div>

                <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Title of the card</h5>
                    <p className="card-text">info of the item</p>
                </div>
                </div>
                </React.Fragment>
                }




            </div>
                
        </div>

    )
   
}

export default Feed;