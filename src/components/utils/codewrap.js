import React from 'react';

export default (props) => {
  return (
    <pre><code>
      {`${props.children}`}
    </code></pre>
  )
}