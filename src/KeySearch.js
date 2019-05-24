
import React, { Component } from 'react';

import { Input } from 'antd';
import "./App.css";
import axios from 'axios';

const Search = Input.Search;



class KeySearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: ""
        }
      }





  render() {
    return (
        <div>
<p></p>
    <Search
      placeholder="Specific Keyword"
      enterButton="Search"
      size="large"
      onSearch={value => {
            
        this.props.keyFill(value)
            this.setState({key: value})
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

export default KeySearch;