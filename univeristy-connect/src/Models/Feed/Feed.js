import React from 'react'
import './Feed.css'
const Feed = (props) => {
    const {dataset,activePage, joinFunction, unJoinFunction } = props;
    console.log(dataset);
    return (
        <div className="Feed-Wrapper">
            <div className="card-columns">
                {dataset ?
                dataset.map((item, index) => {

                    //console.log(activePage.includes("My") ? "Unjoin": "Join");
                    return(
                    <div className="card"  key={item.Title +item.Id}>
                    {item.img ?
                    <img src="..." className="card-img-top" alt="..."/>: null}
                    
                    <div className="card-body">
                        <h5 className="card-title">{item.Title}</h5>
                        {activePage !=="None"? 
                        <button 
                        className="FeedClick"
                        onClick={() =>{ activePage.includes("My") ? unJoinFunction(item.Id) : joinFunction(item.Id)}}
                        style={{float: 'right'}}>{activePage.includes("My") ? "Unjoin": "Join"}</button>: null}
                        
                        <div onClick={()=> console.log("click")}>
                        {item.metaInfo ? <p className="card-text metaInfo">{item.metaInfo} </p>: null}
                        <p className="card-text">{item.Description}</p>
                        <p className="card-text"><small className="text-muted">Posted: {item.Date}</small></p>
                        </div>
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