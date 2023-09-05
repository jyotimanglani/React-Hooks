import React, { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count) // custom hooks help us to reuse the logic without duplicating it
  return (
    <div>
        <button onClick={() => setCount(count+1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleOne