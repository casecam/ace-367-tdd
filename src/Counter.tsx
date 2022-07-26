import React, { Component } from 'react'

const Counter: React.FC<ICounterProps> = (
  {label = 'Count', count}
) => {
    return (
      <div
        data-testid="counter"
        className="counter"
        // onClick={handleClick}
      >
        <label>{label}</label>
        <span>{count}</span>
      </div>
    )
}
