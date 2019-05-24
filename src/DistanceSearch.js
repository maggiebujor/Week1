
import React, { Component } from 'react';

import { Input } from 'antd';
import "./App.css";
import axios from 'axios';

const Search = Input.Search;



class DistanceSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            distance: "5000"
        }
      }





  render() {
    return (
        <div>
<p></p>
    <Search
      placeholder="Desired Radius of Location (m)"
      enterButton="Search"
      size="large"
      onSearch={value => {
            
        this.props.dist(value)
            this.setState({distance: value})
      }
        }
    
    
    



    
    />
<p></p>
   <h2>
       </h2> 
  </div>


        
    );
  }
}

export default DistanceSearch;
