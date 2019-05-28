import React from 'react';
const SourceStyles = {
  border: 'dotted 1px gray',
  background: 'blue',
  color: 'white',
  padding: '3px',
  fontWeight: '400',
}



const Source = (props) => {
  return <a href={`${props.source}`} target="blank" style={SourceStyles}>{`source: ${props.title}`}</a>
}

export default Source;
