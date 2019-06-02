import React, { useState } from 'react'

function ArrCounter() {
  const [items, setItems] = useState([])

  const addItem = () => {
    setItems([ // setItems accepts an array as an arg
      // inside the array we spread out current ...items
      ...items, {// here we're appending a newobject,so as to not overwrite the original array.
        id: items.length, // creating the next id based on the current items.length
        value: Math.floor(Math.random() * 10) + 1 // random num generated for value.
      }
    ])
  }
  return (
    <div>
      <button onClick={addItem}> Add a number  </button>
      {/* calls addItem onCllick which, generates a random number when we then push onto the array.  */}
      <ul>
        {
          items.map(item => {
            return <li key={item.id}>{item.value}</li>
          })
        }
      </ul>
    </div>
  )
}
export default ArrCounter;
