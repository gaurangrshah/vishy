import React from 'react';
import './App.css';
import Counter from './components/tutorials/Counter/Counter';
/* covers setState method in detail */
import { ClickEvents } from './components/tutorials/ClickEvents/ClickEvents'
/* covers event handling for functional & class components */
import { EventBind } from './components/tutorials/EventBind/EventBind';

import { ParentComponent } from './components/tutorials/MethodProps/MethodProps';

import LocalStorageState from './components/utils/LocalState/LocalState'
import ConditionalRendering from './components/tutorials/ConditionalRendering/ConditionalRendering';
import ListRendering from "./components/tutorials/ListRendering/ListRendering";
import Styling from "./components/tutorials/Styling/Styling";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Styling primary={true} />
      </header>
      <ListRendering />
      <ConditionalRendering />
      <LocalStorageState />
      <ParentComponent />
      <EventBind />
      <ClickEvents />
      <Counter />

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
        </a>
      <a
        href="https://devhints.io/react"
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
      > React Cheat Sheet </a>
      <a
        href="https://reactcheatsheet.com"
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
      > React Cheat Sheet Tool </a>
      <a
        href="https://github.com/enaqx/awesome-react"
        className="App-link"
        target="_blank"
        rel="noopener noreferrer"
      > Awesome React </a>
    </div>
  );
}

export default App;
