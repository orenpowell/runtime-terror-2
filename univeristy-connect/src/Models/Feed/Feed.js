import React from 'react'
import './Feed.css'
const Feed = (props) => {
    const {dataset } = props;
    console.log(dataset);
    return (
        <div className="Feed-Wrapper">
            <div className="card-columns">
                {dataset ?
                dataset.map((item, index) => {
                    return(
                    <div className="card"  key={item.Title +item.Id}>
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        {item.metaInfo ? <p className="card-text metaInfo">{item.metaInfo} </p>: null}
                        <p className="card-text">{item.Description}</p>
                        <p className="card-text"><small className="text-muted">Posted: {item.Date}</small></p>
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