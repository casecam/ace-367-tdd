import React, { Component } from 'react'

interface ICounterProps {
  label?: string
  start?: number
}

interface ICounterState {
  count: number
}
export default class Counter extends Component<ICounterProps, ICounterState> {
  public static defaultProps = {
    label: 'Count',
    start: 0
  }

  constructor(props: ICounterProps) {
    super(props)
    this.state = {
      count: props.start!
    }
  }

  public handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const inc: number = event.shiftKey ? 10 : 1
    this.setState({count: this.state.count + inc})
  }

  render() {
    return (
      <div
        data-testid="counter"
        className="counter"
        onClick={this.handleClick}
      >
        <label>{this.props.label}</label>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
