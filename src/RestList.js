import React from "react";
import axios from "axios";

import {render} from 'react-dom'
import Map from './Map.js'
import Recs from './Recs'
import { Row, Col } from 'antd';


import { Layout } from 'antd';
import SearchBar from './Search.js'
import Check from './Check.js'
import Sorts from './Sorts.js'
import DistanceSearch from './DistanceSearch.js'
import KeySearch from './KeySearch.js'


const { Header, Footer, Sider, Content } = Layout;



const API_KEY = process.env.REACT_APP_API_KEY
export default class RestList extends React.Component {
constructor(props){
        super(props);
        this.callApi = this.callApi.bind(this);
      

  this.state = {

    restaurants: [],
    titles: [],
    search: [38.0293,-78.4767],
    searchedAddress: "Charlottesville",
    type: "restaurant",
    sort: "rating",
    dist: "5000",
    key: "",
   
    
  };
  
}



callApi(){
    console.log("I called APi");
    
    axios.get("https://cors-anywhere-hclaunch.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+this.state.search[0]+","+this.state.search[1]+"&radius="+this.state.dist+"&opennow&types="+this.state.type+"&keyword="+this.state.key+"&key="+API_KEY).then(
        res => {

    let arr = [];
    let results = res.data.results;
    console.log(results);

    for(let i=0; i< results.length ; i++){
        

        
        if(results[i].price_level == null){
            results[i].price_level = "N/A";
        }
    
        arr.push({name: results[i].name, address : results[i].vicinity, rating: results[i].rating, price: results[i].price_level, lat: results[i].geometry.location.lat,
        long: results[i].geometry.location.lng});
        
        
    }
    if(this.state.sort==="price"){
        arr.sort((a, b) => (a.price > b.price) ? 1 : -1)

    }
    else{
        arr.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
    }

      this.setState({ restaurants: arr });
      console.log(this.state.restaurants)
    

      let title = arr.map(rest => (


        `${rest.name} | price: ${rest.price} | rating: ${rest.rating} `
      )
      )
      console.log(title)
      this.setState({titles: title});

   
    
    });
}
handleSearchFill = (data) =>{
   console.log("handSearchFill");
   console.log(data);
    
    axios.get("https://cors-anywhere-hclaunch.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address="+data+"&key="+API_KEY).then(
        res => {
            console.log(res);
            let results = res.data.results[0].geometry.location;
            console.log(results.lat);
            let arr = new Array(2);
            arr[0] = results.lat;
            arr[1] = results.lng;
            console.log(arr[0]);
            console.log(arr[1]);
            this.setState({
                search: arr,
                dist: "5000",
                searchedAddress: data,
            }, () => {
                this.callApi();
            });
            
            
            
            
});
}

handleChecks = (data) =>{
    this.setState({
        type: data
    }, () => {
        this.callApi();
    });
}

handleSorts = (data) =>{
    this.setState({
        sort: data
    }, () => {
        this.callApi();
    });
    
}

handleDist = (data) =>{
    this.setState({
        dist: data
    }, () => {
        this.callApi();
    });
    
}

handleKey = (data) =>{
    this.setState({
        key: data
    }, () => {
        this.callApi();
    });
    
}

  
componentDidMount() {
    this.callApi();

}
render() {
    if(this.state.restaurants.length !== 0 && this.state.titles.length!== 0){

    return (
        <div>
  
  <Map map = {this.state.restaurants} geometry= {this.state.search}/>
  <Row>
  <p></p><p></p>
  <h2>Finding {this.state.key} Places to Eat Near {this.state.searchedAddress} at a radius of {this.state.dist}m!</h2>
      <Col span={12}><Recs recs = {this.state.titles}/></Col>
      <p></p><p></p>
      
      <Col span={12}><SearchBar searchFill = {this.handleSearchFill} /><p></p><p></p>
      <DistanceSearch dist = {this.handleDist}/><p></p><p></p><KeySearch keyFill = {this.handleKey}/><Check checked = {this.handleChecks}/>
      <p></p><Sorts sorted ={this.handleSorts}/></Col>
    </Row>

        
        



        
        
        <p></p>
        
  


   
      </div>
    );
          }
          else{
              return null;
          }
}
}



