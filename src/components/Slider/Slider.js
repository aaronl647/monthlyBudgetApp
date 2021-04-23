import React, { Component } from "react";
import { RangeStepInput } from "react-range-step-input";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <RangeStepInput
          min={0}
          max={100}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <p>{this.props.value}</p>
      </div>
    );
  }
}
