import React, { Component } from 'react';
import UniversityConn from '../../UniversityConnect';
import TopDisplay from '../../Models/TopDisplay/TopDisplay'
import req from '../../Utils/request'

class WelcomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            catalog: {
                titles: ['Connections', 'Events', 'Groups', 'MarketPlace']
            },
            data: [],
            set: false

        }
    }

    componentWillMount(){
        const tempData = [];
        const requestURL = `http://localhost:3001/AllGroups/`;
        const { catalog  } = this.state;
        catalog.titles.map((value) => {
        const requestURL = `http://localhost:3001/Top10/${value}`;
        req.query(requestURL, (error, response, body) => {
            
            if (error) {
                return console.error('Request failed:', body);
            }

            tempData.push(JSON.parse(body));
            
              //const result = JSON.parse(body);
            //   console.log(result);
            
            } );
        });

        
        
        this.setState({data: tempData});
       setTimeout(() => {
            this.setState({set: true});
         }, 2000)
 
    }

    render(){
        const { catalog, data, set  } = this.state;
        const {  setActiveSearchBarType, setActiveMainPage  } = this.props;
       
        return(
            <div className="Welcome-Wrapper">
                <p>Welcome</p>
                {set ? 
                catalog.titles.map((title, e) => {
                    return(
                    <TopDisplay 
                        data={data[e]}
                        key={title}
                        title={title}
                        setActiveMainPage={setActiveMainPage}
                        setActiveSearchBarType={setActiveSearchBarType}
                    ></TopDisplay>
                    )
                }) : null}
                
              

            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/',
    Component: WelcomePage,
    title: 'Home',

    type: 'model'
})