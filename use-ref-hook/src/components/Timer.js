import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(()=>{
            intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return() => {
            clearInterval(intervalRef.current)
        }
    },[])

  return (
   
    <div>Timer - {timer}
    <button onClick={()=>clearInterval(intervalRef.current)}> Clear hook timer</button>
    </div>
  )
}

export default Timer