import React, { Component } from 'react'

interface ICounterProps {
  label?: string
}
export default class Counter extends Component<ICounterProps> {
  public static defaultProps = {
    label: 'Count'
  }

  render() {
    return (
      <div className="counter">
        <label>{this.props.label}</label>
        <span>1</span>
      </div>
    )
  }
}
