import React from 'react';

export const simpleRenderer = (condition, Comp1, Comp2) => {
  console.log('simpleRender:', { condition, Comp1, Comp2 })
  return (condition) ? (
    <Comp2 />
  ) : (
      <Comp1 />
    )
}
