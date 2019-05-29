import React from 'react';
import ReactDOM from 'react-dom';
import Twrap from '../../utils/Twrap/Twrap';

const Portals = () => {
  // return a reactDOM portal with our component as the first argument.
  return ReactDOM.createPortal(
    <Twrap
      title="Portals"
      source="http://www.youtube.com/watch?v=HpHLa-5Wdys"
    >

      <h1 style={{ background: 'green', margin: '2em' }}>This is a Portal</h1>
      <span> SCROLL UP and INSPECT Element: Mounted to "Portal-Root"</span>
      <ul style={{ display: 'flex', justifyContent: 'space-between', listStyle: 'none' }}>
        <li>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </li>
        <li>
          <a
            href="https://devhints.io/react"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          > React Cheat Sheet </a>
        </li>
        <li>
          <a
            href="https://reactcheatsheet.com"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          > React Cheat Sheet Tool </a>
        </li>
        <li>
          <a
            href="https://github.com/enaqx/awesome-react"
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
          > Awesome React </a>
        </li>
      </ul>
    </Twrap>,
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
