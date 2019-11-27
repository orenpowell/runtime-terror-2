import { stringify } from "querystring";

var request = require('request');

const formatQueryParams = (params) => {
    return Object.keys(params)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join('&');
  }

 const parseJSON = (response) => {
    return response.json ? response.json() : response;
  }

 const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    return parseJSON(response).then(responseFormatted => {
      const error = new Error(response.statusText);
      error.response = response;
      error.response.payload = responseFormatted;
      throw error;
    });
    }


 const query = (url, callback) => {
    request.get(url, callback)
  }
  
 const post = (url, body) => {
   request.post({url, form: body}, (error, response) => {
    
    if (error) {
        return console.error('Request failed:', body);
    } 
    console.log(response);

 });
 }
 const auth = (url, options = {}, callback) => {
    console.log(url, options);
  
    const setup ={
    url,
    auth: {
        username: options.user_name,
        password: options.password
    }
    };
     request.get(setup, callback);
    
}

const req = {
  auth,
  query, 
  post
}

export default req;
