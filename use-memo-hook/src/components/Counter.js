import React, { useMemo, useState } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    
   const isEven = useMemo(() => {
        let i = 0
        while(i<2000000000) i++
        return counterOne % 2 === 0
    },[counterOne]) 
    
    
    // by using useMemo hook , the delay is only applied to counter one and counter two works fine 
    //useMemo is also used for performance optimization
    //difference between useCallback and useMemo
    //useCallback caches the provided function instance itself whereas useMemo invokes the provided function and caches the result 
    //when we need to cache the function we use useCallback hook 
    //and when we need to cache the result of an invoked function we use useMemo hook


    

  return (
    <div>
        <div>
            <button onClick={incrementOne}>
                Count One - {counterOne}
            </button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>

        <div>
            <button onClick={incrementTwo}>
                Count Two - {counterTwo}
            </button>
        </div>
    </div>
  )
}

export default Counter