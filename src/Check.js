
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

class Check extends React.Component {
  state = {
    selected: 'restaurant',
  };

  handleSizeChange = e => {
    this.setState({ selected: e.target.value });
    console.log("selected "+ e.target.value);
    this.props.checked(e.target.value);

  };

  render() {
    const { selected } = this.state;
    return (
      <div>
        <Radio.Group value={selected} onChange={this.handleSizeChange}>
          <Radio.Button value="restaurant">Restaurant</Radio.Button>
          <Radio.Button value="bar">Bar</Radio.Button>
          <Radio.Button value="cafe">Cafe</Radio.Button>
        </Radio.Group>

      </div>
    );
  }
}

export default Check;