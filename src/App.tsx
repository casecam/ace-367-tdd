import React, { Component } from 'react'
import Counter from './Counter';
import Heading from './Heading';

export default class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Counter label={"Current"} />
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
