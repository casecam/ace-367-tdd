import { useState } from 'react'
import Counter from './Counter';
import Heading from './Heading';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = (isShift: boolean) => {
    const inc: number = isShift ? 10 : 1;
    setCount(prevState => prevState + inc);
}

  return (
    <div>
      <Heading />
      <Counter 
        label={"Current"} 
        count={count}
        onCounterIncrease={increment}
      />
      <p>Nice TDD</p>
    </div>
  )
}

export default App
