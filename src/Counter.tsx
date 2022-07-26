import React, { Component } from 'react'

interface ICounterProps {
  label?: string
}

interface ICounterState {
  count: number
}
export default class Counter extends Component<ICounterProps, ICounterState> {
  public static defaultProps = {
    label: 'Count'
  }

  constructor(props: ICounterProps) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div className="counter">
        <label>{this.props.label}</label>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
