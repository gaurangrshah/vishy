import React, { useState } from 'react'

function FuncCounterWPrevState() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount)

  const incrementFive = () => {

    for (let i = 0; i < 5; i++) {

      // we expect setCount to increment count each time the loop runs
      setCount(count + 1)
      // although in actuality what happens is that setCount keeps incrementing the same original count value that was passed in.

    }
  }
  const incrementFivePerf = () => {
    for (let i = 0; i < 5; i++) {
      // this is why the right way of implementing setCount for useState, by:
      setCount(prevCount => prevCount + 1)
      //in this implementation setCount accepts a function as an argument  that has access to prevCount, we can use this value to manipulate count thru setCount
    }
  }

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)} >Reset</button>
      <button onClick={() => setCount(count + 1)} >+</button>
      <button onClick={() => setCount(count - 1)} >-</button><br />
      <button onClick={() => setCount(count + 5)}>EdgeCase: +5 :MyFix </button>
      {/* unlikely use case example below shows why manipulating count as we are is an issue */}
      <button onClick={incrementFive}>EdgeCaseNoGood: +5 </button>
      <button onClick={incrementFivePerf}>EdgeCaseFix: +5 </button>
      <button onClick={() => setCount(prevCount => prevCount + 5)}>PreferredUse: +5 </button>
    </div>
  )
}

export default FuncCounterWPrevState
