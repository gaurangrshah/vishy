import React from 'react';
import './App.css';
import Twrap from "./components/utils/Twrap/Twrap"
import Counter from './components/tutorials/Counter/Counter';
/* covers setState method in detail */
import { ClickEvents } from './components/tutorials/ClickEvents/ClickEvents'
/* covers event handling for functional & class components */
import { EventBind } from './components/tutorials/EventBind/EventBind';
import { ParentComponent } from './components/tutorials/MethodProps/MethodProps';
import LocalStorageState from './components/tutorials/LocalStorageTrial/LocalStorageTrial';
import ConditionalRendering from './components/tutorials/ConditionalRendering/ConditionalRendering';
import ListRendering from "./components/tutorials/ListRendering/ListRendering";
import Styling from "./components/tutorials/Styling/Styling";
import FormControl from "./components/tutorials/FormControl/FormControl";
import FormControl2 from "./components/tutorials/FormControl/FormControl2";
import Lifecycles from "./components/tutorials/Lifecycles/Lifecycles";
import ParentComp from "./components/tutorials/PureComponent/ParentComponent";
import RefsDemo from "./components/tutorials/Refs/ClassRefs/RefsDemo";
import FocusInput from './components/tutorials/Refs/ClassRefs/FocusInput';
import FRParent from './components/tutorials/Refs/ForwardRefs/FRParent';
import KeyedRefs from './components/tutorials/Refs/KeyedRefs/KeyedRef';
import Portals from './components/tutorials/Portals/Portals';
import ErrorHandling from './components/tutorials/ErrorHandlinPhases/ErrorHandling';
import ClickCounter from './components/tutorials/HOC/ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Twrap
          title=""
          source=""
          toggle={true}
        >



        </Twrap>

      </header>

      <Portals />
      <ClickCounter />
      <ErrorHandling />

      <Twrap
        title="Newer"
      >

        <Portals />
        <KeyedRefs />
        <FRParent />
        <FocusInput />
        <RefsDemo />

      </Twrap>

      <Twrap
        title="Intermediate"
      >

        <ParentComp />
        <Lifecycles />
        <FormControl2 />
        <FormControl />

      </Twrap>
      <Twrap
        title="basics"
      >
        <Styling primary={true} />
        <ListRendering />
        <ConditionalRendering />
        <LocalStorageState />
        <ParentComponent />
        <EventBind />
        <ClickEvents />
        <Counter />
      </Twrap>

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
