import React from 'react';

export const simpleRenderer = (condition, Comp1, Comp2, props1 = {}, props2 = {}) => {
  // console.log('simpleRender:', { condition, Comp1, Comp2 })
  return (condition) ? <Comp1 /> : <Comp2 {...props2} />

}


// not in use currently -- apply logic to see if it works
