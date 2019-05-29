import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
  // ref is available in functional components as the 2nd param.
  return (
    <div>
      <input type="text" ref={ref} />
      {/* assigns the ref param from parent to the native element in child */}
    </div>
  )
})

export default FRInput
