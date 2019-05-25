import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
/* covers setState method in detail */
import { ClickEvents } from './components/ClickEvents/ClickEvents'
/* covers event handling for functional & class components */
import { EventBind } from './components/EventBind/EventBind';

import { ParentComponent } from './components/MethodProps/MethodProps';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ParentComponent />
      <EventBind />
      <ClickEvents />
      <Counter />
    </div>
  );
}

export default App;
