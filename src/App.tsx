import React, { Component } from 'react'
import Counter from './Counter';
import Heading from './Heading';

interface ICounterState {
  count: number
}
export default class App extends Component<object, ICounterState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      count: 0
    }
  }

  public increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    this.setState({count: this.state.count + inc});
}

  public render() {
    return (
      <div>
        <Heading />
        <Counter 
          label={"Current"} 
          count={this.state.count}
          onCounterIncrease={this.increment}
        />
        <p>Nice TDD</p>
      </div>
    )
  }
}


// import React from 'react';

// function App() {
//   function label() {
//     return 'Hello React'
//   }
//   return (
//     <div>
//      <h1>{label()}</h1>
//      <p>Nice TDD</p>
//     </div>
//   );
// }

// export default App;
