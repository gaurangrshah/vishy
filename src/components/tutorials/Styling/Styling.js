import React from 'react'
import Twrap from '../../utils/Twrap/Twrap';

//defining a style object that will be applied inline via props:
const heading = {
  fontSize: '72px',
}

const Styling = ({ primary }) => {

  let className = primary ? 'primary' : ''
  // if props.primary is true then addthe class primary otherwise returnan empty string

  return (
    <Twrap
      title="styling-components"
      source="https://www.youtube.com/watch?v=j5P9FHiBVNo"
    >
      <mark className={`notes ${className}`} style={heading}>conditionally adds a class to classname prop</mark>
    </Twrap>
  )
}

export default Styling
