import React from "react";
import axios from "axios";

import {render} from 'react-dom'
import Map from './Map.js'


const API_KEY = process.env.REACT_APP_API_KEY
export default class RestList extends React.Component {
  state = {

    restaurants: [],
    
  };
  


  componentDidMount() {
    axios.get("https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=5000&types=restaurant&key="+API_KEY).then(
        res => {

    let arr = [];
    let results = res.data.results;
    console.log(results);

    for(let i=0; i< results.length ; i++){
        if(results[i].opening_hours.open_now == true){

        
        if(results[i].price_level == null){
            results[i].price_level = "information unavailable";
        }
    
        arr.push({name: results[i].name, address : results[i].vicinity, rating: results[i].rating, price: results[i].price_level, lat: results[i].geometry.location.lat,
        long: results[i].geometry.location.lng});
        
        }
    }

      this.setState({ restaurants: arr });
    
    });
}

   
  
render() {
    if(this.state.restaurants.length != 0){
    return (
      <div>
        <Map map = {this.state.restaurants}/>
        Nearby Open Restaurants For You!
        <p></p>
          {this.state.restaurants.map(rest => (
            <li> <b>{rest.name}</b>, rating: {rest.rating}, price: {rest.price}</li>
          ))}
        
      </div>
    );
          }
          else{
              return null;
          }
}
}