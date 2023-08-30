import React, { useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('')

    useEffect(()=> {
        console.log("updating")
        document.title = `You clicked ${count} times` //useEffect after render
    },[count]) //conditionally run effects 

  return (
    <div>
        <input type='text' onChange={e => setName(e.target.value)}></input>
        <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterOne