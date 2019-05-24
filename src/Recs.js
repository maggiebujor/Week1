import "./App.css";
import React, { Component } from "react";
import { List, Typography } from 'antd';


var divStyle = {
    color: 'white',
    backgroundColor: '#4682B4',
    fontFamily: "Serif",
    fontSize: 16,
  };
  


export default class Recs extends React.Component {


  
  render() {
      return (
        <div>

{/* <h3 style={{ margin: '16px 0' }}></h3> */}
<br></br>
    <List
      size="x-small"

      bordered
      dataSource={this.props.recs}
      renderItem={item => <List.Item>{item}</List.Item>}
    />


      </div>
      );
    }
  }




