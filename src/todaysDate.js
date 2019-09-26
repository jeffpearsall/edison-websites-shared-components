import React, { Component } from 'react';

export default class TodaysDate extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  render(){
    let date = new Date();
    return (
      <div>{"Today's date is "+date}</div>
    )
  }
}
