import React from 'react'

function MemoComp({ name }) {
  console.log('rendering memo');
  return (
    <div>
      memo: {name}
    </div>
  )
}

export default React.memo(MemoComp);
// wrapping the export in React.memo which is a HOC (higher order component), makes a functional component act like a pure component by avoiding re-renders whenever props are not changed during re-renders.
// availlable after react@16.6^
