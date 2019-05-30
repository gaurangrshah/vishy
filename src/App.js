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
import Portals from './components/tutorials/Portals/Portals';
import KeyedRefs from './components/tutorials/Refs/KeyedRefs/KeyedRef';
import ErrorHandling from './components/tutorials/ErrorHandlinPhases/ErrorHandling';
import ClickCounter from './components/tutorials/HOC/ClickCounter';
import ClickCounter2 from './components/tutorials/RenderProps/ClickCounter2';
import HoverCounter2 from './components/tutorials/RenderProps/HoverCounter2';
import User from './components/tutorials/RenderProps/User';
import Counter2 from './components/tutorials/RenderProps/Counter2';
import Counter3 from './components/tutorials/RenderProps/Counter3';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Twrap
          title="RenderProps"
          source="http://www.youtube.com/watch?v=NdapMDgNhtE"
          toggle={true}
        >
          {/* // inside render props, our function takes in our two arguments, count & incrementCount */}

          <Counter3>
            {(count, incrementCount) => (
              <ClickCounter2
                count={count}
                incrementCount={incrementCount}
              />
            )}
          </Counter3>

          <Counter2
            renderCounter={(count, incrementCount) => (
              <HoverCounter2
                count={count}
                incrementCount={incrementCount}
              />
            )}
          />

          <User render={(isLoggedIn) => isLoggedIn ? 'Hello Tornado' : 'Hello Guest'} />

        </Twrap>

      </header>

      <Portals />
      <ClickCounter name="this guy" />
      <ErrorHandling />


      <Twrap
        title="all previous"
      >
        <Portals />
        <KeyedRefs />
        <FRParent />
        <FocusInput />
        <RefsDemo />
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
      </Twrap>

    </div >
  );
}

export default App;
