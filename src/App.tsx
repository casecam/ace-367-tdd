import React, { Component } from 'react'

export default class App extends Component {
  public label() {
    return 'Hello Reacts'
  }
  render() {
    return (
      <div>
        <h1>{this.label()}</h1>
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
