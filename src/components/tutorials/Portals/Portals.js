import React from 'react';
import ReactDOM from 'react-dom';
import Twarp from '../../utils/Twrap/Twrap';

const Portals = () => {
  // return a reactDOM portal with our component as the first argument.
  return ReactDOM.createPortal(
    <Twarp
      title="Portals"
      source="http://www.youtube.com/watch?v=HpHLa-5Wdys"
    >

      <h1 style={{ background: 'green', margin: '2em' }}>This is a Portal</h1>
      <span> SCROLL UP and INSPECT Element: Mounted to "Portal-Root"</span>

    </Twarp>,
    // 2nd argument to reactDOM.createPortal is the dom Node to mount to:
    document.getElementById('portal-root')
  )
}

export default Portals

/*
* see index.html:
  -- portals get attached to dom nodes, aside from the standard root node. we've added a new div with an id="portal-root" to mount our portal to.

  -- to achieve this we use ReactDOM.createPortal() which takes two params:
    --- 1st param: the element to be rendered.
    --- 2nd param: the dom node to mount element to.
*/
