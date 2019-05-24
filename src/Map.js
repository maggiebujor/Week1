import "./App.css";
import React, { Component } from "react";
import L from "leaflet";

var mymap = L.map("mapid").setView([38.0293,-78.4767], 12);
var layerGroup = L.layerGroup();



export default class Map extends React.Component {

    constructor(props){
        super(props);
        this.makeMap = this.makeMap.bind(this);
        this.changeMarkers = this.changeMarkers.bind(this);
      

  
}

changeMarkers(map){
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
console.log("change markers");
let geometry = this.props.geometry;
let data = this.props.map;
for(let i =0; i<data.length; i++){
    var marker = L.marker([data[i].lat, data[i].long]).addTo(map);
    L.marker().addTo(layerGroup);
    marker.bindPopup(`<body><b>${data[i].name}</b><br />  price: ${data[i].price} \| rating: ${data[i].rating}<body/>`)
   
  }
console.log(geometry);
let lat = geometry[0];
let long = geometry[1];
console.log(lat);
console.log(long);
 map.setView([lat,long], 12);
}

makeMap(){
    console.log("I Made a Map")
    //this.changeMarkers(mymap);

    L.tileLayer(
        "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox.streets",
          accessToken: 'pk.eyJ1IjoiY2FteWNvb3AiLCJhIjoiY2p2eTdtN2M5MGN3ZTQzcDg5YW1pcjFyeCJ9._yE8h4okcxZVUlgPZkhwuw'
        }
      ).addTo(mymap);



  }
  
  componentDidMount() {

    this.makeMap();
      }
    
    
      
        
      
      render() {
    this.changeMarkers(mymap);
    this.makeMap();

    return null;
        }
      }
    

