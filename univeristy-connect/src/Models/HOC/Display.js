import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';
import UniversityConn from '../../UniversityConnect';
import req from '../../Utils/request';
import Feed from '../Feed/Feed'
class Display extends Component  {
        constructor(props){
            super(props);
            this.state ={
                SearchBar: null,
                loadingDone: false,
                dataSet: null,
                searchSet: null,
                apiPath: null,

            }
           
        }  
        
     fetchData(path) {
        console.log(path);
        //const requestURL = `http://localhost:3001/AllEvents`;
        // Swtich with
        const requestURL = `http://localhost:3001${path}`;


        
          req.query(requestURL, (error, response, body) => {
    
            if (error) {
                return console.error('Request failed:', body);
            }
              const result = JSON.parse(body);
              this.setState({dataSet : result})
            } );

     } 



     componentDidMount() {
        const {activeMenu, searchBarType} = this.props;
        
        if(activeMenu){
        const options = UniversityConn.getOptionsModels().filter((value, index) => {
            
            return value.path === searchBarType.toString();

        });

        const path = searchBarType === "/Search" ? `/All${activeMenu}` : options[0].path;
        this.fetchData(path);
        this.setState({SearchBar: options[0].Component, apiPath: path});
     
        }else{

        }

        setTimeout(() => {
            this.setState({loadingDone: true}); 
         }, 500)

      
    }

    onSearch = (e) => {

    }


    setNewSearch = (e) => {
        this.setState({searchSet: e});
    }

    renderRedirect = () => {
        const { SearchBar, dataSet } = this.state;
        const { querySearch } = this.props; 
        if (SearchBar === null) {
          return <Redirect to='/' />
        }else{
            return (
            <React.Fragment>
            <SearchBar setActiveMenu={this.props} querySearch={querySearch}></SearchBar>
            <Feed dataset ={dataSet}></Feed>
            </React.Fragment>
            ) 
        }
    }

    render() {
        const { SearchBar, loadingDone } = this.state;
        console.log(SearchBar);
        return(
            <div>
                {loadingDone? this.renderRedirect(): null}
            </div>
        )
    }
}

export default UniversityConn.registerModel({
    path: '/Display',
    Component: Display,
    title: '',

    type: 'model',
    icon: null
})