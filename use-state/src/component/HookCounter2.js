import React from 'react'

function HookCounter2() {
    const initialCount = 0 
    const [count, setCount] = React.useState(initialCount)
  return (
    <div>
        <h1>Counter-2 (useState with prevState)</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounter2