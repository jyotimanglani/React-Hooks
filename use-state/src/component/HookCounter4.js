import React from 'react'

function HookCounter4() {
    const [items, setItems] = React.useState([])
    const addItem = () => {
        setItems([...items,{
             id: items.length,
             value: Math.floor(Math.random() *10) +1
        }])
    }
  return (
    <div>
       <h1>useState with array</h1>
       <button onClick={addItem}>Add a number</button>
       <ul>
        {
            items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))
        }
       </ul>
    </div>
  )
}

export default HookCounter4