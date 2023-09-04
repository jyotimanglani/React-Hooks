import React, { useEffect, useRef } from 'react'

function FocusInput() {
    
    //useRef is used to access dom nodes directly witin functional components
    //it holds ref to dom nodes
    const inputRef = useRef(null)

    useEffect(()=>{
      //focus the input element
      inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} type='text'/>
    </div>
  )
}

export default FocusInput