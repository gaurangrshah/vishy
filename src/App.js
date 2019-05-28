import React from 'react';
import './App.css';
import Twarp from "./components/utils/Twrap/Twrap"
import Counter from './components/tutorials/Counter/Counter';
/* covers setState method in detail */
import { ClickEvents } from './components/tutorials/ClickEvents/ClickEvents'
/* covers event handling for functional & class components */
import { EventBind } from './components/tutorials/EventBind/EventBind';
import { ParentComponent } from './components/tutorials/MethodProps/MethodProps';
import LocalStorageState from './components/tutorials/LocalStorageTest/LocalStorageTest';
import ConditionalRendering from './components/tutorials/ConditionalRendering/ConditionalRendering';
import ListRendering from "./components/tutorials/ListRendering/ListRendering";
import Styling from "./components/tutorials/Styling/Styling";
import FormControl from "./components/tutorials/FormControl/FormControl";
import FormControl2 from "./components/tutorials/FormControl/FormControl2";
import Lifecycles from "./components/tutorials/Lifecycles/Lifecycles";
import ParentComp from "./components/tutorials/PureComponent/ParentComponent";
import Refs from "./components/tutorials/Refs/Refs"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Twarp
          title="refs"
          toggle={true}
          source="http://www.youtube.com/watch?v=FXa9mMTKOu8"
        > */}

        <Refs />


        {/* </Twarp> */}
      </header>
      <ParentComp />
      <Lifecycles />
      <FormControl2 />
      <FormControl />
      <Styling primary={true} />
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
