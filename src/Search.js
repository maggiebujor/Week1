
import React, { Component } from 'react';

import { Input } from 'antd';
import "./App.css";
import axios from 'axios';

const Search = Input.Search;



class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: "Charlottesville"
        }
      }





  render() {
    return (
        <div>
<p></p>
    <Search
      placeholder="Your Address Goes Here"
      enterButton="Search"
      size="large"
      onSearch={value => {
            
            this.props.searchFill(value)
            this.setState({address: value})
      }
        }
    
    
    



    
    />
<p></p>

  </div>


        
    );
  }
}

export default SearchBar;
