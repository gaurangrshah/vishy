import React, { useState } from 'react'

function FuncCounter() {
  // Hooks are simply functions so they just get called:
  const [count, setCount] = useState(0) // initialValue: 0, applied to state, and returned with stateHandler state: count // setState: setCount (which is the handler.)
  // useState hook takes one argument: initalValue, and applies it to the state property.
  // then it returns back the intial state property, along with a method capable of updating that property.


  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
      {/* state updated inline online, and output using count & setCount  */}
    </div >
  )
}
export default FuncCounter


/*
  Hook Rules:
  "ONLY CALL HOOKS AT TOP LEVEL"
  don't call hooks inside loops, conditions, or nested functions

  "ONLY CALL HOOKS FROM REACT FUNCTIONS"
  on from react functional components and not just any javascript function.
*/
