import React, { Component } from 'react'

export default class App extends Component {
  public label = 'Hello react'

  public handleClick () {
    alert('Hello World')
  }
  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.label}</h1>
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
