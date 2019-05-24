
import React, { Component } from 'react';
import "./App.css";
import { Select, Radio } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class Sorts extends React.Component {
  state = {
    selected: 'rating',
  };

  handleSizeChange = e => {
    this.setState({ selected: e.target.value });
    console.log("selected "+ e.target.value);
    this.props.sorted(e.target.value);

  };

  render() {
    const { selected } = this.state;
    return (
      <div>
        <Radio.Group value={selected} onChange={this.handleSizeChange}>
          <Radio.Button value="rating">Sort By Rating (High to Low)</Radio.Button>
          <Radio.Button value="price">Sort By Price (Low to High)</Radio.Button>
          
        </Radio.Group>

      </div>
    );
  }
}

export default Sorts;