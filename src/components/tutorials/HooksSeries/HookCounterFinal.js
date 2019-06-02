import React, { useState, useEffect } from 'react'

function HookCounterFinal() {
  const [count, setCount] = useState(0)
  // sets up state initializes value to 0
  const [name, setName] = useState('')


  //just like useState(), useEffect() is also just a function
  useEffect(() => {
    // it take a parameter which gets executed after every render of the component.
    document.title = `You clicked ${count} times`
    // document.title will get the count updated on every render

    // this can be a problem for larger applications, and we may want more control
    //over how often and when useEffect actally runs. We may not neeed our document title updated on every render
    console.log('useeffect ran') // log for every click and ever onChange.

    // to avoid this behavior we add dependencies asan array as the second argument to useEffect`
  }, [count]) // now useEffect will only run when count is updated, and not when our name onChange fires,
  //which we did not specify an effect or a dependency for.

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
      {/* inline onClick setCount to increment count value. */}
    </div>
  )
}
export default HookCounterFinal
